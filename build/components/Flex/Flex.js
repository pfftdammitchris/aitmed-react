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
import cx from 'classnames';
var useStyles = makeStyles(function (theme) {
    var _a;
    return ({
        root: {},
        xsBlock: (_a = {},
            _a[theme.breakpoints.down('xs')] = {
                display: 'block !important',
                // Sometimes we do a "wrapperProps={{ marginRight: 3 }} for input components".
                //    This is used to restore it on a mobile screen
                '& fieldset': {
                    marginRight: 0,
                },
            },
            _a),
        spaced: {
            '& fieldset': {
                marginRight: 4,
            },
        },
    });
});
function computeJustify(props) {
    if (props.center)
        return 'center';
    if (props.spaceBetween)
        return 'space-between';
    if (props.spaceAround)
        return 'space-around';
    if (props.flexStart)
        return 'flex-start';
    if (props.flexEnd)
        return 'flex-end';
    return 'initial';
}
var Flex = function (props) {
    var _a;
    var classes = useStyles(props);
    var style = props.style, center = props.center, spaceBetween = props.spaceBetween, spaceAround = props.spaceAround, flexStart = props.flexStart, flexEnd = props.flexEnd, flexGrow = props.flexGrow, flexDirection = props.flexDirection, flexWrap = props.flexWrap, textAlign = props.textAlign, wrap = props.wrap, xsBlock = props.xsBlock, rest = __rest(props, ["style", "center", "spaceBetween", "spaceAround", "flexStart", "flexEnd", "flexGrow", "flexDirection", "flexWrap", "textAlign", "wrap", "xsBlock"]);
    return (React.createElement("div", __assign({ className: cx(classes.root, (_a = {},
            _a[classes.xsBlock] = !!xsBlock,
            _a)), style: __assign({ display: 'flex', justifyContent: computeJustify(props), alignItems: 'center', flexGrow: flexGrow,
            flexDirection: flexDirection,
            textAlign: textAlign, flexWrap: wrap ? 'wrap' : flexWrap }, style) }, rest)));
};
export default Flex;
//# sourceMappingURL=Flex.js.map