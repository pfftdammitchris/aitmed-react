import React from 'react'
import { createMuiTheme } from '@material-ui/core/styles'
// import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import themeObj from './config/theme'

interface LibraryProps {
  theme?: any
}

const AiTmedThemeProvider: React.FC<LibraryProps> = ({
  children,
  theme: themeProp,
}) => {
  const theme = createMuiTheme(themeProp || themeObj)

  return <ThemeProvider theme={createMuiTheme(theme)}>{children}</ThemeProvider>
}

export default AiTmedThemeProvider
