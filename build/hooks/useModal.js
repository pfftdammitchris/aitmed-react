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
import { useReducer } from 'react';
var initialState = {
    opened: false,
    data: {},
    context: null,
};
var reducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case 'open':
            return __assign(__assign({}, state), { opened: true, data: action.data || {}, context: action.context || null });
        case 'close':
            return __assign(__assign({}, state), { opened: false, data: {}, context: null });
        default:
            return state;
    }
};
var useModal = function () {
    var _a = useReducer(reducer, initialState), state = _a[0], dispatch = _a[1];
    var open = function (_a) {
        var _b = _a === void 0 ? {} : _a, data = _b.data, context = _b.context;
        dispatch({ type: 'open', data: data, context: context });
    };
    var close = function () {
        dispatch({ type: 'close' });
    };
    return __assign(__assign({}, state), { open: open,
        close: close });
};
export default useModal;
//# sourceMappingURL=useModal.js.map