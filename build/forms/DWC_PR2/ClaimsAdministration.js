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
import OutlinedTextField from 'components/finalForm/OutlinedTextField';
import Flex from 'components/Flex';
import { states } from 'utils/info';
import { formatOnlyNumbers, parsePhone } from 'utils/finalForm';
var useStyles = makeStyles(function (theme) {
    var _a;
    return ({
        textFieldRoot: (_a = {},
            _a[theme.breakpoints.down('xs')] = {
                width: '100% !important',
            },
            _a),
    });
});
var ClaimsAdministration = function (_a) {
    var name = _a.name, props = __rest(_a, ["name"]);
    var classes = useStyles(props);
    var WrappedTextField = function (props) { return (React.createElement(OutlinedTextField, __assign({ classes: {
            root: classes.textFieldRoot,
        } }, props))); };
    return (React.createElement(React.Fragment, null,
        React.createElement(Flex, { xsBlock: true },
            React.createElement(Field, { name: name + ".name", component: WrappedTextField, label: "Name", wrapperProps: { marginRight: 3 }, fullWidth: true }),
            React.createElement(Field, { name: name + ".claimNumber", component: WrappedTextField, label: "Claim Number", wrapperProps: { marginRight: 3 }, fullWidth: true }),
            React.createElement(Field, { name: name + ".fax", component: WrappedTextField, parse: parsePhone, label: "Fax", wrapperProps: { marginRight: 3 }, fullWidth: true }),
            React.createElement(Field, { name: name + ".address", component: WrappedTextField, label: "Address", wrapperProps: { marginRight: 3 }, fullWidth: true })),
        React.createElement(Flex, { xsBlock: true },
            React.createElement(Field, { name: name + ".city", component: WrappedTextField, label: "City", wrapperProps: { marginRight: 3 }, fullWidth: true }),
            React.createElement(Field, { name: name + ".zip", component: WrappedTextField, parse: formatOnlyNumbers, label: "Zip", wrapperProps: { marginRight: 3 }, fullWidth: true }),
            React.createElement(Field, { name: name + ".phone", component: WrappedTextField, parse: parsePhone, label: "Phone", wrapperProps: { marginRight: 3 }, fullWidth: true }),
            React.createElement(Field, { name: name + ".state", component: WrappedTextField, selectProps: { native: true }, select: true, fullWidth: true }, __spreadArrays(['Select State'], states).map(function (state, index) { return (React.createElement("option", { key: "state" + index, value: state }, state)); })))));
};
export default ClaimsAdministration;
//# sourceMappingURL=ClaimsAdministration.js.map