# CreditCard

## Usage

```jsx
import React from 'react'
import { CreditCard } from '@aitmed/react/components/finalForm'

const onSubmit = (values) => {
  console.log(values)
}

const App = () => (
  <div>
    <CreditCard onSubmit={onSubmit} />
  </div>
)
```

`CreditCard` is used to display forms for payment cards.

The only required prop is `onSubmit`, a function that invokes when the user submits the form. When called, it will receive the values of the form as the first argument. Any additional props will be passed to the root [Form](https://github.com/final-form/react-final-form#form--reactcomponenttypeformprops) component.

If you need to override the entire user interface, you can pass in a `render` prop and completely build your own form that way. The render prop will be passed in all the data you need:

```js
import React from 'react'
import { CreditCard } from '@aitmed/react/components/finalForm'

const onSubmit = (values) => {
  console.log(values)
}

const App = () => (
  <CreditCard
    onSubmit={onSubmit}
    render={({ fields, fieldKeys, formApi, Cards }) => {
      const { handleSubmit, form, values, active, submitting } = formApi
      return (
        <form onSubmit={handleSubmit}>
          <Cards values={values} active={active} />
          {fieldKeys.map((key: string) => {
            const fieldProps = fields[key]
            if (!fieldProps) return null

            return <Field {...fieldProps} />
          })}
        </form>
      )
    }}
  />
)
```

`fields` is an object of fields that you can use to render your interface simply by iterating over the `fieldKeys`.

```js
// prettier-ignore
const fields = {
  billing_address: {label: "Address", name: "billing_address", render: ƒ},
  billing_city: {label: "City", name: "billing_city", render: ƒ},
  billing_first_name: {label: "First Name", name: "billing_first_name", render: ƒ},
  billing_last_name: {label: "Last Name", name: "billing_last_name", render: ƒ},
  billing_state: {label: "State", name: "billing_state", render: ƒ, items: Array(50)},
  billing_zip_code: {label: "Zip", name: "billing_zip_code", render: ƒ, type: "number",   parse: ƒ},
  card_number: {label: "Card Number", name: "card_number", render: ƒ, parse: ƒ},
  cvv: {label: "CVV", name: "cvv_code", render: ƒ, type: "number", parse: ƒ},
  month: {label: "Month", name: "month", render: ƒ, items: Array(12)},
  year: {label: "Year", name: "year", render: ƒ, items: Array(20)}
}

const fieldKeys = [
  'card_number',
  'month',
  'year',
  'cvv_code',
  'billing_first_name',
  'billing_last_name',
  'billing_address',
  'billing_city',
  'billing_state',
  'billing_zip_code',
]
```

`formApi` is the original [form api](https://github.com/final-form/react-final-form#form-formapi-1) instance that react-final-form passes to us.

You might have noticed that each of the fields in the `fields` object comes with a `render` property automatically. That includes the default user interface that is used on the live web portals. So if you want to override that just provide your own `renderTextField` or `renderSelectField` and the component will automatically re-use that custom renderer to pass in to the fields when rendering:

```js
import React from 'react'
import { CreditCard } from '@aitmed/react/components/finalForm'
import { Typography } from '@aitmed/react'
import TextField from '@material-ui/core/TextField'

const onSubmit = (values) => {
  console.log(values)
}

const renderTextField = ({ input, meta, ...rest }) => (
  <div>
    <TextField {...input} placeholder="some placeholder" {...rest} />
    <div>
      {meta && meta.error && (
        <Typography variant="caption" center error>
          {meta.error}
        </Typography>
      )}
    </div>
  </div>
)

const App = () => (
  <CreditCard
    renderTextField={renderTextField}
    onSubmit={onSubmit}
    render={({ fields, fieldKeys, formApi, Cards }) => {
      const { handleSubmit, form, values, active, submitting } = formApi

      // The custom renderTextField prop will be used in fields

      return (
        <form onSubmit={handleSubmit}>
          <Cards values={values} active={active} />
          {fieldKeys.map((key: string) => {
            const fieldProps = fields[key]
            if (!fieldProps) return null
            return <Field {...fieldProps} />
          })}
        </form>
      )
    }}
  />
)
```

| Prop                           | Type      | Default | Description                                                                                             |
| ------------------------------ | --------- | ------- | ------------------------------------------------------------------------------------------------------- |
| onSubmit _(required)_          | Function  |         | A function invoked when the user submits the form, the form values will be passed as the first argument |
| initialValues _(optional)_     | Object    |         | An optional object to prefill any of the fields                                                         |
| submitting _(optional)_        | Boolean   |         | Optional `submitting` prop to override the default one                                                  |
| submittingText _(optional)_    | ReactNode | `""`    | Optional ReactNode to display while the form is submitting                                              |
| midLabel _(optional)_          | ReactNode | `""`    | Optional ReactNode to display between the card and the form fields                                      |
| render _(optional)_            | Function  |         | Optional function to override the default form `render` implementation                                  |
| renderSubmit _(optional)_      | Function  |         | Optional function to override the default button submit UI                                              |
| renderTextField _(optional)_   | Function  |         | Optional function to override the default `renderTextField` implementation                              |
| renderSelectField _(optional)_ | Function  |         | Optional function to override the default `renderSelectField` implementation                            |

## Types

```ts
interface CreditCard {
  card_number?: string
  month?: string
  year?: string
  cvv_code?: string
  billing_first_name?: string
  billing_last_name?: string
  billing_address?: string
  billing_city?: string
  billing_state?: string
  billing_zip_code?: string
}
type RenderProps = {
  fields: {
    [fieldKey: string]: {
      label: string
      name: string
      parse?: (value: string, name: string): string
      items?: string[] | number[]
      type?: string
      render?: FieldRenderProps
      ...otherFieldProps
    }
    ...otherFields
  }
  fieldKeys: string[]
  formApi: FormApi
  Cards: ReactCreditCards
}
```

### onSubmit: (values: CreditCard, form: FormApi, callback?: (errors?: any) => void) => ?Object | Promise<?Object> | void => void

Function that invokes when the user submits the form. When called, it will receive the values of the form as the first argument and the react-final-form formApi as the second argument.

[See the Final Form docs on onSubmit](https://github.com/final-form/final-form#onsubmit-values-object-form-formapi-callback-errors-object--void--object--promiseobject--void)
