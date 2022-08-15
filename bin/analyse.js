var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import * as FS from "fs";
import * as Console from "console";
import { promisify } from "util";
import * as Esprima from "esprima";
function yieldElmJsDefinitionInfos(script) {
    var _a, _b, statement, e_1_1;
    var e_1, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _d.trys.push([0, 6, 7, 8]);
                _a = __values(yieldElmJsStatements(script)), _b = _a.next();
                _d.label = 1;
            case 1:
                if (!!_b.done) return [3 /*break*/, 5];
                statement = _b.value;
                return [5 /*yield**/, __values(yieldFunctionDeclarationInfo(statement))];
            case 2:
                _d.sent();
                return [5 /*yield**/, __values(yieldVariableDeclarationInfos(statement))];
            case 3:
                _d.sent();
                _d.label = 4;
            case 4:
                _b = _a.next();
                return [3 /*break*/, 1];
            case 5: return [3 /*break*/, 8];
            case 6:
                e_1_1 = _d.sent();
                e_1 = { error: e_1_1 };
                return [3 /*break*/, 8];
            case 7:
                try {
                    if (_b && !_b.done && (_c = _a["return"])) _c.call(_a);
                }
                finally { if (e_1) throw e_1.error; }
                return [7 /*endfinally*/];
            case 8: return [2 /*return*/];
        }
    });
}
function yieldElmJsStatements(script) {
    var _a, _b, e, e_2_1;
    var e_2, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _d.trys.push([0, 5, 6, 7]);
                _a = __values(script.body), _b = _a.next();
                _d.label = 1;
            case 1:
                if (!!_b.done) return [3 /*break*/, 4];
                e = _b.value;
                if (!(e.type === "ExpressionStatement" &&
                    e.expression.type === "CallExpression" &&
                    e.expression.callee.type === "FunctionExpression")) return [3 /*break*/, 3];
                return [5 /*yield**/, __values(e.expression.callee.body.body)];
            case 2:
                _d.sent();
                _d.label = 3;
            case 3:
                _b = _a.next();
                return [3 /*break*/, 1];
            case 4: return [3 /*break*/, 7];
            case 5:
                e_2_1 = _d.sent();
                e_2 = { error: e_2_1 };
                return [3 /*break*/, 7];
            case 6:
                try {
                    if (_b && !_b.done && (_c = _a["return"])) _c.call(_a);
                }
                finally { if (e_2) throw e_2.error; }
                return [7 /*endfinally*/];
            case 7: return [2 /*return*/];
        }
    });
}
function yieldFunctionDeclarationInfo(statement) {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!(statement.type === "FunctionDeclaration")) return [3 /*break*/, 2];
                return [4 /*yield*/, {
                        name: statement.id.name,
                        range: statement.range
                    }];
            case 1:
                _a.sent();
                _a.label = 2;
            case 2: return [2 /*return*/];
        }
    });
}
function yieldVariableDeclarationInfos(statement) {
    var _a, _b, declaration, e_3_1;
    var e_3, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                if (!(statement.type === "VariableDeclaration")) return [3 /*break*/, 8];
                _d.label = 1;
            case 1:
                _d.trys.push([1, 6, 7, 8]);
                _a = __values(statement.declarations), _b = _a.next();
                _d.label = 2;
            case 2:
                if (!!_b.done) return [3 /*break*/, 5];
                declaration = _b.value;
                if (!(declaration.id.type === "Identifier")) return [3 /*break*/, 4];
                return [4 /*yield*/, {
                        name: declaration.id.name,
                        range: declaration.range
                    }];
            case 3:
                _d.sent();
                _d.label = 4;
            case 4:
                _b = _a.next();
                return [3 /*break*/, 2];
            case 5: return [3 /*break*/, 8];
            case 6:
                e_3_1 = _d.sent();
                e_3 = { error: e_3_1 };
                return [3 /*break*/, 8];
            case 7:
                try {
                    if (_b && !_b.done && (_c = _a["return"])) _c.call(_a);
                }
                finally { if (e_3) throw e_3.error; }
                return [7 /*endfinally*/];
            case 8: return [2 /*return*/];
        }
    });
}
function rangeSize(_a) {
    var _b = __read(_a, 2), start = _b[0], end = _b[1];
    return end - start;
}
function pct(value, of) {
    return "".concat(Number((value / of) * 100).toFixed(3), "%");
}
function moduleName(name) {
    return !name.startsWith("$")
        ? "Kernel Code"
        : name.slice(0, name.lastIndexOf("$"));
}
function packageName(name) {
    return !name.startsWith("$")
        ? "Kernel Code"
        : name.split("$").slice(1, 3).join("/");
}
function localName(name) {
    return !name.startsWith("$author")
        ? "Dependencies"
        : name.slice(16, name.lastIndexOf("$")).replaceAll("$", ".");
}
export function analyse(elmOutputJsFilePath, opts) {
    return __awaiter(this, void 0, void 0, function () {
        var file, parsed, size, infos, summary, entries, rangeSum;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, promisify(FS.readFile)(elmOutputJsFilePath)];
                case 1:
                    file = _a.sent();
                    parsed = Esprima.parseScript(file.toString(), { range: true });
                    size = parsed.range;
                    infos = Array.from(yieldElmJsDefinitionInfos(parsed));
                    if (opts.summary != undefined) {
                        summary = infos.reduce(function (prev, _a) {
                            var _b;
                            var name = _a.name, range = _a.range;
                            var key;
                            switch (opts.summary) {
                                case "package": {
                                    key = packageName(name);
                                    break;
                                }
                                case "project": {
                                    key = localName(name);
                                    break;
                                }
                                default: {
                                    key = moduleName(name);
                                    break;
                                }
                            }
                            prev.set(key, ((_b = prev.get(key)) !== null && _b !== void 0 ? _b : 0) + rangeSize(range));
                            return prev;
                        }, new Map());
                        entries = __spreadArray([], __read(summary.entries()), false);
                        entries.sort(function (a, b) { return b[1] - a[1]; });
                        entries.forEach(function (_a) {
                            var _b = __read(_a, 2), name = _b[0], range = _b[1];
                            Console.log("".concat(pct(range, rangeSize(size)), ": ").concat(name));
                        });
                    }
                    else {
                        infos.sort(function (a, b) { return rangeSize(b.range) - rangeSize(a.range); });
                        infos.forEach(function (_a) {
                            var name = _a.name, range = _a.range;
                            Console.log("".concat(pct(rangeSize(range), rangeSize(size)), ": ").concat(name));
                        });
                    }
                    rangeSum = infos
                        .map(function (_a) {
                        var range = _a.range;
                        return rangeSize(range);
                    })
                        .reduce(function (a, b) { return a + b; }, 0);
                    Console.log("Range sum: ".concat(rangeSum, " total: ").concat(rangeSize(size), ", analized ").concat(pct(rangeSum, rangeSize(size))));
                    return [2 /*return*/];
            }
        });
    });
}
