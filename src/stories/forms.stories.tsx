import React from 'react'
import { storiesOf } from '@storybook/react'
import DWC_1 from 'forms/DWC_1'
import DWC_PR2 from 'forms/DWC_PR2'
import RFA from 'forms/RFA'
import useFetchSpecialties from 'hooks/useFetchSpecialties'
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
    return (
      <div style={{ maxWidth: 800, margin: 'auto' }}>
        <DWC_PR2 onSubmit={onSubmit} />
      </div>
    )
  })
  .add('RFA', () => {
    const component = React.createElement(() => {
      const { specialties } = useFetchSpecialties({ fetchOnMount: true })
      return (
        <div style={{ maxWidth: 800, margin: 'auto' }}>
          <RFA onSubmit={onSubmit} />
        </div>
      )
    })
    return <WithAiTmedProvider>{component}</WithAiTmedProvider>
  })
