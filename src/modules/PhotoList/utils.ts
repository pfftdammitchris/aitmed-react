import format from 'date-fns/format'
import {
  getReadableSizeFromBytes,
  isArray,
  isBlob,
  isObject,
  isString,
  resolveExt as resolveExtStr,
  resolveFilename as resolveFilenameStr,
} from '../../utils'

// return format: '092619_011113_PM'
export function getDefaultFilename(customFormat?: string): string {
  return format(new Date(), customFormat || 'MMddyy_hhmmss_a')
}

export function getStringItem(src: string) {
  return {
    src,
    filename: resolveFilename(src),
    ext: resolveExt(src),
  }
}

export function getBlobItem(blob: Blob) {
  let src
  if (typeof window !== 'undefined') {
    src = window.URL.createObjectURL(blob)
  }
  return {
    src,
    filename: resolveFilename(blob),
    description: getReadableSizeFromBytes(blob.size),
    ext: resolveExt(blob),
  }
}

export function getUserObjectItem(item: any) {
  return {
    ...item,
    src: item.src,
    filename: resolveFilename(item),
    ext: resolveExt(item),
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
        return getUserObjectItem(item)
      }
    })
  }
  return []
}

// Returns the ext ensuring a prefixed dot. Otherwise returns empty str
export function resolveExt(item: any): string {
  if (isString(item)) {
    return resolveExtStr(item)
  } else if (isBlob(item)) {
    const slashIndex = item.type.indexOf('/')
    return slashIndex > -1
      ? `.${item.type.substring(slashIndex + 1)}`
      : `.${item.type}`
  } else if (isObject(item)) {
    if (isString(item.src)) {
      // If it's a link, theres almost always the extension included which is reliable
      // Also, item.src can be a huge data URI string so we will not use it to get the file ext
      if (item.src.startsWith('http')) {
        const result = resolveExtStr(item.src)
        if (result) {
          return result
        }
      }
    }
    return resolveExtStr(item.ext || item.filename)
  }
  return ''
}

export function resolveFilename(item: any): string {
  if (isString(item)) {
    if (item.startsWith('http')) {
      const result = resolveFilenameStr(item)
      if (result) {
        return result
      }
    }
    return getDefaultFilename()
  } else if (isBlob(item)) {
    // Use the existing filename if its already provided
    if (item.filename) {
      return item.filename
    }
  } else if (isObject(item)) {
    if (item.src.startsWith('http')) {
      const result = resolveFilenameStr(item.src)
      if (result) {
        return result
      }
    }
    if (item.filename) {
      return item.filename
    }
  }
  return getDefaultFilename()
}
