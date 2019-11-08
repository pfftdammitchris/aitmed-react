import { OnClick } from '../../types'
import { IconProps } from '../../utils/reactHelpers'

export type DebugStyles =
  | boolean
  | {
      root?: string
      title?: string
      description?: string
      actions?: string
      visual?: string
    }

export type PhotoListItemRaw =
  | string
  | File
  | Blob
  | {
      src?: string
      title?: string
      description?: string
      ext?: string
    }

export type PhotoListItem = {
  src: string
  ext: string
  filename: string
  title?: string
  alt?: string
  description?: string
  filesize?: string
}

export interface PhotoListIconConfig {
  [key: string]: {
    component?: React.ElementType<any>
    rounded?: boolean
  }
}

export type PhotoListItems = PhotoListItem[]

export interface PhotoListItemAction extends IconProps {
  name?: string
  component?: React.ElementType<any>
  onClick?: PhotoListItemActionOnClick
}

export type PhotoListItemActionOnClick = (
  options: { action: PhotoListItemAction; item: PhotoListItem; index: number },
  e: React.MouseEvent<HTMLElement>,
) => void

export type WrappedReturnedHofFn = (options: {
  item: PhotoListItem
  index: number
}) => OnClick | undefined

export type OnActionClick = (options: {
  action: PhotoListItemAction
  index: number
  item: PhotoListItem
}) => OnClick

export interface PhotoListFileObject {
  src: string
  ext: string
  type: string
  filename: string
}
