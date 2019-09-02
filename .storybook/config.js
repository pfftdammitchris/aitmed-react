import { addParameters, configure, addDecorator } from '@storybook/react'
import { addReadme } from 'storybook-readme'
import { muiTheme } from 'storybook-addon-material-ui'
import theme from '../src/config/theme'

const req = require.context('../src/stories', true, /.stories.tsx$/)

addDecorator(muiTheme(theme))
addDecorator(addReadme)
addParameters({ readme: { codeTheme: 'ghcolors' }, showPanel: false })

function loadStories() {
  req.keys().forEach(req)
}

configure(loadStories, module)
