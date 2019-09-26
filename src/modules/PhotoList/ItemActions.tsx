import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Theme } from '@material-ui/core'
import cx from 'classnames'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import IconButton from '@material-ui/core/IconButton'
import { commonIcons } from '../../utils/reactHelpers'
import { isArray } from '../../utils'
import { PhotoListItem, PhotoListItemAction } from './types'

interface PhotoListItemActionsProps {
  actions: PhotoListItemAction[]
  item: PhotoListItem
  index: number
  onActionClick: (
    action: PhotoListItemAction,
    item: PhotoListItem,
    index: number,
  ) => (e: React.MouseEvent<HTMLElement>) => void
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
}))

function ItemAction({
  action,
  onClick,
}: {
  action: PhotoListItemAction
  onClick: (e: React.MouseEvent<HTMLElement>) => void
}) {
  const classes = useStyles()

  let Component, actionProps: any

  // If the dev provided their own custom component, use that instead
  if (action.component) {
    Component = action.component
  }
  // If this is already included in our commonIcons obj
  // @ts-ignore
  if (action.name in commonIcons) {
    // If the dev provided their own custom component, give that one higher priority.
    if (action.component) {
      Component = action.component
    }
    // Otherwise just use the default component
    else {
      // @ts-ignore
      Component = commonIcons[action.name].component
    }
  } else {
    Component = action.component
  }

  if (Component) {
    // Now apply the rest of the options as props but strip out the non-html props
    const { component, ...iconProps } = action
    actionProps = iconProps
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
        ),
      }}
      {...actionProps}
      onClick={onClick}
    >
      <Component />
    </IconButton>
  )
}

function PhotoListItemActions({
  actions,
  item,
  index,
  onActionClick,
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
            onClick={onActionClick(action, item, index)}
          />
        ))}
    </ListItemSecondaryAction>
  )
}

export default PhotoListItemActions
