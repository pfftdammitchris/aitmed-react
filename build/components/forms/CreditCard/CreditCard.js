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
import isPlainObject from 'lodash/isPlainObject';
import isFunction from 'lodash/isFunction';
import { Form, Field } from 'react-final-form';
import { makeStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import LoadingSpinner from 'components/LoadingSpinner';
import Typography from 'components/Typography';
import { months, states } from 'utils/info';
import Cards from './Cards';
import useCreditCard from './useCreditCard';
import MidLabel from './MidLabel';
import { years } from './utils';
import 'react-credit-cards/es/styles-compiled.css';
var useStyles = makeStyles(function (theme) { return ({
    buttonContainer: {
        margin: theme.spacing(2) + "px auto",
    },
    sectionLabel: {
        margin: '12px 0',
    },
    cssLabel: {
        '&$cssFocused': {
            color: theme.palette.secondary.main,
        },
    },
    cssFocused: {},
    cssOutlinedInput: {
        '&$cssFocused $notchedOutline': {
            borderColor: theme.palette.secondary.main,
        },
    },
    notchedOutline: {},
    saveButton: {
        background: theme.palette.primary.main,
        color: '#fff',
    },
    input: {
        background: '#fff',
        margin: 0,
        marginBottom: 10,
    },
}); });
var CreditCardForm = function (_a) {
    var initialValues = _a.initialValues, onSubmit = _a.onSubmit, render = _a.render, submitting = _a.submitting, _b = _a.submittingText, submittingText = _b === void 0 ? '' : _b, _c = _a.midLabel, midLabel = _c === void 0 ? '' : _c, // Provided for convenience to render something between the card image and the form because it looks better
    renderSubmit = _a.renderSubmit, renderTextFieldProp = _a.renderTextField, renderSelectProp = _a.renderSelectField, otherProps = __rest(_a, ["initialValues", "onSubmit", "render", "submitting", "submittingText", "midLabel", "renderSubmit", "renderTextField", "renderSelectField"]);
    var classes = useStyles();
    var parse = useCreditCard().parse;
    var renderTextField = function (_a) {
        var label = _a.label, input = _a.input, _b = _a.meta, touched = _b.touched, error = _b.error, props = __rest(_a, ["label", "input", "meta"]);
        return (React.createElement(TextField, __assign({ InputLabelProps: {
                classes: {
                    root: classes.cssLabel,
                    focused: classes.cssFocused,
                },
            }, InputProps: {
                classes: {
                    root: classes.cssOutlinedInput,
                    focused: classes.cssFocused,
                    notchedOutline: classes.notchedOutline,
                },
            }, classes: { root: classes.input }, label: label, variant: "outlined", error: touched && !!error, helperText: touched && error, fullWidth: true, required: true }, input, props)));
    };
    var renderSelectField = function (_a) {
        var label = _a.label, input = _a.input, _b = _a.meta, touched = _b.touched, error = _b.error, items = _a.items, props = __rest(_a, ["label", "input", "meta", "items"]);
        return (React.createElement(TextField, __assign({ classes: { root: classes.input }, label: label, error: touched && !!error, helperText: touched && error, variant: "outlined", fullWidth: true, select: true, required: true }, input, props), items &&
            items.map(function (item, index) {
                var isObj = isPlainObject(item);
                var value = isObj ? item.value : item;
                var label = isObj ? item.label : item;
                return (React.createElement(MenuItem, { key: "" + value + index + "_select", value: value }, label));
            })));
    };
    var finalRenderTextField = renderTextFieldProp || renderTextField;
    var finalRenderSelectField = renderSelectProp || renderSelectField;
    var fields = {
        card_number: {
            label: 'Card Number',
            name: 'card_number',
            render: finalRenderTextField,
            parse: parse,
        },
        month: {
            label: 'Month',
            name: 'month',
            render: finalRenderSelectField,
            items: months,
        },
        year: {
            label: 'Year',
            name: 'year',
            render: finalRenderSelectField,
            items: years,
        },
        cvv: {
            label: 'CVV',
            name: 'cvv_code',
            render: finalRenderTextField,
            type: 'number',
            parse: parse,
        },
        billing_first_name: {
            label: 'First Name',
            name: 'billing_first_name',
            render: finalRenderTextField,
        },
        billing_last_name: {
            label: 'Last Name',
            name: 'billing_last_name',
            render: finalRenderTextField,
        },
        billing_address: {
            label: 'Address',
            name: 'billing_address',
            render: finalRenderTextField,
        },
        billing_city: {
            label: 'City',
            name: 'billing_city',
            render: finalRenderTextField,
        },
        billing_state: {
            label: 'State',
            name: 'billing_state',
            render: finalRenderSelectField,
            items: states,
        },
        billing_zip_code: {
            label: 'Zip',
            name: 'billing_zip_code',
            render: finalRenderTextField,
            type: 'number',
            parse: parse,
        },
    };
    var fieldKeys = [
        'card_number',
        'month',
        'year',
        'cvv_code',
        'billing_first_name',
        'billing_last_name',
        'billing_address',
        'billing_city',
        'billing_state',
        'billing_zip_code',
    ];
    var defaultRenderer = function (formApi) {
        var handleSubmit = formApi.handleSubmit, _submitting = formApi.submitting, active = formApi.active, values = formApi.values;
        // Allow for the parent to pass in their own "submitting" state
        var isSubmitting = !!submitting || _submitting;
        return (React.createElement("form", { id: "aitmed-react-payment-form", onSubmit: handleSubmit },
            React.createElement(Cards, { activeField: active, values: values }),
            !!midLabel && React.createElement(MidLabel, null, midLabel),
            isSubmitting && (React.createElement(LoadingSpinner, { margin: "16px auto 20px" }, submittingText || 'Submitting...')),
            React.createElement(Field, { label: "Card Number", name: "card_number", parse: parse, render: finalRenderTextField }),
            React.createElement(Field, { label: "Month", name: "month", items: months, render: finalRenderSelectField }),
            React.createElement(Field, { label: "Year", name: "year", items: years, render: finalRenderSelectField }),
            React.createElement(Field, { label: "CVV", name: "cvv_code", type: "number", parse: parse, render: finalRenderTextField }),
            React.createElement(Typography, { className: classes.sectionLabel, variant: "h5", secondary: true }, "Billing Information"),
            React.createElement(Field, { name: "billing_first_name", label: "First Name", render: finalRenderTextField }),
            React.createElement(Field, { name: "billing_last_name", label: "Last Name", render: finalRenderTextField }),
            React.createElement(Field, { name: "billing_address", label: "Address", render: finalRenderTextField }),
            React.createElement(Field, { name: "billing_city", label: "City", render: finalRenderTextField }),
            React.createElement(Field, { label: "State", name: "billing_state", items: states, render: finalRenderSelectField }),
            React.createElement(Field, { label: "Zip", name: "billing_zip_code", type: "number", parse: parse, render: finalRenderTextField }),
            isFunction(renderSubmit) ? (renderSubmit && renderSubmit(formApi)) : (React.createElement(Grid, { className: classes.buttonContainer, direction: "column", alignItems: "center", justify: "center", container: true },
                React.createElement(Grid, { xs: 12, item: true },
                    React.createElement(Button, { type: "submit", className: classes.saveButton, size: "large", variant: "contained", disabled: isSubmitting }, "Save"))))));
    };
    return (React.createElement(Form, __assign({ keepDirtyOnReinitialize: true, initialValues: initialValues, onSubmit: onSubmit, subscription: { submitting: true, active: true, values: true } }, otherProps, { render: function (formApi) {
            return isFunction(render)
                ? render({ fields: fields, fieldKeys: fieldKeys, formApi: formApi, Cards: Cards })
                : defaultRenderer(formApi);
        } })));
};
export default CreditCardForm;
//# sourceMappingURL=CreditCard.js.map