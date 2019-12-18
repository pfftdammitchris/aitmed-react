import React from 'react'
import { useTheme } from '@material-ui/styles'
import Typography from '../Typography'
import { LightboxComponent } from './types'

export interface LightboxFooterProps extends LightboxComponent {}

function Count(props: any) {
  const theme = useTheme<any>()

  return (
    <span
      style={{ fontSize: '1.5rem', color: theme.palette.primary.lightest }}
      {...props}
    />
  )
}

function LightboxFooter({ currentIndex, views }: LightboxFooterProps) {
  return (
    <Typography white>
      Viewing <Count>{currentIndex + 1}</Count> of <Count>{views.length}</Count>{' '}
      images
    </Typography>
  )
}

export default LightboxFooter
