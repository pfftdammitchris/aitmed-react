import {
  AsYouType,
  isValidNumberForRegion,
  parsePhoneNumberFromString,
  PhoneNumber,
} from 'libphonenumber-js'

import countries from './countries'

/**
 * This function will return the country code by phone code
 * @param phoneCode - The phone code should be number only
 */
export const getPhoneNumber = (phone: string): PhoneNumber | undefined => {
  return parsePhoneNumberFromString(phone)
}

/**
 * This function will generate array for select field
 */
export const generateCountryCodeSelectItems = (): {
  label: string
  value: string
}[] => {
  const { codes, mapper } = countries
  return codes.map((code) => {
    return { label: `${code} +${mapper[code].phone_code}`, value: code }
  })
}

/**
 * This function will format the phone number by country country code for display
 * @param country_code
 * @param phone_number
 */
export const formatPhoneNumber = (
  country_code: string,
  phone_number: string,
): string => {
  //@ts-ignore
  return new AsYouType(country_code).input(phone_number)
}

/**
 * This function will generate the phone number as `+{country_code} {phone_number}`
 * @param country_code
 * @param phone_number
 */
export const generatePhoneNumber = async (
  country_code: string,
  phone_number: string,
): Promise<string> => {
  //@ts-ignore
  const asYouType = new AsYouType(country_code)
  await asYouType.input(phone_number)
  const { countryCallingCode, nationalNumber } = await asYouType.getNumber()

  return `+${countryCallingCode} ${nationalNumber}`
}

/**
 *
 * @param country_code
 * @param phone_number
 */
export const phoneNumberValidation = async (
  country_code: string,
  phone_number: string,
): Promise<[boolean, string]> => {
  let message = ''
  const isValidPhoneNumber = await isValidNumberForRegion(
    phone_number,
    // @ts-ignore
    country_code,
  )
  if (!isValidPhoneNumber) {
    message = 'The mobile number is invalid.'
  }
  return [isValidPhoneNumber, message]
}
