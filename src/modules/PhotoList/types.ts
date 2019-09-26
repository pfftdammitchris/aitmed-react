import { IconProps } from '../../utils/reactHelpers'

export type PhotoListItem =
  | string
  | File
  | Blob
  | {
      src?: string
      title?: string
      description?: string
      ext?: string
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
