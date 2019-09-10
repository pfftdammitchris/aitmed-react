## Turns the text field into a `Select` component if `select` is true

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
  const items = [false, 'california', 'florida', 'miami', 'new york']

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Field
            name="state"
            component={OutlinedTextField}
            label="Select a state"
            select
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
