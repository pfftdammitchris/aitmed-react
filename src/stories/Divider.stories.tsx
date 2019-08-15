import React from 'react'
import { storiesOf } from '@storybook/react'
import Divider from 'components/Divider'

storiesOf('Divider', module)
  .addParameters({
    info: {
      text: '',
    },
  })
  .add('Stub', () => (
    <div>
      Dividier
      <Divider />
    </div>
  ))
