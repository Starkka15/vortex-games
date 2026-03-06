module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/vortex-ext-common/index.js":
/*!*************************************************!*\
  !*** ./node_modules/vortex-ext-common/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.installer = exports.UnrealGameHelper = exports.ProfileClient = void 0;
var profileClient_1 = __webpack_require__(/*! ./profileClient */ "./node_modules/vortex-ext-common/profileClient.js");
Object.defineProperty(exports, "ProfileClient", { enumerable: true, get: function () { return profileClient_1.ProfileClient; } });
var unreal_1 = __webpack_require__(/*! ./unreal */ "./node_modules/vortex-ext-common/unreal.js");
Object.defineProperty(exports, "UnrealGameHelper", { enumerable: true, get: function () { return unreal_1.UnrealGameHelper; } });
__exportStar(__webpack_require__(/*! ./util */ "./node_modules/vortex-ext-common/util.js"), exports);
const installer = __importStar(__webpack_require__(/*! ./install */ "./node_modules/vortex-ext-common/install/index.js"));
exports.installer = installer;


/***/ }),

/***/ "./node_modules/vortex-ext-common/install/advanced/AdvancedInstaller.js":
/*!******************************************************************************!*\
  !*** ./node_modules/vortex-ext-common/install/advanced/AdvancedInstaller.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdvancedInstaller = void 0;
const vortex_api_1 = __webpack_require__(/*! vortex-api */ "vortex-api");
const path = __importStar(__webpack_require__(/*! path */ "path"));
const util_1 = __webpack_require__(/*! ./util */ "./node_modules/vortex-ext-common/install/advanced/util.js");
const types_1 = __webpack_require__(/*! ./types */ "./node_modules/vortex-ext-common/install/advanced/types.js");
const util_2 = __webpack_require__(/*! ../../util */ "./node_modules/vortex-ext-common/util.js");
class AdvancedInstaller {
    constructor(opts, supportedTests, processors) {
        var _a;
        var _b;
        this.configure = (api) => {
            this._api = api;
            return this;
        };
        this.testSupported = async (files, gameId) => {
            if (!this._api) {
                vortex_api_1.log('warn', 'advanced installer has not been configured! bailing out.');
                return Promise.resolve({ supported: false, requiredFiles: [] });
            }
            var state = this._api.getState();
            vortex_api_1.log('debug', `testing ${files.length} mod files for advanced unreal installer`, { files, targetGame: this._opts.gameId });
            var requiredFiles = [];
            let supported = (gameId === this._opts.gameId) &&
                (files.find(file => path.extname(file).toLowerCase() === this._opts.modFileExt) !== undefined);
            if (this._supportedChecks && this._supportedChecks.length > 0) {
                var results = await Promise.all(this._supportedChecks.map(async (c) => await c(files, gameId, state)));
                supported && (supported = results.every(r => r.supported));
                requiredFiles.concat(results.flatMap(r => r.requiredFiles));
            }
            return Promise.resolve({
                supported,
                requiredFiles,
            });
        };
        this.advancedInstall = async (files, destinationPath, gameId, progress) => {
            var _a, _b, _c, _d, _e, _f;
            var _g;
            const allPaks = files.filter(file => path.extname(file).toLowerCase() === this._opts.modFileExt);
            const uniquePakRoots = util_1.groupBy(allPaks, (pakPath) => {
                return path.dirname(pakPath);
            });
            if (this._opts.preTest) {
                var preTestResult = this._opts.preTest.test(files, destinationPath);
                if (preTestResult == types_1.CompatibilityResult.RequiresConfirmation) {
                    var result = await this._api.showDialog('error', 'Incompatible mod structure', {
                        text: this._opts.preTest.message
                    }, [
                        { label: 'Cancel Install' },
                        { label: 'Continue (unsupported)' }
                    ]);
                    if (result.action === 'Continue (unsupported)') {
                        this._api.sendNotification({
                            type: 'warning',
                            title: 'Installed incompatible mod',
                            message: (_a = this._opts.preTest.shortMessage) !== null && _a !== void 0 ? _a : 'You have installed a malformed mod. You might see unexpected results.'
                        });
                    }
                    else {
                        throw new Error("Incompatible mod structure");
                    }
                }
                else if (preTestResult == types_1.CompatibilityResult.Invalid) {
                    var errMessage = ((_c = (_b = this._opts) === null || _b === void 0 ? void 0 : _b.preTest) === null || _c === void 0 ? void 0 : _c.message) || "Ensure the mod file is compatible with the current game and try again.";
                    throw new Error(`Mod failed compatibility check! ${errMessage}`);
                }
            }
            let installInstructions = [];
            var keys = Object.keys(uniquePakRoots);
            (_g = this._opts).rootFolderLimit || (_g.rootFolderLimit = 0);
            var limit = this._opts.rootFolderLimit || 0;
            if (allPaks.length > 100 || (limit > 0 && keys.length > limit)) {
                var confirmResult = await this._api.showDialog('info', 'Large mod detected!', {
                    text: this._opts.messages.largeModWarning
                }, [
                    { label: 'Cancel' },
                    { label: 'Continue' }
                ]);
                if (confirmResult.action == 'Cancel') {
                    return Promise.reject(new vortex_api_1.util.UserCanceled());
                }
            }
            vortex_api_1.log('debug', 'separated pak roots', { roots: keys });
            if (!uniquePakRoots || keys.length == 0) {
                vortex_api_1.log('warn', "Couldn't find reliable root indicator in file list!");
                return Promise.reject();
            }
            else if (keys.length == 1) {
                if (uniquePakRoots[keys[0]].length > 1) {
                    installInstructions = await this._installMultipleModArchive(keys, uniquePakRoots, files);
                }
                else {
                    installInstructions = util_1.buildFlatInstructions(this._opts.modFileExt, files, keys[0]);
                }
            }
            else if (keys.length > 1) {
                installInstructions = await this._installFromMultiplePaths(uniquePakRoots, files);
            }
            let instructions = installInstructions;
            for (const processor of (_d = this._processors) !== null && _d !== void 0 ? _d : []) {
                if (((_e = processor === null || processor === void 0 ? void 0 : processor.test(this._api.getState())) !== null && _e !== void 0 ? _e : true) && processor) {
                    instructions = instructions.concat((_f = (await (processor === null || processor === void 0 ? void 0 : processor.generate(instructions, files, util_2.getModName(destinationPath))))) !== null && _f !== void 0 ? _f : []);
                }
            }
            return Promise.resolve({ instructions });
        };
        this._installFromMultiplePaths = async (pakRoots, files) => {
            var keys = Object.keys(pakRoots);
            var result = await this._api.showDialog('question', 'Multiple mod files detected', {
                text: this._opts.messages.multipleRoots(keys),
                checkboxes: keys.map(k => {
                    return {
                        id: k,
                        text: `${path.basename(k)} (${pakRoots[k].length} files)`
                    };
                }),
                options: {
                    translated: false
                }
            }, [
                { label: 'Cancel' },
                { label: 'Install Selected' },
                { label: 'Install All_plural' }
            ]);
            if (result.action == 'Cancel') {
                return Promise.reject(new Error('Installation cancelled! Choose a mod path to continue install.'));
            }
            else if (result.action == 'Install All' || result.action == 'Install All_plural') {
                vortex_api_1.log('debug', JSON.stringify(result.input));
                let instructions = [];
                instructions = keys.flatMap(k => util_1.buildFlatInstructions(this._opts.modFileExt, files, k));
                return Promise.resolve(instructions);
            }
            else if (result.action == 'Install Selected') {
                var selections = Object.keys(result.input).filter(s => result.input[s]);
                return await this._installMultipleModArchive(selections, pakRoots, files);
            }
        };
        this._installMultipleModArchive = async (selections, pakRoots, files) => {
            var selectedRoots = selections.map(sk => pakRoots[sk]);
            if (selectedRoots.some(sr => sr.length > 1)) {
                var pakResult = await this._api.showDialog('question', 'Multiple mod files detected', {
                    text: this._opts.messages.multipleFiles,
                    checkboxes: selectedRoots.flatMap(sr => sr).map(k => {
                        return {
                            id: k,
                            text: `${k}`,
                            value: true
                        };
                    })
                }, [
                    { label: 'Cancel' },
                    { label: 'Install Selected' }
                ]);
                if (pakResult.action == 'Cancel') {
                    return Promise.reject(new Error('Installation cancelled! Choose a mod path to continue install.'));
                }
                else if (pakResult.action == 'Install Selected') {
                    let instructions = [];
                    var modSelections = Object.keys(pakResult.input).filter(s => pakResult.input[s]);
                    instructions = selections.flatMap(k => util_1.buildFlatInstructions(this._opts.modFileExt, files, k, (file) => modSelections.map(s => path.basename(s)).some(bn => bn == path.basename(file))));
                    return Promise.resolve(instructions);
                }
            }
            else {
                var instructions = selections.flatMap(k => util_1.buildFlatInstructions(this._opts.modFileExt, files, k));
                return Promise.resolve(instructions);
            }
        };
        this._opts = opts;
        this._processors = processors !== null && processors !== void 0 ? processors : [];
        this._supportedChecks = supportedTests !== null && supportedTests !== void 0 ? supportedTests : [];
        (_a = (_b = this._opts).modFileExt) !== null && _a !== void 0 ? _a : (_b.modFileExt = '.pak');
    }
}
exports.AdvancedInstaller = AdvancedInstaller;


