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

## Types

```ts
interface IconConfig {
  name: string
  component?: React.ElementType<any>
  round?: boolean
}

type PhotoListItemAction
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

- Class name passed into the root [List](https://material-ui.com/api/list/) component.

### props.children

- you can render your own photo list completely and still get all the states
- render prop?

### `props.icons`

If you provide `icons` as a prop you can use it to override the default icons. `icons` is an object of `IconConfig` objects where an **icon name** is the key and their value is the `IconConfig` object. You can use this to configure icon defaults in the interface or to override any icons that occur during the lifetime of the PhotoList component. (ex: in the avatars, actions, etc). You can provide the `component` option in an icon config to override an icon from the list of default icons if it exists--otherwise it will fallback to the default component.

Note: This prop has a higher specificity than `props.actions` when rendering an icon for the actions. If both `props.icons` and `props.actions` have a conflicting **icon name**, `props.icons` will always win.

```jsx
import React from 'react'
import { MdGroupWork, MdExit } from 'react-icons/md'
import { PhotoList } from '@aitmed/react/dist/modules'

const EditComponent = (props) => {
  return <MdGroupWork />
}

const icons = {
  edit: {
    component: EditComponent
  }, // can provide your own component
  pdf: {
    component: MdExit
  }
}

function App() {
  const items = [...]
  const actions = {...}

  return <PhotoList items={items} actions={actions} icons={icons} />
}
```

#### Using conflicting icon names:

```jsx


const icons = [
  {
    fullscreen: {
      component: (props) => <MdFullscreen /> // Will render (higher specificity)
    }
  }
]

const actions = [
  { name: 'fullscreen', component: (props) => <Fullscreen /> }, // Will not render (lower specificity)
  { name: 'delete' },
]

const items = [...]

function App() {
  return (
    <PhotoList
            actions={actions}
            icons={icons}
            items={items}
          />
  )
}

```

### `props.items`

- array of img objs
- can use any of these varieties as individual img objs:
  - string
  - PhotoListItem
  - Blob
    - todo: revoked object URL on unmount

### `props.actions`

You can use `props.actions` to determine what actions the user is allowed to use.

This should be an array of `PhotoListItemAction` objects and will be re-used for each row in the rendered list. The object with non-html attributes will be stripped away (ex: `components`) while the remains will be passed to the wrapper [IconButton](https://material-ui.com/api/icon-button/) component to avoid unnecessary console errors.

If `onClick` is passed in, it will receive the current item's `index`, `action` and `item` as the first argument and the `event` as the second argument.

You do not have to declare a `name` property in each of the actions but if you do, the module will attempt to use the default icon component if a `component` key isn't found.

If you don't declare a `name` property on an action and a `component` key is not found nothing will be rendered.

The component will receive the action object, current row data and index as arguments. You can use this to conditionally render different icons based on what data is available in each row. For example you can choose to render a video icon for a row if only a youtube link was provided.

```jsx
import React from 'react'
import { MdMusicVideo } from 'react-icons/md'

const items = [
  { src: '...', hasVideo: true },
  { src: '...', title: 'some title for this item' },
  { src: '...', hasVideo: false },
]

const actions = [
  { name: 'edit', onClick },
  {
    name: 'cancel',
    title: 'what',
    onClick,
  },
  {
    component: function(props) {
      return <MdVpnLock />
    },
  },
  {
    name: 'music-video',
    component: function({ action, item, index }) {
      if (item && item.hasVideo) {
        return (
          <MdMusicVideo style={{ transform: 'scale(2.3)', color: 'hotpink' }} />
        )
      } else {
        const style: any = {}
        const Icon = (props) => <MdPermDataSetting {...props} />
        // If this is the last item in list then apply a black background to indicate to the user that this is the end
        if (index === images.length - 1) {
          style.color = 'hotpink'
          style.border = '1px solid magenta'
          style.borderRadius = '50%'
          style.transform = 'scale(2)'
        }
        return <Icon style={style} />
      }
    },
  },
]

function App() {
  return <PhotoList items={images} actions={actions} />
}
```

If you pass in custom props to each action they will not be passed into the elements if they are invalid html attributes, so it's safe to pass in any arbitrary props without affecting the UI.

If an action object contains a `name` property `props.icons` also includes the same name, the component defined in `props.icons` will override it.

### `props.onVisualClick: ({ item, index }, event) => void`

An `onClick` called when the visual box (photo/thumbnail) is clicked. The handler will receive the current item and index in the row as the first argument, and the click event as the second.

### `onTitleClick: ({ item, index }, event) => void`

An `onClick` called when the title is clicked. The handler will receive the current item and index in the row as the first argument, and the click event as the second.

### `onDescriptionClick: ({ item, index }, event) => void`

An `onClick` called when the description is clicked. The handler will receive the current item and index in the row as the first argument, and the click event as the second.

### rendering variants

- `<PhotoList />`
- `<PhotoList.Title />`
- `<PhotoList.Description />`
- `<PhotoList.Actions />`
- `<PhotoList.Visual />`

## Props not yet supported:

### `props.debugStyles: boolean | object`

If `debugStyles` is `true`, these components will render with 1px borders:

- `PhotoList` (root node) | 1px solid red
- `PhotoList.Title` | 1px solid magenta
- `PhotoList.Description` | 1px solid teal
- `PhotoList.Actions` | 1px solid salmon
- `PhotoList.Visual` | 1px solid green

You can optionally provide an object as the value and pass in your own custom colors. `PhotoList` will automatically treat this as enabling debugging styles.

```jsx
```

### `props.mode`

- compact (default)
- balanced

### `props.placeholder`

- string
- react component

### `props.defaultDownloadName`

Will be used as the default file name when a `download` action is invoked. If this isn't provided, a default file name using the current date and time will be generated if the module cannot scan for a filename anywhere.

Example: `'092619_011113_PM.png'`

### `props.Title`

Component to use for item titles. Defaults to [Typography](https://material-ui.com/api/typography/).

### `props.Description`

Component to use for item descriptions. Defaults to [Typography](https://material-ui.com/api/typography/).

### `props.Avatar`

Component to use for item visuals (a.k.a avatars). Defaults to [Avatar](https://material-ui.com/api/avatar/) if rendering images, otherwise defaults to a custom `div` root element for everything else.
