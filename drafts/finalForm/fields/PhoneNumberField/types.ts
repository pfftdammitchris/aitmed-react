import { FormApi } from 'final-form'

import { TextFieldProps } from '@material-ui/core/TextField'

export interface PhoneNumberFieldProps {
  countryCodeName?: string
  countryCodeLabel?: string
  countryCodeTextFieldProps?: TextFieldProps
  phoneNumberName?: string
  phoneNumberLabel?: string
  phoneNumberTextFieldProps?: TextFieldProps
  variant?: 'standard' | 'outlined' | 'filled'
  wrapperClasses?: object
}

interface HookProps {
  form: FormApi
  fieldName: string
  countryCodeName: string
  countryCode: string
  phoneNumberName: string
  phoneNumber: string
}
interface HookReturn {
  countryCodeSelectItems: { label: string; value: string }[]
  parsePhoneNumber: FieldParseFunction
  parseCountryCode: FieldParseFunction
}
export type Hook = (props: HookProps) => HookReturn

export type FieldParseFunction = (value: any, name: string) => any