/***/ }),

/***/ "./node_modules/vortex-ext-common/install/advanced/builder.js":
/*!********************************************************************!*\
  !*** ./node_modules/vortex-ext-common/install/advanced/builder.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AdvancedInstallerBuilder = void 0;
const AdvancedInstaller_1 = __webpack_require__(/*! ./AdvancedInstaller */ "./node_modules/vortex-ext-common/install/advanced/AdvancedInstaller.js");
const defaultMessages = {
    largeModWarning: "The mod you're trying to install includes a large number of available files and no installer files!\n\nVortex will prompt you for which files you want to install but be aware that this mod archive might contain a lot of files and folders to choose from. You may want to check the mod's description in case there are any special installation instructions you should know about.\n\nThere's unfortunately nothing Vortex can do about this as this can only be resolved by the mod author.",
    multipleFiles: 'The mod package or paths you are installing contain multiple mod files!\n\nYou can individually disable any mod files below to skip installing them or choose Install Selected to continue with all the selected files.',
    multipleRoots: (keys) => `The mod package you are installing appears to contain multiple nested mod packages! We found ${keys.length} mod locations in the archive.\n\nYou can either cancel now and verify the mod is packaged correctly, or attempt to install all of them together. This will probably cause conflicts!\n\nAlternatively, you can select only the paths you want to install from below and choose Install Selected to install paks from only those folders.`
};
class AdvancedInstallerBuilder {
    constructor(gameId, modFileExt, warnOnFileRoots) {
        var _a;
        this.addCompatibilityTest = (testFunc) => {
            this.preTest = testFunc;
            return this;
        };
        this.addExtender = (processor, test) => {
            var testFunc = test ? test : (state) => true;
            this.processors.push({ generate: processor, test: testFunc });
            return this;
        };
        this.addSupportedCheck = (check) => {
            this.supportedTests.push(check);
            return this;
        };
        this.useCustomMessages = (messages) => {
            this.messages = messages;
            return this;
        };
        this.build = () => {
            var _a, _b;
            var opts = {
                gameId: this.gameId,
                messages: (_a = this.messages) !== null && _a !== void 0 ? _a : defaultMessages,
                modFileExt: (_b = this._fileExt) !== null && _b !== void 0 ? _b : '.pak',
                preTest: this.preTest,
                rootFolderLimit: this._rootsLimit
            };
            return new AdvancedInstaller_1.AdvancedInstaller(opts, this.supportedTests || [], this.processors || []);
        };
        this.gameId = gameId;
        this.processors = [];
        this.supportedTests = [];
        (_a = this._fileExt == modFileExt) !== null && _a !== void 0 ? _a : '.pak';
        this._rootsLimit = warnOnFileRoots || 9;
    }
}
exports.AdvancedInstallerBuilder = AdvancedInstallerBuilder;


