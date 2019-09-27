import React from 'react'
import { makeStyles } from '@material-ui/styles'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import { resolveRenderVisual } from './utils'
import { OnClick } from '../../types'
import { PhotoListIconConfig, PhotoListItem } from './types'

interface PhotoListItemVisualBoxProps {
  item: PhotoListItem
  icons?: PhotoListIconConfig
  onClick?: OnClick
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
  item,
  onClick,
  icons = {}, // user provided prop
}: PhotoListItemVisualBoxProps) {
  const classes = useStyles()
  const { src, title, ext, alt } = item

  const CustomAvatar = resolveRenderVisual(ext, icons)

  return (
    <ListItemAvatar className={classes.root}>
      {CustomAvatar ? (
        <div className={classes.customIcon}>
          <CustomAvatar />
        </div>
      ) : (
        <Avatar title={title} src={src} onClick={onClick} alt={title || alt} />
      )}
    </ListItemAvatar>
  )
}

export default PhotoListItemVisual
