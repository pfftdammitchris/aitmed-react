import React from 'react'
import { makeStyles } from '@material-ui/styles'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import { commonIcons } from '../../utils'
import { OnClick } from '../../types'
import { PhotoListIconConfig } from './types'

interface PhotoListItemVisualBoxProps {
  icons?: PhotoListIconConfig
  src?: string
  title?: string
  ext?: string
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
  avatarRoot: {},
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
  src,
  title,
  ext,
  icons = {}, // user provided prop
  onClick,
}: PhotoListItemVisualBoxProps) {
  const classes = useStyles()

  function CustomAvatar({ children, ...rest }: { children: React.ReactNode }) {
    return (
      <div className={classes.customIcon} {...rest}>
        <div>{children}</div>
      </div>
    )
  }

  let VisualComponent

  switch (ext) {
    case '.csv':
    case '.xlx':
      VisualComponent =
        (icons.excel && icons.excel.component) || commonIcons.excel.component
    case '.doc':
    case '.docx':
    case '.pdf':
      VisualComponent =
        (icons.pdf && icons.pdf.component) || commonIcons.pdf.component
      break
    case '.psd':
      VisualComponent =
        (icons.photoshop && icons.photoshop.component) ||
        commonIcons.photoshop.component
      break
    default: {
      break
    }
  }

  return (
    <ListItemAvatar className={classes.root}>
      {VisualComponent ? (
        <CustomAvatar>
          <VisualComponent />
        </CustomAvatar>
      ) : (
        <Avatar
          classes={{ root: classes.avatarRoot }}
          alt={title}
          title={title}
          src={src}
          onClick={onClick}
        />
      )}
    </ListItemAvatar>
  )
}

export default PhotoListItemVisual
