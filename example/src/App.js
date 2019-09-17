import React from 'react'
import { Form, Field, FormSpy } from 'react-final-form'
import { ThemeProvider, Button, Typography, LoadingSpinner } from 'aitmed-react'
import { VerificationCodeField } from 'aitmed-react/dist/components/finalForm'

const onSubmit = (values) => {
  console.log(values)
}

function Former(props) {
  return (
    <Form
      subscription={{ submitting: true }}
      onSubmit={onSubmit}
      render={({ handleSubmit, submitting }) => (
        <form onSubmit={handleSubmit}>
          <Field
            name="phone_verification_code"
            component={VerificationCodeField}
          />
          <Button type="submit">Submit</Button>
        </form>
      )}
    />
  )
}

const App = () => {
  return (
    <ThemeProvider>
      <div style={{ maxWidth: 800, margin: 'auto' }}>
        <Former />
      </div>
    </ThemeProvider>
  )
}

export default App
