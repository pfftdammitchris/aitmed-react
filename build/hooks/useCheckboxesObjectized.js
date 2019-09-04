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
// Re-usable checkbox > with comments tailored for react-final-form
import { useEffect, useReducer } from 'react';
import reduce from 'lodash/reduce';
import isPlainObject from 'lodash/isPlainObject';
var toComments = function (options) {
    return reduce(options, function (acc, option) {
        if (option && !acc[option]) {
            acc[option] = '';
        }
        return acc;
    }, {});
};
var initialState = {
    values: {},
};
var reducer = function (state, action) {
    switch (action.type) {
        case 'on-check':
            return __assign(__assign({}, state), { current: action.name });
        case 'on-text-change':
            return __assign(__assign({}, state), { values: __assign(__assign({}, state.values), action.values) });
        default:
            return state;
    }
};
var useCheckboxesObjectized = function (_a) {
    var _b = _a.options, options = _b === void 0 ? [] : _b, value = _a.value, onChange = _a.onChange;
    var _c = useReducer(reducer, __assign(__assign({}, initialState), { values: toComments(options) })), state = _c[0], dispatch = _c[1];
    var onCheckboxChange = function (name) {
        if (state.current === name)
            return;
        dispatch({ type: 'on-check', name: name });
    };
    var onTextChange = function (name) { return function (e) {
        var _a;
        dispatch({ type: 'on-text-change', values: (_a = {}, _a[name] = e.target.value, _a) });
    }; };
    useEffect(function () {
        var _a, _b;
        if (isPlainObject(value)) {
            var current = state.current;
            // If the value's field is not using the state's current field
            if (current) {
                if (!(current in value)) {
                    onChange((_a = {}, _a[current] = state.values[current], _a));
                }
                else {
                    // If the value's field value is different than the one in the state
                    if (value[current] !== state.values[current]) {
                        onChange((_b = {}, _b[current] = state.values[current], _b));
                    }
                }
            }
        }
    }, [state, value, onChange]);
    return __assign(__assign({}, state), { onCheckboxChange: onCheckboxChange,
        onTextChange: onTextChange });
};
export default useCheckboxesObjectized;
//# sourceMappingURL=useCheckboxesObjectized.js.map