import React from 'react'
import { storiesOf } from '@storybook/react'
import { Form, Field } from 'react-final-form'
import { muiTheme } from 'storybook-addon-material-ui'
import Button from '../components/Button'
import PhoneNumField from '../components/finalForm/PhoneNumField'
import OutlinedTextField from '../components/finalForm/OutlinedTextField'
import Tooltip from '../components/Tooltip'
import theme from '../config/theme'
import readme from './docs/checkbox.md'

function onSubmit(values) {
  console.log(values)
}

storiesOf('Tooltip', module)
  .addDecorator(muiTheme(theme))
  .add('README', () => <div />, {
    readme: { content: `# Stub` },
  })
  .add('default', () => <h1>Tooltip (Stub)</h1>)
  .add('s', () => {
    return (
      <div>
        <Form
          onSubmit={onSubmit}
          subscription={{ submitting: true }}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Field name="phone" component={PhoneNumField} />
              <Field
                type="password"
                name="password"
                component={OutlinedTextField}
              />
            </form>
          )}
        />
      </div>
    )
  })
// .add('default', () => (
//   <Tooltip title="lorem ipsum something something">
//     <Button>Hover for the tooltip</Button>
//   </Tooltip>
// ))
