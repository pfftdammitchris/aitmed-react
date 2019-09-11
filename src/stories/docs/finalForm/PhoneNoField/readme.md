# PhoneNoField

## Usage

```jsx
import React from 'react'
import { Form, Field } from 'react-final-form'
import { Button } from '@aitmed/react'
import { PhoneNoField } from '@aitmed/react/components/finalForm'

function onSubmit(values) {
  console.log(values)
}

const App = () => (
  <Form
    onSubmit={onSubmit}
    subscription={{ submitting: true }}
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <Field name="phone" component={PhoneNoField} />
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

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |

