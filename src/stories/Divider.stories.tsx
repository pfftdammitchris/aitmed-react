import React from 'react'
import { storiesOf } from '@storybook/react'
import { muiTheme } from 'storybook-addon-material-ui'
import Divider from '../components/Divider'
import getCodeDoc from '../utils/getCodeDoc'
import readme from './docs/divider.md'
import theme from '../config/theme'

storiesOf('Divider', module)
  .addDecorator(muiTheme(theme))
  .add('README', () => <div />, {
    readme: { content: readme },
  })
  .add('default', () => <Divider />)
  .add('props.margin', () => <Divider margin="35px auto" />, {
    readme: {
      content: getCodeDoc(`
import React from 'react'
import { Divider } from '@aitmed/react'

const App = () => (
  <Divider margin="35px auto" />
)
`),
    },
  })
