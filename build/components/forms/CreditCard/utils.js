import Payment from 'payment';
import forEach from 'lodash/forEach';
export var clearNumber = function (value) {
    if (value === void 0) { value = ''; }
    return value.replace(/\D+/g, '');
};
// Create a years list with 20 years from current year
export var currentYear = new Date().getFullYear();
// @ts-ignore
export var appendToYear = function (val, index) {
    return "" + (index + currentYear);
};
export var years = Array.from(new Array(20), appendToYear);
// Used to validate the credit card form
export var validate = function (values) {
    var errors = {};
    var requiredList = [
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
    forEach(requiredList, function (name) {
        if (!values[name])
            errors[name] = 'Required';
        return null;
    });
    var cardNumber = values.card_number, month = values.month, year = values.year, cvc = values.cvv_code;
    var validCardNumber = Payment.fns.validateCardNumber(cardNumber);
    if (cardNumber && !validCardNumber) {
        errors['card_number'] = 'Card Number is invalid';
    }
    if (month && year && !Payment.fns.validateCardExpiry(month, year)) {
        errors['month'] = 'Expiration Date is invalid';
        errors['year'] = 'Expiration Date is invalid';
    }
    if (cvc) {
        var type = Payment.fns.cardType(cardNumber);
        if (!validCardNumber) {
            errors['cvv_code'] = 'Card Number is invalid';
        }
        else if (!Payment.fns.validateCardCVC(cvc, type)) {
            errors['cvv_code'] = 'CVV is invalid';
        }
    }
    return errors;
};
//# sourceMappingURL=utils.js.map