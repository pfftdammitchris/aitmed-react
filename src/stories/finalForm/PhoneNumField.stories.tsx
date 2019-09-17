import React from 'react'
import { storiesOf } from '@storybook/react'
import { muiTheme } from 'storybook-addon-material-ui'
import { Form, Field } from 'react-final-form'
import theme from '../../config/theme'
import Button from '../../components/Button'
import PhoneNumField from '../../components/finalForm/PhoneNumField'
import readme from '../docs/finalForm/PhoneNumField/readme.md'
import wrapperPropsMd from '../docs/finalForm/PhoneNumField/wrapperProps.md'
import countryFieldPropsMd from '../docs/finalForm/PhoneNumField/countryFieldProps.md'
import phoneFieldPropsMd from '../docs/finalForm/PhoneNumField/phoneFieldProps.md'

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

storiesOf('(final-form) PhoneNumField', module)
  .addDecorator(muiTheme(theme))
  .add('README', () => <div />, {
    readme: { content: readme },
  })
  .add('default', () => {
    return (
      <Wrapper>
        <Field name="phone" component={PhoneNumField} />
      </Wrapper>
    )
  })
  .add(
    'props.wrapperProps',
    () => {
      return (
        <Wrapper>
          <Field
            name="phone"
            component={PhoneNumField}
            wrapperProps={{
              style: {
                background: 'red',
                color: '#fff',
                fontWeight: 700,
              },
            }}
          />
        </Wrapper>
      )
    },
    { readme: { content: wrapperPropsMd } },
  )
  .add(
    'props.countryFieldProps',
    () => {
      return (
        <Wrapper>
          <Field
            name="phone"
            component={PhoneNumField}
            countryFieldProps={{
              style: {
                background: 'orange',
                color: '#fff',
                fontWeight: 700,
              },
            }}
          />
        </Wrapper>
      )
    },
    { readme: { content: countryFieldPropsMd } },
  )
  .add(
    'props.phoneFieldProps',
    () => {
      return (
        <Wrapper>
          <Field
            name="phone"
            component={PhoneNumField}
            phoneFieldProps={{
              style: {
                background: 'teal',
                color: '#fff',
                fontWeight: 700,
              },
            }}
          />
        </Wrapper>
      )
    },
    { readme: { content: phoneFieldPropsMd } },
  )
