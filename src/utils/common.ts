import formatString from 'format-string-by-pattern'

export const callAll = (...fns: any[]) => (...args: any[]) =>
  fns.forEach((fn) => fn && fn(...args))

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

export function isArray(val: any): val is Array<any> {
  return Array.isArray(val)
}

export function isFunction(val: any): val is Function {
  return val instanceof Function
}

export function isNumber(val: any): val is number {
  return typeof val === 'number'
}

export function isObject(val: any): val is Object {
  if (Array.isArray(val) || isFunction(val)) return false
  return val instanceof Object
}

export function isString(val: any): val is string {
  return typeof val === 'string'
}

export function isUndefined(val: any): val is undefined {
  return typeof val === 'undefined'
}

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
    else if (isString(format)) {
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

export function getDisplayName(Component: any) {
  if (typeof Component === 'string') {
    return Component
  }
  if (!Component) {
    return undefined
  }
  return Component.displayName || Component.name || 'Component'
}
