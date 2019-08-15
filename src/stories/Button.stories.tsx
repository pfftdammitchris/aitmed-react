import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from 'components/Button'

storiesOf('Button', module)
  .addParameters({
    info: {
      text: '',
    },
  })
  .add('default', () => <Button>Button</Button>)
