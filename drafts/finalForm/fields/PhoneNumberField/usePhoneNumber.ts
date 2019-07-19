import { useCallback, useEffect } from 'react'

import { generateCountryCodeSelectItems, formatPhoneNumber } from './util'

import { Hook, FieldParseFunction } from './types'

const DEFAULT_COUNTRY_CODE = 'US'

const usePhoneNumber: Hook = ({
  form,
  fieldName,
  countryCodeName,
  countryCode,
  phoneNumberName,
  phoneNumber,
}) => {
  useEffect(() => {
    if (form && !countryCode) {
      form.change(`${fieldName}.${countryCodeName}`, DEFAULT_COUNTRY_CODE)
    }
  }, [form, countryCode, fieldName, countryCodeName])

  const parsePhoneNumber: FieldParseFunction = useCallback(
    (value, name) => {
      const trimValue = value.trim()
      let phone
      // If deleting a non number character
      if (trimValue.length < phoneNumber.length && !/(\d)$/.test(phoneNumber)) {
        phone = trimValue
      } else {
        phone = formatPhoneNumber(countryCode, trimValue)
      }

      return phone
    },
    [countryCode, phoneNumber],
  )

  const parseCountryCode: FieldParseFunction = useCallback(
    (value, name) => {
      const phone = formatPhoneNumber(value, phoneNumber)
      form.change(`${fieldName}.${phoneNumberName}`, phone)
      return value
    },
    [form, fieldName, phoneNumberName, phoneNumber],
  )

  return {
    countryCodeSelectItems: generateCountryCodeSelectItems(),
    parsePhoneNumber,
    parseCountryCode,
  }
}

export default usePhoneNumber
