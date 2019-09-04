var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
import React from 'react';
import Downshift from 'downshift';
import reduce from 'lodash/reduce';
import axios from 'axios';
var parseResponse = function (data) {
    if (data) {
        var reducer_1 = function (acc, _a) {
            var code = _a[0], description = _a[1];
            if (!acc.hasOwnProperty(code))
                acc[code] = description;
            return acc;
        };
        // @ts-ignore
        var totalResults = data[0], codes = data[1], _ = data[2], codesAndNames = data[3];
        return {
            total: totalResults,
            results: reduce(codesAndNames, reducer_1, {}),
            codes: codes,
        };
    }
    return;
};
// Supports cancelation of the previous onSearch request if a new onSearch is immediately invoked right after
var makeFetchICD10Request = function () {
    var call;
    return function (keyword) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    if (call)
                        call.cancel();
                    call = axios.CancelToken.source();
                    return [4 /*yield*/, axios({
                            method: 'get',
                            url: "https://clinicaltables.nlm.nih.gov/api/icd10cm/v3/search?sf=code,name&terms=" + keyword,
                            cancelToken: call.token,
                        })];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response];
                case 2:
                    error_1 = _a.sent();
                    throw error_1;
                case 3: return [2 /*return*/];
            }
        });
    }); };
};
var downshiftReducer = function (_, changes) {
    switch (changes.type) {
        case Downshift.stateChangeTypes.clickItem:
            return __assign(__assign({}, changes), { isOpen: false, inputValue: '' });
        case Downshift.stateChangeTypes.keyDownEnter:
            return __assign(__assign({}, changes), { highlightedIndex: 0, inputValue: '' });
        case Downshift.stateChangeTypes.changeInput:
            return __assign(__assign({}, changes), { highlightedIndex: 0 });
        case Downshift.stateChangeTypes.unknown:
        case Downshift.stateChangeTypes.mouseUp:
        case Downshift.stateChangeTypes.itemMouseEnter:
        case Downshift.stateChangeTypes.keyDownArrowUp:
        case Downshift.stateChangeTypes.keyDownArrowDown:
        case Downshift.stateChangeTypes.keyDownEscape:
        case Downshift.stateChangeTypes.blurInput:
        case Downshift.stateChangeTypes.keyDownSpaceButton:
        case Downshift.stateChangeTypes.clickButton:
        case Downshift.stateChangeTypes.blurButton:
        case Downshift.stateChangeTypes.controlledPropUpdatedSelectedItem:
        case Downshift.stateChangeTypes.touchEnd:
            return changes;
        default:
            return changes;
    }
};
var initialState = {
    fetching: false,
    fetched: false,
    fetchError: null,
    data: {
        codes: [],
        results: {},
        total: 0,
    },
};
var reducer = function (state, action) {
    switch (action.type) {
        case 'fetching':
            return __assign(__assign({}, state), { fetching: true, fetchError: null });
        case 'fetched':
            return __assign(__assign({}, state), { fetching: false, fetched: true, data: {
                    codes: action.results.codes,
                    results: action.results.results,
                    total: action.results.total,
                } });
        case 'fetch-failed':
            return __assign(__assign({}, state), { fetching: false, fetched: false, fetchError: action.error });
        case 'no-results':
            return __assign(__assign({}, state), { fetching: false });
        default:
            return state;
    }
};
/*
  onSearch takes in parameters: (keyword, { page, limit })
*/
var useICD10Searcher = function (_a) {
    var fields = _a.fields;
    var _b = React.useReducer(reducer, initialState), state = _b[0], dispatch = _b[1];
    var _c = React.useState(false), mounted = _c[0], setMounted = _c[1];
    var callSearch = makeFetchICD10Request();
    var onSearch = function (keyword, downshift) {
        var isClicked = downshift.type === Downshift.stateChangeTypes.clickItem;
        if (isClicked)
            return;
        if (keyword) {
            dispatch({ type: 'fetching' });
            callSearch(keyword)
                .then(function (response) {
                var parsedResults = parseResponse(response.data);
                if (parsedResults) {
                    var codes = parsedResults.codes;
                    if (codes && !codes.length)
                        return dispatch({ type: 'no-results' });
                    if (mounted)
                        dispatch({ type: 'fetched', results: parsedResults });
                }
                else
                    dispatch({ type: 'no-results' });
            })
                .catch(function (error) {
                if (mounted && !axios.isCancel(error)) {
                    dispatch({ type: 'fetch-failed', error: error });
                }
            });
        }
    };
    // This function will attempt to remove empty fields when adding new fields
    // It will also add an empty field when the user selects an item
    var onSelect = function (code, downshift) {
        var description;
        if (code) {
            fields.forEach(function (fieldName, index) {
                var codeElem = document.getElementById(fieldName + ".code");
                var descriptionElem = document.getElementById(fieldName + ".description");
                var commentElem = document.getElementById(fieldName + ".comment");
                if (codeElem && descriptionElem) {
                    if (!codeElem.value && !descriptionElem.value) {
                        if (commentElem && !commentElem.value) {
                            fields.remove(index);
                        }
                    }
                }
                else {
                    try {
                        fields.remove(index);
                    }
                    catch (error) {
                        console.error;
                    }
                }
            });
            description = state.data.results[code] || '';
            description = description.toUpperCase();
            fields.unshift({ code: code, description: description, comment: '' });
            fields.push({ code: '', description: '', comment: '' });
            downshift.clearSelection();
        }
    };
    // Used to prevent review notes from opening when pressing enter
    var onKeyPress = function (e) {
        if (e.charCode === 13)
            e.preventDefault();
    };
    var stringify = function (results) { return function (code) {
        return results[code] ? code + ": " + results[code].toUpperCase() : '';
    }; };
    React.useEffect(function () {
        setMounted(true);
        return function () {
            setMounted(false);
        };
    }, []);
    return __assign(__assign({}, state), { onSearch: onSearch,
        onSelect: onSelect,
        onKeyPress: onKeyPress,
        stringify: stringify,
        downshiftReducer: downshiftReducer });
};
export default useICD10Searcher;
//# sourceMappingURL=useICD10Searcher.js.map