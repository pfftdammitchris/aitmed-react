import React from 'react';
interface Props {
    wrapperRootProps?: any;
    wrapperProps?: any;
    checkboxProps?: any;
    classes?: any;
    classNames?: any;
    label?: React.ReactNode;
    checked?: boolean;
    onChange: (e: any) => void;
    value: any;
    withTextField?: object | false;
    textField?: React.ReactNode;
}
declare const Checkbox: React.FC<Props>;
export default Checkbox;
