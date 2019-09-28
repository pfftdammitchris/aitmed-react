import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { OnClick } from '../../types'
import { DebugStyles } from './types'
import { resolveDebugStyle } from './utils'
import Typography from '../../components/Typography'

interface PhotoListItemTitleProps {
  children: React.ReactNode
  onClick: OnClick
  debugStyles: DebugStyles
  component?: React.ElementType<any>
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
  debugStyles,
  component: Component = Typography,
}: PhotoListItemTitleProps) {
  const classes = useStyles()

  return (
    <Component
      className={classes.root}
      style={{
        border: resolveDebugStyle('title', debugStyles),
      }}
      variant="body2"
      onClick={onClick}
    >
      {children}
    </Component>
  )
}

export default PhotoListItemTitle
