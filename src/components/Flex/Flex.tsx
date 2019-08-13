import React from 'react'

const Flex: React.FC<{ style?: React.CSSProperties }> = ({
  style,
  ...props
}) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      ...style,
    }}
    {...props}
  />
)

export default Flex
