import React from 'react'
import merge from 'lodash/merge'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
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

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </MuiPickersUtilsProvider>
  )
}

export default AiTmedThemeProvider
