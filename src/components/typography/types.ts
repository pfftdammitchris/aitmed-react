import React from 'react'

export interface TypographyProps {
  className?: string
  style?: React.CSSProperties
  color?: string
  primary?: boolean
  secondary?: boolean
  darkBlue?: boolean
  thirdary?: boolean
  white?: boolean
  black?: boolean
  error?: boolean
  red?: boolean
  link?: boolean
  soft?: boolean
  inactive?: boolean
  fontWeight?: string | number
  variant?: string
  left?: boolean
  center?: boolean
  centerOnSmall?: boolean
  right?: boolean
  margin?: string | number
  marginBottom?: string | number
  padding?: string | number
  divider?: boolean
  italic?: boolean
  unselected?: boolean
}
