import React from 'react'
import { makeStyles } from '@material-ui/styles'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'

interface PhotoListRowAvatarProps {
  src: string
}

const useStyles = makeStyles((theme: any) => ({
  root: {
    [theme.breakpoints.down('xs')]: {
      width: 25,
      height: 25,
    },
  },
}))

function PhotoListRowAvatar({ src }: PhotoListRowAvatarProps) {
  const classes = useStyles()

  return (
    <ListItemAvatar className={classes.root}>
      <Avatar src={src} />
    </ListItemAvatar>
  )
}

export default PhotoListRowAvatar
