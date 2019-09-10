# Card

`Card` is mainly used for Modal/Dialog but it can also be used normally in the UI.

## Types

```ts
interface CardProps {
  className?: string
  classNames?: {
    card?: string
    content?: string
    divider?: string
    header?: string
  }
  contentProps?: any
  render?: ({
    CardDivider?: React.Component
    CardHeader?: React.Component
  }) => React.ReactNode
  square?: boolean
}
```

## Usage

```jsx
import React from 'react'
import { Card } from '@aitmed/react'

const App = () => (
  <Card
    render={({ CardHeader, CardDivider }: any) => (
      <div>
        <CardHeader>The header</CardHeader>
        <CardDivider />
        <Typography>Please Login Now</Typography>
      </div>
    )}
  />
)

export default App
```

## Props



| Prop         | Type     | Default | Description                                           |
| ------------ | -------- | ------- | ----------------------------------------------------- |
| render       | function |         | function to render the children                       |
| className    | string   |         | `className` passed into the root `<Card />` component |
| classNames   | object   |         | an object of class names to apply to each component   |
| contentProps | object   |         | props passed into `<CardContent />`                   |
| square       | boolean  | `false` | renders the card as a square instead of being rounded |
