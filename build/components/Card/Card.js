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
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import CardContent from '@material-ui/core/CardContent';
import Typography from 'components/Typography';
var useStyles = makeStyles(function (theme) {
    var _a, _b;
    return ({
        root: (_a = {
                outline: 'none',
                height: 'auto',
                borderRadius: 20,
                padding: 12,
                border: "1px solid " + theme.palette.borders.cool,
                boxShadow: '0px 5px 20px rgba(0, 0, 0, 0.05)'
            },
            _a[theme.breakpoints.down('xs')] = {
                margin: 'auto',
                '& h6': {
                    fontSize: '1.2em',
                },
            },
            _a),
        header: (_b = {},
            _b[theme.breakpoints.down('xs')] = {
                fontSize: '1rem !important',
            },
            _b),
        divider: {
            border: "1px solid " + theme.palette.thirdary.main,
            margin: theme.spacing() + "px auto " + theme.spacing(2) + "px",
        },
        square: {
            borderRadius: 0,
        },
        center: {
            margin: 'auto',
        },
    });
});
var Cardv2 = function (_a) {
    var _b;
    var className = _a.className, _c = _a.classNames, classNames = _c === void 0 ? {} : _c, render = _a.render, contentProps = _a.contentProps, square = _a.square, rest = __rest(_a, ["className", "classNames", "render", "contentProps", "square"]);
    var classes = useStyles();
    var CardDivider = function (_a) {
        var dividerClasses = _a.classes, dividerClassName = _a.className, rest = __rest(_a, ["classes", "className"]);
        return (React.createElement(Divider, __assign({ classes: __assign({ root: cx(classes.divider, dividerClassName, classNames.divider) }, dividerClasses) }, rest)));
    };
    var CardHeader = function (_a) {
        var className = _a.className, others = __rest(_a, ["className"]);
        return (React.createElement(Typography, __assign({ className: cx(className, classes.header, classNames.header), variant: "h6", center: true, secondary: true }, others)));
    };
    return (React.createElement(Card, __assign({ className: cx(classes.root, className, classNames.card, (_b = {},
            _b[classes.square] = !!square,
            _b)) }, rest),
        React.createElement(CardContent, __assign({ classes: {
                root: classNames.content,
            } }, contentProps), render &&
            render({
                CardDivider: CardDivider,
                CardHeader: CardHeader,
            }))));
};
export default Cardv2;
//# sourceMappingURL=Card.js.map