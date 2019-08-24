import React from 'react'
import { storiesOf } from '@storybook/react'
import SignatureCanvas from 'components/finalForm/SignatureCanvas'
// import getCodeDoc from 'utils/getCodeDoc'
import readme from './docs/signatureCanvas.md'

storiesOf('SignatureCanvas (final-form)', module)
  .add('README', () => <div />, {
    readme: { content: readme },
  })
  .add('default', () => <SignatureCanvas />)
