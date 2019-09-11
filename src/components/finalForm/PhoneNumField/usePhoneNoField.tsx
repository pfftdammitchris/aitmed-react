import React from 'react'
import { useForm } from 'react-final-form'
import { AsYouType } from 'libphonenumber-js'

const DEFAULT_COUNTRY_CODE = 'US'

function usePhoneNoField({
  input,
  phoneNum,
}: {
  input: any
  phoneNum: string
}) {
  const form = useForm()

  const parseCountryCode = React.useCallback(
    (value) => {
      const newPhoneNum = new AsYouType(value).input(phoneNum)
      form.change(`${input.name}.phone_number`, newPhoneNum)
      return value
    },
    [form, input.name, phoneNum],
  )

  const parsePhoneNum = React.useCallback(
    (value) => {
      const trimValue = value.trim()
      let phone
      // If deleting a non number character
      if (trimValue.length < phoneNum.length && !/(\d)$/.test(phoneNum)) {
        phone = trimValue
      } else {
        phone = new AsYouType(input.value.code).input(trimValue)
      }
      return phone
    },
    [input.value.code, phoneNum],
  )

  React.useEffect(() => {
    if (form && !input.value.countryCode) {
      form.change(`${input.name}.code`, DEFAULT_COUNTRY_CODE)
    }
  }, [form, input.value.code, input.name])

  return {
    parsePhoneNum,
    parseCountryCode,
  }
}

export default usePhoneNoField
