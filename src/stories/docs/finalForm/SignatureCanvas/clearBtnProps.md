<!-- STORY -->

```jsx
import React from 'react'
import { SignatureCanvas } from '@aitmed/react/components/finalForm'
import { Form, Field } from 'react-final-form'

const onSubmit = (values) => {
  console.log(values)
}

const App = () => {
  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Field
            name="signature"
            component={SignatureCanvas}
            clearBtnProps={{
              style: { padding: '25px 50px', fontSize: '1.2rem' },
              hover: {
                thirdary: 'white',
              },
              thirdary: true,
            }}
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
