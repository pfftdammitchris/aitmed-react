import Payment from 'payment'
import forEach from 'lodash/forEach'
import { CreditCard } from '../../../types'

export const clearNumber = (value = '') => value.replace(/\D+/g, '')

// Create a years list with 20 years from current year
export const currentYear = new Date().getFullYear()
// @ts-ignore
export const appendToYear = (val: any, index: number) =>
  `${index + currentYear}`
export const years = Array.from(new Array(20), appendToYear)

// Used to validate the credit card form
export const validate = (values: CreditCard): object => {
  const errors = {}
  const requiredList: string[] = [
    'card_number',
    'month',
    'year',
    'cvv_code',
    'billing_first_name',
    'billing_last_name',
    'billing_address',
    'billing_city',
    'billing_state',
    'billing_zip_code',
  ]

  forEach(requiredList, (name: string) => {
    if (!values[name]) errors[name] = 'Required'
    return null
  })

  const { card_number: cardNumber, month, year, cvv_code: cvc } = values

  const validCardNumber = Payment.fns.validateCardNumber(cardNumber)
  if (cardNumber && !validCardNumber) {
    errors['card_number'] = 'Card Number is invalid'
  }

  if (month && year && !Payment.fns.validateCardExpiry(month, year)) {
    errors['month'] = 'Expiration Date is invalid'
    errors['year'] = 'Expiration Date is invalid'
  }

  if (cvc) {
    const type = Payment.fns.cardType(cardNumber)
    if (!validCardNumber) {
      errors['cvv_code'] = 'Card Number is invalid'
    } else if (!Payment.fns.validateCardCVC(cvc, type)) {
      errors['cvv_code'] = 'CVV is invalid'
    }
  }

  return errors
}
