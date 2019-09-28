import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Typography from '../../components/Typography'
import { OnClick } from '../../types'
import { DebugStyles } from './types'
import { resolveDebugStyle } from './utils'

interface PhotoListItemDescriptionProps {
  component?: React.ElementType<any>
  children: React.ReactNode
  onClick: OnClick
  debugStyles: DebugStyles
}

const useStyles = makeStyles((theme: any) => ({
  root: {
    color: theme.palette.text.soft,
  },
}))

function PhotoListItemDescription({
  component: Component = Typography,
  children,
  onClick,
  debugStyles,
  ...rest
}: PhotoListItemDescriptionProps) {
  const classes = useStyles()

  return (
    <Component
      className={classes.root}
      style={{
        border: resolveDebugStyle('description', debugStyles),
      }}
      variant="subtitle2"
      onClick={onClick}
      {...rest}
    >
      {children}
    </Component>
  )
}

export default PhotoListItemDescription
