import React from 'react'
import { storiesOf } from '@storybook/react'
import DWC_1 from 'forms/DWC_1'
import DWC_PR2 from 'forms/DWC_PR2'

const onSubmit = async (values: any) => {
  try {
    console.log(values)
  } catch (error) {
    throw error
  }
}

storiesOf('forms', module)
  .add('DWC_1', () => {
    return (
      <div style={{ maxWidth: 800, margin: 'auto' }}>
        <DWC_1 onSubmit={onSubmit} />
      </div>
    )
  })
  .add('DWC_PR2', () => {
    return (
      <div style={{ maxWidth: 800, margin: 'auto' }}>
        <DWC_PR2 onSubmit={onSubmit} />
      </div>
    )
  })
