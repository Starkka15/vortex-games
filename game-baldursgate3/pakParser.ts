/* eslint-disable */
/**
 * Native JavaScript PAK (LSPK) parser for Baldur's Gate 3 mod archives.
 * Replaces divine.exe dependency — reads PAK binary format directly.
 *
 * Based on NexusMods.App's C# implementation:
 *   NexusMods.Games.Larian/BaldursGate3/Utils/PakParsing/
 *
 * Supports LSPK versions 15 (BG3 EA), 16 (BG3 EA Patch4), 18 (BG3 Release).
 */
import * as fs from 'fs';
import * as path from 'path';
import * as zlib from 'zlib';
import { parseStringPromise } from 'xml2js';
import { IModSettings } from './types';

// ─── LZ4 Block Decoder ───────────────────────────────────────────────────────
// LZ4 block format (not frame format). Used for file list and per-file data.

function decompressLZ4Block(src: Buffer, uncompressedSize: number): Buffer {
  const dst = Buffer.alloc(uncompressedSize);
  let sIdx = 0;
  let dIdx = 0;

  while (sIdx < src.length && dIdx < uncompressedSize) {
    const token = src[sIdx++];

    // Literal length
    let literalLen = (token >> 4) & 0x0F;
    if (literalLen === 15) {
      let b: number;
      do {
        b = src[sIdx++];
        literalLen += b;
      } while (b === 255);
    }

    // Copy literals
    if (literalLen > 0) {
      src.copy(dst, dIdx, sIdx, sIdx + literalLen);
      sIdx += literalLen;
      dIdx += literalLen;
    }

    if (dIdx >= uncompressedSize) break;

    // Match offset (little-endian 16-bit)
    const offset = src[sIdx] | (src[sIdx + 1] << 8);
    sIdx += 2;

    // Match length (minimum match = 4)
    let matchLen = (token & 0x0F) + 4;
    if ((token & 0x0F) === 15) {
      let b: number;
      do {
        b = src[sIdx++];
        matchLen += b;
      } while (b === 255);
    }

    // Copy match (may overlap, so byte-by-byte)
    let matchPos = dIdx - offset;
    for (let i = 0; i < matchLen; i++) {
      dst[dIdx++] = dst[matchPos++];
    }
  }

  return dst;
}

// ─── PAK Format Constants ─────────────────────────────────────────────────────

const LSPK_MAGIC = 0x4B50534C; // "LSPK" in little-endian
const ENTRY_SIZE_V15 = 296;
const ENTRY_SIZE_V18 = 272;
const NAME_SIZE = 256;

const enum CompressionMethod {
  None = 0,
  Zlib = 1,
  LZ4 = 2,
  Zstd = 3,
}

// ─── Internal Types ───────────────────────────────────────────────────────────

interface PakHeader {
  version: number;
  fileListOffset: bigint;
  fileListSize: number;
  flags: number;
  priority: number;
  numParts: number;
}

interface PakFileEntry {
  name: string;
  offsetInFile: bigint;
  sizeOnDisk: number;
  uncompressedSize: number;
  archivePart: number;
  compressionMethod: CompressionMethod;
}

// ─── Binary Parsing Helpers ───────────────────────────────────────────────────

async function readBytes(fd: fs.promises.FileHandle, offset: number, length: number): Promise<Buffer> {
  const buf = Buffer.alloc(length);
  await fd.read(buf, 0, length, offset);
  return buf;
}

function nullTermString(buf: Buffer): string {
  let end = buf.indexOf(0);
  if (end === -1) end = buf.length;
  return buf.toString('utf8', 0, end);
}

// ─── Header Parsing ───────────────────────────────────────────────────────────

async function parseHeader(fd: fs.promises.FileHandle): Promise<PakHeader> {
  // Read magic + version (8 bytes)
  const head = await readBytes(fd, 0, 8);
  const magic = head.readUInt32LE(0);
  if (magic !== LSPK_MAGIC) {
    throw new Error(`Not a valid BG3 PAK: bad magic 0x${magic.toString(16)}`);
  }

  const version = head.readUInt32LE(4);
  if (version !== 15 && version !== 16 && version !== 18) {
    throw new Error(`Unsupported PAK version: v${version}`);
  }

  // v15: 30 bytes after magic+version
  // v16/18: 32 bytes after magic+version (extra 2-byte numParts)
  const headerSize = version === 15 ? 30 : 32;
  const rest = await readBytes(fd, 8, headerSize);

  return {
    version,
    fileListOffset: rest.readBigUInt64LE(0),
    fileListSize: rest.readUInt32LE(8),
    flags: rest[12],
    priority: rest[13],
    // MD5 at bytes 14-29 (not needed)
    numParts: version === 15 ? 1 : rest.readUInt16LE(30),
  };
}

