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
var useStyles = makeStyles(function (theme) { return ({
    root: {
        marginBottom: theme.spacing(3),
    },
}); });
var CreditCardFormMidLabel = function (props) {
    var classes = useStyles();
    return React.createElement("div", __assign({ className: classes.root }, props));
};
export default CreditCardFormMidLabel;
//# sourceMappingURL=MidLabel.js.map