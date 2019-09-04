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
import cx from 'classnames';
import reduce from 'lodash/reduce';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import startCase from 'lodash/startCase';
var useStyles = makeStyles(function (theme) {
    var _a;
    return ({
        list: {
            borderRadius: 12,
            background: theme.palette.background.cool,
            border: "1px solid " + theme.palette.borders.cool,
        },
        listItem: {
            border: '1px solid rgba(0, 0, 0, 0)',
            transition: 'all 0.1s ease-out',
            cursor: 'pointer',
            marginBottom: 2,
            '&:hover': {
                background: theme.palette.background.lightGrey2,
                '& $text': {
                    transform: 'translateX(1.3px)',
                    color: theme.palette.secondary.dark,
                },
            },
        },
        text: (_a = {
                fontSize: '0.77rem',
                fontWeight: 500,
                transition: 'all 0.2s ease',
                color: theme.palette.text.soft
            },
            _a[theme.breakpoints.down('xs')] = {
                fontSize: '0.65rem',
            },
            _a),
        highlighted: {
            border: "1px solid " + theme.palette.thirdary.main,
        },
    });
});
var filterer = function (results, inputValue) {
    if (inputValue === void 0) { inputValue = ''; }
    return function (acc, code) {
        if (acc === void 0) { acc = []; }
        var shouldShow = false;
        var diagnosisResult = results[code] || '';
        var hasInvalidChars = /^.*?(?=[\+\^#%&$\*:<>\?/\{\|\}\[\]\\\)\(]).*$/g.test(inputValue);
        if (hasInvalidChars)
            return acc;
        if (!inputValue) {
            shouldShow = true;
        }
        else if (new RegExp(inputValue, 'i').test(diagnosisResult)) {
            shouldShow = true;
        }
        else if (new RegExp(inputValue, 'i').test(code))
            shouldShow = true;
        if (shouldShow)
            acc.push(code);
        return acc;
    };
};
var ICD10PopupMenu = function (_a) {
    var isOpen = _a.isOpen, codes = _a.codes, results = _a.results, total = _a.total, inputValue = _a.inputValue, getMenuProps = _a.getMenuProps, getItemProps = _a.getItemProps, highlightedIndex = _a.highlightedIndex;
    if (!isOpen || !total)
        return null;
    var classes = useStyles();
    var reducer = reduce(codes, filterer(results, inputValue), []);
    return (React.createElement(List, __assign({ className: classes.list, dense: true }, getMenuProps()), reducer.map(function (code, index) {
        var _a;
        return (React.createElement(ListItem, __assign({}, getItemProps({
            key: "" + code + index,
            index: index,
            item: code,
            className: cx(classes.listItem, (_a = {},
                _a[classes.highlighted] = highlightedIndex === index,
                _a)),
        })),
            React.createElement(ListItemText, { className: classes.text, disableTypography: true },
                code,
                ": ",
                startCase(results[code].toUpperCase()))));
    })));
};
export default ICD10PopupMenu;
//# sourceMappingURL=ICD10PopupMenu.js.map