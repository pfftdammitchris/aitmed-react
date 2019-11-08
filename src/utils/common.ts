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

// Returns the size in bytes
export function getBytesFromBase64(str: string): number | null {
  if (typeof str !== 'string') return null
  const length = str.length - (str.indexOf(',') + 1)
  const padding =
    str.charAt(str.length - 2) === '='
      ? 2
      : str.charAt(str.length - 1) === '='
      ? 1
      : 0
  return length * 0.75 - padding
}

export function getReadableSizeFromBytes(bytes: number | string): string {
  const units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
  let l = 0
  let n = parseInt(String(bytes), 10) || 0
  while (n >= 1024 && ++l) n /= 1024
  // include a decimal point and a tenths-place digit if presenting
  // less than ten of KB or greater units
  return n.toFixed(n < 10 && l > 0 ? 1 : 0) + ' ' + units[l]
}

export function isArray(val: any): val is Array<any> {
  return Array.isArray(val)
}

export function isBoolean(val: any): val is boolean {
  return typeof val === 'boolean'
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

export function isObject(val: any): val is object {
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

/*
  test cases:
    const name1 = 'hleoWorld.jpg'
    const name2 = 'https://github.com/sindresorhus/is-text-path.png'
    const name3 = '.'
    const name4 = 'c:/Users/pfftd/desktop/sindrea123_fas-.pdf'
    const name5 = 'nooneto.know.jpg'
    const name6 = 'https://asd.fsafsaf.jp.com/fsafsafsa43434_-adw.pnga'
    const name7 = 'https://sadas24ijadcom/3434/0-_)-__jpg'
*/

// Returns file ext or an empty string
export function resolveExt(str: string): string {
  let result = ''
  if (str) {
    const dotIndex = str.lastIndexOf('.')
    if (dotIndex > -1) {
      result = str.slice(dotIndex)
      if (result === '.') {
        return ''
      }
    }
  }
  return result
}

// Returns file name or an empty string
export function resolveFilename(str: string, defaultName?: string): string {
  let result = str
  let dotIndex = str.lastIndexOf('.')
  const regex = /^.*(\\|\/|\:)/g

  if (dotIndex > -1) {
    result = result.substring(result.lastIndexOf('/') + 1)
    dotIndex = result.lastIndexOf('.')
    result = result.substring(0, dotIndex)
    if (result) {
      return result === '.' ? '' : result
    } else {
      return ''
    }
  }
  result = result.replace(regex, '')
  if (result) {
    return result
  }
  return defaultName || ''
}
