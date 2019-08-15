import React from 'react'
import { storiesOf } from '@storybook/react'
import Flex from 'components/Flex'

storiesOf('Flex', module)
  .addParameters({
    info: {
      text: '',
    },
  })
  .add('Stub', () => <Flex>Coming Soon</Flex>)
