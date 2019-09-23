<br />
<br />

<!-- STORY -->

## You can wrap your entire form with `AlignOutlinedTextFields` and their sizes will all stay in sync:

```jsx
import React from 'react'
import { AlignOutlinedTextFields, OutlinedTextField } from '@aitmed/react'
import { Form, Field } from 'react-final-form'
import arrayMutators from 'final-form-arrays'

async function onSubmit(values) {
  console.log(values)
}

function App() {
  const name = 'someFormName'

  const states = ['CA', 'WA']

  return (
    <AlignOutlinedTextFields size="small">
      <Form
        keepDirtyOnReinitialize
        onSubmit={onSubmit}
        subscription={{ submitting: true }}
        mutators={arrayMutators}
        render={({ handleSubmit, submitting, ...rest }: any) => (
          <form onSubmit={handleSubmit}>
            <Field
              label="Name"
              name={`${name}.name`}
              component={OutlinedTextField}
              wrapperProps={{ marginRight: 3 }}
              fullWidth
            />
            <Field
              label="Name"
              name={`${name}.name`}
              component={OutlinedTextField}
              wrapperProps={{ marginRight: 3 }}
              fullWidth
            />
            <Field
              name={`${name}.state`}
              component={OutlinedTextField}
              selectProps={{ native: true }}
              select
              fullWidth
            >
              {['Select State', ...states].map((state: any, index: number) => (
                <option key={`state${index}`} value={state}>
                  {state}
                </option>
              ))}
            </Field>
          </form>
        )}
        {...props}
      />
    </AlignOutlinedTextFields>
  )
}

export default App
```
