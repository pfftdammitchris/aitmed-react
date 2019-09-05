import formatString from 'format-string-by-pattern'
import isFunction from 'lodash/isFunction'
import isObject from 'lodash/isObject'
import isString from 'lodash/isString'
import { formatOnlyNumbers } from './common'

/* -------------------------------------------------------
  ---- PARSERS (pass into "parse" prop to <Field />)
-------------------------------------------------------- */

type Formatter = (val: string) => string

interface FormatOptions {
  format?: string
  formatter?: Formatter
  defaultFormat?: string
  wrap?: Function
}

const defaultPhoneFormat = '+9 (999) 999-9999'
const defaultSSNFormat = '999-99-9999'
// If the user passes
function evalCustomFormatter({
  defaultFormat,
  format,
  formatter,
  wrap,
}: FormatOptions) {
  return function(val: string): string {
    // Evaluate the formatter function first (give it higher specificity)
    if (isFunction(formatter)) {
      format = formatter(val) || format || defaultFormat
    }
    // Else evaluate the string afterwards
    else if (format && isString(format)) {
      return formatString(format, wrap ? wrap(val) : val)
    }
    return ''
  }
}

// Strips away non-numbers and returns the val in format --> +1 (626) 452-0559
export function parsePhone(
  val: string | FormatOptions,
  // formatter?: (val: string) => string | string,
): Formatter | string {
  let format = defaultPhoneFormat
  if (isObject(val)) {
    return evalCustomFormatter({ ...val, wrap: formatOnlyNumbers })
  }
  return formatString(format, formatOnlyNumbers(val))
}

// Turns a string into a social security number format
export function parseSSN(val: string | FormatOptions): Formatter | string {
  if (isObject(val)) {
    return evalCustomFormatter({ ...val, wrap: formatOnlyNumbers })
  }
  return formatString(defaultSSNFormat, formatOnlyNumbers(val))
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
