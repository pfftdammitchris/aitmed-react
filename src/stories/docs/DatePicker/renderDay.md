## `props.renderDay` is used to either extend the rendering of each day in the calendar or completely override it with a custom day renderer.

This is an example to show that any props used in the original [DatePicker](https://material-ui-pickers.dev/api/DatePicker) component can also be used.

<br />

<!-- STORY -->

```jsx
import React from 'react'
import { DatePicker } from '@aitmed/react'

function App() {
  const [date, setDate] = React.useState(new Date())

  function onChange(date) {
    setDate(date)
  }

  function renderDay(day, selectedDate, dayInCurrentMonth, dayCompmonent) {
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
}
```
