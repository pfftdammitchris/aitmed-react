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
import { Form } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import Button from 'components/Button';
import Divider from 'components/Divider';
import EmployeeFields from './Employee';
import EmployerFields from './Employer';
var useStyles = makeStyles({
    root: {},
    textFieldRoot: {},
    actions: {
        padding: '12px 0',
    },
});
var DWC_1 = function (_a) {
    var initialValues = _a.initialValues, onSubmit = _a.onSubmit, _b = _a.states, states = _b === void 0 ? [] : _b, props = __rest(_a, ["initialValues", "onSubmit", "states"]);
    var classes = useStyles(undefined);
    var employeeSignatureRef = React.useRef();
    var employerSignatureRef = React.createRef();
    return (React.createElement(Form, __assign({ keepDirtyOnReinitialize: true, onSubmit: onSubmit, subscription: { submitting: true }, 
        // @ts-ignore
        mutators: arrayMutators, render: function (_a) {
            var handleSubmit = _a.handleSubmit, submitting = _a.submitting;
            return (React.createElement("form", { onSubmit: handleSubmit, className: classes.root },
                React.createElement(EmployeeFields, { name: "employee", signatureRef: employeeSignatureRef, states: states }),
                React.createElement(Divider, null),
                React.createElement(EmployerFields, { name: "employer", signatureRef: employerSignatureRef }),
                React.createElement("div", { className: classes.actions },
                    React.createElement(Button, { type: "submit", hover: { secondary: 'white' }, disabled: submitting, secondary: true }, "Submit"))));
        }, initialValues: initialValues }, props)));
};
export default DWC_1;
//# sourceMappingURL=DWC_1.js.map