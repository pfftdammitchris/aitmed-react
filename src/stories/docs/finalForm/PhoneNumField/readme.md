# PhoneNumField

`PhoneNumField` renders a `CountryCodeField` input and a phone text field. Used with `react-final-form`, this field comes out as an object with `input.name` as the key. The properties of the object are `code` which comes from `CountryCodeField` and `phone_number` which comes from the phone number textfield.

For example, if we were to pass a name of "superhero" into `Field` as shown below:

```jsx
const App = () => (
  <Form
    onSubmit={onSubmit}
    subscription={{ submitting: true }}
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <Field name="superhero" component={PhoneNumField} />
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

Then on submission, the values of this entire field will come out to be something like:

```json
{
  "superhero": {
    "code": "<some code value>",
    "phone_number": "<some phone number value>"
  }
}
```

The `CountryCode` and phone number textfield component will automatically format itself in the user interface.

When the user changes the value of the country code, the value of the phone number will also update format itself for the country selected.

## Usage

```jsx
import React from 'react'
import { Form, Field } from 'react-final-form'
import { Button } from '@aitmed/react'
import { PhoneNumField } from '@aitmed/react/dist/components/finalForm'

function onSubmit(values) {
  console.log(values)
}

const App = () => (
  <Form
    onSubmit={onSubmit}
    subscription={{ submitting: true }}
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <Field name="phone" component={PhoneNumField} />
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

| Prop                | Type   | Default | Description                            |
| ------------------- | ------ | ------- | -------------------------------------- |
| `wrapperProps`      | object |         | Props passed to the root `div` element |
| `countryFieldProps` | object |         | Props passed to the country code field |
| `phoneFieldProps`   | object |         | Props passed to the phone number field |
