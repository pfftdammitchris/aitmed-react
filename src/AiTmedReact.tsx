import React from 'react'
import { ThemeProvider } from '@material-ui/styles'
import theme from './config/theme'

const AiTmedReact: React.FC<React.ReactNode> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default AiTmedReact
