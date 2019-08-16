import React from 'react'
import { storiesOf } from '@storybook/react'
import Divider from 'components/Divider'
import getCodeDoc from 'utils/getCodeDoc'
import readme from './docs/divider.md'

storiesOf('Divider', module)
  .addParameters({
    info: {
      text: '',
    },
  })
  .add('README', () => <div />, {
    readme: { content: readme },
  })
  .add('default', () => <Divider />)
