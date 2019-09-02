# @aitmed/react (pending release)

![](https://img.shields.io/github/package-json/v/pfftdammitchris/aitmed-react?color=%232EB254) ![](https://img.shields.io/bundlephobia/min/@aitmed/react)
![](https://img.shields.io/npm/dw/@aitmed/react)
![](https://img.shields.io/npm/types/@aitmed/react)

> A react component library to assist in establishing online TeleMedicine services through user interfaces on the client.

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

// optional. It will use the default theme internally if this isn't provided
const theme = {...}

const App = () => (
  <ThemeProvider theme={theme}>
    <MyComponent />
  </ThemeProvider>
)

export default App
```

If you want to provide your own `theme` object when using our `ThemeProvider`, you can pass it into the `ThemeProvider` (note: it _has_ to be a plain JavaScript object). It will be merged with our theme object so that your changes will still be applied.

We support both the `require` syntax as well as `import`:

```js
// CommonJS
const { Button, LoadingSpinner } = require('@aitmed/react')

// ES6
import { Button, LoadingSpinner } from '@aitmed/react'
// alias for the above. provided in case you want to be consistent with the imports below
import { Button, LoadingSpinner } from '@aitmed/react/components'
// you will have to use /components/ here to get to the finalForm components
import { OutputTextField } from '@aitmed/react/components/finalForm'
import { DWC_PR1, DWC_PR2, DWC_RFA } from '@aitmed/react/forms'
import { useModal, useCache } from '@aitmed/react/hooks'
import { useObjectizedCheckboxes } from '@aitmed/react/hooks/finalForm'
import { ICD10 } from '@aitmed/react/finalForm/modules'
import { finalForm, info, callAll } from '@aitmed/react/utils'
```

> More documentation is underway. The rest of the documentation will mostly be in [storybook](https://storybook.js.org/).

### Components (stub)

### Forms (stub)

### Hooks (stub)

### Modules (stub)

### Utilities (stub)
