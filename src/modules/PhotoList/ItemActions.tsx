import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Theme } from '@material-ui/core'
import cx from 'classnames'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import IconButton from '@material-ui/core/IconButton'
import { resolveRenderAction } from './utils'
import { isArray } from '../../utils'
import {
  DebugStyles,
  PhotoListItem,
  PhotoListItemAction,
  PhotoListIconConfig,
  OnActionClick,
} from './types'

interface PhotoListItemActionsProps {
  actions: PhotoListItemAction[]
  item: PhotoListItem
  icons?: PhotoListIconConfig
  index: number
  returnValidHtmlAttrs: (obj: any) => any
  onClick: OnActionClick
  debugStyles: DebugStyles
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    '& > div': {
      marginRight: 5,
      [theme.breakpoints.down('xs')]: {
        marginRight: 3,
      },
    },
  },
  icon: {
    transition: 'all 0.1s',
    width: 35,
    height: 35,
    borderRadius: '50%',
    color: '#333',
    opacity: 0.8,
    '&:hover': {
      opacity: 1,
      '& svg': {
        color: theme.palette.primary.main,
      },
    },
    [theme.breakpoints.down('xs')]: {
      width: 25,
      height: 25,
    },
    '& svg': {
      transition: 'all 0.1s',
      transform: 'scale(1.2)',
      [theme.breakpoints.down('xs')]: {
        transform: 'scale(0.75)',
      },
    },
  },
  debug: {
    border: '1px solid blue',
  },
}))

function ItemAction({
  action,
  onClick,
  item,
  icons,
  index,
  returnValidHtmlAttrs,
  debugStyles,
}: {
  action: PhotoListItemAction
  onClick: (e: React.MouseEvent<HTMLElement>) => void
  item: PhotoListItem
  icons?: PhotoListIconConfig
  index: number
  returnValidHtmlAttrs: (obj: any) => any
  debugStyles: DebugStyles
}) {
  const classes = useStyles()
  const Component = resolveRenderAction(action, icons)

  let actionProps: any

  if (Component) {
    // Now apply the rest of the options as props but strip out the non-html props
    actionProps = returnValidHtmlAttrs(action)
  } else {
    if (process.env.NODE_ENV !== 'production') {
      console.warn(
        `Tried to render an action but a component could not be found. Action name: ${action.name ||
          'Not provided'} (PhotoList)`,
      )
    }
    return null
  }

  return (
    <IconButton
      color="primary"
      edge="start"
      size="small"
      classes={{
        root: cx(
          classes.icon,
          actionProps ? actionProps.className : undefined,
          actionProps && actionProps.classes
            ? actionProps.classes.root
            : undefined,
          { [classes.debug]: !!debugStyles },
        ),
      }}
      {...actionProps}
      onClick={onClick}
    >
      <Component item={item} index={index} {...actionProps} />
    </IconButton>
  )
}

function PhotoListItemActions({
  actions,
  item,
  icons,
  index,
  onClick,
  returnValidHtmlAttrs,
  debugStyles,
}: PhotoListItemActionsProps) {
  const classes = useStyles()

  if (!actions) {
    return null
  }

  return (
    <ListItemSecondaryAction className={classes.root}>
      {isArray(actions) &&
        actions.map((action: PhotoListItemAction, i) => (
          <ItemAction
            key={`photoListAction_${i}`}
            action={action}
            item={item}
            index={index}
            icons={icons}
            onClick={onClick({ action, item, index })}
            returnValidHtmlAttrs={returnValidHtmlAttrs}
            debugStyles={debugStyles}
          />
        ))}
    </ListItemSecondaryAction>
  )
}

export default PhotoListItemActions
