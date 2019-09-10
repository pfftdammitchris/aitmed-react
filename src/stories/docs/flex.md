# Flex

`Flex` wraps a component and applies `display: flex` on its root `div` element. The `children` is wrapped with this element.

## Usage

```jsx
import React from 'react'
import { Flex } from '@aitmed/react'

const App = () => <Flex />
```

| Prop            | Type                | Default | Description                                                 |
| --------------- | ------------------- | ------- | ----------------------------------------------------------- |
| `center`        | boolean             |         | Applies `justify-content: center`                           |
| `flexStart`     | boolean             |         | Applies `justify-content: flex-start`                       |
| `flexEnd`       | boolean             |         | Applies `justify-content: flex-end`                         |
| `flexGrow`      | number              |         | Applies a value to `flex-grow`                              |
| `flexDirection` | string              | row     | Applies a value to `flex-direction`                         |
| `flexWrap`      | string              | nowrap  | Applies a value to `flex-wrap`                              |
| `spaceAround`   | boolean             |         | Applies `justify-content: space-around`                     |
| `spaceBetween`  | boolean             |         | Applies `justify-content: space-between`                    |
| `style`         | React.CSSProperties |         | Applies  css styling to the the root `div` element          |
| `textAlign`     | string              |         | Applies a value to `text-align`                             |
| `wrap`          | boolean             |         | Applies `flex-wrap: wrap`                                   |
| `xsBlock`       | boolean             |         | Changes `display` from `flex` to `block` for mobile devices |