/***/ }),

/***/ "./node_modules/vortex-ext-common/install/advanced/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/vortex-ext-common/install/advanced/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.addInstalledPaksAttribute = exports.AdvancedInstaller = exports.CompatibilityResult = exports.AdvancedInstallerBuilder = void 0;
var builder_1 = __webpack_require__(/*! ./builder */ "./node_modules/vortex-ext-common/install/advanced/builder.js");
Object.defineProperty(exports, "AdvancedInstallerBuilder", { enumerable: true, get: function () { return builder_1.AdvancedInstallerBuilder; } });
var types_1 = __webpack_require__(/*! ./types */ "./node_modules/vortex-ext-common/install/advanced/types.js");
Object.defineProperty(exports, "CompatibilityResult", { enumerable: true, get: function () { return types_1.CompatibilityResult; } });
var AdvancedInstaller_1 = __webpack_require__(/*! ./AdvancedInstaller */ "./node_modules/vortex-ext-common/install/advanced/AdvancedInstaller.js");
Object.defineProperty(exports, "AdvancedInstaller", { enumerable: true, get: function () { return AdvancedInstaller_1.AdvancedInstaller; } });
var util_1 = __webpack_require__(/*! ./util */ "./node_modules/vortex-ext-common/install/advanced/util.js");
Object.defineProperty(exports, "addInstalledPaksAttribute", { enumerable: true, get: function () { return util_1.addInstalledPaksAttribute; } });


/***/ }),

/***/ "./node_modules/vortex-ext-common/install/advanced/types.js":
/*!******************************************************************!*\
  !*** ./node_modules/vortex-ext-common/install/advanced/types.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CompatibilityResult = void 0;
var CompatibilityResult;
(function (CompatibilityResult) {
    CompatibilityResult[CompatibilityResult["None"] = 0] = "None";
    CompatibilityResult[CompatibilityResult["RequiresConfirmation"] = 1] = "RequiresConfirmation";
    CompatibilityResult[CompatibilityResult["Invalid"] = 2] = "Invalid";
})(CompatibilityResult = exports.CompatibilityResult || (exports.CompatibilityResult = {}));


/***/ }),

/***/ "./node_modules/vortex-ext-common/install/advanced/util.js":
/*!*****************************************************************!*\
  !*** ./node_modules/vortex-ext-common/install/advanced/util.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addInstalledPaksAttribute = exports.buildFlatInstructions = exports.groupBy = void 0;
const vortex_api_1 = __webpack_require__(/*! vortex-api */ "vortex-api");
const path = __importStar(__webpack_require__(/*! path */ "path"));
const groupBy = function (arr, criteria) {
    return arr.reduce(function (obj, item) {
        var key = typeof criteria === 'function' ? criteria(item) : item[criteria];
        if (!obj.hasOwnProperty(key)) {
            obj[key] = [];
        }
        obj[key].push(item);
        return obj;
    }, {});
};
exports.groupBy = groupBy;
function buildFlatInstructions(modFileExt, files, rootPath, sourceFilter) {
    vortex_api_1.log('debug', 'building installer instructions', { rootPath, files });
    let filtered = files.filter(f => (!f.endsWith(path.sep)) && path.dirname(f) == rootPath);
    if (sourceFilter) {
        filtered = filtered.filter(ff => sourceFilter(ff));
    }
    vortex_api_1.log('debug', 'filtered extraneous files', { root: rootPath, candidates: filtered });
    const instructions = filtered.map(file => {
        var destination = rootPath == '.' ? file : path.join(file.substr(file.indexOf(rootPath) + rootPath.length + 1));
        if (path.extname(destination).toLowerCase() == modFileExt && !destination.endsWith('_P.pak')) {
            vortex_api_1.log('debug', 'detected non-suffixed PAK file!', { destination });
            destination = destination.replace('.pak', '_P.pak');
        }
        return {
            type: 'copy',
            source: file,
            destination: destination
        };
    });
    return instructions;
}
exports.buildFlatInstructions = buildFlatInstructions;
function addInstalledPaksAttribute(fileExt = '.pak') {
    return (instructions) => {
        var paks = instructions
            .filter(i => path.extname(i.source).toLowerCase() == fileExt)
            .map(pf => pf.source);
        if (paks) {
            return Promise.resolve([
                {
                    type: 'attribute',
                    key: 'installedPaks',
                    value: paks
                }
            ]);
        }
        ;
    };
}
exports.addInstalledPaksAttribute = addInstalledPaksAttribute;


