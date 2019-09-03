import React from 'react';
interface SignatureCanvasProps {
    input?: {
        value?: boolean;
        onChange: (value: boolean) => void;
    };
    meta?: any;
    value?: boolean;
    onChange?: (value: boolean) => void;
    canvasContainerProps?: any;
    canvasProps?: any;
    className?: string;
    classNames?: {
        x?: string;
        canvasContainer?: string;
        canvas?: string;
        clearBtn?: string;
    };
    clearBtnProps?: any;
    clearSignature?: () => void;
    hideClear?: boolean;
    onDrawEnd?: () => void;
    penColor?: string;
    signatureRef?: {
        current: null | any;
    };
    signatureInputRef?: {
        current: null | any;
    };
    signatureCaption?: React.ReactNode;
    signatureLabel?: React.ReactNode;
    xProps?: any;
}
declare const FinalFormSignatureCanvas: React.FC<SignatureCanvasProps>;
export default FinalFormSignatureCanvas;
