import React from 'react'
import { storiesOf } from '@storybook/react'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import { muiTheme } from 'storybook-addon-material-ui'
import DWC_PR1 from '../forms/DWC_PR1'
import DWC_PR2 from '../forms/DWC_PR2'
import DWC_RFA from '../forms/DWC_RFA'
import theme from '../config/theme'

const onSubmit = async (values: any) => {
  try {
    console.log(values)
    return
  } catch (error) {
    throw error
  }
}

storiesOf('forms', module)
  .addDecorator(muiTheme(theme))
  .addDecorator((s) => (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      {s()}
    </MuiPickersUtilsProvider>
  ))
  .add('DWC_PR1', () => {
    return (
      <div style={{ maxWidth: 800, margin: 'auto' }}>
        <DWC_PR1 onSubmit={onSubmit} states={['CA', 'IL', 'WA']} />
      </div>
    )
  })
  .add('DWC_PR2', () => {
    const genders = ['Male', 'Female', 'PNS']
    return (
      <div style={{ maxWidth: 800, margin: 'auto' }}>
        <DWC_PR2
          onSubmit={onSubmit}
          genders={genders}
          specialties={['FAMILY_MEDICINE', 'INTERNAL_MEDICINE']}
        />
      </div>
    )
  })
  .add('DWC_RFA', () => {
    const specialties = [
      'FAMILY_MEDICINE',
      'INTERNAL_MEDICINE',
      'EMERGENCY_MEDICINE',
    ]
    const component = React.createElement(() => {
      return (
        <div style={{ maxWidth: 800, margin: 'auto' }}>
          <DWC_RFA onSubmit={onSubmit} specialties={specialties} />
        </div>
      )
    })
    return component
  })