/***/ }),

/***/ "./node_modules/vortex-ext-common/install/finder.js":
/*!**********************************************************!*\
  !*** ./node_modules/vortex-ext-common/install/finder.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.InstallRootFinder = void 0;
const path_1 = __webpack_require__(/*! path */ "path");
class InstallRootFinder {
    constructor() {
        this._rootFuncs = [];
    }
    addSearch(predicate) {
        this._rootFuncs.push({ predicate });
        return this;
    }
    addFileRoot(fileName, ignoreCase = true, useParent = false) {
        var predicate = ignoreCase
            ? (v) => path_1.basename(v).toLowerCase().indexOf(fileName.toLowerCase()) !== -1
            : (v) => path_1.basename(v).indexOf(fileName) !== -1;
        this._rootFuncs.push({ predicate: (v) => predicate(v) && !v.endsWith(path_1.sep), useParent });
        return this;
    }
    addFolderRoot(folderName, ignoreCase = true, useParent = false) {
        var predicate = ignoreCase
            ? (v) => path_1.basename(v).toLowerCase().indexOf(folderName.toLowerCase()) !== -1
            : (v) => path_1.basename(v).indexOf(folderName) !== -1;
        this._rootFuncs.push({ predicate, useParent });
        return this;
    }
    getRoot(files) {
        var validRoot = undefined;
        var i = 0;
        do {
            var p = this._rootFuncs[i];
            var candidate = files.find(p.predicate);
            if (candidate) {
                validRoot = p.useParent ? path_1.dirname(candidate) : candidate;
            }
            i++;
        } while (validRoot == undefined && i < files.length);
        return validRoot;
    }
    getRoots(files) {
        var roots = [];
        for (const check of this._rootFuncs) {
            var candidates = files.filter(check.predicate);
            if (candidates && candidates.length > 0) {
                candidates = check.useParent ? candidates.map(c => path_1.dirname(c)) : candidates;
                roots.push(...candidates);
            }
        }
        return roots;
    }
}
exports.InstallRootFinder = InstallRootFinder;


/***/ }),

/***/ "./node_modules/vortex-ext-common/install/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/vortex-ext-common/install/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.InstallRootFinder = exports.mapCopyInstructions = exports.filterFileList = void 0;
var installUtil_1 = __webpack_require__(/*! ./installUtil */ "./node_modules/vortex-ext-common/install/installUtil.js");
Object.defineProperty(exports, "filterFileList", { enumerable: true, get: function () { return installUtil_1.filterFileList; } });
Object.defineProperty(exports, "mapCopyInstructions", { enumerable: true, get: function () { return installUtil_1.mapCopyInstructions; } });
var finder_1 = __webpack_require__(/*! ./finder */ "./node_modules/vortex-ext-common/install/finder.js");
Object.defineProperty(exports, "InstallRootFinder", { enumerable: true, get: function () { return finder_1.InstallRootFinder; } });


/***/ }),

/***/ "./node_modules/vortex-ext-common/install/installUtil.js":
/*!***************************************************************!*\
  !*** ./node_modules/vortex-ext-common/install/installUtil.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapCopyInstructions = exports.filterFileList = void 0;
const path_1 = __importDefault(__webpack_require__(/*! path */ "path"));
function filterFileList(files, rootPath) {
    const filtered = files.filter(file => (((rootPath == "." ? true : (file.indexOf(rootPath) !== -1)) && (!file.endsWith(path_1.default.sep)))));
    return filtered;
}
exports.filterFileList = filterFileList;
function mapCopyInstructions(files, rootPath, progressDelegate) {
    const instructions = files.map((file, idx) => {
        progressDelegate === null || progressDelegate === void 0 ? void 0 : progressDelegate((idx / files.length) * 100);
        const destination = file.substr(file.indexOf(rootPath) + rootPath.length);
        return {
            type: 'copy',
            source: file,
            destination: `${rootPath == "." ? file : destination}`
        };
    });
    return instructions;
}
exports.mapCopyInstructions = mapCopyInstructions;


/***/ }),

/***/ "./node_modules/vortex-ext-common/profileClient.js":
/*!*********************************************************!*\
  !*** ./node_modules/vortex-ext-common/profileClient.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileClient = void 0;
const vortex_api_1 = __webpack_require__(/*! vortex-api */ "vortex-api");
class ProfileClient {
    constructor(ctx) {
        this.setProfileSetting = (profile, key, value) => {
            var _a, _b;
            var profileId = (_a = vortex_api_1.selectors.activeProfile(this.state)) === null || _a === void 0 ? void 0 : _a.id;
            if (profileId !== undefined && this.state.persistent.profiles[profileId].features !== undefined) {
                this.store.dispatch(vortex_api_1.actions.setFeature(profileId, key, value));
                var features = (_b = this.state.persistent.profiles[profileId]) === null || _b === void 0 ? void 0 : _b.features;
                vortex_api_1.log('debug', `attempting to set ${key}/${value} in ${profile.name}`, features);
            }
        };
        this.store = ctx
            ? ctx.store
            : ctx;
        this.state = this.store.getState();
        this.getProfileSetting = this.getProfileSetting.bind(this);
    }
    getProfileSetting(profileOrKey, defaultValueOrKey, defaultValue) {
        var _a, _b;
        if (typeof profileOrKey === 'string') {
            var key = profileOrKey;
            defaultValue = defaultValueOrKey;
            var profileId = (_a = vortex_api_1.selectors.activeProfile(this.state)) === null || _a === void 0 ? void 0 : _a.id;
            if (profileId !== undefined) {
                var features = (_b = this.state.persistent.profiles[profileId]) === null || _b === void 0 ? void 0 : _b.features;
                const skipTerms = features ? features[key] : defaultValue;
                return skipTerms;
            }
            return defaultValue;
        }
        else {
            var profile = profileOrKey;
            var key = defaultValueOrKey;
            var profileFeatures = profile.features;
            const skipTerms = profileFeatures ? profileFeatures[key] : defaultValue;
            return skipTerms;
        }
    }
}
exports.ProfileClient = ProfileClient;


