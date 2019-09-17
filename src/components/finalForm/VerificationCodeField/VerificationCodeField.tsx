import React from 'react'
import { Field, FieldRenderProps } from 'react-final-form'
import FormHelperText from '@material-ui/core/FormHelperText'
import useVerificationCodeField from './useVerificationCodeField'
import OutlinedTextField from '../OutlinedTextField'
import InputLabel from './InputLabel'

interface VerificationCodeProps extends FieldRenderProps<any, HTMLElement> {
  input: any
  meta: any
  autoFocus?: boolean
  digits?: number
  label?: React.ReactNode
  required?: boolean
  variant?: 'filled' | 'standard' | 'outlined'
  inputLabelProps?: any
  textFieldProps?: any
  errorTextProps?: any
}

function VerificationCodeField({
  autoFocus = false,
  input,
  meta,
  digits = 6,
  label,
  inputLabelProps = {},
  textFieldProps = {},
  errorTextProps = {},
  required = false,
  variant,
}: VerificationCodeProps) {
  const errorMessage = meta.error || meta.submitError || null
  const { getInputId, onChange, onKeyDown } = useVerificationCodeField({
    input,
  })

  return (
    <div>
      <InputLabel
        input={input}
        label={label}
        variant={variant}
        error={!!meta.error || !!meta.submitError || false}
        required={required}
        {...inputLabelProps}
      />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {new Array(digits).fill(undefined).map((_, index) => {
          const fieldName = getInputId(index)
          return (
            <Field
              key={fieldName}
              id={fieldName}
              name={fieldName}
              autoFocus={autoFocus && index === 0}
              component={OutlinedTextField}
              onChange={onChange(index)}
              onKeyDown={onKeyDown(index)}
              variant={variant}
              required={required}
              {...textFieldProps}
            />
          )
        })}
      </div>
      {errorMessage && (
        <FormHelperText variant={variant} error {...errorTextProps}>
          {errorMessage}
        </FormHelperText>
      )}
    </div>
  )
}

export default VerificationCodeField
