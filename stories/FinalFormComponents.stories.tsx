import React from 'react'
// import Typography from '@material-ui/core/Typography'
import { storiesOf } from '@storybook/react'
import { Form, Field } from 'react-final-form'
import PhoneNumberField from '../../drafts/finalForm/fields/PhoneNumberField'

const onSubmit = (values) => {
  console.log(values)
}

storiesOf('react-final-form components', module).add('PhoneNumberField', () => (
  <Form
    onSubmit={onSubmit}
    render={({ handleSubmit, submitting }) => <form></form>}
  />
))
