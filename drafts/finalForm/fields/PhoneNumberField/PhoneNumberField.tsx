import React from 'react'
import cx from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'

import { Field, FieldRenderProps, useForm } from 'react-final-form'

import usePhoneNumber from './usePhoneNumber'
import { Input, Select } from './fieldComponents'
import styles from './styles'
import { PhoneNumberFieldProps } from './types'

const COUNTRY_CODE_NAME = 'code'
const PHONE_NUMBER_NAME = 'phone'

const PhoneNumberWithoutStyles: React.FC<
  FieldRenderProps<any, HTMLElement> & {
    classes: any
  } & PhoneNumberFieldProps
> = ({
  input,
  meta,
  classes,
  countryCodeName = COUNTRY_CODE_NAME,
  countryCodeLabel,
  countryCodeTextFieldProps = {},
  phoneNumberName = PHONE_NUMBER_NAME,
  phoneNumberLabel,
  phoneNumberTextFieldProps = {},
  variant = 'standard',
  wrapperClasses = {},
}) => {
  const { name, value } = input
  const form = useForm()

  const {
    countryCodeSelectItems,
    parsePhoneNumber,
    parseCountryCode,
  } = usePhoneNumber({
    form,
    fieldName: name,
    countryCodeName,
    countryCode: value[countryCodeName],
    phoneNumberName,
    phoneNumber: value[phoneNumberName] || '',
  })

  const codeProps = {
    label: countryCodeLabel,
    margin: 'normal',
    variant,
    ...countryCodeTextFieldProps,
    InputProps: countryCodeTextFieldProps.InputProps
      ? {
          className: classes.code,
          ...countryCodeTextFieldProps.InputProps,
        }
      : {
          className: classes.code,
        },
    SelectProps: countryCodeTextFieldProps.SelectProps
      ? {
          displayEmpty: true,
          ...countryCodeTextFieldProps.SelectProps,
        }
      : {
          displayEmpty: true,
        },
  }

  const phoneProps = {
    label: phoneNumberLabel,
    margin: 'normal',
    variant,
    ...phoneNumberTextFieldProps,
    className: phoneNumberTextFieldProps.className
      ? cx(classes.phone, phoneNumberTextFieldProps.className)
      : classes.phone,
    InputProps: phoneNumberTextFieldProps.InputProps
      ? {
          className: classes.phoneInput,
          ...phoneNumberTextFieldProps.InputProps,
        }
      : {
          className: classes.phoneInput,
        },
  }

  return (
    <div className={cx(classes.root, wrapperClasses)}>
      <Field
        allowNull
        name={`${name}.${countryCodeName}`}
        // @ts-ignore
        component={Select}
        items={countryCodeSelectItems}
        parse={parseCountryCode}
        textFieldProps={codeProps}
      />
      <Field
        allowNull
        name={`${name}.${phoneNumberName}`}
        // @ts-ignore
        component={Input}
        parse={parsePhoneNumber}
        textFieldProps={phoneProps}
      />
    </div>
  )
}

const PhoneNumber = withStyles(styles)(PhoneNumberWithoutStyles)

const PhoneNumberField: React.FC<
  {
    name: string
  } & PhoneNumberFieldProps
> = ({ name, ...props }) => {
  return <Field name={name} component={PhoneNumber} {...props} />
}

export default PhoneNumberField
