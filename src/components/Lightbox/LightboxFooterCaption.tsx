import React from 'react'
import Typography from '../Typography'
import { LightboxComponent } from './types'

interface LightboxFooterCaptionProps extends LightboxComponent {}

function LightboxFooterCaption({ currentView }: LightboxFooterCaptionProps) {
  return <Typography white>{currentView.caption}</Typography>
}

export default LightboxFooterCaption
