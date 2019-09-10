## Props passed to the wrapper `div` element

<!-- STORY -->

```jsx
import React from 'react'
import { OutlinedTextField } from '@aitmed/react/components/finalForm'
import { Form, Field } from 'react-final-form'
import { makeStyles } from '@material-ui/styles'

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
            name="age"
            component={OutlinedTextField}
            label="Your age"
            wrapperProps={{
              style: {
                border: '1px solid magenta',
              },
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
