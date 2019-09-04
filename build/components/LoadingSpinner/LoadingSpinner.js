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
import isFunction from 'lodash/isFunction';
import { makeStyles, useTheme } from '@material-ui/styles';
import Fade from '@material-ui/core/Fade';
import withWidth from '@material-ui/core/withWidth';
import cx from 'classnames';
import CircularProgress from '@material-ui/core/CircularProgress';
import logo from 'resources/appIcon.png';
import logoWhite from 'resources/appIconWhite.png';
import Typography from 'components/Typography';
import useLoadingSpinner from './useLoadingSpinner';
var useStyles = makeStyles({
    root: {
        zIndex: 999999,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
    },
    fullscreen: {
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
    },
    spinner: {
        position: 'relative',
        margin: 'auto',
        display: 'block',
    },
    caption: {
        transition: 'all 0.3s ease-out',
        position: 'relative',
        width: '100%',
        height: '100%',
        textAlign: 'center',
        '& h3': {
            color: '#fff !important',
            fontWeight: 300,
        },
        '& h4': {
            color: '#fff !important',
            fontWeight: 300,
        },
        '& h5': {
            color: '#fff !important',
            fontWeight: 300,
        },
        '& h6': {
            color: '#fff !important',
            fontWeight: 300,
        },
    },
    dim: {
        background: 'rgba(0, 0, 0, 0.80)',
    },
    noOverlay: {
        background: 'none',
    },
    logoContainer: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        display: 'flex',
        objectFit: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 35,
        height: 35,
        objectFit: 'cover',
    },
    xxs: { fontSize: '0.5rem !important' },
    xs: { fontSize: '0.6rem !important' },
    sm: { fontSize: '0.7rem !important' },
    md: { fontSize: '0.9rem !important' },
    lg: { fontSize: '0.9rem !important' },
    xl: { fontSize: '0.9rem !important' },
});
var SpinnerWithWidth = function (_a) {
    var _b = _a.width, width = _b === void 0 ? 'xs' : _b, size = _a.size, style = _a.style, xxs = _a.xxs, xs = _a.xs, sm = _a.sm, md = _a.md, lg = _a.lg, xl = _a.xl, rest = __rest(_a, ["width", "size", "style", "xxs", "xs", "sm", "md", "lg", "xl"]);
    var theme = useTheme();
    var dynamicColor = useLoadingSpinner({ theme: theme });
    var spinnerSize;
    if (xxs || width === 'xxs')
        spinnerSize = 30;
    else if (xs || width === 'xs')
        spinnerSize = 45;
    else if (sm || width === 'sm')
        spinnerSize = 60;
    else if (md || width === 'md')
        spinnerSize = 75;
    else if (lg || width === 'lg')
        spinnerSize = 130;
    else if (xl || width === 'xl')
        spinnerSize = 150;
    else
        spinnerSize = 45;
    return (React.createElement(CircularProgress, __assign({ size: size || spinnerSize, thickness: 1, style: __assign({ color: dynamicColor }, style) }, rest)));
};
var EnhancedSpinnerWithWidth = withWidth()(SpinnerWithWidth);
var calcTypographyVariant = function (_a) {
    var size = _a.size, xxs = _a.xxs, xs = _a.xs, sm = _a.sm, md = _a.md, lg = _a.lg, xl = _a.xl;
    if (xxs)
        return 'caption';
    else if (xs)
        return 'subtitle2';
    else if (sm)
        return 'subtitle1';
    else if (md)
        return 'h6';
    else if (lg)
        return 'h5';
    else if (xl)
        return 'h4';
    else {
        switch (size) {
            case 'xxs':
                return 'caption';
            case 'xs':
                return 'subtitle2';
            case 'sm':
                return 'subtitle1';
            case 'md':
                return 'h6';
            case 'lg':
                return 'subtitle2';
            case 'xl':
                return 'subtitle2';
            default:
                return 'subtitle1';
        }
    }
};
var LoadingSpinner = function (_a) {
    var _b, _c;
    var children = _a.children, wrapperClassName = _a.wrapperClassName, className = _a.className, childrenClassName = _a.childrenClassName, wrapperStyle = _a.wrapperStyle, childrenStyle = _a.childrenStyle, _d = _a.fullscreen, fullscreen = _d === void 0 ? false : _d, _e = _a.dim, dim = _e === void 0 ? false : _e, _f = _a.white, white = _f === void 0 ? false : _f, renderContent = _a.renderContent, rest = __rest(_a, ["children", "wrapperClassName", "className", "childrenClassName", "wrapperStyle", "childrenStyle", "fullscreen", "dim", "white", "renderContent"]);
    var classes = useStyles(undefined);
    var styles = {};
    var logoSrc = logo; // default to logo with dark text
    if (white || dim)
        logoSrc = logoWhite;
    return (React.createElement("div", { style: __assign(__assign({}, styles), wrapperStyle), className: cx(classes.root, wrapperClassName, (_b = {},
            _b[classes.fullscreen] = !!fullscreen,
            _b[classes.dim] = !!dim,
            _b)) },
        React.createElement("div", { className: className, style: { position: 'relative' } },
            React.createElement("div", { style: { position: 'relative' } },
                React.createElement(EnhancedSpinnerWithWidth, __assign({ className: cx(classes.spinner, className) }, rest)),
                React.createElement("div", { className: classes.logoContainer },
                    React.createElement("img", { src: logoSrc, className: classes.logo, title: "AiTmed" }))),
            React.createElement(Fade, { timeout: 2000, in: true }, isFunction(renderContent) ? (
            // @ts-ignore
            renderContent()) : (React.createElement(Typography, { className: cx(classes.caption, childrenClassName, (_c = {},
                    _c[classes.xxs] = !!rest.xxs,
                    _c[classes.xs] = !!rest.xs,
                    _c[classes.sm] = !!rest.sm,
                    _c[classes.md] = !!rest.md,
                    _c[classes.lg] = !!rest.lg,
                    _c[classes.xl] = !!rest.xl,
                    _c)), style: __assign({ marginTop: 12 }, childrenStyle), variant: calcTypographyVariant(rest), center: true, white: true }, children))))));
};
export default LoadingSpinner;
//# sourceMappingURL=LoadingSpinner.js.map