/***/ }),

/***/ "./node_modules/vortex-ext-common/unreal.js":
/*!**************************************************!*\
  !*** ./node_modules/vortex-ext-common/unreal.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.UnrealGameHelper = void 0;
const path = __webpack_require__(/*! path */ "path");
const vortex_api_1 = __webpack_require__(/*! vortex-api */ "vortex-api");
class UnrealGameHelper {
    constructor(gameId, enableFallback) {
        this.prepareforModding = async (discovery, relativePath) => {
            return vortex_api_1.fs.ensureDirWritableAsync(path.join(discovery.path, relativePath));
        };
        this.testSupportedContent = (files, gameId) => {
            vortex_api_1.log('debug', `testing ${files.length} mod files for unreal installer`, { files, targetGame: this.targetGameId });
            let supported = (gameId === this.targetGameId) &&
                ((files.find(file => path.extname(file).toLowerCase() === this.modFileExt) !== undefined)
                    || this.enableFallback);
            return Promise.resolve({
                supported,
                requiredFiles: [],
            });
        };
        this.installContent = async (files, destinationPath, gameId, progressDelegate) => {
            var _a;
            vortex_api_1.log('debug', `running unreal installer. [${gameId}]`, { files, destinationPath });
            const modFile = files.find(file => path.extname(file).toLowerCase() === this.modFileExt);
            if (modFile) {
                const idx = modFile.indexOf(path.basename(modFile));
                const rootPath = path.dirname(modFile);
                const filtered = files.filter(file => ((file.indexOf(rootPath) !== -1)
                    && (!file.endsWith(path.sep))));
                vortex_api_1.log('debug', 'filtered extraneous files', { root: rootPath, candidates: filtered });
                const instructions = filtered.map(file => {
                    const destination = path.join(file.substr(idx));
                    return {
                        type: 'copy',
                        source: file,
                        destination: destination
                    };
                });
                return Promise.resolve({ instructions });
            }
            else {
                if ((_a = this.enableFallback) === null || _a === void 0 ? void 0 : _a.call(this)) {
                    vortex_api_1.log('warn', "Couldn't find reliable root indicator in file list. Falling back to basic installation!");
                    var instructions = files.map((file) => {
                        return {
                            type: 'copy',
                            source: file,
                            destination: file,
                        };
                    });
                    return Promise.resolve({ instructions });
                }
                else {
                    vortex_api_1.log('error', "Couldn't find reliable root indicator in file list. Failing installation!");
                    return Promise.reject(new Error("Could not determine root of mod package."));
                }
            }
        };
        this.modFileExt = '.pak';
        this.targetGameId = gameId;
        this.enableFallback = () => enableFallback !== null && enableFallback !== void 0 ? enableFallback : false;
    }
}
exports.UnrealGameHelper = UnrealGameHelper;


/***/ }),

