import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Select from '@material-ui/core/Select'
import { muiTheme } from 'storybook-addon-material-ui'
import { Field } from 'react-final-form'
import { storiesOf } from '@storybook/react'
import Typography from '../components/Typography'
import CreditCard from '../components/finalForm/CreditCard'
import getCodeDoc from '../utils/getCodeDoc'
import readme from './docs/creditCard.md'
import theme from '../config/theme'

const onSubmit = (values: any) => {
  console.log(values)
  alert(JSON.stringify(values, null, 2))
}

storiesOf('CreditCard', module)
  .addDecorator(muiTheme(theme))
  .add('README', () => <div />, {
    readme: { content: readme },
  })
  // @ts-ignore
  .add('default', () => <CreditCard onSubmit={onSubmit} />, {
    readme: {
      content: getCodeDoc(`
import React from 'react'
import { CreditCard } from '@aitmed/react/dist/components/finalForm'

const onSubmit = (values) => {
  console.log(values)
}

const App = () => <CreditCard onSubmit={onSubmit} />
`),
    },
  })
  .add(
    'initialValues',
    () => (
      // @ts-ignore
      <CreditCard
        onSubmit={onSubmit}
        initialValues={{
          card_number: '4111111111111111',
          month: '08',
          year: '2029',
          cvv_code: '400',
          billing_first_name: 'Jennifer',
          billing_last_name: 'Acosta',
          billing_address: '1111 Burkett Street',
          billing_city: 'El Monte',
          billing_state: 'CA',
          billing_zip_code: '91732',
        }}
      />
    ),
    {
      readme: {
        content: getCodeDoc(`
import React from 'react'
import { CreditCard } from '@aitmed/react/dist/components/finalForm'

const onSubmit = (values) => {
  console.log(values)
}

const App = () => (
  <CreditCard
    onSubmit={onSubmit}
    initialValues={{
      card_number: '4111111111111111',
      month: '08',
      year: '2029',
      cvv_code: '400',
      billing_first_name: 'Jennifer',
      billing_last_name: 'Acosta',
      billing_address: '1111 Burkett Street',
      billing_city: 'El Monte',
      billing_state: 'CA',
      billing_zip_code: '91732',
    }}
  />
)`),
      },
    },
  )
  .add('renderSubmit', () => (
    // @ts-ignore
    <CreditCard
      onSubmit={onSubmit}
      renderSubmit={(props: any) => {
        console.log(props)
        return (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 100,
              margin: 'auto',
              border: '1px solid blue',
            }}
          >
            <button type="submit">Submit</button>
          </div>
        )
      }}
    />
  ))
  .add('midLabel', () => (
    // @ts-ignore
    <CreditCard
      onSubmit={onSubmit}
      midLabel={
        <Typography variant="subheading" center>
          Don't forget to press submit when you're done!
        </Typography>
      }
    />
  ))
  .add('submittingText', () => (
    // @ts-ignore
    <CreditCard
      onSubmit={onSubmit}
      submittingText="Please wait while we process your credit card..."
      submitting
    />
  ))
  .add(
    'render prop',
    () => (
      <CreditCard
        onSubmit={onSubmit}
        renderSelectField={({ input }: any) => (
          <div>
            <Select content="Select" {...input} fullWidth />
          </div>
        )}
        renderTextField={({ input }: any) => {
          const extraProps: any = {}
          const style: any = {}
          if (input.name === 'billing_first_name') {
            // add some custom enhanced style to the first name
            style.fontWeight = 700
            style.color = 'blue'
            style.border = '1px solid blue'
            extraProps.placeholder = 'Type your first name and go'
          }
          return (
            <div>
              <TextField
                style={style}
                placeholder="Type something"
                {...input}
                {...extraProps}
                fullWidth
              />
            </div>
          )
        }}
        render={({ fields, fieldKeys, formApi, Cards }: any) => {
          const { handleSubmit, values, active } = formApi
          return (
            <>
              <form
                style={{ maxWidth: 500, margin: 'auto' }}
                onSubmit={handleSubmit}
              >
                <Cards values={values} active={active} />
                {fieldKeys.map((key: string) => {
                  const fieldProps = fields[key]
                  if (!fieldProps) return null
                  return <Field {...fieldProps} />
                })}
                <Button
                  type="submit"
                  style={{ marginTop: 20, background: 'teal', color: '#fff' }}
                >
                  Submit
                </Button>
              </form>
              <Typography style={{ margin: '25px 0' }} variant="h4">
                Full control with your interface
              </Typography>
            </>
          )
        }}
      />
    ),
    {
      readme: {
        content: getCodeDoc(`
import React from 'react'
import { CreditCard } from '@aitmed/react/dist/components/finalForm'

const onSubmit = (values) => {
  console.log(values)
}

const App = () => (
  <CreditCard
    onSubmit={onSubmit}
    renderSelectField={({ input }: any) => (
      <div>
        <Select content="Select" {...input} fullWidth />
      </div>
    )}
    renderTextField={({ input }: any) => {
      const extraProps: any = {}
      const style: any = {}
      if (input.name === 'billing_first_name') {
        // add some custom enhanced style to the first name
        style.fontWeight = 700
        style.color = 'blue'
        style.border = '1px solid blue'
        extraProps.placeholder = 'Type your first name and go'
      }
      return (
        <div>
          <TextField
            style={style}
            placeholder="Type something"
            {...input}
            {...extraProps}
            fullWidth
          />
        </div>
      )
    }}
    render={({ fields, fieldKeys, formApi, Cards }: any) => {
      const { handleSubmit, form, values, active, submitting } = formApi
      return (
        <form onSubmit={handleSubmit}>
          <Cards values={values} active={active} />
          {fieldKeys.map((key: string) => {
            const fieldProps = fields[key]
            if (!fieldProps) return null
            return <Field {...fieldProps} />
          })}
          <Button type="submit">Submit (check console)</Button>
        </form>
      )
    }}
  />
)
    `),
      },
    },
  )
  .add('renderSubmit (stub)', () => <div>Temporary stub</div>)
  .add('renderSelectField (stub)', () => <div>Temporary stub</div>)
  .add('renderTextField (stub)', () => <div>Temporary stub</div>)
