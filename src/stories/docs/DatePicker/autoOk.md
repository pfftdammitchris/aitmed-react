## `props.autoOk` automatically closes and saves the date value when a user selects a date

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

  return (
    <DatePicker label="Select Date" onChange={onChange} value={date} autoOk />
  )
}
```
