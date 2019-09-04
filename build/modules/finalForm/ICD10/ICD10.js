import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHeader from './TableHeader';
import ICD10Searcher from './ICD10Searcher';
import RowRenderer from './RowRenderer';
var useStyles = makeStyles(function (theme) {
    var _a;
    return ({
        root: {
            padding: '15px 0',
            '& hr': {
                height: '0px !important',
                border: '0 !important',
            },
        },
        inputArea: {},
        label: (_a = {
                fontSize: '1rem',
                fontWeight: 400,
                marginBottom: 10
            },
            _a[theme.breakpoints.down('xs')] = {
                fontSize: '0.8rem',
            },
            _a),
        add: {
            margin: theme.spacing() + "px 0",
        },
        addButton: {
            padding: 1,
            fontSize: '0.6rem',
        },
    });
});
var ICD10 = function (_a) {
    var _b = _a.fields, fields = _b === void 0 ? [] : _b;
    var classes = useStyles();
    var _c = React.useState(0), highlightedField = _c[0], setHighlightedField = _c[1];
    var highlightField = function (index) { return function () { return setHighlightedField(index); }; };
    var onDelete = function (index) { return function () { return fields.remove(index); }; };
    React.useEffect(function () {
        if (highlightedField !== fields.length - 1) {
            setHighlightedField(fields.length - 1);
        }
    }, [fields.length]);
    return (React.createElement("div", { className: classes.root },
        React.createElement(ICD10Searcher, { highlightedField: highlightedField, fields: fields }),
        React.createElement(Table, { padding: "checkbox", size: "small" },
            React.createElement(TableHeader, null),
            React.createElement(TableBody, null, fields.map(function (name, index) { return (React.createElement(RowRenderer, { key: "row_renderer" + index, isHighlighted: highlightedField === index, highlightField: highlightField(index), name: name, index: index, onDelete: onDelete(index) })); })))));
};
export default ICD10;
//# sourceMappingURL=ICD10.js.map