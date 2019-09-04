import React from 'react';
import { Field } from 'react-final-form';
import Flex from 'components/Flex';
import OutlinedTextField from 'components/finalForm/OutlinedTextField';
var RFA_Employee = function (_a) {
    var name = _a.name, WrappedOutlinedTextField = _a.component;
    return (React.createElement(React.Fragment, null,
        React.createElement(Flex, { spaceBetween: true },
            React.createElement(Field, { label: "First Name", name: name + ".firstName", component: WrappedOutlinedTextField, wrapperProps: { marginRight: 3 }, fullWidth: true }),
            React.createElement(Field, { label: "Middle Name", name: name + ".middleName", component: WrappedOutlinedTextField, wrapperProps: { marginRight: 3 }, fullWidth: true }),
            React.createElement(Field, { label: "Last Name", name: name + ".lastName", component: WrappedOutlinedTextField, fullWidth: true })),
        React.createElement(Flex, { xsBlock: true },
            React.createElement(Field, { type: "date", label: "Date of Injury", name: name + ".dateOfInjury", component: OutlinedTextField, wrapperProps: { marginRight: 3 }, fullWidth: true }),
            React.createElement(Field, { type: "date", label: "Date of Birth", name: name + ".dob", component: OutlinedTextField, fullWidth: true })),
        React.createElement(Flex, { spaceBetween: true },
            React.createElement(Field, { label: "Claim Number", name: name + ".claimNumber", component: OutlinedTextField, wrapperProps: { marginRight: 3 }, fullWidth: true }),
            React.createElement(Field, { label: "Employer", name: name + ".employer", component: OutlinedTextField, fullWidth: true }))));
};
export default RFA_Employee;
//# sourceMappingURL=Employee.js.map