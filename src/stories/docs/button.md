# Button

Button wraps and extends `@material-ui/core/Button`

## Types

```tsx
interface ButtonProps {
  className?: string
  primary?: boolean
  secondary?: boolean
  thirdary?: boolean
  neutral?: boolean
  error?: boolean
  red?: boolean
  danger?: boolean
  hover?: {
    [themeType: string]: string
  }
  small?: boolean
  medium?: boolean
  large?: boolean
  xlarge?: boolean
  size?: Size
  disabled?: boolean
  outlined?: boolean
  textColor?: string
  background?: string
  overwriteClassName?: boolean
  overWrittenClassNames?: string
  centerOnSmall?: boolean
  type?: 'button' | 'submit'
}

type Size = 'small' | 'medium' | 'large'
```

> All other props will be passed into material-ui's `Button` component.

## Usage

```jsx
import React from 'react'
import { Button } from '@aitmed/react'

const App = () => <Button />
```

## Props

### `className?: string`

Styles the button using a CSS class

### `primary?: boolean`

Applies `classes.primary` if `props.primary = true`

### `secondary?: boolean`

Applies `classes.secondary` if `props.secondary = true`

### `thirdary?: boolean`

Applies `classes.thirdary` if `props.thirdary = true`

### `neutral?: boolean`

Applies `classes.neutral` if `props.neutral = true`. This will _not_ be applied if either `props.primary`, `props.secondary`, `props.thirdary`, `props.error`, `props.outlined` is `true`. It will also not be applied if `props.hover` is populated with anything.

### `error?: boolean` / `red?: boolean` / `danger?: boolean`

Applies `classes.error` if `props.error` or `props.red` or `props.danger` is true.

### `hover`

An object with any of the following combinations:

```tsx
interface Hover {
  primary?: 'secondary' | 'thirdary' | 'white' | 'black'
  secondary?: 'primary' | 'thirdary' | 'white' | 'black'
  thirdary?: 'primary' | 'secondary' | 'white' | 'black'
  white?: 'primary' | 'secondary' | 'thirdary' | 'black'
  black?: 'primary' | 'secondary' | 'thirdary' | 'white'
  red?: boolean
  danger?: boolean
  error?: boolean
}
```

Example:

```jsx
<Button type="submit" hover={{ primary: 'thirdary' }} primary>
  Submit
</Button>
```

If we were to read this, it goes like this: "\*The button with a theme of `primary` is hovering on a `thirdary` background.

When the user hovers over the button, it will transition its colors as if it was on a `thirdary` background.

NOTE: You _must_ apply a `primary` prop if `hover.primary` is being used. This applies for other theme colors like `secondary`, `thirdary`, `white`, `danger`, etc. We will automatically have this logic applied to the button in the future, but for now it must be manually set to match its hover effects.

### `small?: boolean`

Applies `classes.small` if `props.small = true`

### `medium?: boolean`

Applies `classes.medium` if `props.medium = true`

### `large?: boolean`

Applies `classes.large` if `props.large = true`

### `xlarge?: boolean`

Applies `classes.xlarge` if `props.xlarge = true`

### `disabled?: boolean`

Applies `classes.disabled` if `props.disabled = true`. Setting this to `true` will also send `true` to material-ui's `Button` as the value for `props.disabled`

### `outlined?: boolean`

Applies `classes.outlined` if `props.outlined = true`. Setting this to `true` will also send `true` to material-ui's `Button` as the value for `props.variant`.

### `size?: 'small' | 'medium' | 'large'` (default: `'medium'`)

The value passed into material-ui's `Button`

### `textColor?: string`

- If `props.textColor` is `'primary'`, the class name `classes.textPrimary` will be applied.
- If `props.textColor` is `'secondary'`, the class name `classes.textSecondary` will be applied **IF** `props.secondary` is _not_ `true` **AND** `props.hover.secondary` is _not_ being used.
- If `props.textColor` is `'thirdary'`, the class name `classes.textThirdary` will be applied **IF** `props.thirdary` is _not_ `true` **AND** `props.hover.thirdary` is _not_ being used.
- If `props.textColor` is `'neutral'`, the class name `classes.textNeutral` will be applied **IF** `props.neutral` is _not_ `true`.
- If `props.textColor` is `'error'` or `'red'` or `'danger'`, the class name `classes.textDanger` will be applied **IF** `props.danger` or `props.red` or `props.error` is _not_ `true` and `props.hover.danger` or `props.hover.red` or `props.hover.error` is _not_ being used.

### `centerOnSmall?: boolean`

Applies `classes.centerOnSmall` if `props.centerOnSmall` is `true`.

This will apply these styles for small devices:

```js
const styles = {
  textAlign: 'center',
  display: 'block',
  margin: 'auto',
}
```

### `overwriteClassName?: boolean`, `overWrittenClassNames?: string`

If `props.overwriteClassName` is `true`, then `props.overWrittenClassNames` will be used for the button's `className` prop.
