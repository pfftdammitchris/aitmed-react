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
import { Form, Field } from 'react-final-form';
import { FieldArray } from 'react-final-form-arrays';
import arrayMutators from 'final-form-arrays';
import MuiTextField from '@material-ui/core/TextField';
import format from 'date-fns/format';
import { parsePhone } from 'utils/finalForm';
import Button from 'components/Button';
import Divider from 'components/Divider';
import Flex from 'components/Flex';
import Typography from 'components/Typography';
import OutlinedTextField from 'components/finalForm/OutlinedTextField';
import SignatureCanvas from 'components/finalForm/SignatureCanvas';
import ICD10 from 'modules/finalForm/ICD10';
import Header from './Header';
import ReasonsForForm from './ReasonsForForm';
import PatientInfo from './PatientInfo';
import ClaimsAdministration from './ClaimsAdministration';
import WorkStatusCheckboxes from './WorkStatusCheckboxes';
var useStyles = makeStyles(function (theme) {
    var _a;
    return ({
        root: {},
        textFieldRoot: (_a = {},
            _a[theme.breakpoints.down('xs')] = {
                width: '100% !important',
            },
            _a),
        actions: {
            padding: '12px 0',
        },
    });
});
var Label = function (_a) {
    var children = _a.children, rest = __rest(_a, ["children"]);
    return (React.createElement(Typography, __assign({ variant: "overline", fontWeight: 700 }, rest), children));
};
var PR2 = function (_a) {
    var initialValues = _a.initialValues, onSubmit = _a.onSubmit, _b = _a.genders, genders = _b === void 0 ? [] : _b, _c = _a.specialties, specialties = _c === void 0 ? [] : _c, props = __rest(_a, ["initialValues", "onSubmit", "genders", "specialties"]);
    var classes = useStyles(undefined);
    var signatureRef = React.createRef();
    var TextField = function (props) { return (React.createElement(MuiTextField, __assign({ className: classes.textFieldRoot, margin: "dense", variant: "outlined", fullWidth: true }, props))); };
    var WrappedOutlinedTextField = function (props) { return (React.createElement(OutlinedTextField, __assign({ className: classes.textFieldRoot }, props))); };
    // Extracted these fields outside since TS was giving a useless component prop error
    var workStatusForPatient = (
    // @ts-ignore
    React.createElement(Field, { name: "workStatusForPatient", component: WorkStatusCheckboxes }));
    var signatureCanvas = (React.createElement(Field, { component: SignatureCanvas, name: "signature", signatureRef: signatureRef }));
    return (React.createElement(Form, __assign({ keepDirtyOnReinitialize: true, onSubmit: onSubmit, subscription: { submitting: true }, 
        // @ts-ignore
        mutators: arrayMutators, render: function (_a) {
            var handleSubmit = _a.handleSubmit;
            return (React.createElement("form", { onSubmit: handleSubmit, className: classes.root },
                React.createElement(Header, null),
                React.createElement(Divider, null),
                React.createElement(Typography, { variant: "body2" }, "Check the box(es) which indicate why you are submitting a report at this time. If the patient is \u201CPermanent and Stationary\u201D (i.e., has reached maximum medical improvement), do not use this form. You may use DWC Form PR-3 or IMC Form 81556."),
                React.createElement(Divider, { margin: "10px auto" }),
                React.createElement(Field, { name: "reasonsForForm", 
                    // @ts-ignore
                    component: ReasonsForForm, withTextfields: ['infoRequestedBy', 'other'] }),
                React.createElement(Divider, null),
                React.createElement(Label, null, "Patient:"),
                React.createElement(PatientInfo, { name: "patientInfo", genders: genders }),
                React.createElement("br", null),
                React.createElement(Label, null, "Claims Administration:"),
                React.createElement(ClaimsAdministration, { name: "claimsAdministration" }),
                React.createElement("br", null),
                React.createElement(Typography, { gutterBottom: true, paragraph: true, italic: true }, "The information below must be provided. You may use this form or you may substitute or append a narrative report."),
                React.createElement(Label, null, "Subjective Complaints:"),
                React.createElement(Field, { name: "subjectiveComplaints", component: OutlinedTextField, rows: 5, rowsMax: 10, multiline: true, fullWidth: true }),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement(Label, null,
                    "Objective Findings:",
                    React.createElement("br", null),
                    React.createElement(Typography, { variant: "caption" }, "(Include significant physical examination, laboratory, imaging, or other diagnostic findings.)")),
                React.createElement(Field, { name: "objectiveFindings", component: WrappedOutlinedTextField, rows: 5, rowsMax: 10, multiline: true, fullWidth: true }),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement(Label, null, "Diagnoses:"),
                React.createElement(FieldArray, { component: ICD10, name: "diagnoses" }),
                React.createElement(Divider, null),
                React.createElement(Typography, { variant: "body1", gutterBottom: true, paragraph: true },
                    React.createElement("b", null, "Treatment Plan"),
                    ": (Include treatment rendered to date. List methods, frequency and duration of planned treatment(s). Specify consultation/referral, surgery, and hospitalization.",
                    ' ',
                    React.createElement("strong", null, "Identify each physician and non-physician provider"),
                    ". Specify type, frequency and duration of physical medicine services (e.g., physical therapy, manipulation, acupuncture). Use of CPT codes is encouraged. Have there been any ",
                    React.createElement("strong", null, "changes"),
                    " in treatment plan? If so, why?"),
                React.createElement(Field, { name: "treatmentPlan", component: OutlinedTextField, rows: 5, rowsMax: 10, multiline: true, fullWidth: true }),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement(Label, null, "Work Status:"),
                workStatusForPatient,
                React.createElement(Divider, null),
                React.createElement(Flex, { spaceBetween: true },
                    React.createElement(Typography, { variant: "caption" }, "Primary Treating Physician: (Original signature, do not stamp)"),
                    React.createElement(Field, { name: "dateOfExam", type: "date", render: function (_a) {
                            var input = _a.input, meta = _a.meta, rest = __rest(_a, ["input", "meta"]);
                            return (React.createElement(TextField, __assign({ helperText: "Date of Exam", FormHelperTextProps: { style: { color: '#333' } } }, input, rest)));
                        } })),
                React.createElement(Divider, null),
                React.createElement(Typography, { variant: "caption" }, "I declare under penalty of perjury that this report is true and correct to the best of my knowledge and that I have not violated Labor Code \u00A7 139.3."),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement(Flex, { xsBlock: true, spaceBetween: true },
                    React.createElement(Field, { label: "California License No.", name: "licenseNumber", component: WrappedOutlinedTextField, wrapperProps: { marginRight: 3 }, fullWidth: true }),
                    React.createElement(Field, { label: "Phone", name: "phone", parse: parsePhone, component: WrappedOutlinedTextField, fullWidth: true })),
                React.createElement(Flex, { xsBlock: true, spaceBetween: true },
                    React.createElement(Field, { type: "date", label: "Executed At", name: "executedAt", component: WrappedOutlinedTextField, wrapperProps: { marginRight: 3 }, fullWidth: true }),
                    React.createElement(Field, { type: "date", name: "date", label: "Date", fullWidth: true, render: function (_a) {
                            var input = _a.input, meta = _a.meta, rest = __rest(_a, ["input", "meta"]);
                            return (React.createElement(WrappedOutlinedTextField, __assign({}, input, rest, { value: format(new Date(), 'yyyy-MM-dd') })));
                        } })),
                React.createElement(Flex, { xsBlock: true, spaceBetween: true },
                    React.createElement(Field, { label: "Name", name: "name", component: WrappedOutlinedTextField, wrapperProps: { marginRight: 3 }, fullWidth: true }),
                    React.createElement(Field, { name: "specialty", component: WrappedOutlinedTextField, selectProps: { native: true }, select: true, fullWidth: true }, __spreadArrays(['Select Specialty'], specialties).map(function (specialty) { return (React.createElement("option", { key: "specialty_" + specialty, value: specialty }, specialty)); }))),
                React.createElement(Flex, { xsBlock: true, spaceBetween: true },
                    React.createElement(Field, { label: "Address", name: "address", component: WrappedOutlinedTextField, fullWidth: true })),
                React.createElement(Divider, null),
                React.createElement(Flex, null,
                    React.createElement(Typography, { variant: "body2" }, "Next report due no later than: \u00A0\u00A0"),
                    React.createElement(Field, { name: "nextReportDueNoLaterThan", type: "date", render: function (_a) {
                            var input = _a.input, meta = _a.meta, rest = __rest(_a, ["input", "meta"]);
                            return (React.createElement(MuiTextField, __assign({}, input, rest)));
                        } })),
                React.createElement(Divider, null),
                signatureCanvas,
                React.createElement("div", { className: classes.actions },
                    React.createElement(Button, { type: "submit", hover: { secondary: 'white' }, 
                        // disabled={submitting}
                        secondary: true }, "Submit"))));
        }, initialValues: __assign({ reasonsForForm: {
            // periodicReport: '',
            // changeInTreatmentPlan: '',
            // discharged: '',
            // changeInWorkStatus: '',
            // referralOrConsultation: '',
            // infoRequestedBy: '',
            // changeInPatientsCondition: '',
            // surgeryOrHospitalization: '',
            // other: '',
            }, 
            // patientInfo: {
            //   lastName: '',
            //   firstName: '',
            //   middleName: '',
            //   sex: '',
            //   dob: '',
            //   address: '',
            //   city: '',
            //   state: '',
            //   zip: '',
            //   occupation: '',
            //   socialSecurity: '',
            //   phone: '',
            // },
            // claimsAdministration: {
            //   name: '',
            //   claimNumber: '',
            //   address: '',
            //   city: '',
            //   state: '',
            //   zip: '',
            //   phone: '',
            //   fax: '',
            // },
            // subjectiveComplaints: '',
            // objectiveFindings: '',
            // diagnoses: [
            // {
            //   diagnose: '',
            //   icd9: '',
            // },
            // {
            //   diagnose: '',
            //   icd9: '',
            // },
            // {
            //   diagnose: '',
            //   icd9: '',
            // },
            // ],
            // treatmentPlan: '',
            workStatusForPatient: {
            // remainOffWorkUntil: '',
            // returnToModifiedWork: {
            //   on: '',
            //   limitations: '',
            // },
            // returnToFullDuty: {
            //   on: '',
            // },
            } }, initialValues) }, props)));
};
export default PR2;
//# sourceMappingURL=DWC_PR2.js.map