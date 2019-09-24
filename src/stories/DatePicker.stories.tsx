import React from 'react'
import { storiesOf } from '@storybook/react'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import { muiTheme } from 'storybook-addon-material-ui'
import DatePicker from '../components/DatePicker'
import theme from '../config/theme'
import readme from './docs/DatePicker/readme.md'
import autoOkMd from './docs/DatePicker/autoOk.md'
import renderDayMd from './docs/DatePicker/renderDay.md'

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
      return React.createElement(() => {
        const [date, setDate] = React.useState(new Date())
        function onChange(date) {
          console.log(date)
          setDate(date)
        }
        return (
          <DatePicker label="Select Date" onChange={onChange} value={date} />
        )
      })
    },
    {
      readme: {
        content: `
<!-- STORY -->

\`\`\`jsx
import React from 'react'
import { DatePicker } from '@aitmed/react'

function App() {
  const [date, setDate] = React.useState(new Date())

  function onChange(date) {
    setDate(date)
  }

  return <DatePicker label="Select Date" onChange={onChange} value={date} />
}
\`\`\`
      `,
      },
    },
  )
  .add(
    'props.autoOk',
    () => {
      return React.createElement(() => {
        const [date, setDate] = React.useState(new Date())

        function onChange(date) {
          setDate(date)
        }

        return (
          <DatePicker
            label="Select Date"
            onChange={onChange}
            value={date}
            autoOk
          />
        )
      })
    },
    {
      readme: {
        content: autoOkMd,
      },
    },
  )
  .add(
    'props.renderDay',
    () => {
      return React.createElement(() => {
        const [date, setDate] = React.useState(new Date())

        function onChange(date) {
          setDate(date)
        }

        function renderDay(
          day,
          selectedDate,
          dayInCurrentMonth,
          dayCompmonent,
        ) {
          return (
            <span
              style={{
                border: '1px dashed magenta',
                padding: '6px 0',
              }}
            >
              {dayCompmonent}
            </span>
          )
        }

        return (
          <DatePicker
            label="Select Date"
            onChange={onChange}
            value={date}
            renderDay={renderDay}
          />
        )
      })
    },
    {
      readme: {
        content: renderDayMd,
      },
    },
  )
