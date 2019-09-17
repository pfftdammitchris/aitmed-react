import React from 'react'
import { storiesOf } from '@storybook/react'
import { muiTheme } from 'storybook-addon-material-ui'
import { Form, Field } from 'react-final-form'
import theme from '../../config/theme'
import Button from '../../components/Button'
import VerificationCodeField from '../../components/finalForm/VerificationCodeField'
import readme from '../docs/finalForm/VerificationCodeField/readme.md'
import labelMd from '../docs/finalForm/VerificationCodeField/label.md'
import digitsMd from '../docs/finalForm/VerificationCodeField/digits.md'
import inputLabelPropsMd from '../docs/finalForm/VerificationCodeField/inputLabelProps.md'
import errorTextPropsMd from '../docs/finalForm/VerificationCodeField/errorTextProps.md'
import textFieldPropsMd from '../docs/finalForm/VerificationCodeField/textFieldProps.md'
import autoFocusMd from '../docs/finalForm/VerificationCodeField/autoFocus.md'

function onSubmit(values: any) {
  console.log(values)
  window.alert(JSON.stringify(values, null, 2))
}

function Wrapper({ children, ...rest }: any) {
  return (
    <Form
      initialValues={{
        test: [],
      }}
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
      {...rest}
    />
  )
}

storiesOf('(final-form) VerificationCodeField', module)
  .addDecorator(muiTheme(theme))
  .add('README', () => <div />, {
    readme: { content: readme },
  })
  .add('default', () => (
    <Wrapper>
      <Field
        name="phone_verification_code"
        component={VerificationCodeField}
        digits={6}
      />
    </Wrapper>
  ))
  .add(
    'props.label',
    () => (
      <Wrapper>
        <Field
          name="phone_verification_code"
          component={VerificationCodeField}
          digits={6}
          label="Phone Verification And The Next Mystery"
        />
      </Wrapper>
    ),
    { readme: { content: labelMd } },
  )
  .add(
    'props.digits',
    () => (
      <Wrapper>
        <Field
          name="phone_verification_code"
          component={VerificationCodeField}
          digits={15}
        />
      </Wrapper>
    ),
    { readme: { content: digitsMd } },
  )
  .add(
    'props.inputLabelProps',
    () => (
      <Wrapper>
        <Field
          name="phone_verification_code"
          component={VerificationCodeField}
          digits={6}
          label="Phone Verification"
          inputLabelProps={{
            style: {
              border: '1px solid violet',
              fontWeight: 700,
            },
          }}
        />
      </Wrapper>
    ),
    { readme: { content: inputLabelPropsMd } },
  )
  .add(
    'props.errorTextProps',
    () => (
      <Wrapper>
        <Field
          name="phone_verification_code"
          component={VerificationCodeField}
          digits={6}
          validate={() => 'The codes are all over the place'}
          errorTextProps={{
            style: {
              border: '1px solid red',
              fontWeight: 700,
            },
          }}
        />
      </Wrapper>
    ),
    { readme: { content: errorTextPropsMd } },
  )
  .add(
    'props.textFieldProps',
    () => (
      <Wrapper>
        <Field
          name="phone_verification_code"
          component={VerificationCodeField}
          digits={6}
          textFieldProps={{
            style: {
              border: '1px solid green',
              borderRadius: '50%',
              fontWeight: 500,
            },
          }}
        />
      </Wrapper>
    ),
    { readme: { content: textFieldPropsMd } },
  )
  .add(
    'props.autoFocus',
    () => (
      <Wrapper>
        <Field
          name="phone_verification_code"
          component={VerificationCodeField}
          digits={6}
          autoFocus
        />
      </Wrapper>
    ),
    { readme: { content: autoFocusMd } },
  )
  .add(
    'props.variant',
    () => (
      <Wrapper>
        <Field
          name="phone_verification_code"
          component={VerificationCodeField}
          digits={6}
          label="Abc my one two three"
          variant="filled"
        />
      </Wrapper>
    ),
    { readme: { content: autoFocusMd } },
  )
