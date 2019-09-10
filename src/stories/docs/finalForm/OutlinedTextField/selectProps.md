## Props passed to the `Select` component from material-ui

### `select` must be `true` for this to work

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
            selectProps={{
              style: {
                color: 'magenta',
                minWidth: 250,
              },
              displayEmpty: true,
              variant: 'outlined',
              labelWidth: 100,
              native: true,
            }}
            select
          >
            {items.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </Field>
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
