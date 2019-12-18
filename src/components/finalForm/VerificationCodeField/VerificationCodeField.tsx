import * as React from 'react'
import { Field, FieldRenderProps } from 'react-final-form'
import FormHelperText from '@material-ui/core/FormHelperText'
import Flex from '../../Flex'
import useVerificationCodeField from './useVerificationCodeField'
import InputLabel from './InputLabel'
import CodeInput from './CodeInput'

export interface VerificationCodeProps
  extends FieldRenderProps<any, HTMLElement> {
  component?: React.ElementType<any>
  input: any
  meta: any
  autoFocus?: boolean
  autoSubmit?: boolean
  digits?: number
  label?: React.ReactNode
  required?: boolean
  variant?: 'filled' | 'standard' | 'outlined'
  inputLabelProps?: any
  textFieldProps?: any
  errorTextProps?: any
}

function onValidate(value: string) {
  if (!value) {
    return 'This field is required'
  }
  return undefined
}

function VerificationCodeField({
  component: Component = 'div',
  autoFocus = false,
  autoSubmit = false,
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
  const {
    getInputElem,
    getInputId,
    focusNext,
    focus,
  } = useVerificationCodeField({
    input,
    autoSubmit,
  })

  return (
    <Component>
      <InputLabel
        input={input}
        label={label}
        variant={variant}
        error={!!meta.error || !!meta.submitError || false}
        required={required}
        {...inputLabelProps}
      />
      <Flex>
        {new Array(digits).fill(null).map((_, index) => {
          //  getInputId => `${input.name}[${index}]`
          const fieldName = getInputId(index)
          return (
            <Field
              key={fieldName}
              id={fieldName}
              name={fieldName}
              index={index}
              autoFocus={autoFocus && index === 0}
              component={CodeInput}
              variant={variant}
              required={required}
              validate={required ? onValidate : undefined}
              focusNext={focusNext}
              getInputElem={getInputElem}
              getInputId={getInputId}
              focus={focus}
              size="small"
              {...textFieldProps}
            />
          )
        })}
      </Flex>
      {errorMessage && (
        <FormHelperText variant={variant} error {...errorTextProps}>
          {errorMessage}
        </FormHelperText>
      )}
    </Component>
  )
}

export default VerificationCodeField
