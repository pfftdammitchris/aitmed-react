# Typography

## Usage

```jsx
import React from 'react'
import { Typography } from '@aitmed/react'

const App = () => <Typography>Lorem ipsum</Typography>
```

| Prop          | Type                | Default | Description                                                                            |
| ------------- | ------------------- | ------- | -------------------------------------------------------------------------------------- |
| className     | string              |         | Applies a CSS class name                                                               |
| style         | React.CSSProperties |         | Applies CSS inline styling                                                             |
| gutterBottom  | boolean             |         | Applies `margin-bottom: 0.35em`                                                        |
| paragraph     | boolean             |         | Applies `margin-bottom: 16px`                                                          |
| color         | string              |         | Applies the `color` prop to the root `Typography`                                      |
| primary       | boolean             |         | Applies `theme.palette.primary.main` to text color                                     |
| secondary     | boolean             |         | Applies `theme.palette.secondary.main` to text color                                   |
| darkBlue      | boolean             |         | Applies `theme.palette.secondary.dark` to text color                                   |
| thirdary      | boolean             |         | Applies `theme.palette.thirdary.main` to text color                                    |
| white         | boolean             |         |
| black         | boolean             |         |
| error         | boolean             |         | Applies `theme.palette.error.main` to text color                                       |
| red           | boolean             |         | Applies `theme.palette.error.main` to text color                                       |
| link          | boolean             |         | Applies `theme.palette.link.normal` to text color and converts it to an anchor element |
| fontWeight    | string              | number  | Applies a value to `font-weight`                                                       |
| variant       | string              |         | Applies the `variant` property to the root `Typography` component                      |
| left          | boolean             |         | Applies `text-align: left`                                                             |
| center        | boolean             |         | Applies `text-align: center`                                                           |
| centerOnSmall | boolean             |         | Applies `text-align: center` for mobile devices                                        |
| right         | boolean             |         | Applies `text-align: right`                                                            |
| margin        | string              | number  | Applies a value to `margin`                                                            |
| marginBottom  | string              | number  | Applies a value to `margin-bottom`                                                     |
| padding       | string              | number  | Applies a value to `padding`                                                           |
| divider       | boolean             |         | Renders a `Divider` component underneath                                               |
| italic        | boolean             |         | Applies `font-style: italic`                                                           |
| unselected    | boolean             |         | Applies `user-select: none`. The user will not be able to select the text              |
