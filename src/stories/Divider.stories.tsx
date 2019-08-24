import React from 'react'
import { storiesOf } from '@storybook/react'
import Divider from 'components/Divider'
// import getCodeDoc from 'utils/getCodeDoc'
import readme from './docs/divider.md'

storiesOf('Divider', module)
  .add('README', () => <div />, {
    readme: { content: readme },
  })
  .add('default', () => <Divider />)
  .add('margin 35px auto', () => <Divider margin="35px auto" />)
