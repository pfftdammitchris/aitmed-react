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
import React from 'react';
import cx from 'classnames';
import MuiDivider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/styles';
var useStyles = makeStyles(function (theme) { return ({
    root: function (_a) {
        var _b;
        var margin = _a.margin;
        var smallMargin = typeof margin === 'number' ? margin / 2 : false;
        return _b = {
                margin: margin || theme.spacing(2.5) + 'px' + " auto"
            },
            _b[theme.breakpoints.down('xs')] = {
                margin: smallMargin || theme.spacing(1.5) + 'px' + " auto",
            },
            _b;
    },
}); });
var Divider = function (_a) {
    var _b = _a.classNames, classNames = _b === void 0 ? {} : _b, props = __rest(_a, ["classNames"]);
    var classes = useStyles(props);
    return (React.createElement(MuiDivider, __assign({ classes: __assign(__assign({}, classNames), { root: cx(classes.root, classNames.root) }) }, props)));
};
export default Divider;
//# sourceMappingURL=Divider.js.map