/***/ "./node_modules/vortex-ext-common/util.js":
/*!************************************************!*\
  !*** ./node_modules/vortex-ext-common/util.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isGameManaged = exports.isNexusMod = exports.loadLanguageContent = exports.isGameProfile = exports.getDiscoveryPath = exports.getGamePath = exports.mergeStateArray = exports.getModType = exports.getModName = exports.getCategoryName = exports.toAttributeInstructions = exports.isActiveGame = void 0;
const vortex_api_1 = __webpack_require__(/*! vortex-api */ "vortex-api");
const path = __webpack_require__(/*! path */ "path");
function isActiveGame(context, gameId) {
    return vortex_api_1.selectors.activeGameId(getState(context)) === gameId;
}
exports.isActiveGame = isActiveGame;
function toAttributeInstructions(attributes) {
    return Object.keys(attributes).map((key) => {
        return {
            type: "attribute",
            key: key,
            value: attributes[key]
        };
    });
}
exports.toAttributeInstructions = toAttributeInstructions;
function getCategoryName(category, state) {
    if (!category) {
        return undefined;
    }
    var gameId = vortex_api_1.selectors.activeGameId(state);
    return vortex_api_1.util.getSafe(state.persistent, ['categories', gameId, category, 'name'], undefined);
}
exports.getCategoryName = getCategoryName;
function getModName(modOrPath, nameFallback) {
    var _a;
    if (typeof modOrPath == "string") {
        var modName = path.basename(modOrPath).split('.').slice(0, -1).join('.');
        return modName;
    }
    else {
        var mod = modOrPath;
        return (_a = vortex_api_1.util.getSafe(mod.attributes, ['customFileName'], vortex_api_1.util.getSafe(mod.attributes, ['logicalFileName'], vortex_api_1.util.getSafe(mod.attributes, ['modName'], vortex_api_1.util.getSafe(mod.attributes, ['name'], undefined))))) !== null && _a !== void 0 ? _a : nameFallback;
    }
}
exports.getModName = getModName;
function getModType(mod) {
    var _a, _b, _c;
    var modType = vortex_api_1.util.getModType(mod.type);
    return toTitleCase((_c = (_b = (_a = modType === null || modType === void 0 ? void 0 : modType.options) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : modType === null || modType === void 0 ? void 0 : modType.typeId) !== null && _c !== void 0 ? _c : 'default');
}
exports.getModType = getModType;
function mergeStateArray(state, statePath, payload) {
    var existing = vortex_api_1.util.getSafe(state, [...statePath], []);
    var mergedHashes = [...new Set(existing.concat(payload))];
    return vortex_api_1.util.merge(state, [...statePath], mergedHashes);
}
exports.mergeStateArray = mergeStateArray;
function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
function getGamePath(game, state, preferExecutablePath) {
    const discovery = state && state.settings.gameMode.discovered[game.id];
    if (discovery !== undefined) {
        var execPath = typeof game.executable === 'string' ? game.executable : game.executable();
        return preferExecutablePath ? path.dirname(path.join(discovery.path, execPath)) : discovery.path;
    }
    else {
        return undefined;
    }
}
exports.getGamePath = getGamePath;
function getDiscoveryPath(gameId, state, extraRelPath) {
    const discovery = state && state.settings.gameMode.discovered[gameId];
    if (discovery !== undefined) {
        return path.join(discovery.path, extraRelPath || '');
    }
    else {
        return undefined;
    }
}
exports.getDiscoveryPath = getDiscoveryPath;
function isGameProfile(context, profileId, gameId) {
    var state = getState(context);
    var profile = vortex_api_1.selectors.profileById(state, profileId);
    return profile.gameId == gameId;
}
exports.isGameProfile = isGameProfile;
function loadLanguageContent(api, ns, language, fileName) {
    language || (language = 'en');
    fileName || (fileName = 'language.json');
    try {
        var langContent = vortex_api_1.fs.readFileSync(path.join(__dirname, fileName), { encoding: 'utf-8' });
        api.getI18n().addResources(language, ns, JSON.parse(langContent));
    }
    catch { }
}
exports.loadLanguageContent = loadLanguageContent;
function isNexusMod(api, modId) {
    const state = api.store.getState();
    const gameMode = vortex_api_1.selectors.activeGameId(state);
    let modSource = vortex_api_1.util.getSafe(state.persistent.mods, [gameMode, modId, 'attributes', 'source'], undefined);
    if (modSource === undefined) {
        modSource = vortex_api_1.util.getSafe(state.persistent.downloads, ['files', modId, 'modInfo', 'source'], undefined);
    }
    return modSource === 'nexus';
}
exports.isNexusMod = isNexusMod;
function isGameManaged(api, gameId) {
    var profiles = {};
    profiles = vortex_api_1.util.getSafe(api.getState().persistent, ['profiles'], {});
    const gameProfiles = Object.keys(profiles)
        .filter((id) => profiles[id].gameId === gameId);
    return gameProfiles && gameProfiles.length > 0;
}
exports.isGameManaged = isGameManaged;
function getState(obj) {
    var state = obj.api
        ? obj.api.store.getState()
        : obj.store
            ? obj.store.getState()
            : obj;
    return state;
}


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findGame = exports.getModPath = exports.MOD_FILE_EXT = exports.STEAMAPP_ID = exports.I18N_NAMESPACE = exports.GAME_ID = void 0;
const vortex_api_1 = __webpack_require__(/*! vortex-api */ "vortex-api");
const path = __importStar(__webpack_require__(/*! path */ "path"));
const vortex_ext_common_1 = __webpack_require__(/*! vortex-ext-common */ "./node_modules/vortex-ext-common/index.js");
const install_1 = __webpack_require__(/*! ./install */ "./src/install.ts");
const util_1 = __webpack_require__(/*! ./util */ "./src/util.ts");
const settings_1 = __webpack_require__(/*! ./settings */ "./src/settings/index.ts");
exports.GAME_ID = 'horizonzerodawn';
exports.I18N_NAMESPACE = 'horizonvortex';
exports.STEAMAPP_ID = 1151640;
exports.MOD_FILE_EXT = ".bin";
exports.getModPath = (gamePath) => {
    return path.join('Packed_DX12');
};
function findGame() {
    return vortex_api_1.util.GameStoreHelper.findByAppId([exports.STEAMAPP_ID.toString()])
        .then((game) => game.gamePath);
}
exports.findGame = findGame;
function main(context) {
    const isHorizonManaged = () => {
        return vortex_ext_common_1.isGameManaged(context.api, exports.GAME_ID);
    };
    const installer = install_1.getInstaller();
    context.once(() => {
        vortex_api_1.log('debug', 'initialising Horizon Zero Dawn extension!');
        try {
            let langContent = vortex_api_1.fs.readFileSync(path.join(__dirname, 'language.json'), { encoding: 'utf-8' });
            context.api.getI18n().addResources('en', exports.I18N_NAMESPACE, JSON.parse(langContent));
        }
        catch { }
        installer.configure(context.api);
    });
    context.registerSettings('Interface', settings_1.GeneralSettings, undefined, isHorizonManaged, 101);
    context.registerReducer(['settings', 'hzd'], settings_1.settingsReducer);
    context.registerGame({
        name: "Horizon Zero Dawn",
        mergeMods: true,
        logo: 'gameart.jpg',
        supportedTools: [],
        executable: () => 'HorizonZeroDawn.exe',
        requiredFiles: [
            'HorizonZeroDawn.exe'
        ],
        id: exports.GAME_ID,
        queryPath: findGame,
        queryModPath: exports.getModPath,
        setup: async (discovery) => {
            vortex_api_1.log('debug', 'running wingvortex setup');
            try {
                await vortex_api_1.fs.ensureDirWritableAsync(path.join(discovery.path, exports.getModPath(discovery.path)));
            }
            catch (err) {
                vortex_api_1.log('error', `Error while setting up HZD`, { err });
                context.api.sendNotification({
                    type: 'warning',
                    title: 'Game directory not writeable',
                    message: 'The game directory appears to be read-only. Not all features will be available.',
                    actions: [
                        { title: 'More',
                            action: dismiss => {
                                context.api.showDialog('error', 'Read-only game directory!', {
                                    text: getRODialogText()
                                }, [
                                    { label: "Close", action: () => dismiss() }
                                ]);
                            } }
                    ]
                });
            }
        },
        environment: {
            SteamAPPId: exports.STEAMAPP_ID.toString()
        },
        details: {
            steamAppId: exports.STEAMAPP_ID,
            settingsPath: () => util_1.UserPaths.userConfigPath(),
            appDataPath: () => util_1.UserPaths.userDataPath()
        },
        compatible: {},
        onStart: 'hide'
    });
    context.registerModType('hzd-tools', 25, gameId => gameId === exports.GAME_ID, (game) => vortex_ext_common_1.getGamePath(game, context.api.getState(), true), (inst) => util_1.isToolMod(inst), {
        name: "HZD Modding Tool",
        mergeMods: true,
        deploymentEssential: false
    });
    context.registerModType('hzd-savegames', 100, gameId => gameId === exports.GAME_ID, (game) => util_1.UserPaths.saveGamesPath(), (inst) => util_1.isSaveGame(inst), {
        name: "HZD Save Game",
        mergeMods: true,
        deploymentEssential: false
    });
    context.registerInstaller('hzd-binmods-advanced', 25, installer.testSupported, installer.advancedInstall);
    context.registerInstaller('hzd-binmods', 50, install_1.testSupportedContent, (files, destination, gameId, progress) => install_1.installContent(files, destination, gameId, progress));
    return true;
}
function getRODialogText() {
    return "Your Horizon Zero Dawn game directory appears to be read-only.\n\n" +
        "Note that Vortex will still try its best to manage mods using your user directory, but this is largely unsupported.\n";
}
module.exports = {
    default: main,
};


/***/ }),

