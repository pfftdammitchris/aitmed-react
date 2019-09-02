# @aitmed/react (pending release)

![](https://img.shields.io/github/package-json/v/pfftdammitchris/aitmed-react?color=%232EB254) ![](https://img.shields.io/bundlephobia/min/@aitmed/react)
![](https://img.shields.io/npm/dw/@aitmed/react)
![](https://img.shields.io/npm/types/@aitmed/react)

## Install

```bash
npm install --save @aitmed/react
```

> This library requires that you have `react@^16.9.0`. You will also need to install [material-ui](https://material-ui.com) with a version higher than v4 since there are syntactical differences in `ThemeProvider` between versions.

## Usage

The first thing you want to do is to wrap your app with either your own `ThemeProvider` or by exporting it from `@aitmed/react`. We prefer that you use the one exported from the library:

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

If you end up providing your own custom `theme` object and pass it into the `ThemeProvider` that was exported from `@aitmed/react`, it will be merged with our theme object.

We support both the `require` syntax as well as `import`:

```js
// CommonJS
const { Button, LoadingSpinner } = require('@aitmed/react')

// ES6
import { Button, LoadingSpinner } from '@aitmed/react'
import { Button, LoadingSpinner } from '@aitmed/react/components' // alias for the above. provided in case you want to be consistent with the imports below
// you will have to use /components/ here to get to the finalForm components
import { OutputTextField } from '@aitmed/react/components/finalForm'
import { DWC_PR1, DWC_PR2, DWC_RFA } from '@aitmed/react/forms'
import { useModal, useCache } from '@aitmed/react/hooks'
import { useObjectizedCheckboxes } from '@aitmed/react/hooks/finalForm'
import { ICD10 } from '@aitmed/react/finalForm/modules'
import { finalForm, info, callAll } from '@aitmed/react/utils'
```

### More documentation is coming
