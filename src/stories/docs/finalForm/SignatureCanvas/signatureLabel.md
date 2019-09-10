<!-- STORY -->

```jsx
import React from 'react'
import { SignatureCanvas } from '@aitmed/react/components/finalForm'
import { Form, Field } from 'react-final-form'

const onSubmit = (values) => {
  console.log(values)
}

const App = () => {
  const signatureLabel = (
    <Typography variant="h6" style={{ border: '1px solid magenta' }} secondary>
      Custom signature label
    </Typography>
  )

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Field
            name="signature"
            component={SignatureCanvas}
            signatureLabel={signatureLabel}
          />
          <div style={{ margin: '25px 0' }}>
            <Button type="submit" primary small>
              Submit
            </Button>
          </div>
        </form>
      )}
    />
  )
}
```
