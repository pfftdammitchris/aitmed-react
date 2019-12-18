import React from 'react'
import Typography from '../Typography'
import { LightboxComponent } from './types'

export interface LightboxFooterCaptionProps extends LightboxComponent {}

function LightboxFooterCaption({ currentView }: LightboxFooterCaptionProps) {
  return <Typography white>{currentView.caption}</Typography>
}

export default LightboxFooterCaption
