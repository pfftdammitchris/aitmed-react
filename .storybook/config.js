import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { muiTheme } from 'storybook-addon-material-ui'
import theme from '../src/config/theme'

const req = require.context('../src/stories', true, /.stories.tsx$/)

addDecorator(muiTheme(theme))
addDecorator(
  withInfo({
    inline: true,
    header: false,
    source: false,
    styles: {
      infoBody: {
        fontFamily: 'Literata',
        color: '#000',
        fontWeight: 500,
      },
    },
  }),
)

function loadStories() {
  req.keys().forEach(req)
}

configure(loadStories, module)
