import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Typography from '../../components/Typography'

interface PhotoListItemTitleProps {
  children: React.ReactNode
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
}

const useStyles = makeStyles((theme: any) => ({
  root: {
    color: theme.palette.text.normal,
    fontWeight: 700,
  },
}))

function PhotoListItemTitle({
  children,
  onClick,
  ...rest
}: PhotoListItemTitleProps) {
  const classes = useStyles()

  return (
    <Typography
      classes={{ root: classes.root }}
      variant="body2"
      onClick={onClick}
      {...rest}
    >
      {children}
    </Typography>
  )
}

export default PhotoListItemTitle
