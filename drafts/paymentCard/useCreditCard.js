import React from 'react'
import PropTypes from 'prop-types'
import Payment from 'payment/dist'
import { states } from 'util/info'

const clearNumber = (value = '') => {
  return value.replace(/\D+/g, '')
}

const useCreditCard = () => {
  // For <Cards />
  // focused {string}: Focused card field. name|number|expiry|cvc
  const getActive = (active) => {
    return active === 'billing_first_name'
      ? 'name'
      : active === 'billing_last_name'
      ? 'name'
      : active === 'card_number'
      ? 'number'
      : active === 'month'
      ? 'expiry'
      : active === 'year'
      ? 'expiry'
      : active === 'cvv_code'
      ? 'cvc'
      : active
  }

  // Create a years list with 20 years from current year
  const currentYear = new Date().getFullYear()
  const appendToYear = (val, index) => `${index + currentYear}`
  const years = Array.from(new Array(20), appendToYear)
  // prettier-ignore
  const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']

  // Parse Functions
  const [issuer, setIssuer] = React.useState('')
  const parseCardNumber = (value) => {
    const issuer = Payment.fns.cardType(value)
    setIssuer(issuer)
    const newValue =
      issuer === 'amex'
        ? `${value.slice(0, 4)} ${value.slice(4, 10)} ${value.slice(10, 15)}`
        : issuer === 'dinersclub'
        ? `${value.slice(0, 4)} ${value.slice(4, 10)} ${value.slice(10, 14)}`
        : `${value.slice(0, 4)} ${value.slice(4, 8)} ${value.slice(
            8,
            12,
          )} ${value.slice(12, 19)}`
    return newValue.trim()
  }
  const parse = (value, name) => {
    const clearValue = clearNumber(value)

    return !clearValue
      ? value
      : name === 'card_number'
      ? parseCardNumber(clearValue)
      : name === 'cvv_code'
      ? `${clearValue.slice(0, issuer === 'amex' ? 4 : 3)}`.trim()
      : name === 'billing_zip_code'
      ? `${clearValue.slice(0, 5)}`.trim()
      : value
  }

  // Generate Card Props
  const getCardProps = (values = {}) => {
    const {
      card_number: number = '',
      billing_first_name = '',
      billing_last_name = '',
      month = '',
      year = '',
      cvv_code: cvc = '',
    } = values
    return {
      number,
      name: `${billing_first_name}${
        billing_last_name ? ` ${billing_last_name}` : ''
      }`,
      expiry: `${month}/${year}`,
      cvc,
    }
  }

  const validate = (values) => {
    const errors = {}
    // Check Required
    const requiredList = [
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
    requiredList.map((name) => {
      if (!values[name]) {
        errors[name] = 'Required'
      }
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

  return {
    parse,
    getCardProps,
    getActive,
    months,
    years,
    states,
    validate,
  }
}

useCreditCard.propTypes = {}

export default useCreditCard
