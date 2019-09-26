import React from 'react'
import cx from 'classnames'
import List from '@material-ui/core/List'
import PhotoListProvider from './Provider'
import PhotoListItems from './Items'
import PhotoListItemTitle from './ItemTitle'
import PhotoListItemDescription from './ItemDescription'
import PhotoListItemActions from './ItemActions'
import PhotoListItemVisualBox from './ItemVisualBox'
import * as T from './types'

interface PhotoListProps {
  classes?: any
  className?: string
  header?: React.ReactNode
  children?: React.ReactNode
  // Props below are passed to the Provider by default
  items?: T.PhotoListItems
  icons?:
    | React.ElementType<any>
    | {
        [key: string]: {
          round?: boolean
          component?: React.ElementType<any>
        }
      }
  actions?: T.PhotoListItemAction[]
  placeholder?: React.ReactNode | string
  defaultDownloadName?: string
  onAvatarClick?: (e: React.MouseEvent<HTMLElement>) => void
  onTitleClick?: (e: React.MouseEvent<HTMLElement>) => void
  onDescriptionClick?: (e: React.MouseEvent<HTMLElement>) => void
}

function PhotoList({
  classes: classesProp = {},
  className,
  header,
  children,
  ...rest
}: PhotoListProps) {
  return (
    <PhotoListProvider {...rest}>
      {children || (
        <List
          classes={{
            ...classesProp,
            root: cx(classesProp.root, className),
            subheader: classesProp.subheader,
          }}
          // @ts-ignore
          subheader={header}
          dense
        >
          <PhotoListItems />
        </List>
      )}
    </PhotoListProvider>
  )
}

PhotoList.Title = PhotoListItemTitle
PhotoList.Description = PhotoListItemDescription
PhotoList.Actions = PhotoListItemActions
PhotoList.Visual = PhotoListItemVisualBox

export default PhotoList
