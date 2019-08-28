import React from 'react'
import { ThemeProvider } from '@material-ui/styles'
import theme from './config/theme'

interface LibraryProps {
  theme?: any
  env?: 'testapi' | 'api'
}

export interface ContextState {
  env?: 'testapi' | 'api'
  baseUrl: string
}

export const AiTmedContext = React.createContext<ContextState>({
  env: undefined,
  baseUrl: '',
})

const AiTmedReact: React.FC<LibraryProps> = ({ env, children, ...props }) => {
  const baseUrl = `https://${env === 'testapi' ? `testapi.` : ''}aitmed.com`

  return (
    <AiTmedContext.Provider value={{ env, baseUrl }}>
      <ThemeProvider theme={props.theme || theme}>{children}</ThemeProvider>
    </AiTmedContext.Provider>
  )
}

export default AiTmedReact
