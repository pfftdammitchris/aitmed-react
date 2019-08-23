// withTextField" is meant to be used when you want a "key" in an object to determine if the checkbox
//    is checked or not. The value of the key should be a string which you can grab with innerRef and
//    merge the textfield value into it right before submitting.

//    This lets you make react final form checkboxes like this: -> { over13: '', insured: '' }
//        In this case, "over13" and "inspured" should be checked in the UI. To uncheck them, return a new
//            copy and "delete" the key from the new copy, then use that new object as the next form value

// For reference of a use case refer to: src/forms/PR2/ReasonsForForm.tsx
import React from 'react'
import MuiCheckbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import TextField from '@material-ui/core/TextField'

interface Props {
  wrapperRootProps?: any
  wrapperProps?: any
  checkboxProps?: any
  classes?: any
  classNames?: any
  label?: React.ReactNode
  checked?: boolean
  onChange: (e: any) => void
  value: any
  withTextField?: object | false
  textField?: React.ReactNode
}

const Checkbox: React.FC<Props> = ({
  wrapperRootProps,
  wrapperProps,
  checkboxProps,
  classNames,
  label,
  withTextField,
  textField,
  ...rest
}) => (
  <div style={{ flexGrow: 1 }} {...wrapperRootProps}>
    <FormControlLabel
      control={<MuiCheckbox classes={classNames} {...checkboxProps} />}
      label={label}
      {...rest}
    />
    {!textField && withTextField && <TextField {...withTextField} />}
    {textField}
  </div>
)

export default Checkbox
