# PhotoList

- [ ] props.images
  - [ ] if each item is string, just render grid list
  - [ ] if each item is blob, render default UI's
    - [ ] file name, (top)
    - [ ] file size/type (bottom)
  - [ ] if each item is obj, give each prop in obj priority then fill in missing UI with defaults
- [ ] props.actions
  - [ ] if func, provide all common icons in args + return value overrides the default returned icons
  - [ ] if object, merge with existing default actions
    - [ ] if inserts value `true` to any default icons, automatically render them
- [ ] props.placeholder (used if img is not found on ea. row)
- [ ] props.defaultFileName (used if file name for downloading the imgs arent found)

## Types

```ts
```

**All other props are passed into the [DatePicker](https://material-ui-pickers.dev/api/DatePicker) component.**

## Usage

```jsx
import React from 'react'
import { PhotoList } from '@aitmed/react/dist/modules'

function App() {
  return null
}
```

## Props

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |

