// withTextField" is meant to be used when you want a "key" in an object to determine if the checkbox
//    is checked or not. The value of the key should be a string which you can grab with innerRef and
//    merge the textfield value into it right before submitting.
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
//    This lets you make react final form checkboxes like this: -> { over13: '', insured: '' }
//        In this case, "over13" and "inspured" should be checked in the UI. To uncheck them, return a new
//            copy and "delete" the key from the new copy, then use that new object as the next form value
// For reference of a use case refer to: src/forms/PR2/ReasonsForForm.tsx
import React from 'react';
import MuiCheckbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
var Checkbox = function (_a) {
    var wrapperRootProps = _a.wrapperRootProps, wrapperProps = _a.wrapperProps, checkboxProps = _a.checkboxProps, classNames = _a.classNames, label = _a.label, withTextField = _a.withTextField, textField = _a.textField, rest = __rest(_a, ["wrapperRootProps", "wrapperProps", "checkboxProps", "classNames", "label", "withTextField", "textField"]);
    return (React.createElement("div", __assign({ style: { flexGrow: 1 } }, wrapperRootProps),
        React.createElement(FormControlLabel, __assign({ control: React.createElement(MuiCheckbox, __assign({ classes: classNames }, checkboxProps)), label: label }, rest)),
        !textField && withTextField && React.createElement(TextField, __assign({}, withTextField)),
        textField));
};
export default Checkbox;
//# sourceMappingURL=Checkbox.js.map