## Props passed to the error `Typography` element

### (visible when `meta.error` === true && `meta.touched` === true)

<!-- STORY -->

```jsx
import React from 'react'
import { OutlinedTextField } from '@aitmed/react/dist/components/finalForm'
import { Form, Field } from 'react-final-form'
import { makeStyles } from '@material-ui/styles'

const onSubmit = (values) => {
  console.log(values)
}

const App = () => {
  const errorProps = {
    style: {
      border: '1px solid red',
      fontWeight: 700,
    },
  }

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Field
            name="age"
            component={OutlinedTextField}
            label="Your age"
            placeholder="Type something"
            validate={() => 'This is the error component'}
            errorProps={errorProps}
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
