## Props passed to the `X` component (which is a `Typography`)

<!-- STORY -->

```jsx
import React from 'react'
import { SignatureCanvas } from '@aitmed/react/dist/components/finalForm'
import { Form, Field } from 'react-final-form'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  x: {
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
            name="signature"
            component={SignatureCanvas}
            xProps={{
              className: classes.x,
              variant: 'h6',
              error: true,
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