/***/ "./src/install.ts":
/*!************************!*\
  !*** ./src/install.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.testSaveGameContent = exports.installContent = exports.testSupportedContent = exports.getInstaller = void 0;
const _1 = __webpack_require__(/*! . */ "./src/index.ts");
const settings_1 = __webpack_require__(/*! ./settings */ "./src/settings/index.ts");
const advanced_1 = __webpack_require__(/*! vortex-ext-common/install/advanced */ "./node_modules/vortex-ext-common/install/advanced/index.js");
const vortex_api_1 = __webpack_require__(/*! vortex-api */ "vortex-api");
const path = __importStar(__webpack_require__(/*! path */ "path"));
function getInstaller() {
    var builder = new advanced_1.AdvancedInstallerBuilder(_1.GAME_ID, _1.MOD_FILE_EXT);
    var installer = builder
        .addExtender(advanced_1.addInstalledPaksAttribute(_1.MOD_FILE_EXT))
        .addSupportedCheck(async (files, gameId, state) => { return { supported: settings_1.Features.isInstallerEnabled(state), requiredFiles: [] }; })
        .build();
    return installer;
}
exports.getInstaller = getInstaller;
exports.testSupportedContent = (files, gameId) => {
    vortex_api_1.log('debug', `testing ${files.length} mod files for unreal installer`, { files, targetGame: _1.GAME_ID });
    let supported = (gameId === _1.GAME_ID) &&
        ((files.find(file => path.extname(file).toLowerCase() === _1.MOD_FILE_EXT) !== undefined)
            || false);
    return Promise.resolve({
        supported,
        requiredFiles: [],
    });
};
exports.installContent = async (files, destinationPath, gameId, progressDelegate) => {
    vortex_api_1.log('debug', `running unreal installer. [${gameId}]`, { files, destinationPath });
    const modFile = files.find(file => path.extname(file).toLowerCase() === _1.MOD_FILE_EXT);
    if (modFile) {
        const idx = modFile.indexOf(path.basename(modFile));
        const rootPath = path.dirname(modFile);
        const filtered = files.filter(file => ((file.indexOf(rootPath) !== -1)
            && (!file.endsWith(path.sep))));
        vortex_api_1.log('debug', 'filtered extraneous files', { root: rootPath, candidates: filtered });
        const instructions = filtered.map(file => {
            const destination = path.join(file.substr(idx));
            return {
                type: 'copy',
                source: file,
                destination: destination
            };
        });
        return Promise.resolve({ instructions });
    }
    else {
        vortex_api_1.log('warn', "Couldn't find reliable root indicator in file list. Falling back to basic installation!");
        var instructions = files.map((file) => {
            return {
                type: 'copy',
                source: file,
                destination: file,
            };
        });
        return Promise.resolve({ instructions });
    }
};
exports.testSaveGameContent = (files, gameId) => {
    vortex_api_1.log('debug', `testing ${files.length} mod files for HZD save game`, { files, targetGame: _1.GAME_ID });
    let supported = (gameId === _1.GAME_ID) &&
        (((files.find(file => path.basename(file).toLowerCase() === 'checkpoint.dat') !== undefined) &&
            (files.find(file => path.basename(file).toLowerCase() === 'slotinfo.ini') !== undefined)) || false);
    return Promise.resolve({
        supported,
        requiredFiles: [],
    });
};


/***/ }),

