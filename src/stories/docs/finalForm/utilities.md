# `react-final-form` utilities (Stub - coming soon)

## Formatters

> (Note: Formatters can also be passed as the `parse` prop to any `Field` component)

### `formatOnlyLetters: (val: string) => string`

A *field formatter* for `Field` components.

This will only take in values that are *letters* from the user.

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

A *field formatter* for `Field` components.

This will only take in values that are *numbers* from the user.

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

### `parsePhone: (val:string, formatter?: (val: string) => string | string) => string`

A *field parser* for `Field` components.

This will parse any input value into the format `+9 (999) 999-9999` and return the parsed value that will be passed into `onSubmit`

You can optionally provide a `formatter` in the second argument as a `string` or `function` if you want to override the default format. If a function is provided, it will be passed in the input value as the first argument.

*Using default formatter*

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
        <Field  component="input" parse={finalForm.parsePhone} />
      </form>
    )}
  />
)
```

*Using custom format string*

```jsx

const format = '1 111 111 1111'

const MyComponent = () => (
  <Form
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <Field  component="input" parse={finalForm.parsePhone} />
      </form>
    )}
  />
)
```


### `parseSSN: (val: string) => string`

A *field parser* for `Field` components.

This will parse any input value and return the parsed value that will be passed into `onSubmit`

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
        <Field  component="input" parse={finalForm.parsePhone} />
      </form>
    )}
  />
)
```

## Validators

### `validate: Validate`