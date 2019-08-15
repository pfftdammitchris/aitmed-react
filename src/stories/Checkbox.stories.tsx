import React from 'react'
import { storiesOf } from '@storybook/react'
import Checkbox from 'components/Checkbox'

storiesOf('Checkbox', module)
  .addParameters({
    info: {
      text: '',
    },
  })
  .add('Stub', () => <Checkbox value="" onChange={undefined} checked />)
