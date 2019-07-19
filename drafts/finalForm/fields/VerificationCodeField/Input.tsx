import React from "react";
import MuiTextField, { TextFieldProps } from "@material-ui/core/TextField";
import { FieldRenderProps } from "react-final-form";

// Input Component
const Input: React.FC<
  FieldRenderProps<any, HTMLElement> & {
    id: string;
    textFieldProps: TextFieldProps;
  }
> = ({ input, meta, textFieldProps, ...props }) => {
  return <MuiTextField {...input} {...textFieldProps} {...props} />;
};

export default Input;
