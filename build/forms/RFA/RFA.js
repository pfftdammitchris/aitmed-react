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
import { Form, Field } from 'react-final-form';
import createDecorator from 'final-form-focus';
import { format } from 'date-fns';
import Typography from 'components/Typography';
import Checkbox from 'components/Checkbox';
import Divider from 'components/Divider';
import OutlinedTextField from 'components/finalForm/OutlinedTextField';
import Button from 'components/Button';
import SignatureCanvas from 'components/finalForm/SignatureCanvas';
import Header from './Header';
import Subheader from './Subheader';
import EmployeeFields from './Employee';
import PhysicianFields from './Physician';
import ClaimsAdministratorFields from './ClaimsAdministrator';
import UROFields from './URO';
var useStyles = makeStyles(function (theme) {
    var _a;
    return ({
        root: {
            overflowX: 'hidden',
        },
        actions: {
            padding: '12px 0',
        },
        checkboxRoot: {
            color: '#333',
            transform: 'scale(0.9)',
            padding: 0,
            marginLeft: 12,
        },
        checkboxLabel: (_a = {
                fontSize: '0.72rem',
                marginLeft: 0,
                marginRight: 11,
                userSelect: 'none'
            },
            _a[theme.breakpoints.down('xs')] = {
                fontSize: '0.67rem',
            },
            _a),
    });
});
var focusOnError = createDecorator();
var RFA = function (_a) {
    var _b = _a.initialValues, initialValues = _b === void 0 ? {} : _b, onSubmit = _a.onSubmit, _c = _a.specialties, specialties = _c === void 0 ? [] : _c, props = __rest(_a, ["initialValues", "onSubmit", "specialties"]);
    var signatureRef = React.useRef();
    var uroSignatureRef = React.useRef();
    var classes = useStyles(props);
    var WrappedOutlinedTextField = function (args) { return (React.createElement(OutlinedTextField, __assign({ classes: { root: classes.textFieldRoot } }, args))); };
    var WrappedCheckbox = function (_a) {
        var input = _a.input, meta = _a.meta, rest = __rest(_a, ["input", "meta"]);
        return (React.createElement(Checkbox, __assign({ classes: { label: classes.checkboxLabel }, classNames: {
                root: classes.checkboxRoot,
            } }, input, rest)));
    };
    var todaysDate = format(new Date(), 'yyyy-MM-dd');
    return (React.createElement(Form, { keepDirtyOnReinitialize: true, onSubmit: onSubmit, subscription: { submitting: true }, decorators: [focusOnError], initialValues: __assign(__assign({}, initialValues), { physicianSignature: __assign({ date: todaysDate }, initialValues.physicianSignature) }), render: function (_a) {
            var handleSubmit = _a.handleSubmit;
            return (React.createElement("form", { onSubmit: handleSubmit, className: classes.root },
                React.createElement(Header, null),
                React.createElement(Subheader, null),
                React.createElement(Divider, null),
                React.createElement(Field, { component: WrappedCheckbox, type: "checkbox", label: "New Request", name: "newRequest" }),
                React.createElement(Field, { component: WrappedCheckbox, type: "checkbox", label: "Expedited Review: Check box if employee faces an imminent and serious threat to his or her health", name: "expeditedReview" }),
                React.createElement(Field, { component: WrappedCheckbox, type: "checkbox", label: " Check box if request is a written confirmation of a prior oral request", name: "confirmationPriorOralRequest" }),
                React.createElement(Field, { component: WrappedCheckbox, type: "checkbox", label: "Resubmission \u2013 Change in Material Facts", name: "resubmission" }),
                React.createElement(Divider, null),
                React.createElement(Typography, { variant: "h6", gutterBottom: true, paragraph: true }, "Employee Information"),
                React.createElement(EmployeeFields, { name: "employee", component: WrappedOutlinedTextField }),
                React.createElement(Divider, null),
                React.createElement(Typography, { variant: "h6", gutterBottom: true, paragraph: true }, "Requesting Physician Information"),
                React.createElement(PhysicianFields, { name: "physician", component: WrappedOutlinedTextField, specialties: specialties }),
                React.createElement(Divider, null),
                React.createElement(Typography, { variant: "h6", gutterBottom: true, paragraph: true }, "Claims Administrator Information"),
                React.createElement(ClaimsAdministratorFields, { name: "claimsAdministrator", component: WrappedOutlinedTextField }),
                React.createElement(Divider, null),
                React.createElement(Typography, { variant: "h6", gutterBottom: true, paragraph: true }, "Requested Treatment"),
                React.createElement(Typography, { variant: "subtitle2", gutterBottom: true, paragraph: true }, "List each specific requested medical services, goods, or items in the below space or indicate the specific page number(s) of the attached medical report on which the requested treatment can be found. Up to five (5) procedures may be entered."),
                React.createElement(Field
                // @ts-ignore
                , { 
                    // @ts-ignore
                    component: SignatureCanvas, name: "physicianSignature.signed", signatureLabel: "Requesting Physician Signature", signatureRef: signatureRef }),
                React.createElement("br", null),
                React.createElement(Field, { name: "physicianSignature.date", render: function (_a) {
                        var input = _a.input;
                        return (React.createElement(WrappedOutlinedTextField, { label: "Date", value: format(new Date(input.value), 'MM-dd-yyyy'), disabled: true }));
                    } }),
                React.createElement(Divider, null),
                React.createElement(Typography, { variant: "h6", gutterBottom: true, paragraph: true }, "Claims Administrator/Utilization Review Organization (URO) Response"),
                React.createElement(UROFields, { name: "uroResponse", textfield: WrappedOutlinedTextField, checkbox: WrappedCheckbox, signatureRef: uroSignatureRef }),
                React.createElement("div", { className: classes.actions },
                    React.createElement(Button, { type: "submit", hover: { secondary: 'white' }, 
                        // disabled={submitting}
                        secondary: true }, "Submit"))));
        } }));
};
export default RFA;
//# sourceMappingURL=RFA.js.map