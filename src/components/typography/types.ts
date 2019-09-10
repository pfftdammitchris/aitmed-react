import React from 'react'

export interface TypographyProps {
  className?: string
  style?: React.CSSProperties
  gutterBottom?: boolean
  paragraph?: boolean
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
