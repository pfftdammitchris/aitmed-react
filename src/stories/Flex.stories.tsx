import React from 'react'
import { storiesOf } from '@storybook/react'
import Flex from 'components/Flex'
import getCodeDoc from 'utils/getCodeDoc'
import readme from './docs/flex.md'

storiesOf('Flex', module)
  .addParameters({
    info: {
      text: '',
    },
  })
  .add('README', () => <div />, {
    readme: { content: readme },
  })
  .add('default', () => <Flex />)
