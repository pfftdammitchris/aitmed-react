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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import useCache from 'hooks/useCache';
import cloneDeep from 'lodash/cloneDeep';
import get from 'lodash/get';
import has from 'lodash/has';
import set from 'lodash/set';
import unset from 'lodash/unset';
var useObjectizedCheckboxes = function (_a) {
    var input = _a.input;
    var _b = useCache(), cache = _b.cache, onMountRef = _b.onMountRef;
    function updateOnBlur(key) {
        if (input && input.value) {
            if (has(cache, key)) {
                var inputEl = get(cache, key, null);
                var inputValues = cloneDeep(input.value);
                var nextValue = String((inputEl && inputEl.value) || '');
                set(inputValues, key, nextValue);
                input.onChange(inputValues);
                if (inputEl)
                    inputEl.value = nextValue;
            }
            else {
                console.warn("Warning: Tried  to call updateOnBlur but the key \"" + key + "\" it was not in the cache");
            }
        }
        else {
            console.warn("Warning: Tried to call updateOnBlur with key \"" + key + "\" but input or input.value was null or undefined");
        }
    }
    function onChange(key) {
        return function (e) {
            if (e && e.target) {
                var inputValues = cloneDeep(input.value);
                var checked = e.target.checked;
                var nextValue = '';
                if (inputValues) {
                    var inputEl = get(cache, key, null);
                    if (checked) {
                        if (inputEl)
                            nextValue = inputEl.value || '';
                        set(inputValues, key, nextValue);
                    }
                    else {
                        if (has(inputValues, key)) {
                            var path = key.split('.');
                            var indexLast = path.length - 1 || 0;
                            var deleteKey = path[indexLast];
                            var isDeleted = unset(inputValues, deleteKey);
                            if (!isDeleted) {
                                return console.warn("Tried to delete path \"" + key + "\" with delete key \"" + deleteKey + "\" but it was not found or an error occurred");
                            }
                        }
                    }
                    if (inputEl)
                        inputEl.value = nextValue;
                    input.onChange(inputValues);
                }
            }
            else {
                console.warn('Could not invoke onChange because e.target is null or undefined');
            }
        };
    }
    function onBlur(key) {
        return function () {
            updateOnBlur(key);
        };
    }
    function onKeyPress(key) {
        return function (e) {
            if (e.charCode === 13) {
                updateOnBlur(key);
            }
        };
    }
    function getTextFieldProps(_a) {
        var _b = _a.name, name = _b === void 0 ? '' : _b, rest = __rest(_a, ["name"]);
        return __assign({ inputRef: onMountRef(name), onBlur: onBlur(name), onKeyPress: onKeyPress(name) }, rest);
    }
    return {
        nodes: cache,
        onBlur: onBlur,
        onChange: onChange,
        onKeyPress: onKeyPress,
        onMountRef: onMountRef,
        getTextFieldProps: getTextFieldProps,
    };
};
export default useObjectizedCheckboxes;
//# sourceMappingURL=useObjectizedCheckboxes.js.map