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
import { formatOnlyNumbers, parsePhone } from 'utils/finalForm';
var RFA_Physician = function (_a) {
    var name = _a.name, WrappedOutlinedTextField = _a.component, _b = _a.specialties, specialties = _b === void 0 ? [] : _b;
    return (React.createElement(React.Fragment, null,
        React.createElement(Flex, { xsBlock: true },
            React.createElement(Field, { label: "Name", name: name + ".name", component: WrappedOutlinedTextField, wrapperProps: { marginRight: 3 }, fullWidth: true }),
            React.createElement(Field, { label: "Practice Name", name: name + ".practiceName", component: WrappedOutlinedTextField, wrapperProps: { marginRight: 3 }, fullWidth: true }),
            React.createElement(Field, { label: "Contact Name", name: name + ".contactName", component: WrappedOutlinedTextField, fullWidth: true })),
        React.createElement(Flex, { spaceBetween: true },
            React.createElement(Field, { label: "Address", name: name + ".address", component: WrappedOutlinedTextField, wrapperProps: { marginRight: 3 }, fullWidth: true }),
            React.createElement(Field, { label: "City", name: name + ".city", component: WrappedOutlinedTextField, wrapperProps: { marginRight: 3 }, fullWidth: true }),
            React.createElement(Field, { name: name + ".state", component: WrappedOutlinedTextField, selectProps: { SelectProps: { native: true } }, select: true, fullWidth: true }, __spreadArrays(['Select State'], states).map(function (state) { return (React.createElement("option", { key: "select_" + state, value: state }, state)); }))),
        React.createElement(Flex, { spaceBetween: true },
            React.createElement(Field, { label: "Zip Code", name: name + ".zip", component: WrappedOutlinedTextField, wrapperProps: { marginRight: 3 }, fullWidth: true }),
            React.createElement(Field, { label: "Phone", name: name + ".phone", parse: parsePhone, component: WrappedOutlinedTextField, wrapperProps: { marginRight: 3 }, fullWidth: true }),
            React.createElement(Field, { label: "Fax", name: name + ".fax", parse: parsePhone, component: WrappedOutlinedTextField, fullWidth: true })),
        React.createElement(Flex, { spaceBetween: true },
            React.createElement(Field, { name: name + ".specialty", component: WrappedOutlinedTextField, wrapperProps: { marginRight: 3 }, selectProps: { SelectProps: { native: true } }, select: true, fullWidth: true }, __spreadArrays(['Select Specialty'], specialties).map(function (specialty) { return (React.createElement("option", { key: "select_" + specialty, value: specialty }, specialty)); })),
            React.createElement(Field, { format: formatOnlyNumbers, label: "NPI", name: name + ".NPI", component: WrappedOutlinedTextField, fullWidth: true })),
        React.createElement(Field, { type: "email", label: "Email", name: name + ".email", component: WrappedOutlinedTextField, fullWidth: true })));
};
export default RFA_Physician;
//# sourceMappingURL=Physician.js.map