/***/ "./src/settings/GeneralSettings.tsx":
/*!******************************************!*\
  !*** ./src/settings/GeneralSettings.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(__webpack_require__(/*! react */ "react"));
const react_redux_1 = __webpack_require__(/*! react-redux */ "react-redux");
const react_i18next_1 = __webpack_require__(/*! react-i18next */ "react-i18next");
const vortex_api_1 = __webpack_require__(/*! vortex-api */ "vortex-api");
const actions_1 = __webpack_require__(/*! ./actions */ "./src/settings/actions.ts");
const __1 = __webpack_require__(/*! .. */ "./src/index.ts");
const { HelpBlock, FormGroup, ControlLabel } = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
class GeneralSettings extends vortex_api_1.ComponentEx {
    render() {
        const { t, enableAdvanced, onEnableAdvanced } = this.props;
        return (React.createElement("form", null,
            React.createElement(FormGroup, null,
                React.createElement(ControlLabel, null, t('Enable Advanced Installer for Horizon Zero Dawn')),
                React.createElement(HelpBlock, null, t('Use the option below to disable the interactive installer for Horizon Zero Dawn mods and fall back to using a basic installer. Only turn this off if you are having problems with the default installer!')),
                React.createElement(vortex_api_1.Toggle, { checked: enableAdvanced, onToggle: onEnableAdvanced },
                    t("Enable Interactive Installer"),
                    React.createElement(vortex_api_1.More, { id: 'pw-advanced', name: 'Advanced Interactive Installer' }, t("When installing archives with more than one mod file, Vortex will attempt to walk you through installing only the files you need. You can use this option to turn off this behaviour and simply install the first directory containing mod files it finds in the archive. Only change this if you know what you're doing!"))))));
    }
}
function mapStateToProps(state) {
    return {
        enableAdvanced: actions_1.Features.isInstallerEnabled(state)
    };
}
function mapDispatchToProps(dispatch) {
    return {
        onEnableAdvanced: (enable) => dispatch(actions_1.enableAdvancedInstaller(enable))
    };
}
exports.default = react_i18next_1.withTranslation(['common', __1.I18N_NAMESPACE, 'game-horizonzerodawn'])(react_redux_1.connect(mapStateToProps, mapDispatchToProps)(GeneralSettings));


/***/ }),

/***/ "./src/settings/actions.ts":
/*!*********************************!*\
  !*** ./src/settings/actions.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Features = exports.settingsReducer = exports.enableAdvancedInstaller = void 0;
const redux_act_1 = __webpack_require__(/*! redux-act */ "redux-act");
const vortex_api_1 = __webpack_require__(/*! vortex-api */ "vortex-api");
exports.enableAdvancedInstaller = redux_act_1.createAction('HZD_ENABLE_INSTALLER', (enable) => enable);
exports.settingsReducer = {
    reducers: {
        [exports.enableAdvancedInstaller]: (state, payload) => {
            return vortex_api_1.util.setSafe(state, ['installer'], payload);
        }
    },
    defaults: {
        installer: true
    }
};
exports.Features = {
    isInstallerEnabled: (state) => {
        return vortex_api_1.util.getSafe(state.settings, ['hzd', 'installer'], true);
    }
};


/***/ }),

/***/ "./src/settings/index.ts":
/*!*******************************!*\
  !*** ./src/settings/index.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneralSettings = void 0;
__exportStar(__webpack_require__(/*! ./actions */ "./src/settings/actions.ts"), exports);
const GeneralSettings_1 = __importDefault(__webpack_require__(/*! ./GeneralSettings */ "./src/settings/GeneralSettings.tsx"));
exports.GeneralSettings = GeneralSettings_1.default;


/***/ }),

/***/ "./src/util.ts":
/*!*********************!*\
  !*** ./src/util.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSaveGame = exports.isToolMod = exports.UserPaths = void 0;
const path = __importStar(__webpack_require__(/*! path */ "path"));
const _1 = __webpack_require__(/*! . */ "./src/index.ts");
const electron_1 = __webpack_require__(/*! electron */ "electron");
exports.UserPaths = {
    userDataPath: () => path.join(process.env.HOME || require('os').homedir(), 'Documents', 'Horizon Zero Dawn'),
    userConfigPath: () => path.join(exports.UserPaths.userDataPath(), 'Saved Game', 'profile'),
    saveGamesPath: () => path.join(exports.UserPaths.userDataPath(), 'Saved Game'),
};
exports.isToolMod = async (instructions) => {
    let exeSources = instructions.filter(f => f.type == "copy" && path.extname(f.source).toLowerCase() == '.exe');
    let pakSources = instructions.filter(f => f.type == "copy" && path.extname(f.source).toLowerCase() == _1.MOD_FILE_EXT);
    return exeSources.length > 0 && pakSources.length == 0;
};
exports.isSaveGame = async (instructions) => {
    let checkpointFiles = instructions.filter(f => f.type == "copy" && path.basename(f.source).toLowerCase() === 'checkpoint.dat');
    let slotFiles = instructions.filter(f => f.type == "copy" && path.basename(f.source).toLowerCase() === 'slotinfo.ini');
    return checkpointFiles.length > 0 && slotFiles.length > 0;
};


/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("electron");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "react-i18next":
/*!********************************!*\
  !*** external "react-i18next" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-i18next");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux-act":
/*!****************************!*\
  !*** external "redux-act" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-act");

/***/ }),

/***/ "vortex-api":
/*!*****************************!*\
  !*** external "vortex-api" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("vortex-api");

/***/ })

/******/ });
//# sourceMappingURL=game-horizonzerodawn.js.map