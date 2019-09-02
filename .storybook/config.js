import { addParameters, configure, addDecorator } from '@storybook/react'
import { addReadme } from 'storybook-readme'
import { muiTheme } from 'storybook-addon-material-ui'
import theme from '../src/config/theme'
import registerWithPanelTitle from 'storybook-readme/registerWithPanelTitle'

registerWithPanelTitle('Docs')

const req = require.context('../src/stories', true, /.stories.tsx$/)

addDecorator(muiTheme(theme))
addDecorator(addReadme)
addParameters({
  options: {
    hierarchySeparator: /\./,
    hierarchyRootSeparator: /\|/,
    showAddonsPanel: false,
    showSearchBox: false,
    showPanel: false,
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, { numeric: true }),
  },
  readme: {
    codeTheme: 'ghcolors',
    theme: {
      // bodyBackgroundColor: '#969896',
      bodyColor: '#333',
      linkColor: '#4078c0',
      hrColor: '#e7e7e7',
      checkedRadioLabelColor: '#4078c0',
      kbdColor: '#555',
      kbdBackgroundColor: '#fcfcfc',
      kbdBorderColor: '#ccc',
      kbdBottomBorderColor: '#bbb',
      kbdBoxShadowColor: '#bbb',
      preBackgroundColor: '#f7f7f7',
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      imgBackgroundColor: '#fff',

      tableTrBackgroundColor: '#fff',
      tableOddTrBackgroundColor: '#f8f8f8',
      tableTrBorderTopColor: '#ccc',
      tableTdBorderColor: '#ddd',

      codeBackgroundColor: 'rgba(0, 0, 0, .04)',
      codeFontFamily: 'Consolas, "Liberation Mono", Menlo, Courier, monospace',
      preFontFamily: 'Consolas, "Liberation Mono", Menlo, Courier, monospace',

      blockquoteBorderLeftColor: '#ddd',
      h1h2BorderBottomColor: '#ddd',
      h6Color: '#777',
    },
  },
})

function loadStories() {
  req.keys().forEach(req)
}

configure(loadStories, module)
