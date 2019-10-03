import format from 'date-fns/format'
import { OnClick } from '../../types'
import {
  commonIcons,
  getReadableSizeFromBytes,
  info,
  isArray,
  isBlob,
  isBoolean,
  isFunction,
  isObject,
  isString,
  resolveExt as resolveExtStr,
  resolveFilename as resolveFilenameStr,
} from '../../utils'
import {
  DebugStyles,
  PhotoListItem,
  PhotoListItemAction,
  PhotoListIconConfig,
  WrappedReturnedHofFn,
} from './types'

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

const debugStyles = {
  root: '1px solid red',
  actions: '1px solid blue',
  description: '1px solid teal',
  title: '1px solid magenta',
  visual: '1px solid green',
}

// Returns a border style like '1px solid red' or undefined
export function resolveDebugStyle(
  name: string,
  styles: DebugStyles,
): string | undefined {
  if (styles === false) {
    return
  }
  switch (name) {
    case 'root':
      return isBoolean(styles)
        ? debugStyles.root
        : styles.root || debugStyles.root
    case 'actions':
      return isBoolean(styles)
        ? debugStyles.actions
        : styles.actions || debugStyles.actions
    case 'description':
      return isBoolean(styles)
        ? debugStyles.description
        : styles.description || debugStyles.description
    case 'title':
      return isBoolean(styles)
        ? debugStyles.title
        : styles.title || debugStyles.title
    case 'visual':
      return isBoolean(styles)
        ? debugStyles.visual
        : styles.visual || debugStyles.visual
    default:
      return
  }
}

/*
Returns a component if one could be found. Otherwise returns undefined
Resolving algorithm:
  1. If this action is being overriden by props.icons, use component in props.icons
  2. Else use the component provided by the action if it exists
  3. Else check if this action is included in commonIcons
    3a. If it is:
      - Check if action.component exists and use it if it does
      - Else use the component in commonIcons
    3b. If it isn't:
      - Finally, use the component supposedly provided in the action
*/
export function resolveRenderAction(
  action: PhotoListItemAction,
  icons?: PhotoListIconConfig,
): React.ElementType<any> | undefined {
  let Component: React.ElementType<any> | undefined

  // First see if the dev provided a component in props.icons and use that instead
  if (icons && action.name && action.name in icons) {
    if (isFunction(action.component)) {
      Component = action.component
    }
  }
  if (Component == undefined) {
    // If the dev provided their own custom component, use that instead
    if (action.component) {
      Component = action.component
    } else {
      // If this is already included in our commonIcons obj
      if (action.name && action.name in commonIcons) {
        // If the dev provided their own custom component, give that one higher priority.
        if (action.component) {
          Component = action.component
        }
        // Otherwise just use the default component
        else {
          Component = commonIcons[action.name].component
        }
      } else {
        // Last resort to action.component
        Component = action.component
      }
    }
  }
  return Component
}

// Returns a component, otherwise returns undefined
export function resolveRenderVisual(
  ext: string,
  icons: PhotoListIconConfig,
): React.ElementType<any> | undefined {
  switch (ext) {
    case '.csv':
    case '.xlx':
      return (
        (icons.excel && icons.excel.component) || commonIcons.excel.component
      )
    case '.doc':
    case '.docx':
      return (icons.word && icons.word.component) || commonIcons.word.component

    case '.pdf':
      return (icons.pdf && icons.pdf.component) || commonIcons.pdf.component
    case '.psd':
      return (
        (icons.photoshop && icons.photoshop.component) ||
        commonIcons.photoshop.component
      )
    case '.txt':
      return (icons.txt && icons.txt.component) || commonIcons.txt.component
    case '.rtf':
      return (icons.rtf && icons.rtf.component) || commonIcons.rtf.component
    // Audio
    case '.aif':
    case '.cda':
    case '.mid':
    case '.midi':
    case '.mp3':
    case '.mpa':
    case '.ogg':
    case '.wav':
    case '.wma': {
      // IIFE returning the component
      return (function() {
        for (let i = 0; i < info.audioExts.length; i++) {
          const _ext = info.audioExts[i]
          if (icons[_ext] && icons[_ext].component) {
            return icons[_ext].component
          }
        }
        return commonIcons[ext.replace('.', '')].component
      })()
    }
    // Compressed files
    case '.7z':
    case '.rar':
    case '.zip':
    case '.rpm': {
      return (function() {
        for (let i = 0; i < info.compressedExts.length; i++) {
          const _ext = info.compressedExts[i]
          if (icons[_ext] && icons[_ext].component) {
            return icons[_ext].component
          }
        }
        return commonIcons[ext.replace('.', '')].component
      })()
    }
    default: {
      return
    }
  }
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

export function wrapHofOnClick(callback?: Function): WrappedReturnedHofFn {
  return function(options: {
    item: PhotoListItem
    index: number
  }): OnClick | undefined {
    if (!isFunction(callback)) {
      return
    }
    return function(e): void {
      if (isFunction(callback)) {
        callback(options, e)
      }
    }
  }
}
