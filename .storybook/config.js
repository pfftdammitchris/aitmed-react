import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { muiTheme } from 'storybook-addon-material-ui'
import theme from '../src/config/theme'

const req = require.context('../stories', true, /.stories.tsx$/)

addDecorator(withInfo())
addDecorator(muiTheme(theme))

function loadStories() {
  req.keys().forEach(req)
}

configure(loadStories, module)
