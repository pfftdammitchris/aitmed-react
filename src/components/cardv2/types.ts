export interface Cardv2Props {
  classes: any
  className?: string
  classNames?: {
    card?: string
    divider?: string
    header?: string
    content?: string
  }
  style?: any
  header?: any
  cardContentClassName?: string
  cardProps: any
  cardContentProps: any
  children?: any
  render?: any
  center?: boolean
  primary?: boolean
  secondary?: boolean
  thirdary?: boolean
  fullWidth?: boolean
  maxWidth?: string | number
  square?: boolean
}
