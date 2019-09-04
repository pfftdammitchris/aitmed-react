import React from 'react'
import merge from 'lodash/merge'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import themeObj from './config/theme'

interface LibraryProps {
  theme?: any
}

const AiTmedThemeProvider: React.FC<LibraryProps> = ({
  children,
  theme: themeProp = {},
}) => {
  const theme = createMuiTheme(merge({}, themeObj, themeProp))

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default AiTmedThemeProvider
