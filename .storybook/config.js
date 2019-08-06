import { addParameters, configure, addDecorator } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { muiTheme } from 'storybook-addon-material-ui'
import theme from '../src/config/theme'

const req = require.context('../stories', true, /.stories.tsx$/)

addParameters({
  options: {
    showPanel: false,
  },
})

addDecorator((p) => {
  console.log(p())
  return muiTheme([theme])(p)
})
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
