import React from 'react'
import cx from 'classnames'
import { makeStyles } from '@material-ui/styles'
import { Field } from 'react-final-form'
import TextField from '@material-ui/core/TextField'
import CountryCodeField from './CountryCodeField'
import usePhoneNoField from './usePhoneNoField'
import countries from './countries'

export interface PhoneNumFieldProps {
  input: any
  meta: any
  phoneFieldName?: string
  countryCodeProps?: {
    className?: string
    inputProps?: any
    inputLabelProps?: any
    selectProps?: any
    wrapperProps?: any
  }
  phoneNumLabel?: string
  variant?: 'outlined' | 'standard' | 'filled'
}

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
  },
  phone: {
    flexGrow: 1,
  },
  phoneInput: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    '& fieldset': {
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
    },
  },
})

function PhoneNumField({
  input,
  countryCodeProps = {},
  phoneNumProps,
  phoneNumLabel,
  variant = 'standard',
  wrapperProps = {},
  countryCodeProps = {},
}: PhoneNumFieldProps) {
  const classes = useStyles()

  const { parseCountryCode, parsePhoneNum } = usePhoneNoField({
    input,
    phoneNum: input.value.phone_number || '',
  })

  return (
    <div {...wrapperProps} className={cx(classes.root, wrapperProps.className)}>
      <Field
        name={`${input.name}.code`}
        component={CountryCodeField}
        parse={parseCountryCode}
        render={({ input, meta }) => {
          const errMsg = meta.error || meta.submitError || ''
          return (
            <TextField
              error={!!errMsg}
              helperText={errMsg}
              margin="normal"
              variant={variant}
              {...countryCodeProps}
              InputProps={{
                ...countryCodeProps.inputProps,
                className: cx(classes.code, countryCodeProps.InputProps ? countryCodeProps.Input.className),
              }}
              InputLabelProps={{
                ...countryCodeProps.inputLabelProps,
                shrink: true,
              }}
              SelectProps={{
                displayEmpty: true,
                native: true,
                ...countryCodeProps.selectProps,
              }}
              select
              {...input}
            >
              {countries.codes.map((code) => (
                <option key={code} value={code}>
                  {`${code} +${countries.mapper[code].phone_code}`}
                </option>
              ))}
            </TextField>
          )
        }}
        allowNull
        {...countryCodeProps}
      />
      <Field
        name={`${input.name}.phone_number`}
        parse={parsePhoneNum}
        render={({ input, meta }) => {
          const errMsg = meta.error || meta.submitError || ''
          return (
            <TextField
              className={classes.phone}
              margin="normal"
              label={phoneNumLabel}
              InputProps={{ className: classes.phoneInput }}
              InputLabelProps={{ shrink: true }}
              error={!!errMsg}
              helperText={errMsg || ''}
              variant={variant}
              {...input}
              {...phoneNumProps}
            />
          )
        }}
        allowNull
      />
    </div>
  )
}

export default PhoneNumField
