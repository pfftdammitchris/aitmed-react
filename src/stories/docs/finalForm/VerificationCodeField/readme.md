# VerificationCodeField (final-form)

`VerificationCodeField` was designed to be passed into the `component` prop for a `Field` component (exported from `react-final-form` internally)

## Usage

```jsx
import React from 'react'
import { Form, Field } from 'react-final-form'
import { Button } from '@aitmed/react'
import { VerificationCodeField } from '@aitmed/react/dist/components/finalForm'

function onSubmit(values) {
  console.log(values)
}

const App = () => (
  <Form
    onSubmit={onSubmit}
    subscription={{ submitting: true }}
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <Field name="phone_verification_code" component={VerificationCodeField} digits={6} />
        <div>
          <Button type="submit" primary small>
            Submit
          </Button>
        </div>
      </form>
    )}
  />
)
```

| Prop              | Type | Default      | Description                                                                                               |
| ----------------- | ---- | ------------ | --------------------------------------------------------------------------------------------------------- |
| `input`           | any  |              | `input` prop from [FieldRenderProps](https://final-form.org/docs/react-final-form/types/FieldRenderProps) |
| `meta`            | any  |              | `meta` prop from [FieldRenderProps](https://final-form.org/docs/react-final-form/types/FieldRenderProps)  |
| `autoFocus`       | any  | `false`      | Auto focuses the first code input if `true`                                                               |
| `errorTextProps`  | any  | `{}`         | Props applied to the error `FormHelperText` component underneath                                          |
| `textFieldProps`  | any  | `{}`         | Props passed to `OutlinedTextField`, a wrapper around the `TextField` component                           |
| `inputLabelProps` | any  | `{}`         | Props passed into `InputLabel`                                                                            |
| `required`        | any  | `false`      | If `true`, the form will not be submitted without a user value                                            |
| `label`           | any  |              | Props passed to the `InputLabel` component                                                                |
| `digits`          | any  | `6`          | Will render ___ amount of input boxes based on the number specified                                       |
| `variant`         | any  | `'outlined'` | Prop passed to the `TextField` Material UI component                                                      |
