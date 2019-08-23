import React from 'react'
import { storiesOf } from '@storybook/react'
import OutlinedTextField from 'components/finalForm/OutlinedTextField'
import readme from '../docs/finalForm/outlinedTextField.md'

storiesOf('(final-form) OutlinedTextField', module)
  .add('README', () => <div />, {
    readme: { content: readme },
  })
  .add('default', () => (
    <OutlinedTextField>OutlinedTextField</OutlinedTextField>
  ))
