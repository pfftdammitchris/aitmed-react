export interface CardProps {
  className: string
  classNames?: {
    card?: string
    content?: string
    divider?: string
    header?: string
  }
  contentProps?: any
  render?: any
  square?: boolean
}

declare const Card: React.ComponentType<CardProps>

export default Card

export interface CardDividerProps {
  classes?: any
  className?: string
}
