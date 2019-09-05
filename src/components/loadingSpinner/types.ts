import React from 'react'

export interface SpinnerWithWidthProps {
  style?: React.CSSProperties
  width?: string
  size?: number
  xxs?: boolean
  xs?: boolean
  sm?: boolean
  md?: boolean
  lg?: boolean
  xl?: boolean
}

export interface LoadingSpinnerProps extends SpinnerWithWidthProps {
  children: React.ReactNode
  wrapperClassName?: string
  className?: string
  childrenClassName?: string
  wrapperStyle?: React.CSSProperties
  childrenStyle?: React.CSSProperties
  margin?: string
  fullscreen?: boolean
  dim?: boolean
  white?: boolean
  src?: string
  renderContent?: () => React.ReactNode
}
