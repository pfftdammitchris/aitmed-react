import React from 'react'
import { addParameters, configure, addDecorator } from '@storybook/react'
import { addReadme } from 'storybook-readme'
import registerWithPanelTitle from 'storybook-readme/registerWithPanelTitle'
import storybookTheme from './theme'
import './base.css'

registerWithPanelTitle('Docs')

const req = require.context('../src/stories', true, /.stories.tsx$/)

addDecorator(addReadme)
addParameters({
  options: {
    hierarchySeparator: /\./,
    hierarchyRootSeparator: /\|/,
    showAddonsPanel: false,
    showSearchBox: false,
    showPanel: false,
    // storySort: (a, b) =>
    //   a[1].kind === b[1].kind
    //     ? 0
    //     : a[1].id.localeCompare(b[1].id, { numeric: true }),
    theme: storybookTheme,
  },
  readme: {
    codeTheme: 'github',
  },
})

function loadStories() {
  req.keys().forEach(req)
}

configure(loadStories, module)
