<!-- STORY -->

```jsx
import React from 'react'
import { SignatureCanvas } from '@aitmed/react/dist/components/finalForm'
import { Form, Field } from 'react-final-form'

const onSubmit = (values) => {
  console.log(values)
}

const App = () => {
  const signatureCaption = (
    <Typography variant="h4" style={{ border: '1px solid red' }} secondary>
      Custom signature caption
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
            signatureCaption={signatureCaption}
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
