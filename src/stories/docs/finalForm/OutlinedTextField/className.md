<!-- STORY -->

```jsx
import React from 'react'
import { OutlinedTextField } from '@aitmed/react/components/finalForm'
import { Form, Field } from 'react-final-form'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  root: {
    border: '2px solid maroon',
  },
})

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
            name="age"
            component={OutlinedTextField}
            label="Your age"
            className={classes.root}
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
