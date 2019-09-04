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
import MaterialUIButton from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';
import cx from 'classnames';
var Link = function (props) { return React.createElement("a", __assign({}, props)); };
var useStyles = makeStyles(function (theme) {
    var _a, _b;
    return ({
        root: {
            position: 'relative',
            borderRadius: 50,
            boxShadow: 'none',
            background: theme.palette.primary.main,
            border: "1px solid " + theme.palette.primary.main,
            color: '#fff',
            '&:hover': {
                background: 'none',
                color: theme.palette.primary.main,
            },
        },
        primary: {
            border: "1px solid " + theme.palette.primary.main,
            color: '#fff',
            background: theme.palette.primary.main + " !important",
            '&:hover': {
                border: "1px solid " + theme.palette.primary.dark + " !important",
                background: theme.palette.primary.dark + " !important",
                color: '#fff',
            },
        },
        secondary: {
            border: "1px solid " + theme.palette.secondary.main,
            color: '#fff',
            background: "" + theme.palette.secondary.main,
            '&:hover': {
                border: "1px solid " + theme.palette.secondary.dark + " !important",
                background: theme.palette.secondary.dark + " !important",
                color: '#fff',
            },
        },
        thirdary: {
            border: "1px solid " + theme.palette.thirdary.main,
            color: '#fff',
            background: theme.palette.thirdary.main,
            '&:hover': {
                border: "1px solid " + theme.palette.thirdary.dark + " !important",
                background: theme.palette.thirdary.dark + " !important",
                color: '#fff',
            },
        },
        neutral: {
            border: "1px solid " + theme.palette.inactive,
            color: '#fff',
            background: 'grey',
            '&:hover': {
                background: 'none !important',
                color: theme.palette.text.light,
            },
        },
        error: {
            border: "1px solid " + theme.palette.error.main,
            color: '#fff',
            background: theme.palette.error.main,
            '&:hover': {
                background: theme.palette.error.dark + " !important",
                color: '#fff',
            },
        },
        hoverPrimaryOnSecondary: {
            color: '#fff',
            border: "1px solid " + theme.palette.primary.main + " !important",
            '&:hover': {
                background: 'none !important',
                border: '1px solid #fff !important',
                color: '#fff !important',
            },
        },
        hoverPrimaryOnThirdary: {
            color: '#fff',
            border: "1px solid " + theme.palette.primary.main + " !important",
            '&:hover': {
                background: 'none !important',
                border: '1px solid #fff !important',
                color: '#fff !important',
            },
        },
        hoverPrimaryOnWhite: {
            color: '#fff',
            border: "1px solid " + theme.palette.primary.main + " !important",
            '&:hover': {
                background: 'none !important',
                color: theme.palette.primary.main + " !important",
            },
        },
        hoverPrimaryOnBlack: {
            color: '#fff',
            border: "1px solid " + theme.palette.primary.main,
            '&:hover': {
                background: 'none !important',
                color: '#fff !important',
            },
        },
        hoverSecondaryOnPrimary: {
            color: '#fff',
            background: theme.palette.secondary.main,
            border: "1px solid " + theme.palette.secondary.main,
            '&:hover': {
                border: '1px solid #fff',
                background: 'none !important',
                color: '#fff !important',
            },
        },
        hoverSecondaryOnThirdary: {
            color: '#fff',
            background: theme.palette.secondary.main,
            border: "1px solid " + theme.palette.secondary.main,
            '&:hover': {
                border: '1px solid #fff',
                background: 'none !important',
                color: '#fff !important',
            },
        },
        hoverSecondaryOnWhite: {
            color: '#fff',
            background: theme.palette.secondary.main,
            border: "1px solid " + theme.palette.secondary.main,
            '&:hover': {
                background: 'none !important',
                color: theme.palette.secondary.main + " !important",
            },
        },
        hoverSecondaryOnBlack: {
            color: '#fff',
            background: theme.palette.secondary.main,
            border: "1px solid " + theme.palette.secondary.main,
            '&:hover': {
                background: 'none !important',
                color: '#fff !important',
            },
        },
        hoverThirdaryOnPrimary: {
            color: '#fff',
            background: theme.palette.thirdary.main,
            border: "1px solid " + theme.palette.thirdary.main,
            '&:hover': {
                border: '1px solid #fff',
                background: 'none !important',
                color: '#fff !important',
            },
        },
        hoverThirdaryOnSecondary: {
            color: '#fff',
            background: theme.palette.thirdary.main,
            border: "1px solid " + theme.palette.thirdary.main + " !important",
            '&:hover': {
                border: '1px solid #fff !important',
                background: 'none !important',
                color: '#fff !important',
            },
        },
        hoverThirdaryOnWhite: {
            color: '#fff',
            background: theme.palette.thirdary.main,
            border: "1px solid " + theme.palette.thirdary.main + " !important",
            '&:hover': {
                background: 'none !important',
                color: theme.palette.thirdary.main + " !important",
            },
        },
        hoverThirdaryOnBlack: {
            color: '#fff',
            background: theme.palette.thirdary.main,
            border: "1px solid " + theme.palette.thirdary.main,
            '&:hover': {
                background: 'none !important',
                color: '#fff !important',
            },
        },
        hoverWhiteOnPrimary: {
            color: theme.palette.text.normal,
            background: '#fff',
            border: "1px solid " + theme.palette.primary.lighter,
            '&:hover': {
                border: '1px solid #fff',
                background: 'none !important',
                color: '#fff !important',
            },
        },
        hoverWhiteOnSecondary: {
            color: theme.palette.text.normal,
            background: '#fff',
            border: "1px solid " + theme.palette.secondary.lighter,
            '&:hover': {
                border: '1px solid #fff',
                background: 'none !important',
                color: '#fff !important',
            },
        },
        hoverWhiteOnThirdary: {
            color: theme.palette.text.normal,
            background: '#fff',
            border: "1px solid " + theme.palette.thirdary.lighter,
            '&:hover': {
                border: '1px solid #fff',
                background: 'none !important',
                color: '#fff !important',
            },
        },
        hoverWhiteOnBlack: {
            color: theme.palette.text.soft,
            background: '#fff',
            border: "1px solid " + theme.palette.borders.slightlyDark,
            '&:hover': {
                border: "1px solid " + theme.palette.borders.cloud + " !important",
                background: '#000 !important',
                color: '#fff !important',
            },
        },
        hoverBlackOnPrimary: {
            color: '#fff',
            background: '#000',
            border: '1px solid #000',
            '&:hover': {
                border: '1px solid #fff',
                background: 'none !important',
                color: '#fff !important',
            },
        },
        hoverBlackOnSecondary: {
            color: '#fff',
            background: '#000',
            border: '1px solid #000',
            '&:hover': {
                border: '1px solid #fff',
                background: 'none !important',
                color: '#fff !important',
            },
        },
        hoverBlackOnThirdary: {
            color: '#fff',
            background: '#000',
            border: '1px solid #000',
            '&:hover': {
                border: '1px solid #fff',
                background: 'none !important',
                color: '#fff !important',
            },
        },
        hoverBlackOnWhite: {
            color: '#fff',
            background: '#000',
            border: '1px solid #000',
            '&:hover': {
                border: "1px solid " + theme.palette.borders.dark + " !important",
                background: 'none !important',
                color: theme.palette.text.normal + " !important",
            },
        },
        hoverError: {
            '&:hover': {
                background: 'none !important',
                color: theme.palette.error.main + " !important",
            },
        },
        small: {
            fontSize: '0.65em',
        },
        medium: {
            fontSize: '0.8em',
        },
        large: (_a = {
                fontSize: '1.2em !important'
            },
            _a[theme.breakpoints.down('sm')] = {
                fontSize: '0.9em !important',
            },
            _a),
        xlarge: {
            fontSize: '1.1em',
            padding: '20px 45px',
        },
        disabled: {
            background: theme.palette.inactive + " !important",
            border: theme.palette.inactive + " !important",
            color: '#fff !important',
        },
        outlined: {
            background: 'none !important',
        },
        textPrimary: {
            color: theme.palette.primary.main + " !important",
        },
        textSecondary: {
            color: theme.palette.secondary.main + " !important",
        },
        textThirdary: {
            color: theme.palette.thirdary.main + " !important",
        },
        textNeutral: {
            color: theme.palette.text.soft + " !important",
        },
        textDanger: {
            color: theme.palette.error.main + " !important",
        },
        centerOnSmall: (_b = {},
            _b[theme.breakpoints.down('xs')] = {
                textAlign: 'center',
                display: 'block',
                margin: 'auto',
            },
            _b),
    });
});
var Button = function (_a) {
    var _b;
    var className = _a.className, children = _a.children, primary = _a.primary, secondary = _a.secondary, thirdary = _a.thirdary, neutral = _a.neutral, error = _a.error, red = _a.red, danger = _a.danger, _c = _a.hover, hover = _c === void 0 ? {} : _c, small = _a.small, medium = _a.medium, large = _a.large, xlarge = _a.xlarge, _d = _a.size, size = _d === void 0 ? 'medium' : _d, disabled = _a.disabled, outlined = _a.outlined, to = _a.to, textColor = _a.textColor, background = _a.background, overwriteClassName = _a.overwriteClassName, overWrittenClassNames = _a.overWrittenClassNames, centerOnSmall = _a.centerOnSmall, others = __rest(_a, ["className", "children", "primary", "secondary", "thirdary", "neutral", "error", "red", "danger", "hover", "small", "medium", "large", "xlarge", "size", "disabled", "outlined", "to", "textColor", "background", "overwriteClassName", "overWrittenClassNames", "centerOnSmall"]);
    var classes = useStyles();
    var muiSizes = ['small', 'medium', 'large'];
    var Wrapper = function (_a) {
        var children = _a.children;
        if (to)
            return React.createElement(Link, { to: to }, children);
        return React.createElement(React.Fragment, null, children);
    };
    var classNames = cx(classes.root, className, (_b = {},
        _b[classes.primary] = !!primary,
        _b[classes.secondary] = !!secondary,
        _b[classes.error] = !!error || !!red || !!danger,
        _b[classes.root] = !secondary,
        _b[classes.thirdary] = !!thirdary,
        _b[classes.neutral] = !!neutral ||
            (!primary &&
                !secondary &&
                !thirdary &&
                !error &&
                !outlined &&
                !Object.keys(hover).length),
        _b[classes.hoverPrimaryOnSecondary] = hover.primary === 'secondary',
        _b[classes.hoverPrimaryOnThirdary] = hover.primary === 'thirdary',
        _b[classes.hoverPrimaryOnWhite] = hover.primary === 'white',
        _b[classes.hoverPrimaryOnBlack] = hover.primary === 'black',
        _b[classes.hoverSecondaryOnPrimary] = hover.secondary === 'primary',
        _b[classes.hoverSecondaryOnThirdary] = hover.secondary === 'thirdary',
        _b[classes.hoverSecondaryOnBlack] = hover.secondary === 'black',
        _b[classes.hoverSecondaryOnWhite] = hover.secondary === 'white',
        _b[classes.hoverThirdaryOnPrimary] = hover.thirdary === 'primary',
        _b[classes.hoverThirdaryOnSecondary] = hover.thirdary === 'secondary',
        _b[classes.hoverThirdaryOnWhite] = hover.thirdary === 'white',
        _b[classes.hoverThirdaryOnBlack] = hover.thirdary === 'black',
        _b[classes.hoverWhiteOnPrimary] = hover.white === 'primary',
        _b[classes.hoverWhiteOnSecondary] = hover.white === 'secondary',
        _b[classes.hoverWhiteOnThirdary] = hover.white === 'thirdary',
        _b[classes.hoverWhiteOnBlack] = hover.white === 'black',
        _b[classes.hoverBlackOnPrimary] = hover.black === 'primary',
        _b[classes.hoverBlackOnSecondary] = hover.black === 'secondary',
        _b[classes.hoverBlackOnThirdary] = hover.black === 'thirdary',
        _b[classes.hoverBlackOnWhite] = hover.black === 'white',
        _b[classes.hoverError] = !!hover.red || !!hover.danger || !!hover.error,
        _b[classes.small] = !!small,
        _b[classes.medium] = !!medium,
        _b[classes.large] = !!large,
        _b[classes.xlarge] = !!xlarge,
        _b[classes.disabled] = disabled,
        _b[classes.outlined] = !!outlined,
        _b[classes.textPrimary] = textColor === 'primary',
        _b[classes.textSecondary] = (textColor === 'secondary' || !!outlined) &&
            (!!secondary || !!hover.secondary),
        _b[classes.textThirdary] = (textColor === 'thirdary' || !!outlined) &&
            (!!thirdary || !!hover.primary),
        _b[classes.textNeutral] = (textColor === 'neutral' || !!outlined) && !!neutral,
        _b[classes.textDanger] = (['error', 'red', 'danger'].includes(textColor || '') || !!outlined) &&
            (!!danger ||
                !!red ||
                !!error ||
                !!hover.danger ||
                !!hover.red ||
                !!hover.error),
        _b[classes.centerOnSmall] = !!centerOnSmall,
        _b));
    return (React.createElement(Wrapper, null,
        React.createElement(MaterialUIButton, __assign({ style: { background: background }, className: overwriteClassName ? overWrittenClassNames : classNames, variant: (!!outlined && 'outlined') ||
                // @ts-ignore
                (!!others.variant === 'outlined' && 'outlined') ||
                'contained', size: (muiSizes.includes(size) && size) ||
                (small ? 'small' : medium ? 'medium' : large ? 'large' : 'medium'), disabled: disabled }, others), children)));
};
export default Button;
//# sourceMappingURL=Button.js.map