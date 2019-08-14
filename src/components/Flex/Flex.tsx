import React from 'react'

interface Props {
  style?: React.CSSProperties
  center?: boolean
  spaceBetween?: boolean
  spaceAround?: boolean
  flexStart?: boolean
  flexEnd?: boolean
  flexGrow?: number
  flexWrap?: 'nowrap' | 'wrap'
  wrap?: boolean
}

function computeJustify(props: Props) {
  if (props.center) return 'center'
  if (props.spaceBetween) return 'space-between'
  if (props.spaceAround) return 'space-around'
  if (props.flexStart) return 'flex-start'
  if (props.flexEnd) return 'flex-end'
  return 'initial'
}

const Flex: React.FC<Props> = (props) => {
  const {
    style,
    center,
    spaceBetween,
    spaceAround,
    flexStart,
    flexEnd,
    flexGrow,
    flexWrap,
    wrap,
    ...rest
  } = props
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: computeJustify(props),
        alignItems: 'center',
        flexGrow,
        flexWrap: wrap ? 'wrap' : flexWrap,
        ...style,
      }}
      {...rest}
    />
  )
}

export default Flex
