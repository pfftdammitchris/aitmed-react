# DatePicker

`DatePicker` is an `OutlinedTextField` component that allows the user to select a date from a calendar popup instead of rendering the native date input.

**IMPORTANT**: If you are using `DatePicker` to synchronize the padding, font sizes etc. with other text fields to make them look identical you have to wrap the text fields with `AlignOutlinedTextField` or else this _might_ not align correctly.

However, you can still use this component without any other problems.

## Types

```ts
interface DatePickerProps {
  label?: string
  value?: string
  onChange: (date: any) => void
  variant?: Variant
}

type Variant = 'outlined' | 'standard' | 'filled'
```

**All other props are passed into the [DatePicker](https://material-ui-pickers.dev/api/DatePicker) component.**

## Usage

```jsx
import React from 'react'
import { DatePicker } from '@aitmed/react'

function App() {
  function onChange(date) {
    console.log(date)
  }

  return <DatePicker label="Select Date" onChange={onChange} />
}
```

## Props

| Prop                  | Type     | Default | Description                                         |
| --------------------- | -------- | ------- | --------------------------------------------------- |
| `onChange` (required) | function |         | Called with the selected date on date change        |
| `label`               | string   |         | Label of the `OutlinedTextField` component          |
| `value`               | string   | `true`  | Date value                                          |
| `variant`             | Variant  |         | Variant passed to the `OutlinedTextField` component |

**All other props are passed into the [DatePicker](https://material-ui-pickers.dev/api/DatePicker) component.**
