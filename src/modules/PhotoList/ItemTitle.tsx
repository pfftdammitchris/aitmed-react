import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { OnClick } from '../../types'
import Typography from '../../components/Typography'

interface PhotoListItemTitleProps {
  children: React.ReactNode
  onClick: OnClick
}

const useStyles = makeStyles((theme: any) => ({
  root: {
    color: theme.palette.text.normal,
    fontWeight: 700,
  },
}))

function PhotoListItemTitle({ children, onClick }: PhotoListItemTitleProps) {
  const classes = useStyles()

  return (
    <Typography
      classes={{ root: classes.root }}
      variant="body2"
      onClick={onClick}
    >
      {children}
    </Typography>
  )
}

export default PhotoListItemTitle
