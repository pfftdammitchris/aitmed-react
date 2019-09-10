# OutlinedTextField (final-form)

`OutlinedTextField` was designed to be passed into the `component` prop for a `Field` component (exported from `react-final-form` internally)

## Usage

```jsx
import React from 'react'
import { OutlinedTextField } from '@aitmed/react/components/finalForm'

const App = () => <OutlinedTextField />
```

| Prop                  | Type | Default | Description                                                                                               |
| --------------------- | ---- | ------- | --------------------------------------------------------------------------------------------------------- |
| `input`               | any  |         | `input` prop from [FieldRenderProps](https://final-form.org/docs/react-final-form/types/FieldRenderProps) |
| `meta`                | any  |         | `meta` prop from [FieldRenderProps](https://final-form.org/docs/react-final-form/types/FieldRenderProps)  |
| `value`               | any  |         | `value` can be used to override `input.value` (useful for freezing the input)                             |
| `className`           | any  |         | Class name applied to the `TextField` or `Select` component                                               |
| `inline`              | any  |         | Applies `display: inline-block` to the wrapper `div` element                                              |
| `wrapperProps`        | any  |         | Props applied to the wrapper `div` element                                                                |
| `errorProps`          | any  |         | Props applied to the error `Typography` component underneath                                              |
| `formHelperTextProps` | any  |         | Props passed to `FormHelperTextProps` props to the `TextField` component                                  |
| `inputProps`          | any  |         | Props passed into `InputProps` (TextField) or `inputProps` (Select)                                       |
| `inputLabelProps`     | any  |         | Props passed into `InputLabelProps` (TextField)                                                           |
| `selectDisplayProps`  | any  |         | Props passed into `SelectDisplayProps` (Select)                                                           |
| `selectProps`         | any  |         | Props passed into the `Select` component (if `select` is `true`)                                          |
| `select`              | any  |         | Converts the `TextField` to a `Select` component                                                          |
| `classes`             | any  |         | Passed into the `classes` prop to the TextField or Select component                                       |
