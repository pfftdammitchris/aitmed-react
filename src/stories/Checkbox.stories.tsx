import React from 'react'
import { storiesOf } from '@storybook/react'
import { muiTheme } from 'storybook-addon-material-ui'
import Checkbox from '../components/Checkbox'
// import getCodeDoc from 'utils/getCodeDoc'
import theme from '../config/theme'
import readme from './docs/checkbox.md'

storiesOf('Checkbox', module)
  .addDecorator(muiTheme(theme))
  .add('README', () => <div />, {
    readme: { content: readme },
  })
  // @ts-ignore
  .add('default', () => <Checkbox />)
