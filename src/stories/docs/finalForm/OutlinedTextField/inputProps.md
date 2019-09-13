## Props passed to `InputProps` on the `TextField` component if `select` is _NOT_ `true`

## If `select` is `true`, then `inputProps` is passed to `inputProps` on the `Select` component from material-ui

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
  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Field
            name="age"
            component={OutlinedTextField}
            label="Your age"
            inputProps={{
              style: {
                border: '1px solid orange',
              },
              onKeyPress: (e) => console.log(e.target.value),
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
