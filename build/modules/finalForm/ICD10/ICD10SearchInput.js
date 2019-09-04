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
import cx from 'classnames';
import { makeStyles } from '@material-ui/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Input from '@material-ui/core/Input';
import { IoIosSearch } from 'react-icons/io/index.esm';
import Downshift from 'downshift';
import ICD10PopupMenu from './ICD10PopupMenu';
var useStyles = makeStyles(function (theme) {
    var _a, _b;
    return ({
        root: {
            margin: 'auto',
        },
        inputWrapper: (_a = {},
            _a[theme.breakpoints.down('xs')] = {
                width: '100%',
            },
            _a),
        input: (_b = {
                height: 40,
                minWidth: 400,
                borderRadius: 12,
                background: theme.palette.background.cool,
                border: "1px solid " + theme.palette.borders.cool,
                '& input': {
                    padding: '8px 3px',
                    fontSize: '0.9rem',
                }
            },
            _b[theme.breakpoints.down('xs')] = {
                minWidth: '100%',
                fontSize: '0.9rem',
            },
            _b['&:hover'] = {
                background: theme.palette.background.lightGrey2,
                color: theme.palette.text.soft,
                '& $searchIcon': {
                    color: theme.palette.text.soft,
                },
            },
            _b),
        searchIcon: {
            color: theme.palette.secondary.main,
            transition: 'all 1.5s ease-out',
            fontSize: '1.2rem',
            padding: '3px 5px',
        },
        searchIconSearching: {
            color: theme.palette.thirdary.dark,
        },
        spinner: {
            transform: 'translateX(-16px)',
        },
    });
});
var LoadingSpinner = function (_a) {
    var loading = _a.loading, props = __rest(_a, ["loading"]);
    return loading && (React.createElement(CircularProgress, __assign({ color: "secondary", size: 30, thickness: 3, variant: "indeterminate" }, props)));
};
var ICD10SearchInput = function (_a) {
    var _b = _a.codes, codes = _b === void 0 ? [] : _b, results = _a.results, total = _a.total, fetching = _a.fetching, onSelect = _a.onSelect, onInputValueChange = _a.onInputValueChange, stringify = _a.stringify, downshiftReducer = _a.downshiftReducer, onKeyPress = _a.onKeyPress;
    var classes = useStyles();
    // Extracted this outside because TS was giving a weird error
    var SearchInput = function (_a) {
        var _b;
        var getInputProps = _a.getInputProps, props = __rest(_a, ["getInputProps"]);
        return (React.createElement(Input, __assign({}, getInputProps(__assign({ startAdornment: (React.createElement(IoIosSearch, { className: cx(classes.searchIcon, (_b = {},
                    _b[classes.searchIconSearching] = fetching,
                    _b)) })), endAdornment: (React.createElement(LoadingSpinner, { className: classes.spinner, loading: fetching })), placeholder: ' Find references', disableUnderline: true, className: classes.input, title: 'Search ICD10 diagnosis', onKeyPress: onKeyPress }, props)))));
    };
    return (React.createElement(Downshift, { onSelect: onSelect, onInputValueChange: onInputValueChange, itemToString: stringify(results), stateReducer: downshiftReducer }, function (_a) {
        var getMenuProps = _a.getMenuProps, getInputProps = _a.getInputProps, getItemProps = _a.getItemProps, inputValue = _a.inputValue, highlightedIndex = _a.highlightedIndex, isOpen = _a.isOpen;
        return (React.createElement("div", { className: classes.inputWrapper },
            React.createElement(SearchInput, { getInputProps: getInputProps }),
            !!codes.length && (React.createElement(ICD10PopupMenu, { codes: codes, results: results, total: total, isOpen: isOpen, inputValue: inputValue || '', getMenuProps: getMenuProps, getItemProps: getItemProps, highlightedIndex: highlightedIndex }))));
    }));
};
export default ICD10SearchInput;
//# sourceMappingURL=ICD10SearchInput.js.map