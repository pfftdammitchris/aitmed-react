# Tooltip

`Tooltip` is an instance of the [popper-js](https://popper.js.org/) component. This is used to display a tooltip over a react element.

## Types

```tsx
interface TooltipProps {
  title: React.ReactNode
  children: React.ReactNode
  classes?: any
  className?: string
  placement?:
    | 'bottom-end'
    | 'bottom-start'
    | 'bottom'
    | 'left-end'
    | 'left-start'
    | 'left'
    | 'right-end'
    | 'right-start'
    | 'right'
    | 'top-end'
    | 'top-start'
    | 'top'
  primary?: boolean
  secondary?: boolean
  thirdary?: boolean
  darkAdmin?: boolean
  minWidth?: number | string
  style?: React.CSSProperties
  rootDivProps?: any
  render?: (renderProps: any) => React.ReactNode
}
```

> All other props will be passed into the root material-ui `Tooltip` component.

## Usage

```jsx
import React from 'react'
import { Tooltip } from '@aitmed/react'

function App() {
  return (
    <Tooltip title="lorem ipsum something something">
      <Button type="button" hover={{ primary: 'white' }} primary small>
        Hover for the tooltip
      </Button>
    </Tooltip>
  )
}
```

## Props

| Prop           | Type            | Default | Description                                                                                                                           |
| -------------- | --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `title`        | React.ReactNode |         | The tooltip content                                                                                                                   |
| `classes`      | object          |         | Class names that will passed into the material-ui `Tooltip` `classes` prop                                                            |
| `className`    | string          |         | Class name that will be passed into the material-ui `Tooltip` component                                                               |
| `placement`    | string          | `'top'` | Customize the positioning of the tooltip on an element                                                                                |
| `primary`      | boolean         | `false` | If true, a background of `theme.palette.primary.main` will be used for the Tooltip                                                    |
| `secondary`    | boolean         | `false` | If true, a background of `theme.palette.secondary.main` will be used for the Tooltip                                                  |
| `thirdary`     | boolean         | `false` | If true, a background of `theme.palette.thirdary.main` will be used for the Tooltip                                                   |
| `darkAdmin`    | boolean         | `false` | If true, a background of `theme.palette.background.darkAdminDarkerShade` will be used for the Tooltip                                 |
| `minWidth`     | string/number   |         | Applies the `minWidth` property on the tooltip's `styles` prop                                                                        |
| `rootDivProps` | object          |         | Props passed into the root `div` element that wraps the content of the tooltip                                                        |
| `render`       | function        |         | Overrides the default `children` using render props. It will receive an object with properties `Bullet` and `InfoIcon` as an argument |
