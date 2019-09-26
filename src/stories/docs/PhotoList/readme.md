# PhotoList

- [ ] props.images
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
- [ ] support in VisualBox:
  - [ ] doc, docx
  - [ ] ppt
  - [ ] excel, csv

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

### `props.className`

- styles the root list component

### props.children

- you can render your own photo list completely and still get all the states
- render prop?

### `props.icons`

If you provide `icons` as a prop you can use it to override the default icons implemented in this module. `icons` is an object with the icon names as keys and the value is an object with options to determine the look of the icon. You can provide the `component` option to override the default icon.

Note: This prop doesn't decide which icons to render on each row. Instead, `props.actions` is used to determine which icons to render. `props.actions` also has the higher priority in rendering a custom component if both `props.icons` and `props.actions` have a conflicting custom icon component.

```jsx
import React from 'react'
import { MdGroupWork, MdExit } from 'react-icons/md'
import { PhotoList } from '@aitmed/react/dist/modules'

const EditComponent = (props) => {
  return <MdGroupWork />
}

const icons = {
  edit: EditComponent, // can provide your own component
  pdf: <MdExit />
}

function App() {
  const items = [...]
  const actions = {...}

  return <PhotoList items={items} actions={actions} icons={icons} />
}
```

### `props.items`

- array of img objs
- can use any of these varieties as individual img objs:
  - string
  - PhotoListItem
  - Blob or File

### props.actions

- each action is an obj which can declare a 'name' which can be grabbed from our commonIcons
- provide a custom "component" prop to use that as the component, otherwise it will try to use the one from commonIcons if found
  - the custom component will be receiving all the props in the action obj as args
- in the end it will use everything that is inside the action obj as props for the component *except* `component` and apply them to the container `IconButton` component

### `props.placeholder`

- string
- react component

### `props.defaultDownloadName`

### `props.onAvatarClick`

### `onTitleClick`

### `onDescriptionClick`

### `props.mode`

- compact (default)
- balanced

### rendering variants

- `<PhotoList />`
- `<PhotoList.Title />`
- `<PhotoList.Description />`
- `<PhotoList.Actions />`
- `<PhotoList.Visual />`

