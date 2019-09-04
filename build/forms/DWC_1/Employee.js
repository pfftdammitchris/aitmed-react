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
import { makeStyles } from '@material-ui/styles';
import { Field } from 'react-final-form';
import format from 'date-fns/format';
import { parseSSN } from 'utils/finalForm';
import Checkbox from 'components/Checkbox';
import SignatureCanvas from 'components/finalForm/SignatureCanvas';
import Flex from 'components/Flex';
import OutlinedTextField from 'components/finalForm/OutlinedTextField';
import Typography from 'components/Typography';
var useStyles = makeStyles(function (theme) {
    var _a, _b;
    return ({
        spaced: {
            '& fieldset': {
                marginRight: 2,
            },
        },
        checkboxRoot: (_a = {
                color: '#333',
                transform: 'scale(0.9)',
                padding: 3
            },
            _a[theme.breakpoints.down('xs')] = {
                marginLeft: 8,
            },
            _a),
        checkboxLabel: (_b = {
                fontSize: '0.72rem',
                marginLeft: 0,
                marginRight: 11,
                userSelect: 'none'
            },
            _b[theme.breakpoints.down('xs')] = {
                fontSize: '0.67rem',
            },
            _b),
    });
});
var DWC_1_Employee = function (_a) {
    var name = _a.name, signatureRef = _a.signatureRef, _b = _a.states, states = _b === void 0 ? [] : _b, rest = __rest(_a, ["name", "signatureRef", "states"]);
    var classes = useStyles(rest);
    return (React.createElement(React.Fragment, null,
        React.createElement(Typography, { variant: "h6", gutterBottom: true }, "Employee"),
        React.createElement(Flex, null,
            React.createElement(Field, { label: "Name", name: name + ".name", component: OutlinedTextField, wrapperProps: { marginRight: 3 }, fullWidth: true }),
            React.createElement(Field, { type: "date", label: "Today's Date", name: name + ".date", fullWidth: true, render: function (_a) {
                    var input = _a.input, meta = _a.meta, rest = __rest(_a, ["input", "meta"]);
                    return (React.createElement(OutlinedTextField, __assign({}, input, rest, { value: format(new Date(), 'yyyy-MM-dd') })));
                } })),
        React.createElement(Field, { label: "Home Address", name: name + ".address", component: OutlinedTextField, fullWidth: true }),
        React.createElement(Flex, null,
            React.createElement(Field, { label: "City", name: name + ".city", component: OutlinedTextField, fullWidth: true, wrapperProps: { marginRight: 3 } }),
            React.createElement(Field, { label: "Zip Code", name: name + ".zip", component: OutlinedTextField, wrapperProps: { marginRight: 3 }, fullWidth: true }),
            React.createElement(Field, { name: name + ".state", component: OutlinedTextField, selectProps: { native: true }, select: true, fullWidth: true }, __spreadArrays(['Select State'], states).map(function (state, index) { return (React.createElement("option", { key: "state" + index, value: state }, state)); }))),
        React.createElement(Flex, null,
            React.createElement(Field, { type: "date", label: "Date of Injury", name: name + ".injury.date", component: OutlinedTextField, wrapperProps: { marginRight: 3 }, fullWidth: true }),
            React.createElement(Field, { type: "time", label: "Time of Injury", name: name + ".injury.time", component: OutlinedTextField, fullWidth: true })),
        React.createElement(Field, { label: "Address Injury Occurred", name: name + ".injury.address", component: OutlinedTextField, fullWidth: true }),
        React.createElement(Field, { label: "Description of Injury", name: name + ".injury.description", component: OutlinedTextField, fullWidth: true }),
        React.createElement(Field, { label: "Social Security No.", name: name + ".ssn", component: OutlinedTextField, parse: parseSSN, fullWidth: true }),
        React.createElement(Field, { type: "email", label: "Email", name: name + ".email", component: OutlinedTextField, fullWidth: true }),
        React.createElement("div", { style: { padding: '10px 5px' } },
            React.createElement(Field, { name: name + ".receiveClaimNoticesByEmail", type: "checkbox", render: function (_a) {
                    var input = _a.input, rest = __rest(_a, ["input"]);
                    return (React.createElement(Checkbox, __assign({ classes: {
                            label: classes.checkboxLabel,
                        }, classNames: {
                            root: classes.checkboxRoot,
                        }, label: "Check this box if you agree to receive notices about your claim by email only" }, input, rest)));
                } })),
        React.createElement(Field
        // @ts-ignore
        , { 
            // @ts-ignore
            component: SignatureCanvas, name: name + ".signature", signatureLabel: "Patient Signature", signatureRef: signatureRef })));
};
export default DWC_1_Employee;
//# sourceMappingURL=Employee.js.map