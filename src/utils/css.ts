import { isString } from './common'

export type CSSUnit = 'px' | 'rem' | 'em'

export function resolvePx(value: string | number, unit: CSSUnit = 'px') {
  // Assume they already provided the unit
  if (isString(value)) {
    return value
  }
  // Other assume we need to apply the unit for them (default: "px")
  else {
    return `${value}${unit}`
  }
}
