import React from 'react'
import { storiesOf } from '@storybook/react'
import DWC_1 from '../forms/DWC_1'
import DWC_PR2 from '../forms/DWC_PR2'
import RFA from '../forms/RFA'
import AiTmedReact from '../AiTmedReact'

const onSubmit = async (values: any) => {
  try {
    console.log(values)
    return
  } catch (error) {
    throw error
  }
}

const WithAiTmedProvider = ({ children }: any) => (
  <AiTmedReact env="testapi">{children}</AiTmedReact>
)

storiesOf('forms', module)
  .add('DWC_1', () => {
    return (
      <div style={{ maxWidth: 800, margin: 'auto' }}>
        <DWC_1 onSubmit={onSubmit} />
      </div>
    )
  })
  .add('DWC_PR2', () => {
    const genders = ['Male', 'Female', 'PNS']
    return (
      <div style={{ maxWidth: 800, margin: 'auto' }}>
        <DWC_PR2 onSubmit={onSubmit} genders={genders} />
      </div>
    )
  })
  .add('RFA', () => {
    const specialties = [
      'FAMILY_MEDICINE',
      'INTERNAL_MEDICINE',
      'EMERGENCY_MEDICINE',
    ]
    const component = React.createElement(() => {
      return (
        <div style={{ maxWidth: 800, margin: 'auto' }}>
          <RFA onSubmit={onSubmit} specialties={specialties} />
        </div>
      )
    })
    return <WithAiTmedProvider>{component}</WithAiTmedProvider>
  })
