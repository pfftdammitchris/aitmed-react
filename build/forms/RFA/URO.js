import React from 'react';
import { Field } from 'react-final-form';
import { parsePhone } from 'utils/finalForm';
import Flex from 'components/Flex';
import SignatureCanvas from 'components/finalForm/SignatureCanvas';
var RFA_UROResponse = function (_a) {
    var name = _a.name, WrappedOutlinedTextField = _a.textfield, WrappedCheckbox = _a.checkbox, signatureRef = _a.signatureRef;
    return (React.createElement(React.Fragment, null,
        React.createElement(Field, { component: WrappedCheckbox, type: "checkbox", label: "Approved", name: "uroResponse.approved" }),
        React.createElement(Field, { component: WrappedCheckbox, type: "checkbox", label: "Denied or Modified", name: "uroResponse.deniedOrModified" }),
        React.createElement(Field, { component: WrappedCheckbox, type: "checkbox", label: "Delay (See separate notification of delay)", name: "uroResponse.delay" }),
        React.createElement(Field, { component: WrappedCheckbox, type: "checkbox", label: "Requested treatment has been previously denied", name: "uroResponse.treatmentPreviouslyDenied" }),
        React.createElement(Field, { component: WrappedCheckbox, type: "checkbox", label: "Liability for treatment is disputed (See separate letter)", name: "uroResponse.liabilityForTreatmentDisputed" }),
        React.createElement("br", null),
        React.createElement(Flex, { xsBlock: true },
            React.createElement(Field, { label: "Authorization Number (if assigned)", name: name + ".authorizationNumber", component: WrappedOutlinedTextField, wrapperProps: { marginRight: 3 }, fullWidth: true }),
            React.createElement(Field, { label: "Authorized Agent Name", name: name + ".authorizedAgentName", component: WrappedOutlinedTextField, fullWidth: true })),
        React.createElement(Flex, null,
            React.createElement(Field, { label: "Phone", parse: parsePhone, name: name + ".phone", component: WrappedOutlinedTextField, wrapperProps: { marginRight: 3 }, fullWidth: true }),
            React.createElement(Field, { label: "Fax", parse: parsePhone, name: name + ".fax", component: WrappedOutlinedTextField, fullWidth: true })),
        React.createElement(Flex, null,
            React.createElement(Field, { type: "date", label: "Date", name: name + ".date", component: WrappedOutlinedTextField, wrapperProps: { marginRight: 3 }, fullWidth: true }),
            React.createElement(Field, { type: "email", label: "Email", name: name + ".email", component: WrappedOutlinedTextField, fullWidth: true })),
        React.createElement(Field
        // @ts-ignore
        , { 
            // @ts-ignore
            component: SignatureCanvas, name: name + ".signed", signatureLabel: "Requesting Physicians Signature", signatureRef: signatureRef }),
        React.createElement("br", null),
        React.createElement(Field, { label: "Comments", name: name + ".comments", component: WrappedOutlinedTextField, rows: 4, rowsMax: 5, multiline: true, fullWidth: true })));
};
export default RFA_UROResponse;
//# sourceMappingURL=URO.js.map