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
import cx from 'classnames';
import { makeStyles, useTheme } from '@material-ui/styles';
import Signature from 'react-signature-canvas';
import Typography from 'components/Typography';
import Button from 'components/Button';
import Flex from 'components/Flex';
var useStyles = makeStyles(function (theme) {
    var _a;
    return ({
        root: {
            position: 'relative',
        },
        contentRoot: {
            position: 'relative',
            width: '100%',
            '& h2': {
                fontWeight: 700,
                padding: '12px 12px 0',
            },
            '& label': {
                fontSize: '3.5em !important',
                fontWeight: 500,
            },
            borderBottom: '2px solid #000',
            display: 'flex',
            alignItems: 'flex-end',
        },
        x: {
            position: 'relative',
            bottom: 15,
            userSelect: 'none',
            display: 'inline-block',
        },
        canvasContainer: {
            width: '100%',
        },
        canvas: (_a = {
                width: '90%',
                height: 90
            },
            _a[theme.breakpoints.down('xs')] = {
                width: '100%',
            },
            _a),
        clearBtn: {
            position: 'absolute',
            right: 0,
            bottom: -30,
            zIndex: 9999,
            padding: '0 !important',
            margin: '0 !important',
            fontSize: 9.8,
            minHeight: 0,
            height: 20,
        },
    });
});
/*
  An HTML canvas element used for signing purposes like forms.
  It just requires an onChange prop to update props.value, and signatureRef to grab a reference to it.
  The parent decides how to compute the state by passing in value and onChange as props.
  You can clear the canvas using the .clear() method by using the reference to the canvas.
  Supports react-final-form by applying input.value and input.onChange to props.value and props.onChange
*/
var FinalFormSignatureCanvas = function (_a) {
    var input = _a.input, meta = _a.meta, canvasContainerProps = _a.canvasContainerProps, canvasProps = _a.canvasProps, clearBtnProps = _a.clearBtnProps, className = _a.className, _b = _a.classNames, classNames = _b === void 0 ? {} : _b, clearSignature = _a.clearSignature, hideClear = _a.hideClear, onChange = _a.onChange, onDrawEnd = _a.onDrawEnd, penColor = _a.penColor, signatureRef = _a.signatureRef, signatureInputRef = _a.signatureInputRef, signatureCaption = _a.signatureCaption, signatureLabel = _a.signatureLabel, value = _a.value, xProps = _a.xProps;
    var classes = useStyles();
    var theme = useTheme();
    // Pass input ref to outside, so input value can be change from outside
    if (signatureInputRef)
        signatureInputRef.current = input;
    var _c = React.useState(''), trimmedDataUrl = _c[0], setTrimmedUrl = _c[1];
    if (onChange == undefined && (!!input && typeof input === 'object')) {
        value = input.value;
        onChange = input.onChange;
    }
    else {
        console.warn('Warning: You tried to set value and onChange with "input.value" and "input.onChange" ' +
            'but input was null or undefined');
    }
    var onDraw = function () {
        if (!value && typeof onChange === 'function')
            onChange(true);
        // @ts-ignore
        if (signatureRef.current) {
            // @ts-ignore
            setTrimmedUrl(signatureRef.current.toDataURL('image/png'));
        }
        else {
            console.warn('Tried to set the new drawing on canvas but signatureRef.current was null or undefined');
        }
    };
    var clear = function () {
        if (typeof onChange === 'function')
            onChange(false);
        // @ts-ignore
        if (signatureRef.current != null)
            signatureRef.current.clear();
        else if (typeof clearSignature === 'function')
            clearSignature();
        else {
            console.warn('Tried to clear the signature but no clearSignature function or signatureRef was available');
        }
    };
    return (React.createElement("div", { className: classes.root },
        React.createElement("div", { className: classes.contentRoot },
            React.createElement(Flex, { flexDirection: "column" },
                React.createElement(Typography, __assign({ className: cx(classes.x, classNames.x), variant: "h2" }, xProps), "X"),
                React.createElement(Typography, { variant: "caption", style: { position: 'absolute', bottom: 0, left: 0 } }, signatureLabel || 'Signature')),
            React.createElement("div", __assign({ className: cx(classes.canvasContainer, classNames.canvasContainer) }, canvasContainerProps), trimmedDataUrl && meta.submitting ? (React.createElement("img", { className: cx(classes.canvas, classNames.canvas, className), src: trimmedDataUrl })) : (React.createElement(Signature, __assign({ className: cx(classes.canvas, classNames.canvas, className), ref: signatureRef, penColor: penColor || theme.palette.secondary.dark, clearOnResize: false, onEnd: onDrawEnd || onDraw, clearButton: true, canvasProps: {
                    className: cx(classes.canvas, classNames.canvas, className),
                } }, canvasProps))))),
        meta && meta.touched && meta.error && (React.createElement(Typography, { variant: "caption", error: true }, meta.error)),
        React.createElement(Typography, { variant: "caption" },
            React.createElement("strong", null, "Note"),
            ": Changes in screen size or screen orientation will disrupt the cursor positioning behavior. If this happens, clear the signature by clicking on the \"Clear\" button and try again."),
        !hideClear && !!value && (React.createElement(Button, __assign({ id: "clear-button", className: classes.clearBtn, onClick: clear, hover: { secondary: 'white' }, secondary: true }, clearBtnProps), "Clear")),
        signatureCaption));
};
export default FinalFormSignatureCanvas;
//# sourceMappingURL=SignatureCanvas.js.map