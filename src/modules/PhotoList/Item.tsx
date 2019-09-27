import React from 'react'
import { makeStyles } from '@material-ui/styles'
import isEqual from 'lodash.isequal'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import PhotoListItemTitle from './ItemTitle'
import PhotoListItemDescription from './ItemDescription'
import PhotoListItemActions from './ItemActions'
import PhotoListItemVisual from './ItemVisual'
import * as T from './types'

interface PhotoListItemProps {
  item: T.PhotoListItem
  index: number
  icons?: T.PhotoListIconConfig
  actions?: T.PhotoListItemAction[]
  onVisualClick: T.WrappedReturnedHofFn
  onTitleClick: T.WrappedReturnedHofFn
  onDescriptionClick: T.WrappedReturnedHofFn
  onActionClick: T.OnActionClick
  returnValidHtmlAttrs: (obj: any) => any
}

const useStyles = makeStyles({
  root: {
    transition: 'all 0.2s',
    padding: '3px 12px',
  },
})

function PhotoListItem({
  item,
  index,
  actions,
  icons,
  onVisualClick,
  onTitleClick,
  onDescriptionClick,
  onActionClick,
  returnValidHtmlAttrs,
}: PhotoListItemProps) {
  const classes = useStyles()

  return (
    <ListItem className={classes.root} alignItems="center" divider>
      <PhotoListItemVisual
        onClick={onVisualClick({ item, index })}
        icons={icons}
        item={item}
      />
      <ListItemText
        primary={
          <PhotoListItemTitle onClick={onTitleClick({ item, index })}>
            {item.filename + item.ext}
          </PhotoListItemTitle>
        }
        secondary={
          <PhotoListItemDescription
            onClick={onDescriptionClick({ item, index })}
          >
            {item.description}
          </PhotoListItemDescription>
        }
        disableTypography
      />
      {actions && (
        <PhotoListItemActions
          item={item}
          actions={actions}
          index={index}
          icons={icons}
          onClick={onActionClick}
          returnValidHtmlAttrs={returnValidHtmlAttrs}
        />
      )}
    </ListItem>
  )
}

function propsAreEqual(
  props: PhotoListItemProps,
  nextProps: PhotoListItemProps,
) {
  return isEqual(props.item, nextProps.item)
}

export default React.memo(PhotoListItem, propsAreEqual)
