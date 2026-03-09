/* eslint-disable */
import { spawn } from 'child_process';
import { createInterface } from 'readline';
import path from 'path';
import { fs, types } from 'vortex-api';

interface IConflictEntry {
  ours: string;
  original: string;
  theirs: string;
  context_before: string;
  context_after: string;
  context_original_size: number;
}

interface IConflictMessage {
  conflicts: IConflictEntry[];
  file_name: string;
  file_path: string;
  mod_name: string;
}

function canAutoResolve(conflict: IConflictEntry): string | null {
  const oursT = conflict.ours.trim();
  const origT = conflict.original.trim();
  const theirsT = conflict.theirs.trim();

  // Only theirs changed from original → use theirs
  if (oursT === origT && oursT !== theirsT) {
    return conflict.theirs;
  }
  // Only ours changed from original → use ours
  if (theirsT === origT && oursT !== theirsT) {
    return conflict.ours;
  }
  // Both sides added new content where original was empty
  if (!oursT && !origT) {
    return conflict.theirs;
  }
  if (!theirsT && !origT) {
    return conflict.ours;
  }

  return null;
}

function formatPreview(text: string, label: string, maxLines = 20): string {
  const content = text || '(empty)';
  const lines = content.split(/\r?\n/);
  const display = lines.slice(0, maxLines).join('\n');
  return `--- ${label} ---\n${display}${lines.length > maxLines ? '\n...(truncated)' : ''}`;
}

async function showConflictDialog(
  api: types.IExtensionApi,
  conflict: IConflictEntry,
  fileName: string,
  modName: string,
  conflictIndex: number,
  totalConflicts: number,
): Promise<string> {
  const message = [
    formatPreview(conflict.ours, 'A: Current Merged Version'),
    '',
    formatPreview(conflict.original, 'B: Vanilla (Original)'),
    '',
    formatPreview(conflict.theirs, `C: ${modName}`),
  ].join('\n');

  const result = await api.showDialog('question',
    'Script Merge Conflict',
    {
      bbcode: `[b]File:[/b] ${fileName}[br]`
        + `[b]Mod:[/b] ${modName}[br]`
        + `[b]Conflict ${conflictIndex + 1} of ${totalConflicts}[/b]`,
      message,
      options: { wrap: false },
    },
    [
      { label: 'A - Keep Merged' },
      { label: 'B - Use Vanilla' },
      { label: 'C - Use Mod', default: true },
    ],
  );

  switch (result.action) {
    case 'A - Keep Merged': return conflict.ours;
    case 'B - Use Vanilla': return conflict.original;
    case 'C - Use Mod': return conflict.theirs;
    default: return conflict.theirs;
  }
}

function replaceConflictMarkers(content: string, resolutions: string[]): string {
  let idx = 0;
  return content.replace(
    /<<<<<<< ours\r?\n[\s\S]*?\|\|\|\|\|\|\| original\r?\n[\s\S]*?=======\r?\n[\s\S]*?>>>>>>> theirs[^\n]*\n?/g,
    () => resolutions[idx++] ?? '',
  );
}

export async function runMergerWithConflictResolution(
  api: types.IExtensionApi,
  mergerPath: string,
  gamePath: string,
): Promise<void> {
  const args = [
    '--json',
    '--input', path.join(gamePath, 'mods'),
    '--output', path.join(gamePath, 'mods', 'mod0000_MergedFiles', 'content', 'scripts'),
    '--source', path.join(gamePath, 'content', 'content0', 'scripts'),
    '--clean',
  ];

  api.sendNotification({
    id: 'witcher3-merging',
    type: 'activity',
    message: 'Running Witcher 3 script merger...',
  });

  return new Promise<void>((resolve, reject) => {
    const proc = spawn(mergerPath, args, { cwd: gamePath });
    const rl = createInterface({ input: proc.stdout });

    let stderr = '';
    let autoResolved = 0;
    let manualResolved = 0;
    let processQueue: Promise<void> = Promise.resolve();

    rl.on('line', (line: string) => {
      processQueue = processQueue.then(async () => {
        const trimmed = line.trim();
        if (!trimmed) return;

        let message: IConflictMessage;
        try {
          message = JSON.parse(trimmed);
        } catch {
          return;
        }

        // Empty message signals merge completion
        if (!message.file_name && message.conflicts.length === 0) {
          return;
        }

        const resolutions: string[] = [];
        for (let i = 0; i < message.conflicts.length; i++) {
          const conflict = message.conflicts[i];
          const auto = canAutoResolve(conflict);
          if (auto !== null) {
            resolutions.push(auto);
            autoResolved++;
          } else {
            const chosen = await showConflictDialog(
              api, conflict, message.file_name, message.mod_name,
              i, message.conflicts.length,
            );
            resolutions.push(chosen);
            manualResolved++;
          }
        }

        // Write the resolved file
        const filePath = path.isAbsolute(message.file_path)
          ? message.file_path
          : path.join(gamePath, message.file_path);

        try {
          const content = await fs.readFileAsync(filePath, { encoding: 'utf8' });
          const resolved = replaceConflictMarkers(content, resolutions);
          await fs.writeFileAsync(filePath, resolved, { encoding: 'utf8' });
        } catch (err) {
          api.showErrorNotification(`Failed to resolve conflict in ${message.file_name}`, err);
        }
      });
    });

    proc.stderr.on('data', (data) => {
      stderr += data.toString();
    });

    proc.on('close', (code) => {
      processQueue.then(() => {
        api.dismissNotification('witcher3-merging');
        const total = autoResolved + manualResolved;
        if (code === 0 || code === null) {
          if (total > 0) {
            api.sendNotification({
              type: 'success',
              message: `Script merge complete: ${autoResolved} auto-resolved, ${manualResolved} manual.`,
            });
          } else {
            api.sendNotification({
              type: 'success',
              message: 'Script merge complete. No conflicts found.',
            });
          }
          resolve();
        } else {
          reject(new Error(`Script merger exited with code ${code}${stderr ? ': ' + stderr : ''}`));
        }
      });
    });

    proc.on('error', (err) => {
      api.dismissNotification('witcher3-merging');
      reject(err);
    });
  });
}
