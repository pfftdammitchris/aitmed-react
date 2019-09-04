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
import FormGroup from '@material-ui/core/FormGroup';
import TextField from '@material-ui/core/TextField';
import get from 'lodash/get';
import has from 'lodash/has';
import Flex from 'components/Flex';
import Checkbox from 'components/Checkbox';
import Typography from 'components/Typography';
import useObjectizedCheckboxes from 'hooks/finalForm/useObjectizedCheckboxes';
var useStyles = makeStyles(function (theme) {
    var _a;
    return ({
        root: {},
        checkboxRoot: {
            color: '#333',
            transform: 'scale(0.9)',
            padding: 3,
        },
        checkboxLabel: (_a = {
                fontSize: '0.72rem',
                marginLeft: 0,
                marginRight: 11,
                userSelect: 'none'
            },
            _a[theme.breakpoints.down('xs')] = {
                marginRight: 0,
            },
            _a),
        textField: {
            fontSize: '0.72rem !important',
        },
    });
});
var EnhancedTextField = function (props) {
    var classes = useStyles(props);
    return (React.createElement(TextField, __assign({ margin: "dense" }, props, { classes: __assign({ root: classes.textField }, props.classes) })));
};
var WorkStatusCheckboxes = function (_a) {
    var _b = _a.input, input = _b === void 0 ? {} : _b, meta = _a.meta, rest = __rest(_a, ["input", "meta"]);
    var classes = useStyles(rest);
    var _c = useObjectizedCheckboxes({
        input: input,
    }), onChange = _c.onChange, getTextFieldProps = _c.getTextFieldProps;
    var checkboxProps = {
        classes: {
            label: classes.checkboxLabel,
        },
        classNames: {
            root: classes.checkboxRoot,
        },
    };
    return (React.createElement(FormGroup, __assign({ className: classes.root, row: true }, rest),
        React.createElement(Flex, { spaceBetween: true },
            React.createElement(Checkbox, __assign({ label: "Remain off-work until", value: input.value && get(input.value, input.name + ".remainOffWorkUntil"), onChange: onChange('remainOffWorkUntil'), checked: !!input.value && has(input.value, 'remainOffWorkUntil') }, checkboxProps)),
            React.createElement(EnhancedTextField, __assign({}, getTextFieldProps({ name: 'remainOffWorkUntil' })))),
        React.createElement("div", null,
            React.createElement(Checkbox, __assign({ label: React.createElement(Flex, { xsBlock: true },
                    React.createElement(Flex, null,
                        React.createElement("span", { style: { minWidth: 150 } }, "Return to modified work on"),
                        "\u00A0",
                        React.createElement(EnhancedTextField, __assign({}, getTextFieldProps({ name: 'returnToModifiedWork.on' })))),
                    "with the following limitations or restrictions:"), value: input.value &&
                    get(input.value, input.name + ".returnToModifiedWork"), onChange: onChange('returnToModifiedWork'), checked: !!input.value && has(input.value, 'returnToModifiedWork') }, checkboxProps)),
            React.createElement(Typography, { variant: "body2" }, "(List all specific restrictions re: standing, sitting, bending, use of hands, etc.)"),
            React.createElement(EnhancedTextField, __assign({ fullWidth: true }, getTextFieldProps({
                name: 'returnToModifiedWork.limitations',
            })))),
        React.createElement(Checkbox, __assign({ label: React.createElement(Flex, { xsBlock: true },
                React.createElement(Flex, null,
                    React.createElement("span", { style: { minWidth: 120 } }, "Return to full duty on"),
                    React.createElement(EnhancedTextField, __assign({}, getTextFieldProps({ name: 'returnToFullDuty.on' })))),
                "with no limitations or restrictions."), value: input.value && get(input.value, input.name + ".returnToFullDuty"), onChange: onChange('returnToFullDuty'), checked: !!input.value && has(input.value, 'returnToFullDuty') }, checkboxProps))));
};
export default WorkStatusCheckboxes;
//# sourceMappingURL=WorkStatusCheckboxes.js.map