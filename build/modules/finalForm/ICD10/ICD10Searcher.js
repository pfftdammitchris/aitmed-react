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
import { makeStyles } from '@material-ui/styles';
import Typography from 'components/Typography';
import useICD10Searcher from './useICD10Searcher';
import ICD10SearchInput from './ICD10SearchInput';
var StatusCaption = function (_a) {
    var fetching = _a.fetching, fetchError = _a.fetchError, props = __rest(_a, ["fetching", "fetchError"]);
    return (React.createElement(Typography, __assign({ variant: "subtitle1", secondary: !fetchError && fetching, thirdary: !fetchError && !fetching, error: !!fetchError }, props),
        fetching && 'Searching...',
        !fetching && 'Search a keyword',
        fetchError &&
            (fetchError ? fetchError.message || '' : 'An error occurred')));
};
var OptimizedStatusCaption = React.memo(StatusCaption, function (props, nextProps) {
    return props.fetching === nextProps.fetching ||
        props.fetchError === nextProps.fetchError;
});
var useStyles = makeStyles({
    root: {
        marginBottom: 6,
    },
    statusCaption: {
        margin: '0 10px',
    },
});
var ICD10Searcher = function (_a) {
    var highlightedField = _a.highlightedField, fields = _a.fields;
    var classes = useStyles();
    var _b = useICD10Searcher({
        fields: fields,
    }), fetching = _b.fetching, fetchError = _b.fetchError, onSelect = _b.onSelect, onSearch = _b.onSearch, onKeyPress = _b.onKeyPress, downshiftReducer = _b.downshiftReducer, stringify = _b.stringify, _c = _b.data, codes = _c.codes, results = _c.results, total = _c.total;
    return (React.createElement("div", { className: classes.root },
        React.createElement(OptimizedStatusCaption, { fetching: fetching, fetchError: fetchError, className: classes.statusCaption }),
        React.createElement(ICD10SearchInput, { codes: codes, results: results, total: total, fetching: fetching, 
            // @ts-ignore
            onSelect: onSelect, 
            // @ts-ignore
            onInputValueChange: onSearch, highlightedField: highlightedField, stringify: stringify, downshiftReducer: downshiftReducer, onKeyPress: onKeyPress })));
};
var areEqual = function (props, nextProps) {
    return props.highlightedField === nextProps.highlightedField;
};
export default React.memo(ICD10Searcher, areEqual);
//# sourceMappingURL=ICD10Searcher.js.map