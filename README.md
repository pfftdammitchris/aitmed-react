# @aitmed/react (pending release)

![](https://img.shields.io/github/package-json/v/pfftdammitchris/aitmed-react?color=%232EB254)

## Install

```bash
npm install --save @aitmed/react
```

## Usage

Wrap your app with your own `ThemeProvider` or by using the one from `@aitmed/react` as shown below:

```jsx
import React from 'react'
import { ThemeProvider } from '@aitmed/react'
import MyComponent from './MyComponent'

const theme = {...} // optional. It will use the default theme internally if this isn't provided

const App = () => (
  <ThemeProvider theme={theme}>
    <MyComponent />
  </ThemeProvider>
)

export default App
```
