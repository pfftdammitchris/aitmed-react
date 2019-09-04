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
import { makeStyles } from '@material-ui/styles';
import Cards from 'react-credit-cards';
var useStyles = makeStyles(function (theme) { return ({
    root: {
        width: '100%',
        overflowX: 'auto',
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(3),
    },
}); });
// For <Cards />
// focused {string}: Focused card field. name|number|expiry|cvc
var getFocusedFieldName = function (activeField) {
    switch (activeField) {
        case 'billing_first_name':
        case 'billing_last_name':
            return 'name';
        case 'card_number':
            return 'number';
        case 'month':
            return 'expiry';
        case 'year':
            return 'expiry';
        case 'cvv_code':
            return 'cvc';
        default:
            return activeField;
    }
};
var getCardProps = function (values) {
    if (values === void 0) { values = {}; }
    var _a = values.card_number, number = _a === void 0 ? '' : _a, _b = values.billing_first_name, billing_first_name = _b === void 0 ? '' : _b, _c = values.billing_last_name, billing_last_name = _c === void 0 ? '' : _c, _d = values.month, month = _d === void 0 ? '' : _d, _e = values.year, year = _e === void 0 ? '' : _e, _f = values.cvv_code, cvc = _f === void 0 ? '' : _f;
    return {
        number: number,
        name: billing_first_name + " " + billing_last_name,
        expiry: month + "/" + year,
        cvc: cvc,
    };
};
var PaymentCardsAnimation = function (_a) {
    var _b = _a.activeField, activeField = _b === void 0 ? '' : _b, values = _a.values;
    var classes = useStyles();
    return (React.createElement("div", { className: classes.root },
        React.createElement(Cards, __assign({}, getCardProps(values), { focused: getFocusedFieldName(activeField) }))));
};
export default PaymentCardsAnimation;
//# sourceMappingURL=Cards.js.map