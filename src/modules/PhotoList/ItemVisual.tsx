import React from 'react'
import { makeStyles } from '@material-ui/styles'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import { resolveDebugStyle, resolveRenderVisual } from './utils'
import { OnClick } from '../../types'
import { DebugStyles, PhotoListIconConfig, PhotoListItem } from './types'

interface PhotoListItemVisualBoxProps {
  component?: React.ElementType<any>
  item: PhotoListItem
  icons?: PhotoListIconConfig
  onClick?: OnClick
  debugStyles: DebugStyles
}

const useStyles = makeStyles((theme: any) => ({
  root: {
    margin: 'auto',
    display: 'block',
    textAlign: 'center',
    [theme.breakpoints.down('xs')]: {
      width: 25,
      height: 25,
    },
  },
  customIcon: {
    minWidth: 56,
    flexShrink: 0,
    '& > div:first-child, & svg': {
      width: 40,
      height: 40,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
      fontSize: '1.25rem',
      userSelect: 'none',
    },
  },
}))

function PhotoListItemVisual({
  component: Component = 'div'
  item,
  onClick,
  icons = {}, // user provided prop
  debugStyles,
}: PhotoListItemVisualBoxProps) {
  const classes = useStyles()
  const { src, title, ext, alt } = item

  const CustomAvatar = resolveRenderVisual(ext, icons)
  const styles = {
    border: resolveDebugStyle('visual', debugStyles),
  }

  return (
    <ListItemAvatar className={classes.root}>
      {CustomAvatar ? (
        <Component className={classes.customIcon} style={styles}>
          <CustomAvatar />
        </Component>
      ) : (
        <Avatar
        component={Component}
          style={styles}
          title={title}
          src={src}
          onClick={onClick}
          alt={title || alt}
        />
      )}
    </ListItemAvatar>
  )
}

export default PhotoListItemVisual
