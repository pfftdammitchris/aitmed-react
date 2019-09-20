# Lightbox

`Lightbox` is used to view an image in a [portal](https://reactjs.org/docs/portals.html) by opening a modal.

## Types

```tsx
interface LightboxProps {
  src: SrcProps
  opened: boolean
  onClose: () => void
  modalStyles?: {
    blanket?: ModalStyleFn
    dialog?: ModalStyleFn
    positioner?: ModalStyleFn
  }
  actionsConfig?: {
    close?: { [key: string]: any }
    fullscreen?: { [key: string]: any }
  }
}

interface ActionsConfig {
  close?: { [key: string]: any }
  fullscreen?: { [key: string]: any }
}

type LightboxSrc = { src: string; caption?: string; [key: string]: any }

type SrcProps = string | LightboxSrc[]

type ModalStyleFn = (
  styleObj: ModalStyleFnObj,
  state: ModalStyleFnState,
) => React.CSSProperties

interface ModalStyles {
  blanket: ModalStyleFn
  dialog: ModalStyleFn
  positioner: ModalStyleFn
}
```

## Props

| Prop                 | Type                           | Default | Description                                                            |
| -------------------- | ------------------------------ | ------- | ---------------------------------------------------------------------- |
| `src` (required)     | string or string[] or SrcProps |         | Image URL(s) to use in the modal component                             |
| `opened` (required)  | boolean                        | `false` | Opens/closes the modal                                                 |
| `onClose` (required) | function                       |         | Function to invoke when closing the modal                              |
| `modalStyles`        | ModalStyles                    |         | Object of methods used to custom style the modal                       |
| `actionsConfig`      | ActionsConfig                  |         | Object where config may be used to override the default action configs |

## To-dos

- `props.actionsConfig`
  - [ ] implement customization for config
  - [ ] allow adding more icons to `props.actions`
    - [ ] render func = override
    - [ ] array = additions
      - [ ] if string, adds more default icons that arent visible
