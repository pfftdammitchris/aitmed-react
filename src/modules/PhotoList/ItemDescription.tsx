import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Typography from '../../components/Typography'

interface PhotoListItemDescriptionProps {
  children: React.ReactNode
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
}

const useStyles = makeStyles((theme: any) => ({
  root: {
    color: theme.palette.text.soft,
  },
}))

function PhotoListItemDescription({
  children,
  onClick,
  ...rest
}: PhotoListItemDescriptionProps) {
  const classes = useStyles()

  return (
    <Typography
      classes={{ root: classes.root }}
      variant="subtitle2"
      onClick={onClick}
      {...rest}
    >
      {children}
    </Typography>
  )
}

export default PhotoListItemDescription
