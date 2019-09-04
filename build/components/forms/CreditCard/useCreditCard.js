import { useState } from 'react';
import Payment from 'payment';
import { clearNumber } from './utils';
var useCreditCard = function () {
    var _a = useState(''), issuer = _a[0], setIssuer = _a[1];
    var parseCardNumber = function (value) {
        var issuer = Payment.fns.cardType(value);
        setIssuer(issuer);
        var newValue = issuer === 'amex'
            ? value.slice(0, 4) + " " + value.slice(4, 10) + " " + value.slice(10, 15)
            : issuer === 'dinersclub'
                ? value.slice(0, 4) + " " + value.slice(4, 10) + " " + value.slice(10, 14)
                : value.slice(0, 4) + " " + value.slice(4, 8) + " " + value.slice(8, 12) + " " + value.slice(12, 19);
        return newValue.trim();
    };
    var parse = function (value, name) {
        var clearValue = clearNumber(value);
        return !clearValue
            ? value
            : name === 'card_number'
                ? parseCardNumber(clearValue)
                : name === 'cvv_code'
                    ? ("" + clearValue.slice(0, issuer === 'amex' ? 4 : 3)).trim()
                    : name === 'billing_zip_code'
                        ? ("" + clearValue.slice(0, 5)).trim()
                        : value;
    };
    return {
        parse: parse,
    };
};
export default useCreditCard;
//# sourceMappingURL=useCreditCard.js.map