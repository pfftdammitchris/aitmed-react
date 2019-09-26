import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Fade from '@material-ui/core/Fade'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import PhotoListContext from './Context'
import PhotoListItemVisual from './ItemVisual'
import PhotoListItemTitle from './ItemTitle'
import PhotoListItemDescription from './ItemDescription'
import PhotoListItemActions from './ItemActions'
import { isArray } from '../../utils'

const useStyles = makeStyles((theme: any) => ({
  root: {
    transition: 'all 0.2s',
    padding: '3px 12px',
  },
  title: {
    fontWeight: 300,
    fontSize: '1.1rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.65rem',
    },
  },
  description: {
    fontWeight: 400,
    fontSize: '0.8rem',
    color: theme.palette.text.soft,
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.6rem',
    },
  },
}))

function PhotoListItems() {
  const classes = useStyles()
  const ctx = React.useContext(PhotoListContext)

  if (ctx == undefined) {
    return null
  }

  const {
    actions,
    items,
    icons,
    onVisualClick,
    onTitleClick,
    onDescriptionClick,
    onActionClick,
  } = ctx

  return (
    isArray(items) &&
    // @ts-ignore
    items.map((item: any, index: number) => (
      <Fade key={`photoListItem${index}`} timeout={250} in>
        <ListItem className={classes.root} alignItems="center" divider>
          <PhotoListItemVisual
            // @ts-ignore
            onClick={onVisualClick(item, index)}
            icons={icons}
            {...item}
          />
          <ListItemText
            primary={
              <PhotoListItemTitle
                // @ts-ignore
                onClick={onTitleClick(item, index)}
              >
                {item.title}
              </PhotoListItemTitle>
            }
            secondary={
              <PhotoListItemDescription
                // @ts-ignore
                onClick={onDescriptionClick(item, index)}
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
              // @ts-ignore
              onActionClick={onActionClick}
            />
          )}
        </ListItem>
      </Fade>
    ))
  )
}

export default PhotoListItems
