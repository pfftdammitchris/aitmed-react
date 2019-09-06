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
