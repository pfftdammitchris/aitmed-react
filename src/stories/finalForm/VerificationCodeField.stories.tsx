import React from 'react'
import { storiesOf } from '@storybook/react'
import { muiTheme } from 'storybook-addon-material-ui'
import { Form, Field } from 'react-final-form'
import theme from '../../config/theme'
import Button from '../../components/Button'
import VerificationCodeField from '../../components/finalForm/VerificationCodeField'

function onSubmit(values: any) {
  console.log(values)
  window.alert(JSON.stringify(values, null, 2))
}

function Wrapper({ children }: any) {
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

storiesOf('(final-form) VerificationCodeField', module)
  .addDecorator(muiTheme(theme))
  .add('README', () => null, {
    readme: { content: `# README` },
  })
  .add('default', () => {
    return (
      <Wrapper>
        <Field name="phone_verification" component={VerificationCodeField} />
      </Wrapper>
    )
  })
