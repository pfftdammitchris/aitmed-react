import React from 'react'
import { storiesOf } from '@storybook/react'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import { muiTheme } from 'storybook-addon-material-ui'
import DatePicker from '../components/DatePicker'
import theme from '../config/theme'
import readme from './docs/DatePicker/readme.md'

function onSubmit(values) {
  console.log(values)
}

storiesOf('DatePicker', module)
  .addDecorator(muiTheme(theme))
  .addDecorator((s) => (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      {s()}
    </MuiPickersUtilsProvider>
  ))
  .add('README', () => <div />, {
    readme: { content: readme },
  })
  .add(
    'default',
    () => {
      function onChange(date) {
        console.log(date)
      }

      return <DatePicker label="Select Date" onChange={onChange} />
    },
    {
      readme: {
        content: `
<!-- STORY -->

\`\`\`jsx
import React from 'react'
import { DatePicker } from '@aitmed/react'

function App() {
  function onChange(date) {
    console.log(date)
  }

  return <DatePicker label="Select Date" onChange={onChange} />
}
\`\`\`
      `,
      },
    },
  )
