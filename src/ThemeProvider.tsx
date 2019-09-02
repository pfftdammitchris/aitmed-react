import React from 'react'
import { ThemeProvider } from '@material-ui/styles'
import theme from './config/theme'

interface LibraryProps {
  theme?: any
}

const AiTmedThemeProvider: React.FC<LibraryProps> = ({
  children,
  theme: themeProp,
}) => <ThemeProvider theme={themeProp || theme}>{children}</ThemeProvider>

export default AiTmedThemeProvider
