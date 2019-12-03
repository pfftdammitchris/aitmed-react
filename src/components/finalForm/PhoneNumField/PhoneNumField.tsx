import * as React from 'react'
import cx from 'classnames'
import { makeStyles } from '@material-ui/styles'
import { Field } from 'react-final-form'
import { AsYouType } from 'libphonenumber-js'
import CountryCodeField from './CountryCodeField'
import Typography from '../../Typography'
import OutlinedTextField from '../OutlinedTextField'
import Synchronizer from './Synchronizer'

export interface PhoneNumFieldProps {
  input: any
  meta: any
  wrapperProps?: any
  countryFieldProps?: any
  phoneFieldProps?: any
}

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
  },
  phone: {
    width: '100%',
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
  meta,
  countryFieldProps = {},
  phoneFieldProps = {},
  wrapperProps = {},
}: PhoneNumFieldProps) {
  const classes = useStyles()

  const currentPhoneVal = input.value.phone_number || ''

  return (
    <div>
      <div
        {...wrapperProps}
        className={cx(classes.root, wrapperProps.className)}
      >
        <Synchronizer phoneKey={input.name} />
        <Field
          name={`${input.name}.code`}
          component={CountryCodeField}
          allowNull
          {...countryFieldProps}
        />
        <Field
          name={`${input.name}.phone_number`}
          parse={(value) => {
            const trimValue = value.trim()
            let phone
            // If deleting a non number character
            if (
              trimValue.length < currentPhoneVal.length &&
              !/(\d)$/.test(currentPhoneVal)
            ) {
              phone = trimValue
            } else {
              phone = new AsYouType(input.value.code).input(trimValue)
            }
            return phone
          }}
          {...phoneFieldProps}
          render={({ input: phoneInput, meta, ...rest }) => {
            const errMsg = meta.error || meta.submitError || ''
            return (
              <OutlinedTextField
                // @ts-ignore
                classes={{ root: classes.phone }}
                margin="normal"
                inputProps={{ className: classes.phoneInput }}
                inputLabelProps={{ shrink: true }}
                error={!!errMsg}
                helperText={errMsg || ''}
                {...phoneInput}
                {...rest}
              />
            )
          }}
          allowNull
        />
      </div>
      {meta && (meta.error || meta.submitError) && (
        <Typography variant="caption" error>
          {meta.error || meta.submitError}
        </Typography>
      )}
    </div>
  )
}

export default PhoneNumField
