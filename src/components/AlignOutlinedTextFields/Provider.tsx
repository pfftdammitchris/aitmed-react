import React from 'react'
import Context from './Context'

interface AlignOutlinedTextFieldsProviderProps {
  children: React.ReactNode
  size?: 'small' | 'medium' | 'large'
}

function AlignOutlinedTextFieldsProvider({
  size = 'medium',
  children,
}: AlignOutlinedTextFieldsProviderProps) {
  const [_size, setSize] = React.useState(size)

  const ctx = {
    size: _size,
    setSize,
  }

  React.useEffect(() => {
    if (size !== _size) {
      setSize(size)
    }
  }, [size])

  // @ts-ignore
  return <Context.Provider value={ctx}>{children}</Context.Provider>
}

export default AlignOutlinedTextFieldsProvider