// ─── File List Parsing ────────────────────────────────────────────────────────

async function parseFileList(fd: fs.promises.FileHandle, header: PakHeader): Promise<PakFileEntry[]> {
  const offset = Number(header.fileListOffset);

  // Read numFiles + compressedSize (8 bytes)
  const listHead = await readBytes(fd, offset, 8);
  const numFiles = listHead.readInt32LE(0);
  const compressedSize = listHead.readInt32LE(4);

  // Read compressed file list
  const compressed = await readBytes(fd, offset + 8, compressedSize);

  // Decompress (always LZ4 for v15-18)
  const entrySize = header.version === 18 ? ENTRY_SIZE_V18 : ENTRY_SIZE_V15;
  const decompressedSize = numFiles * entrySize;
  const data = decompressLZ4Block(compressed, decompressedSize);

  // Parse entries
  const entries: PakFileEntry[] = [];
  for (let i = 0; i < numFiles; i++) {
    const off = i * entrySize;
    const nameBuf = data.subarray(off, off + NAME_SIZE);
    const name = nullTermString(nameBuf);

    let entry: PakFileEntry;
    if (header.version === 18) {
      // v18: 272 bytes
      const offsetInFile1 = data.readUInt32LE(off + 256);
      const offsetInFile2 = data.readUInt16LE(off + 260);
      entry = {
        name,
        offsetInFile: BigInt(offsetInFile1) | (BigInt(offsetInFile2) << 32n),
        archivePart: data[off + 262],
        compressionMethod: (data[off + 263] & 0x0F) as CompressionMethod,
        sizeOnDisk: data.readUInt32LE(off + 264),
        uncompressedSize: data.readUInt32LE(off + 268),
      };
    } else {
      // v15/v16: 296 bytes
      entry = {
        name,
        offsetInFile: data.readBigUInt64LE(off + 256),
        sizeOnDisk: Number(data.readBigUInt64LE(off + 264)),
        uncompressedSize: Number(data.readBigUInt64LE(off + 272)),
        archivePart: data.readUInt32LE(off + 280),
        compressionMethod: (data.readUInt32LE(off + 284) & 0x0F) as CompressionMethod,
      };
    }
    entries.push(entry);
  }

  return entries;
}

// ─── File Data Extraction ─────────────────────────────────────────────────────

async function extractFileData(fd: fs.promises.FileHandle, entry: PakFileEntry): Promise<Buffer> {
  const rawData = await readBytes(fd, Number(entry.offsetInFile), entry.sizeOnDisk);

  switch (entry.compressionMethod) {
    case CompressionMethod.None:
      return rawData;

    case CompressionMethod.LZ4:
      return decompressLZ4Block(rawData, entry.uncompressedSize);

    case CompressionMethod.Zlib:
      return zlib.inflateSync(rawData);

    case CompressionMethod.Zstd:
      throw new Error(`Zstd compression not yet supported for "${entry.name}". `
        + 'Please report this PAK file.');

    default:
      throw new Error(`Unknown compression method ${entry.compressionMethod} for "${entry.name}"`);
  }
}

// ─── Public API ───────────────────────────────────────────────────────────────

/**
 * List all files in a PAK archive.
 * Returns lines in the same format as divine.exe list-package: "path\tsize\t0"
 */
export async function listPakFiles(pakPath: string): Promise<string[]> {
  const fd = await fs.promises.open(pakPath, 'r');
  try {
    const header = await parseHeader(fd);
    const entries = await parseFileList(fd, header);
    return entries.map(e => `${e.name}\t${e.uncompressedSize}\t0`);
  } finally {
    await fd.close();
  }
}

/**
 * Extract and parse meta.lsx from a PAK file.
 * Returns the parsed XML object (same shape as xml2js parseStringPromise output),
 * or undefined if no meta.lsx exists in the archive.
 */
export async function extractPakMeta(pakPath: string): Promise<IModSettings | undefined> {
  const fd = await fs.promises.open(pakPath, 'r');
  try {
    const header = await parseHeader(fd);
    const entries = await parseFileList(fd, header);

    const metaEntry = entries.find(e =>
      path.basename(e.name).toLowerCase() === 'meta.lsx');

    if (!metaEntry) {
      return undefined;
    }

    const data = await extractFileData(fd, metaEntry);
    return parseStringPromise(data.toString('utf8'));
  } finally {
    await fd.close();
  }
}
