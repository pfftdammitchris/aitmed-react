import { IconProps } from '../../utils/reactHelpers'

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
  {
    action,
    item,
    index,
  }: { action: PhotoListItemAction; item: PhotoListItem; index: number },
  e: React.MouseEvent<HTMLElement>,
) => void

export type OnVisualClick = (
  {
    item,
    index,
  }: {
    item: PhotoListItem
    index: number
  },
  e: React.MouseEvent<HTMLElement>,
) => void

export type OnTitleClick = (
  {
    item,
    index,
  }: {
    item: PhotoListItem
    index: number
  },
  e: React.MouseEvent<HTMLElement>,
) => void

export type OnDescriptionClick = (
  {
    item,
    index,
  }: {
    item: PhotoListItem
    index: number
  },
  e: React.MouseEvent<HTMLElement>,
) => void

export type OnActionClick = (
  {
    item,
    action,
    index,
  }: {
    item: PhotoListItem
    action: PhotoListItemAction
    index: number
  },
  e: React.MouseEvent<HTMLElement>,
) => void
