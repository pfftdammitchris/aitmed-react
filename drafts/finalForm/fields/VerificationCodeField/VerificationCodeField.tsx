import React from 'react'
import cx from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'

import { Field } from 'react-final-form/dist'

import MuiGrid from '@material-ui/core/Grid'
import MuiInputLabel from '@material-ui/core/InputLabel'

import MuiFormHelperText from '@material-ui/core/FormHelperText'

import styles from './styles'
import { VerificationCodeFieldProps, VerificationCodeProps } from './types'

import Input from './Input'

import useVerificationCodeField from './useVerificationCodeField'

const VerificationCode: React.FC<VerificationCodeProps> = ({
  autoSubmit = false,
  autoFocus = false,
  input: { name },
  meta,
  classes,
  digits = 6,
  gridContainerProps = {},
  label,
  textFieldProps = {},
  variant = 'standard',
  required = false,
  wrapperClass,
  wrapperProps = {},
}) => {
  const errorMessage = meta.error || meta.submitError || null
  const {
    isFocused,
    digitsArray,
    onChange,
    onKeyDown,
  } = useVerificationCodeField({
    autoSubmit,
    digits,
    name,
  })

  return (
    <MuiGrid
      className={cx(classes.root, wrapperClass)}
      container
      direction="column"
      alignItems="flex-start"
      {...wrapperProps}
    >
      {label && (
        <MuiGrid item>
          <MuiInputLabel
            focused={!!isFocused}
            variant={variant}
            error={!!errorMessage}
            required={required}
          >
            {label}
          </MuiInputLabel>
        </MuiGrid>
      )}
      <MuiGrid item>
        <MuiGrid container {...gridContainerProps}>
          {digitsArray.map((digit, index) => {
            const fieldName = `${name}.${index}`
            return (
              <MuiGrid item key={fieldName}>
                <Field
                  id={fieldName}
                  autoFocus={autoFocus && index === 0}
                  // @ts-ignore
                  component={Input}
                  name={fieldName}
                  onChange={onChange(index)}
                  onKeyDown={onKeyDown(index)}
                  variant={variant}
                  required={required}
                  {...textFieldProps}
                />
              </MuiGrid>
            )
          })}
        </MuiGrid>
      </MuiGrid>
      {errorMessage && (
        <MuiGrid item>
          <MuiFormHelperText variant={variant} error>
            {errorMessage}
          </MuiFormHelperText>
        </MuiGrid>
      )}
    </MuiGrid>
  )
}

const VerificationCodeWithStyles = withStyles(styles)(VerificationCode)

const VerificationCodeField: React.FC<VerificationCodeFieldProps> = ({
  name,
  ...props
}) => {
  return <Field name={name} component={VerificationCodeWithStyles} {...props} />
}

export default VerificationCodeField
