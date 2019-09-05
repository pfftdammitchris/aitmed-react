import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles'
// import { ThemeProvider as AiTmedThemeProvider } from '@aitmed/react'
import theme from '../../src/config/theme'

function AppProviders(props) {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {props.children}
    </MuiThemeProvider>
  )
}

export default AppProviders
