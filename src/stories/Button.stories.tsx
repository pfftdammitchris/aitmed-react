import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from '../components/Button'
import readme from './docs/button.md'

storiesOf('Button', module)
  .add('README', () => <div />, {
    readme: { content: readme },
  })
  .add('default', () => <Button>Button</Button>)
