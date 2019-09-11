import React from 'react'
import { storiesOf } from '@storybook/react'
import { Form, Field } from 'react-final-form'
import { makeStyles } from '@material-ui/styles'
import Button from 'components/Button'
import PhoneNumField from 'components/finalForm/PhoneNumField'
import readme from 'stories/docs/finalForm/PhoneNumField/readme.md'

function onSubmit(values) {
  console.log(values)
  window.alert(JSON.stringify(values, null, 2))
}

function Wrapper({ children }) {
  return (
    <Form
      onSubmit={onSubmit}
      subscription={{ submitting: true }}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          {children}
          <div>
            <Button type="submit" primary small>
              Submit
            </Button>
          </div>
        </form>
      )}
    />
  )
}

storiesOf('(final-form) PhoneNumField', module).add('default', () => {
  return (
    <Wrapper>
      <Field name="phone" component={PhoneNumField} />
    </Wrapper>
  )
})
