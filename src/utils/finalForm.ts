import formatString from 'format-string-by-pattern'
import isFunction from 'lodash/isFunction'
import { formatOnlyNumbers } from './common'

/* -------------------------------------------------------
  ---- PARSERS (pass into "parse" prop to <Field />)
-------------------------------------------------------- */

// Strips away non-numbers and returns the val in format --> +1 (626) 452-0559
export function parsePhone(
  val: string,
  formatter?: (val: string) => string | string,
): string {
  let format = '+9 (999) 999-9999'
  if (formatter != undefined) {
    if (isFunction(formatter)) {
      format = formatter(val)
    } else if (typeof formatter === 'string') {
      format = formatter
    }
  }
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
