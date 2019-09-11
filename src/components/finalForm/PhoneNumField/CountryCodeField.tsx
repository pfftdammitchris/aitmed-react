import React from 'react'
import cx from 'classnames'
import { makeStyles } from '@material-ui/styles'
import TextField from '@material-ui/core/TextField'
import countries from './countries'
import { PHONE_KEY } from './PhoneNumField'

interface CountryCodeFieldProps {
  input: any
  meta: any
  phoneKey?: string
  variant?: 'string' | 'filled' | 'outlined'
  className?: string
  inputProps?: any
  inputLabelProps?: any
  selectProps?: any
}

const useStyles = makeStyles({
  code: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    '& fieldset': {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
      marginRight: -1,
    },
  },
})

function CountryCodeField({
  input,
  meta,
  phoneKey = PHONE_KEY,
  variant,
  className,
  inputProps,
  inputLabelProps,
  selectProps,
  ...rest
}: CountryCodeFieldProps) {
  const classes = useStyles()

  const errMsg = meta.error || meta.submitError || ''

  return (
    <TextField
      error={!!errMsg}
      helperText={errMsg}
      margin="normal"
      variant={variant}
      InputProps={{
        className: cx(classes.code, className),
        ...inputProps,
      }}
      InputLabelProps={{
        shrink: true,
        ...inputLabelProps,
      }}
      SelectProps={{
        displayEmpty: true,
        native: true,
        ...selectProps,
      }}
      select
      {...input}
      {...rest}
    >
      {countries.codes.map((code) => (
        <option key={code} value={code}>
          {`${code} +${countries.mapper[code].phone_code}`}
        </option>
      ))}
    </TextField>
  )
}

export default CountryCodeField
