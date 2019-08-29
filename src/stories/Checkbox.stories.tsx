import React from 'react'
import { storiesOf } from '@storybook/react'
import Checkbox from '../components/Checkbox'
// import getCodeDoc from 'utils/getCodeDoc'
import readme from './docs/checkbox.md'

storiesOf('Checkbox', module)
  .add('README', () => <div />, {
    readme: { content: readme },
  })
  // @ts-ignore
  .add('default', () => <Checkbox />)
