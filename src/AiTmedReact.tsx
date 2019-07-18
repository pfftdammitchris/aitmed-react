import React from 'react'
import { ThemeProvider } from '@material-ui/styles'
import theme from './config/theme'

interface LibraryProps {
  theme: any
}

const AiTmedReact: React.FC<LibraryProps> = ({ children, ...props }) => (
  <ThemeProvider theme={props.theme || theme}>{children}</ThemeProvider>
)

export default AiTmedReact
