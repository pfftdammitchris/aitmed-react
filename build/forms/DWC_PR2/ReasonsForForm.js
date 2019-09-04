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
import FormGroup from '@material-ui/core/FormGroup';
import Flex from 'components/Flex';
import Checkbox from 'components/Checkbox';
import useCache from 'hooks/useCache';
var reasons = {
    periodicReport: 'Periodic Report',
    changeInTreatmentPlan: 'Change in Treatment Plan',
    discharged: 'Discharged',
    changeInWorkStatus: 'Change in Work Status',
    referralOrConsultation: 'Need for Referral or Consultation',
    changeInPatientsCondition: "Change in Patient's Condition",
    surgeryOrHospitalization: 'Need for Surgery or Hospitalization',
    infoRequestedBy: 'Info Requested By',
    other: 'Other',
};
var reasonKeys = Object.keys(reasons);
var reasonsList = [
    reasonKeys.slice(0, 4),
    reasonKeys.slice(4, 7),
    reasonKeys.slice(7),
];
var useStyles = makeStyles(function (theme) {
    var _a, _b;
    return ({
        root: {},
        checkboxRoot: (_a = {
                color: '#333',
                transform: 'scale(0.9)',
                padding: 3
            },
            _a[theme.breakpoints.down('xs')] = {
                marginLeft: 8,
            },
            _a),
        checkboxLabel: (_b = {
                fontSize: '0.72rem',
                marginLeft: 0,
                marginRight: 11,
                userSelect: 'none'
            },
            _b[theme.breakpoints.down('xs')] = {
                fontSize: '0.67rem',
            },
            _b),
    });
});
var ReasonsForForm = function (_a) {
    var input = _a.input, _b = _a.withTextfields, withTextfields = _b === void 0 ? [] : _b;
    var classes = useStyles();
    var _c = useCache(), cache = _c.cache, onMountRef = _c.onMountRef;
    function updateOnBlur(key) {
        if (input && input.value) {
            if (cache[key]) {
                var nextValues = __assign({}, input.value);
                nextValues[key] = String(cache[key].value || '');
                input.onChange(nextValues);
            }
            else {
                console.warn("Warning: Tried to invoke input.onChange for textfield \"" + key + "\" inside updateOnBlur but it was not in the cache");
            }
        }
    }
    var onChange = function (key) { return function (e) {
        var checked = e.target.checked;
        if (input && input.value) {
            var nextValues = __assign({}, input.value);
            var node = cache[key];
            // User is checking the box
            if (checked) {
                nextValues[key] = node ? node.value : '';
                if (withTextfields.includes(key)) {
                    if (node) {
                        nextValues[key] += String(cache[key].value || '');
                    }
                    else {
                        nextValues[key] = '';
                    }
                }
            }
            // User is unchecking the box
            else {
                if (key in nextValues) {
                    delete nextValues[key];
                    if (withTextfields.includes(key)) {
                        if (node) {
                            node.value = '';
                            delete cache[key];
                        }
                    }
                }
            }
            input.onChange(nextValues);
        }
        else {
            console.warn('You tried to invoke onChange inside ReasonsForForm but input or input.value is not an object');
        }
    }; };
    function onBlur(key) {
        return function () {
            updateOnBlur(key);
        };
    }
    function onKeyPress(key) {
        return function (e) {
            if (e.charCode === 13) {
                updateOnBlur(key);
            }
        };
    }
    return (React.createElement(FormGroup, { className: classes.root, row: true }, reasonsList.map(function (list, index) { return (React.createElement(Flex, { key: "reasonList" + index, xsBlock: true, flexGrow: 1, spaceAround: true }, list.map(function (key) { return (React.createElement(Checkbox, { key: key, classes: {
            label: classes.checkboxLabel,
        }, classNames: {
            root: classes.checkboxRoot,
        }, label: reasons[key], checked: !!input && !!input.value && key in input.value, onChange: onChange(key), value: key, withTextField: withTextfields.includes(key) && {
            inputRef: onMountRef(key),
            onBlur: onBlur(key),
            onKeyPress: onKeyPress(key),
        } })); }))); })));
};
export default ReasonsForForm;
//# sourceMappingURL=ReasonsForForm.js.map