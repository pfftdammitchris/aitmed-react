import React from 'react'
import { FieldRenderProps } from 'react-final-form'
import OriginalOutlinedTextField from '../../OutlinedTextField'
import DatePicker from '../../DatePicker'
import InputAdornment from './InputAdornment'
import Typography from '../../Typography'

interface FinalFormOutlinedTextFieldProps
  extends FieldRenderProps<any, HTMLElement> {
  input: any
  meta: any
  inputProps?: any
  errorProps?: any
}

const FinalFormOutlinedTextField: React.FC<FinalFormOutlinedTextFieldProps> = ({
  input,
  meta,
  errorProps = {},
  inputProps = {},
  ...otherProps
}) => {
  // Override input.type for more control (ex: for show/hide passwords)
  const [inputType, setInputType] = React.useState(input && input.type)

  // Experimenting the date picker
  if (input && input.type === 'date') {
    return <DatePicker {...input} {...inputProps} {...otherProps} />
  }

  // This is to avoid endAdornment being passed to Select
  const additionalInputProps: any = {}
  if (inputProps.endAdornment || (input && input.type === 'password')) {
    additionalInputProps.endAdornment = (
      <InputAdornment
        isNull={inputProps.endAdornment === null}
        originalInputType={input && input.type}
        inputType={inputType}
        setInputType={setInputType}
      />
    )
  }

  return (
    <>
      <OriginalOutlinedTextField
        {...input}
        {...otherProps}
        inputProps={{
          type: inputType,
          variant: 'outlined',
          margin: 'dense',
          ...inputProps,
          ...additionalInputProps,
        }}
      />
      {meta && meta.error && meta.touched && (
        <Typography variant="caption" error {...errorProps}>
          {meta.error}
        </Typography>
      )}
    </>
  )
}

export default FinalFormOutlinedTextField
