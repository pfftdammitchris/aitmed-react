var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import React from 'react';
import { Field } from 'react-final-form';
import Flex from 'components/Flex';
import { states } from 'utils/info';
import { parsePhone } from 'utils/finalForm';
var RFA_ClaimsAdministrator = function (_a) {
    var name = _a.name, WrappedOutlinedTextField = _a.component;
    return (React.createElement(React.Fragment, null,
        React.createElement(Flex, null,
            React.createElement(Field, { label: "Company Name", name: name + ".companyName", component: WrappedOutlinedTextField, wrapperProps: { marginRight: 3 }, fullWidth: true }),
            React.createElement(Field, { label: "Contact Name", name: name + ".contactName", component: WrappedOutlinedTextField, fullWidth: true })),
        React.createElement(Flex, null,
            React.createElement(Field, { label: "Address", name: name + ".address", component: WrappedOutlinedTextField, wrapperProps: { marginRight: 3 }, fullWidth: true }),
            React.createElement(Field, { label: "City", name: name + ".city", component: WrappedOutlinedTextField, wrapperProps: { marginRight: 3 }, fullWidth: true }),
            React.createElement(Field, { name: name + ".state", component: WrappedOutlinedTextField, selectProps: { SelectProps: { native: true } }, select: true, fullWidth: true }, __spreadArrays(['Select State'], states).map(function (state) { return (React.createElement("option", { key: "select_" + state, value: state }, state)); }))),
        React.createElement(Flex, null,
            React.createElement(Field, { label: "Zip Code", name: name + ".zip", component: WrappedOutlinedTextField, wrapperProps: { marginRight: 3 }, fullWidth: true }),
            React.createElement(Field, { label: "Phone", name: name + ".phone", parse: parsePhone, component: WrappedOutlinedTextField, wrapperProps: { marginRight: 3 }, fullWidth: true }),
            React.createElement(Field, { label: "Fax", parse: parsePhone, name: name + ".fax", component: WrappedOutlinedTextField, fullWidth: true })),
        React.createElement(Field, { type: "email", label: "Email", name: name + ".email", component: WrappedOutlinedTextField, fullWidth: true })));
};
export default RFA_ClaimsAdministrator;
//# sourceMappingURL=ClaimsAdministrator.js.map