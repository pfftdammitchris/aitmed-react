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
import { Field } from 'react-final-form';
import { makeStyles } from '@material-ui/styles';
import { parsePhone, parseSSN } from 'utils/finalForm';
import Flex from 'components/Flex';
import OutlinedTextField from 'components/finalForm/OutlinedTextField';
var useStyles = makeStyles(function (theme) {
    var _a;
    return ({
        root: {},
        textFieldRoot: (_a = {},
            _a[theme.breakpoints.down('xs')] = {
                width: '100%',
            },
            _a),
    });
});
var PatientInfo = function (_a) {
    var name = _a.name, genders = _a.genders, props = __rest(_a, ["name", "genders"]);
    var classes = useStyles(props);
    var WrappedTextField = function (props) { return (React.createElement(OutlinedTextField, __assign({ classes: { root: classes.textFieldRoot } }, props))); };
    return (React.createElement(React.Fragment, null,
        React.createElement(Flex, null,
            React.createElement(Field, { component: WrappedTextField, name: name + ".firstName", label: "First Name", wrapperProps: { marginRight: 3 }, fullWidth: true }),
            React.createElement(Field, { component: WrappedTextField, name: name + ".middleName", label: "Middle Name", wrapperProps: { marginRight: 3 }, fullWidth: true }),
            React.createElement(Field, { component: WrappedTextField, name: name + ".lastName", label: "Last Name", fullWidth: true })),
        React.createElement(Flex, { xsBlock: true },
            React.createElement(Field, { component: WrappedTextField, name: name + ".sex", wrapperProps: { marginRight: 3 }, selectProps: { native: true }, select: true, fullWidth: true }, __spreadArrays(['Select Gender'], genders).map(function (gender) { return (React.createElement("option", { key: "gender_" + gender, value: gender }, gender)); })),
            React.createElement(Field, { type: "date", component: WrappedTextField, name: name + ".dob", label: "Date of Birth", wrapperProps: { marginRight: 3 }, fullWidth: true }),
            React.createElement(Field, { component: WrappedTextField, name: name + ".address", label: "Address", fullWidth: true })),
        React.createElement(Flex, { xsBlock: true },
            React.createElement(Field, { component: WrappedTextField, name: name + ".occupation", label: "Occupation", wrapperProps: { marginRight: 3 }, fullWidth: true }),
            React.createElement(Field, { component: WrappedTextField, name: name + ".socialSecurity", parse: parseSSN, label: "Social Security No.", wrapperProps: { marginRight: 3 }, fullWidth: true }),
            React.createElement(Field, { component: WrappedTextField, name: name + ".phone", parse: parsePhone, label: "Phone", fullWidth: true }))));
};
export default PatientInfo;
//# sourceMappingURL=PatientInfo.js.map