import { isArray, isBlob, isObject, isString } from '../../utils'

export function getStringItem(src: string) {
  return {
    src,
  }
}

export function getBlobItem(item: Blob, options?: any) {
  const obj = { ...options }

  if (options.alt) obj.alt = options.alt
  if (options.title) obj.title = options.title

  switch (item.type) {
    case 'application/pdf':
    // use a PDF icon
    case 'application/json':
    // use a data icon?
    default:
      break
  }
}

export function processItems(items: any[]): any[] {
  if (isArray(items)) {
    return items.map((item: any) => {
      if (isString(item)) {
        return getStringItem(item)
      } else if (isBlob(item)) {
        return getBlobItem(item)
      } else if (isObject(item)) {
        return item
      }
    })
  }
  return []
}
