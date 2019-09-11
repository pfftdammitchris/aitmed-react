import {
  AsYouType,
  isValidNumberForRegion,
  parsePhoneNumberFromString,
  PhoneNumber,
  // types below
  CountryCode,
} from 'libphonenumber-js'

// This function will format the phone number by country code for display
export function formatPhoneNo(
  countryCode: CountryCode,
  phoneNo: string,
): string {
  return new AsYouType(countryCode).input(phoneNo)
}

// The phone code should be number only
export function getPhoneNo(phone: string): PhoneNumber | undefined {
  return parsePhoneNumberFromString(phone)
}

// This will reformat the phone number as `+{country_code} {phone_number}`
export async function generatePhoneNumber(
  countryCode: string,
  phoneNumber: string,
): Promise<string> {
  if (!countryCode && phoneNumber) return ''
  //@ts-ignore
  const asYouType = new AsYouType(countryCode)
  await asYouType.input(phoneNumber)
  const { countryCallingCode, nationalNumber } = await asYouType.getNumber()
  return `+${countryCallingCode} ${nationalNumber}`
}

export async function phoneNumberValidation(
  countryCode: CountryCode,
  phoneNo: string,
): Promise<[boolean, string]> {
  let message = ''
  const isValidPhoneNumber = await isValidNumberForRegion(countryCode, phoneNo)
  if (!isValidPhoneNumber) {
    message = 'The mobile number is invalid.'
  }
  return [isValidPhoneNumber, message]
}
