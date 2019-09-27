import React from 'react'
import { PhotoListContextValue } from './Provider'

const Context = React.createContext<PhotoListContextValue | undefined>(
  undefined,
)

export default Context
