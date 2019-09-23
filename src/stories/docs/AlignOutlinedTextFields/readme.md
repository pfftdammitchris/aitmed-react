# AlignOutlinedTextFields

Since the `Select` and `TextField` components render different outputs in size, this is used to constrain any input / select fields to align identically.

## Types

```tsx
interface AlignOutlinedTextFieldsProps {
  size?: 'small' | 'medium' | 'large'
}
```

> All other props will be passed into the root `div` element.

## Usage

```jsx
import React from 'react'
import { Form, Field } from 'react-final-form'
import { AlignOutlinedTextFields, Flex, OutlinedTextField } from '@aitmed/react'

function App() {
  const states = ['CA', 'WA']

  return (
    <AlignOutlinedTextFields>
      <Flex>
        <OutlinedTextField
          label="Email"
          wrapperProps={{ marginRight: 3 }}
          fullWidth
        />
        <OutlinedTextField selectProps={{ native: true }} select fullWidth>
          {['Select State', 'CA', 'WA'].map((state: any, index: number) => (
            <option key={`state${index}`} value={state}>
              {state}
            </option>
          ))}
        </OutlinedTextField>
      </Flex>
    </AlignOutlinedTextFields>
  )
}
```

## Props

| Prop   | Type   | Default    | Description                                                             |
| ------ | ------ | ---------- | ----------------------------------------------------------------------- |
| `size` | string | `'medium'` | Optionally provide a _size_ prop to modify the size of the input fields |
