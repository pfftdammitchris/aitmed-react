import * as React from 'react'
import cx from 'classnames'
import { makeStyles } from '@material-ui/styles'
import { Field } from 'react-final-form'
import { AsYouType } from 'libphonenumber-js'
import CountryCodeField from './CountryCodeField'
import Typography from '../../Typography'
import OutlinedTextField from '../OutlinedTextField'
import Synchronizer from './Synchronizer'
import { getPhoneFieldProps, parsePhoneField } from './utils'

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
          parse={parsePhoneField({ currentPhoneVal, input })}
          {...phoneFieldProps}
          render={({ input: phoneInput, meta, ...userProps }) => {
            const errMsg = meta.error || meta.submitError || ''
            return (
              <OutlinedTextField
                {...getPhoneFieldProps({
                  classes,
                  errMsg,
                  userProps,
                })}
                {...phoneInput}
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
