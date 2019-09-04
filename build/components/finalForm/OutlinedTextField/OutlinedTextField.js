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
import { makeStyles } from '@material-ui/styles';
import MuiTextField from '@material-ui/core/TextField';
import cx from 'classnames';
import Typography from 'components/Typography';
var useStyles = makeStyles(function (theme) { return ({
    helperTextRoot: {
        color: theme.palette.text.soft,
    },
    select: {
        fontSize: '0.9rem !important',
    },
    marginRight: function (_a) {
        var wrapperProps = _a.wrapperProps;
        return wrapperProps && {
            '& fieldset': {
                marginRight: wrapperProps.marginRight,
            },
        };
    },
    input: {
        fontSize: '0.9rem',
    },
}); });
var FinalFormOutlinedTextField = function (props) {
    var _a;
    var input = props.input, meta = props.meta, inline = props.inline, className = props.className, _b = props.wrapperProps, wrapperProps = _b === void 0 ? {} : _b, _c = props.errorProps, errorProps = _c === void 0 ? {} : _c, _d = props.classes, classesProp = _d === void 0 ? {} : _d, 
    // textfield props
    _e = props.formHelperTextProps, 
    // textfield props
    formHelperTextProps = _e === void 0 ? {} : _e, _f = props.inputProps, inputProps = _f === void 0 ? {} : _f, _g = props.inputLabelProps, inputLabelProps = _g === void 0 ? {} : _g, 
    // select props
    _h = props.selectProps, 
    // select props
    selectProps = _h === void 0 ? {} : _h, otherProps = __rest(props, ["input", "meta", "inline", "className", "wrapperProps", "errorProps", "classes", "formHelperTextProps", "inputProps", "inputLabelProps", "selectProps"]);
    var classes = useStyles({ wrapperProps: wrapperProps });
    var marginRight = wrapperProps.marginRight, otherWrapperProps = __rest(wrapperProps, ["marginRight"]);
    var fieldProps = {};
    // If the caller wants this to be a select field, only pass in the select props
    //    to avoid spammy console errors
    if (otherProps.select) {
        fieldProps = {
            SelectProps: __assign(__assign({}, selectProps), { classes: __assign(__assign(__assign({}, classesProp), selectProps.classes), { select: cx(classes.select, className, selectProps.classes && selectProps.classes.select) }) }),
            inputProps: inputProps,
        };
    }
    // If the caller wants this to be a textfield, only pass in the textfield props
    else {
        fieldProps = {
            classes: __assign(__assign({}, classesProp), { root: cx(classesProp.root, className) }),
            InputProps: __assign(__assign({}, inputProps), { classes: __assign(__assign({}, inputProps.classes), { input: classes.input }) }),
            InputLabelProps: __assign({ shrink: true }, inputLabelProps),
            FormHelperTextProps: __assign(__assign({}, formHelperTextProps), { classes: {
                    root: cx(classes.helperTextRoot, formHelperTextProps.className, formHelperTextProps.classes
                        ? formHelperTextProps.classes.root
                        : undefined),
                } }),
        };
    }
    return (React.createElement("div", __assign({ style: {
            display: inline ? 'inline-block' : 'block',
            flexGrow: 1,
        } }, otherWrapperProps, { className: cx(wrapperProps.className, (_a = {},
            _a[classes.marginRight] = marginRight != undefined,
            _a)) }),
        React.createElement(MuiTextField, __assign({ margin: "dense" }, fieldProps, input, otherProps, { variant: "outlined" })),
        meta && meta.error && meta.touched && (React.createElement(Typography, __assign({ variant: "caption", error: true }, errorProps), meta.error))));
};
export default FinalFormOutlinedTextField;
//# sourceMappingURL=OutlinedTextField.js.map