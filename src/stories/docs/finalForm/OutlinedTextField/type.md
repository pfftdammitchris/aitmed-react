## props.type

`props.type` may output different appearances of the text field. For example, if `type` was `password`, by default an _eye_ icon will appear on the right to allow users to hide or reveal their password.

<br />

<!-- STORY -->

<br />

```jsx
import React from 'react'
import { OutlinedTextField } from '@aitmed/react/dist/components/finalForm'
import { Form, Field } from 'react-final-form'
import { makeStyles } from '@material-ui/styles'

const onSubmit = (values) => {
  console.log(values)
}

const App = () => {
  const classes = useStyles()

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Field
            type="password"
            name="password"
            component={OutlinedTextField}
            label="Password"
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

## `props.type === 'password'`

Will render a password field. By default, an _eye_ icon will appear to the right to allow users to hide or reveal their password.

To disable this feature, pass in `inputProps.endAdornment = null`

```jsx
const App = () => {
  const classes = useStyles()

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Field
            type="password"
            name="password"
            label="Password"
            component={OutlinedTextField}
            inputProps={{
              endAdornment: null,
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
