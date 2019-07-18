import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from '../src/components/button'

storiesOf('Button', module).add('default', () => (
  <Button type="button">Click</Button>
))
