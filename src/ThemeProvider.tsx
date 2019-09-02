import React from 'react'
import merge from 'lodash/merge'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import theme from './config/theme'

interface LibraryProps {
  theme?: any
}

const AiTmedThemeProvider: React.FC<LibraryProps> = ({
  children,
  theme: themeProp = {},
}) => (
  <ThemeProvider theme={createMuiTheme(merge(themeProp, theme))}>
    {children}
  </ThemeProvider>
)

export default AiTmedThemeProvider
