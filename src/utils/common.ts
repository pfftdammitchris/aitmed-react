import formatString from 'format-string-by-pattern'

export function callAll(...fns: any[]) {
  return (...args: any[]) => fns.forEach((fn) => fn && fn(...args))
}

export function compose(...fns: any[]) {
  return (...args: any[]) => fns.reduce((acc, fn) => fn(acc), args)
}

export function downloadLink(src: string, fileName: string = 'file') {
  const browser = getBrowser()
  if (browser.versions.ios) {
    window.open(src, fileName)
  } else {
    const dlink = document.createElement('a')
    dlink.download = fileName
    dlink.href = src
    document.body.appendChild(dlink)
    dlink.click()
    document.body.removeChild(dlink)
  }
}

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

export function getBrowser() {
  const o: any = { versions: {}, language: null }
  if (typeof window !== 'undefined') {
    if (navigator && navigator.geolocation !== undefined) {
      const u = navigator.userAgent
      o.versions = {
        trident: u.indexOf('Trident') > -1, // IE core
        presto: u.indexOf('Presto') > -1, // opera core
        webKit: u.indexOf('AppleWebKit') > -1, // apple、google core
        gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') === -1, // firefox core
        mobile: !!u.match(/AppleWebKit.*Mobile.*/), // is mobile
        ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), // is ios
        android: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1, // is android
        iPhone: u.indexOf('iPhone') > -1, // is iPhone
        iPad: u.indexOf('iPad') > -1, // is iPad
        webApp: u.indexOf('Safari') === -1, // is web app
      }
      o.language = navigator.language ? navigator.language.toLowerCase() : ''
    }
  }
  return o
}

export function isArray(val: any): val is Array<any> {
  return Array.isArray(val)
}

export function isBlob(blob: any) {
  return !!blob && blob.constructor.name === 'Blob'
}

export function isFile(file: any) {
  return !!file && file.constructor.name === 'File'
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
