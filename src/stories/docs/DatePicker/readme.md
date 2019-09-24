# DatePicker

`DatePicker` is an `OutlinedTextField` component that allows the user to select a date from a calendar popup instead of rendering the native date input.

**IMPORTANT**: If you are using `DatePicker` to synchronize the padding, font sizes etc. with other text fields to make them look identical you have to wrap the text fields with `AlignOutlinedTextField` or else this _might_ not align correctly.

However, you can still use this component without any other problems.

## Types

```ts
interface DatePickerProps extends MuiDatePickerProps {
  label?: string
  value: number | Date
  onChange: (date: any) => void
  variant?: DatePickerVariant
  inputVariant?: DatePickerInputVariant
}

type Variant = 'dialog' | 'inline' | 'static' | undefined
type DatePickerInputVariant = 'outlined' | 'standard' | 'filled'
```

**All other props are passed into the [DatePicker](https://material-ui-pickers.dev/api/DatePicker) component.**

## Usage

```jsx
import React from 'react'
import { DatePicker } from '@aitmed/react'

function App() {
  const [date, setDate] = React.useState(new Date())

  function onChange(date) {
    setDate(date)
  }

  return <DatePicker label="Select Date" onChange={onChange} value={date} />
}
```

## Props

| Prop                  | Type        | Default | Description                                         |
| --------------------- | ----------- | ------- | --------------------------------------------------- |
| `onChange` (required) | function    |         | Called with the selected date on date change        |
| `value` (required)    | number/Date |         | Date in milliseconds or Date object                 |
| `label`               | string      |         | Label of the `OutlinedTextField` component          |
| `variant`             | Variant     |         | Variant passed to the `DatePicker` component        |
| `inputVariant`        | Variant     |         | Variant passed to the `OutlinedTextField` component |

**All other props are passed into the [DatePicker](https://material-ui-pickers.dev/api/DatePicker) component.**
