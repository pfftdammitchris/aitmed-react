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
import { Field } from 'react-final-form';
import cx from 'classnames';
import { makeStyles } from '@material-ui/styles';
import MaterialUIInput from '@material-ui/core/Input';
import TableRow from '@material-ui/core/TableRow';
import { IoIosCloseCircle } from 'react-icons/io/index.esm';
import TableCell from './TableCell';
var useStyles = makeStyles(function (theme) {
    var _a, _b;
    return ({
        field: (_a = {
                '&:hover': {
                    '& $closeIcon': {
                        visibility: 'visible',
                    },
                }
            },
            _a[theme.breakpoints.down('xs')] = {
                height: 38,
            },
            _a),
        input: (_b = {
                marginRight: 4,
                padding: '10px !important',
                border: "1px solid " + theme.palette.borders.cool,
                marginBottom: 1,
                fontSize: '0.8rem',
                '&:hover': {
                    border: "1px solid " + theme.palette.thirdary.dark,
                    background: '#fff',
                    color: theme.palette.text.soft,
                    '& $highlightedCell': {
                        border: 'none !important',
                    },
                }
            },
            _b[theme.breakpoints.down('xs')] = {
                fontSize: '0.7rem',
                padding: 3,
            },
            _b),
        selectedField: {
            borderBottom: '0 !important',
            '& input': {
                border: "1px solid " + theme.palette.secondary.main,
                color: theme.palette.text.normal,
                '&:hover': {
                    border: "1px solid " + theme.palette.thirdary.dark,
                },
            },
        },
        closeIcon: {
            transform: 'scale(1.6)',
            visibility: 'hidden',
            cursor: 'pointer',
            transition: 'all 0.15s ease-out',
            '&:hover': {
                color: theme.palette.thirdary.dark,
                transform: 'scale(1.7)',
            },
        },
        highlightedCell: {},
    });
});
var ICD10RowRenderer = function (_a) {
    var name = _a.name, onDelete = _a.onDelete, highlightField = _a.highlightField, isHighlighted = _a.isHighlighted;
    var classes = useStyles();
    var cells = ['code', 'description', 'comment'];
    return (React.createElement(TableRow, { selected: isHighlighted, onClick: highlightField, classes: {
            root: classes.field,
            selected: classes.selectedField,
        } },
        cells.map(function (cellName, index) { return (React.createElement(TableCell, { key: "" + cellName + index },
            React.createElement(Field, { name: name + "." + cellName, render: function (_a) {
                    var _b;
                    var input = _a.input, meta = _a.meta, rest = __rest(_a, ["input", "meta"]);
                    return (React.createElement(MaterialUIInput, __assign({ id: input.name, classes: {
                            input: cx(classes.input, (_b = {},
                                _b[classes.highlightedCell] = isHighlighted,
                                _b)),
                        } }, input, rest, { autoFocus: cellName === 'code' && isHighlighted, disableUnderline: true })));
                } }))); }),
        React.createElement(TableCell, null,
            React.createElement(IoIosCloseCircle, { onClick: onDelete, title: "Delete this row", className: classes.closeIcon }))));
};
var EnhancedICD10RowRenderer = React.memo(ICD10RowRenderer, function (props, nextProps) {
    if (props.name !== nextProps.name ||
        props.index !== nextProps.index ||
        props.isHighlighted !== nextProps.isHighlighted) {
        return false;
    }
    return true;
});
export default EnhancedICD10RowRenderer;
//# sourceMappingURL=RowRenderer.js.map