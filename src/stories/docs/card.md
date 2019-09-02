# (Stub - coming soon)

The `Card` component is mainly used for Modal/Dialog, but can be used as part of any UI.

| Prop              | Type     | Default | Description                                           |
| ----------------- | -------- | ------- | ----------------------------------------------------- |
| className         | string   |         | `className` passed into the root `<Card />` component |
| classNames        | object   |         | an object of class names to apply to each component   |
| contentProps      | object   |         | props passed into `<CardContent />`                   |
| render (required) | function |         | renderer function to render the children              |
| square            | boolean  | `false` | renders the card as a square instead of being rounded |

<br />

> **classNames** takes on the following shape:

<br />

| Property | Type   |
| -------- | ------ |
| card     | string |
| content  | string |
| divider  | string |
| header   | string |
