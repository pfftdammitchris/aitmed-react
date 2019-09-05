# `react-final-form` utilities

## Formatters

> (Note: Formatters can also be passed as the `parse` prop to any `Field` component)

### `formatOnlyLetters: (val: string) => string`

A _field formatter_ for `Field` components.

This will only take in values that are _letters_ from the user.

```jsx
import React from 'react'
import { Form, Field } from 'react-final-form'
import { formatOnlyLetters } from '@aitmed/react/utils'

async function onSubmit(values) {
  console.log(values)
}

const MyComponent = () => (
  <Form
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <Field component="input" format={formatOnlyLetters} />
      </form>
    )}
  />
)
```

### `formatOnlyNumbers: (val: string) => string`

A _field formatter_ for `Field` components.

This will only take in values that are _numbers_ from the user.

```jsx
import React from 'react'
import { Form, Field } from 'react-final-form'
import { formatOnlyNumbers } from '@aitmed/react/utils'

async function onSubmit(values) {
  console.log(values)
}

const MyComponent = () => (
  <Form
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <Field component="input" format={formatOnlyNumbers} />
      </form>
    )}
  />
)
```

## Parsers

```ts
type Formatter = (val: string) => string

type FormatOptions = {
  format?: string
  formatter?: Formatter
}
```

Every parser function below can be passed into `Field` components.

This utility will parse any input value into either their default format or a custom format passed in. This will be used as the final field value passed into `onSubmit`.

For each of these functions, you can optionally provide a custom `formatter` or a custom `format` by passing in an object if you want to override the defaults. Note that if you do pass in an object it will turn into a `higher order function`.

All parsers below will share the same format when used. For example, `parsePhone` is being used in this example but all parsers can be used the same way. The only difference is their _default format_.

#### Using default formatter

```jsx
import React from 'react'
import { Form, Field } from 'react-final-form'
import { finalForm } from '@aitmed/react/utils'

async function onSubmit(values) {
  console.log(values)
}

const MyComponent = () => (
  <Form
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <Field component="input" parse={finalForm.parsePhone} />
      </form>
    )}
  />
)
```

#### Using `options.format`

```js
import React from 'react'
import { Form, Field } from 'react-final-form'
import { finalForm } from '@aitmed/react/utils'

async function onSubmit(values) {
  console.log(values)
}

const customFormat = '1 111 111 1111'

const MyComponent = () => (
  <Form
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <Field
          component="input"
          parse={finalForm.parsePhone({ format: customFormat })}
        />
      </form>
    )}
  />
)
```

#### Using `options.formatter`

```js
import React from 'react'
import { Form, Field } from 'react-final-form'
import { finalForm } from '@aitmed/react/utils'

async function onSubmit(values) {
  console.log(values)
}

function customFormatter(val) {
  if (val.length < 10) {
    return '11111'
  } else {
    return '+1 999 999-9999'
  }
}

const MyComponent = () => (
  <Form
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <Field
          component="input"
          parse={finalForm.parsePhone({ formatter: customFormatter })}
        />
      </form>
    )}
  />
)
```

If `options.formatter` is provided, it will be passed in the input value as the first argument and will use the return value as the new format. If the return value is falsey (`null`, `undefined`, etc) it will fall back to either the `options.format` string you provided or their default format.

`options.formatter` will have a higher priority than `options.format`, so if both properties are provided and `options.formatter` returns a falsey value, then `options.format` will be the new format. If `options.format` is also any falsey value, then the default format is used.

### `parsePhone: (val: string | FormatOptions, formatter?: Formatter) => string | ({ format?: string, formatter?: Formatter }) => Formatter`

> Default format: `+9 (999) 999-9999`

### `parseSSN: (val: string | FormatOptions, formatter?: Formatter) => string | ({ format?: string, formatter?: Formatter }) => Formatter`

> Default format: `999-99-9999`

## Validators

### `validate: Validate`

(Docs not completed yet)

#### NPI: (str: string) => string
