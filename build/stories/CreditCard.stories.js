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
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import { Field } from 'react-final-form';
import { storiesOf } from '@storybook/react';
import Typography from 'components/Typography';
import CreditCardForm from 'components/forms/CreditCard';
import getCodeDoc from 'utils/getCodeDoc';
import readme from './docs/creditCard.md';
var onSubmit = function (values) {
    console.log(values);
    alert(JSON.stringify(values, null, 2));
};
storiesOf('CreditCard', module)
    .add('README', function () { return React.createElement("div", null); }, {
    readme: { content: readme },
})
    // @ts-ignore
    .add('default', function () { return React.createElement(CreditCardForm, { onSubmit: onSubmit }); }, {
    readme: {
        content: getCodeDoc("\nimport React from 'react'\nimport CreditCardForm from '@aitmed/react/components/forms/creditCard'\n\nconst onSubmit = (values) => {\n  console.log(values)\n}\n\nconst App = () => <CreditCardForm onSubmit={onSubmit} />\n"),
    },
})
    .add('initialValues', function () { return (
// @ts-ignore
React.createElement(CreditCardForm, { onSubmit: onSubmit, initialValues: {
        card_number: '4111111111111111',
        month: '08',
        year: '2029',
        cvv_code: '400',
        billing_first_name: 'Jennifer',
        billing_last_name: 'Acosta',
        billing_address: '1111 Burkett Street',
        billing_city: 'El Monte',
        billing_state: 'CA',
        billing_zip_code: '91732',
    } })); }, {
    readme: {
        content: getCodeDoc("\nimport React from 'react'\nimport CreditCardForm from '@aitmed/react/components/forms/creditCard'\n\nconst onSubmit = (values) => {\n  console.log(values)\n}\n\nconst App = () => (\n  <CreditCardForm\n    onSubmit={onSubmit}\n    initialValues={{\n      card_number: '4111111111111111',\n      month: '08',\n      year: '2029',\n      cvv_code: '400',\n      billing_first_name: 'Jennifer',\n      billing_last_name: 'Acosta',\n      billing_address: '1111 Burkett Street',\n      billing_city: 'El Monte',\n      billing_state: 'CA',\n      billing_zip_code: '91732',\n    }}\n  />\n)"),
    },
})
    .add('renderSubmit', function () { return (
// @ts-ignore
React.createElement(CreditCardForm, { onSubmit: onSubmit, renderSubmit: function (props) {
        console.log(props);
        return (React.createElement("div", { style: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: 100,
                margin: 'auto',
                border: '1px solid blue',
            } },
            React.createElement("button", { type: "submit" }, "Submit")));
    } })); })
    .add('midLabel', function () { return (
// @ts-ignore
React.createElement(CreditCardForm, { onSubmit: onSubmit, midLabel: React.createElement(Typography, { variant: "subheading", center: true }, "Don't forget to press submit when you're done!") })); })
    .add('submittingText', function () { return (
// @ts-ignore
React.createElement(CreditCardForm, { onSubmit: onSubmit, submittingText: "Please wait while we process your credit card...", submitting: true })); })
    .add('render prop', function () { return (React.createElement(CreditCardForm, { onSubmit: onSubmit, renderSelectField: function (_a) {
        var input = _a.input;
        return (React.createElement("div", null,
            React.createElement(Select, __assign({ content: "Select" }, input, { fullWidth: true }))));
    }, renderTextField: function (_a) {
        var input = _a.input;
        var extraProps = {};
        var style = {};
        if (input.name === 'billing_first_name') {
            // add some custom enhanced style to the first name
            style.fontWeight = 700;
            style.color = 'blue';
            style.border = '1px solid blue';
            extraProps.placeholder = 'Type your first name and go';
        }
        return (React.createElement("div", null,
            React.createElement(TextField, __assign({ style: style, placeholder: "Type something" }, input, extraProps, { fullWidth: true }))));
    }, render: function (_a) {
        var fields = _a.fields, fieldKeys = _a.fieldKeys, formApi = _a.formApi, Cards = _a.Cards;
        var handleSubmit = formApi.handleSubmit, values = formApi.values, active = formApi.active;
        return (React.createElement(React.Fragment, null,
            React.createElement("form", { style: { maxWidth: 500, margin: 'auto' }, onSubmit: handleSubmit },
                React.createElement(Cards, { values: values, active: active }),
                fieldKeys.map(function (key) {
                    var fieldProps = fields[key];
                    if (!fieldProps)
                        return null;
                    return React.createElement(Field, __assign({}, fieldProps));
                }),
                React.createElement(Button, { type: "submit", style: { marginTop: 20, background: 'teal', color: '#fff' } }, "Submit")),
            React.createElement(Typography, { style: { margin: '25px 0' }, variant: "h4" }, "Full control with your interface")));
    } })); }, {
    readme: {
        content: getCodeDoc("\nimport React from 'react'\nimport CreditCardForm from '@aitmed/react/components/forms/creditCard'\n\nconst onSubmit = (values) => {\n  console.log(values)\n}\n\nconst App = () => (\n  <CreditCardForm\n    onSubmit={onSubmit}\n    renderSelectField={({ input }: any) => (\n      <div>\n        <Select content=\"Select\" {...input} fullWidth />\n      </div>\n    )}\n    renderTextField={({ input }: any) => {\n      const extraProps: any = {}\n      const style: any = {}\n      if (input.name === 'billing_first_name') {\n        // add some custom enhanced style to the first name\n        style.fontWeight = 700\n        style.color = 'blue'\n        style.border = '1px solid blue'\n        extraProps.placeholder = 'Type your first name and go'\n      }\n      return (\n        <div>\n          <TextField\n            style={style}\n            placeholder=\"Type something\"\n            {...input}\n            {...extraProps}\n            fullWidth\n          />\n        </div>\n      )\n    }}\n    render={({ fields, fieldKeys, formApi, Cards }: any) => {\n      const { handleSubmit, form, values, active, submitting } = formApi\n      return (\n        <form onSubmit={handleSubmit}>\n          <Cards values={values} active={active} />\n          {fieldKeys.map((key: string) => {\n            const fieldProps = fields[key]\n            if (!fieldProps) return null\n            return <Field {...fieldProps} />\n          })}\n          <Button type=\"submit\">Submit (check console)</Button>\n        </form>\n      )\n    }}\n  />\n)\n    "),
    },
})
    .add('renderSubmit (stub)', function () { return React.createElement("div", null, "Temporary stub"); })
    .add('renderSelectField (stub)', function () { return React.createElement("div", null, "Temporary stub"); })
    .add('renderTextField (stub)', function () { return React.createElement("div", null, "Temporary stub"); });
//# sourceMappingURL=CreditCard.stories.js.map