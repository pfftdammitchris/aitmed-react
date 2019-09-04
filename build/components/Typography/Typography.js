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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import React from 'react';
import cx from 'classnames';
import { Typography as MUITypography } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/styles';
import Divider from '@material-ui/core/Divider';
var useStyles = makeStyles(function (theme) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
    return ({
        h1: (_a = {
                fontWeight: 600
            },
            _a[theme.breakpoints.down('md')] = {
                fontSize: '4.5em',
            },
            _a[theme.breakpoints.down('sm')] = {
                fontSize: '4em',
            },
            _a[theme.breakpoints.down('xs')] = {
                fontSize: '1.7em',
            },
            _a),
        h2: (_b = {
                fontWeight: 500
            },
            _b[theme.breakpoints.down('md')] = {
                fontSize: '3.3em',
            },
            _b[theme.breakpoints.down('sm')] = {
                fontSize: '3em !important',
            },
            _b[theme.breakpoints.down('xs')] = {
                fontSize: '1.4em !important',
            },
            _b),
        h3: (_c = {
                fontWeight: 500
            },
            _c[theme.breakpoints.down('md')] = {
                fontSize: '2.8em',
            },
            _c[theme.breakpoints.down('sm')] = {
                fontSize: '2.5em ',
            },
            _c[theme.breakpoints.down('xs')] = {
                fontSize: '1.1em',
            },
            _c),
        h4: (_d = {
                fontWeight: 500
            },
            _d[theme.breakpoints.down('sm')] = {
                fontSize: '1.8em',
            },
            _d[theme.breakpoints.down('xs')] = {
                fontSize: '1em',
            },
            _d),
        h5: (_e = {
                fontSize: '2em',
                fontWeight: 500
            },
            _e[theme.breakpoints.down('sm')] = {
                fontSize: '1.55em',
            },
            _e[theme.breakpoints.down('xs')] = {
                fontSize: '0.95em',
            },
            _e),
        h6: (_f = {
                fontSize: '1.3em',
                fontWeight: 400
            },
            _f[theme.breakpoints.down('sm')] = {
                fontSize: '1.2em',
            },
            _f[theme.breakpoints.down('xs')] = {
                fontSize: '0.85em',
            },
            _f),
        subtitle1: (_g = {},
            _g[theme.breakpoints.down('sm')] = {
                fontSize: '0.9em',
            },
            _g[theme.breakpoints.down('xs')] = {
                fontSize: '0.75em',
            },
            _g),
        subtitle2: (_h = {},
            _h[theme.breakpoints.down('sm')] = {
                fontSize: '0.8em',
            },
            _h[theme.breakpoints.down('xs')] = {
                fontSize: '0.7em',
            },
            _h),
        body1: (_j = {
                fontSize: '0.95em'
            },
            _j[theme.breakpoints.down('sm')] = {
                fontSize: '0.82em',
            },
            _j[theme.breakpoints.down('xs')] = {
                fontSize: '0.68em',
            },
            _j),
        body2: (_k = {},
            _k[theme.breakpoints.down('sm')] = {
                fontSize: '0.73em',
            },
            _k[theme.breakpoints.down('xs')] = {
                fontSize: '0.6em',
            },
            _k),
        button: (_l = {},
            _l[theme.breakpoints.down('sm')] = {
                fontSize: '0.8em',
            },
            _l[theme.breakpoints.down('xs')] = {
                fontSize: '0.65em',
            },
            _l),
        caption: (_m = {},
            _m[theme.breakpoints.down('sm')] = {
                fontSize: '0.7em',
            },
            _m[theme.breakpoints.down('xs')] = {
                fontSize: '0.58em',
            },
            _m),
        subheading: (_o = {
                fontSize: '1.3em',
                fontWeight: 300
            },
            _o[theme.breakpoints.down('sm')] = {
                fontSize: '1em',
            },
            _o[theme.breakpoints.down('xs')] = {
                fontSize: '0.8em',
            },
            _o),
        primary: { color: theme.palette.primary.main },
        secondary: { color: theme.palette.secondary.main + " !important" },
        thirdary: { color: theme.palette.thirdary.main },
        darkBlue: { color: theme.palette.secondary.darker },
        link: {
            cursor: 'pointer',
            color: theme.palette.link.normal,
            '&:hover': {
                color: theme.palette.link.hovering,
            },
        },
        italic: {
            fontStyle: 'italic',
        },
        unselected: {
            '-webkit-touch-callout': 'none',
            '-webkit-user-select': 'none',
            '-khtml-user-select': 'none',
            '-moz-user-select': 'none',
            '-ms-user-select': 'none',
            'user-select': 'none',
        },
        centerOnSmall: (_p = {},
            _p[theme.breakpoints.down('xs')] = {
                textAlign: 'center',
            },
            _p),
    });
});
var Typography = function (_a) {
    var _b;
    var className = _a.className, style = _a.style, primary = _a.primary, secondary = _a.secondary, darkBlue = _a.darkBlue, thirdary = _a.thirdary, white = _a.white, black = _a.black, soft = _a.soft, inactive = _a.inactive, error = _a.error, red = _a.red, link = _a.link, variant = _a.variant, left = _a.left, center = _a.center, centerOnSmall = _a.centerOnSmall, right = _a.right, margin = _a.margin, marginBottom = _a.marginBottom, padding = _a.padding, divider = _a.divider, fontWeight = _a.fontWeight, italic = _a.italic, unselected = _a.unselected, props = __rest(_a, ["className", "style", "primary", "secondary", "darkBlue", "thirdary", "white", "black", "soft", "inactive", "error", "red", "link", "variant", "left", "center", "centerOnSmall", "right", "margin", "marginBottom", "padding", "divider", "fontWeight", "italic", "unselected"]);
    var classes = useStyles();
    var theme = useTheme();
    var styles = {};
    // Computes the font color
    if (primary)
        styles.color = theme.palette.primary.main;
    else if (secondary)
        styles.color = theme.palette.secondary.main;
    else if (darkBlue)
        styles.color = theme.palette.secondary.dark;
    else if (thirdary)
        styles.color = theme.palette.thirdary.main;
    else if (error || red)
        styles.color = theme.palette.error.main;
    else if (white)
        styles.color = '#fff';
    else if (black)
        styles.color = '#000';
    if (margin)
        styles.margin = margin;
    if (marginBottom)
        styles.marginBottom = marginBottom;
    if (padding)
        styles.padding = padding;
    if (fontWeight)
        styles.fontWeight = fontWeight;
    if (left)
        styles.textAlign = 'left';
    if (center)
        styles.textAlign = 'center';
    if (right)
        styles.textAlign = 'right';
    var classNames = [];
    if (centerOnSmall)
        classNames.push(classes.centerOnSmall);
    if (variant && variant !== 'subheading')
        classNames.push(classes[variant]);
    return (React.createElement(React.Fragment, null,
        React.createElement(MUITypography, __assign({ style: __assign(__assign({}, style), styles), className: cx.apply(void 0, __spreadArrays([className], classNames, [(_b = {},
                    _b[classes.primary] = !!primary,
                    _b[classes.secondary] = !!secondary,
                    _b[classes.thirdary] = !!thirdary,
                    _b[classes.darkBlue] = !!darkBlue,
                    _b[classes.link] = !!link,
                    _b[classes.italic] = !!italic,
                    _b[classes.unselected] = !!unselected,
                    _b)])), 
            // @ts-ignore
            variant: variant !== 'subheading' ? variant : undefined }, props)),
        divider && React.createElement(Divider, null)));
};
export default Typography;
//# sourceMappingURL=Typography.js.map