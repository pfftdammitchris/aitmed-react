export interface ButtonProps {
  children: React.ReactNode
  className?: string
  primary?: boolean
  secondary?: boolean
  thirdary?: boolean
  neutral?: boolean
  error?: boolean
  red?: boolean
  danger?: boolean
  hover?: {
    [themeType: string]: string
  }
  small?: boolean
  medium?: boolean
  large?: boolean
  xlarge?: boolean
  size?: Size
  disabled?: boolean
  outlined?: boolean
  textColor?: string
  background?: string
  overwriteClassName?: boolean
  overWrittenClassNames?: string
  centerOnSmall?: boolean
  type?: 'button' | 'submit'
}

export type Size = 'small' | 'medium' | 'large'
