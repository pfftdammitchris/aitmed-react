import React from 'react'
import { makeStyles } from '@material-ui/styles'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import { commonIcons } from '../../utils'

interface PhotoListItemVisualBoxProps {
  icons?: { [key: string]: React.ElementType<any> }
  src?: string
  title?: string
  ext?: string
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
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

  let component

  switch (ext) {
    case '.pdf': {
      const PdfIcon =
        (icons.pdf && icons.pdf.component) || commonIcons.pdf.component
      component = (
        <CustomAvatar>
          <PdfIcon onClick={onClick} />
        </CustomAvatar>
      )
      break
    }
    default: {
      component = (
        <Avatar
          classes={{ root: classes.avatarRoot }}
          alt={title}
          title={title}
          src={src}
          onClick={onClick}
        />
      )
      break
    }
  }

  return <ListItemAvatar className={classes.root}>{component}</ListItemAvatar>
}

export default PhotoListItemVisual
