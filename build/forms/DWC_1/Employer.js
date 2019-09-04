import React from 'react';
import { Field } from 'react-final-form';
import SignatureCanvas from 'components/finalForm/SignatureCanvas';
import OutlinedTextField from 'components/finalForm/OutlinedTextField';
import Typography from 'components/Typography';
import { parsePhone } from 'utils/finalForm';
var DWC_1_Employee = function (_a) {
    var name = _a.name, signatureRef = _a.signatureRef;
    return (React.createElement(React.Fragment, null,
        React.createElement(Typography, { variant: "h6", gutterBottom: true }, "Employer"),
        React.createElement(Field, { label: "Name", name: name + ".name", component: OutlinedTextField, fullWidth: true }),
        React.createElement(Field, { label: "Address", name: name + ".address", component: OutlinedTextField, fullWidth: true }),
        React.createElement(Field, { type: "date", label: "Date first known of injury", name: name + ".dateNoticedInjury", component: OutlinedTextField, fullWidth: true }),
        React.createElement(Field, { type: "date", label: "Date when claim form was provided to employee", name: name + ".dateClaimFormProvidedToEmployee", component: OutlinedTextField, fullWidth: true }),
        React.createElement(Field, { type: "date", label: "Date when employer received claim form", name: name + ".dateReceivedClaimForm", component: OutlinedTextField, fullWidth: true }),
        React.createElement(Field, { label: "Name of insurance carrier/adjusting agency", name: name + ".insurance.name", component: OutlinedTextField, fullWidth: true }),
        React.createElement(Field, { label: "Address of insurance carrier/adjusting agency", name: name + ".insurance.address", component: OutlinedTextField, fullWidth: true }),
        React.createElement(Field, { label: "Insurance policy number", name: name + ".insurance.policyNumber", component: OutlinedTextField, fullWidth: true }),
        React.createElement(Field, { label: "Title", name: name + ".title", component: OutlinedTextField, fullWidth: true }),
        React.createElement(Field, { label: "Phone", type: "phone", parse: parsePhone, name: name + ".phone", component: OutlinedTextField, fullWidth: true }),
        React.createElement(Field
        // @ts-ignore
        , { 
            // @ts-ignore
            component: SignatureCanvas, name: name + ".signature", signatureLabel: "Signature of employer representative", signatureRef: signatureRef })));
};
export default DWC_1_Employee;
//# sourceMappingURL=Employer.js.map