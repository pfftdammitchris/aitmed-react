<!-- STORY -->

```jsx
import React from 'react'
import { SignatureCanvas } from '@aitmed/react/dist/components/finalForm'
import { Form, Field } from 'react-final-form'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  x: {
    border: '1px solid teal',
  },
  canvasContainer: {
    border: '1px solid magenta',
  },
  clearBtn: {
    borderRadius: 25,
    fontSize: '1.5rem',
    minWidth: 250,
    minHeight: 50,
    background: 'salmon',
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
            classNames={{
              x: classes.x,
              canvasContainer: classes.canvasContainer,
              clearBtn: classes.clearBtn,
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
