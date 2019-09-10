## Props that will be passed to the canvas from [react-signature-canvas](https://github.com/agilgur5/react-signature-canvas)

<!-- STORY -->

```jsx
import React from 'react'
import { SignatureCanvas } from '@aitmed/react/components/finalForm'
import { Form, Field } from 'react-final-form'

const onSubmit = (values) => {
  console.log(values)
}

const App = () => {
  const onBegin = () => {
    console.log('drawing on canvas')
  }

  const onEnd = () => {
    console.log('drew on canvas')
  }

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Field
            name="signature"
            component={SignatureCanvas}
            canvasProps={{
              canvasProps={{
              minWidth: 5,
              maxWidth: 10.5,
              minDistance: 10,
              onBegin,
              onEnd,
              penColor: 'magenta',
            }}
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
