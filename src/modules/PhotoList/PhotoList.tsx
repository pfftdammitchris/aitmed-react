import React from 'react'
import cx from 'classnames'
import List from '@material-ui/core/List'
import { isArray } from '../../utils'
import PhotoListProvider, { PhotoListContextValue } from './Provider'
import PhotoListItems from './Items'
import PhotoListItem from './Item'
import PhotoListItemTitle from './ItemTitle'
import PhotoListItemDescription from './ItemDescription'
import PhotoListItemActions from './ItemActions'
import PhotoListItemVisual from './ItemVisual'
import * as T from './types'

interface PhotoListProps {
  classes?: any
  className?: string
  header?: React.ReactNode
  children?: React.ReactNode
  // Props below are passed to the context Provider
  items?: T.PhotoListItemRaw[]
  icons?: T.PhotoListIconConfig
  actions?: T.PhotoListItemAction[]
  onVisualClick?: T.WrappedReturnedHofFn
  onTitleClick?: T.WrappedReturnedHofFn
  onDescriptionClick?: T.WrappedReturnedHofFn
  // Not yet supported
  debugStyles?: boolean | object
  placeholder?: React.ReactNode | string
  defaultDownloadName?: string
  Title?: React.ElementType<any>
  Description?: React.ElementType<any>
  Avatar?: React.ElementType<any>
}

function PhotoList({
  classes: classesProp = {},
  className,
  header,
  children,
  items: itemsProp,
  ...rest
}: PhotoListProps) {
  // Memoize the items so we don't have an infinite re-render
  // Also prevents the UI from not updating
  const items = React.useMemo(() => itemsProp, [itemsProp])

  return (
    <PhotoListProvider {...rest} items={items}>
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
          <PhotoListItems
            render={(ctx: PhotoListContextValue) =>
              isArray(ctx.items)
                ? ctx.items.map((item: any, index: number) => (
                    <PhotoListItem
                      key={`photoListItem${index}`}
                      item={item}
                      index={index}
                      actions={ctx.actions}
                      icons={ctx.icons}
                      onVisualClick={ctx.onVisualClick}
                      onTitleClick={ctx.onTitleClick}
                      onDescriptionClick={ctx.onDescriptionClick}
                      onActionClick={ctx.onActionClick}
                      returnValidHtmlAttrs={ctx.returnValidHtmlAttrs}
                    />
                  ))
                : null
            }
          />
        </List>
      )}
    </PhotoListProvider>
  )
}

PhotoList.Title = PhotoListItemTitle
PhotoList.Description = PhotoListItemDescription
PhotoList.Actions = PhotoListItemActions
PhotoList.Visual = PhotoListItemVisual

export default PhotoList
