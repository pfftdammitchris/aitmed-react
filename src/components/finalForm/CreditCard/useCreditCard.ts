import { useState } from 'react'
// @ts-ignore
import Payment from 'payment'
import { clearNumber } from './utils'

const useCreditCard = () => {
  const [issuer, setIssuer] = useState('')

  const parseCardNumber = (value: string) => {
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

  const parse = (value: string, name: string): string => {
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

  return {
    parse,
  }
}

export default useCreditCard
