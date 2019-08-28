import formatString from 'format-string-by-pattern'

/* -------------------------------------------------------
  ---- FORMATTERS (pass into "format" prop to <Field />)
  ----    update: These can also be passed as "parse" prop to <Field />
-------------------------------------------------------- */

// Strips away non-letters
export function formatOnlyLetters(val: string): string {
  if (!val) return val
  const regex = /^[a-zA-Z]/g
  return String(val).replace(regex, '')
}

// Strips away non-numbers
export function formatOnlyNumbers(val: string): string {
  if (!val) return val
  const regex = /[^\d]/g
  return String(val).replace(regex, '')
}

/* -------------------------------------------------------
  ---- PARSERS (pass into "parse" prop to <Field />)
-------------------------------------------------------- */

// Strips away non-numbers and returns the val in format --> +1 (626) 452-0559
export function parsePhone(val: string): string {
  const format = '+9 (999) 999-9999'
  return formatString(format, formatOnlyNumbers(val))
}

// Turns a string into a social security number format
export function parseSSN(val: string): string {
  const format = '999-99-9999'
  return formatString(format, formatOnlyNumbers(val))
}

/* -------------------------------------------------------
  ---- VALIDATORS (pass into "validate" prop to <Field />)
-------------------------------------------------------- */

export const validate = {
  NPI(str: string) {
    if (!str) return undefined
    if (str.length > 32) {
      return 'NPI cannot exceed 32 characters'
    }
    return undefined
  },
}
