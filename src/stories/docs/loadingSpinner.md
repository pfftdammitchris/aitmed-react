# LoadingSpinner

## Usage

```jsx
import React from 'react'
import LoadingSpinner from '@aitmed/react/components/LoadingSpinner'

const App = () => (
  <div style={{ width: 500, height: 300 }}>
    <LoadingSpinner margin={5} white>
      Loading...
    </LoadingSpinner>
  </div>
)
```

The loading spinner's logo will appear with dark text by default.

However, if you place this on a dark background the dark text will become camouflaged. You can pass in `white` as a prop, and the spinner along with the typography component will adjust the colors of the typography to white.

| Prop                           | Type                | Default | Description                                                                         |
| ------------------------------ | ------------------- | ------- | ----------------------------------------------------------------------------------- |
| children _(optional)_          | React.ReactNode     |         |                                                                                     |
| wrapperClassName (optional)    | string              |         | `className` passed to the wrapper                                                   |
| className (optional)           | string              |         | `className` passed to the loading spinner component                                 |
| typographyClassName (optional) | string              |         | `className` passed to the content component                                         |
| wrapperStyle (optional)        | React.CSSProperties |         | A CSS styles object passed to the wrapper                                           |
| typographyStyle (optional)     | React.CSSProperties |         | A CSS styles object passed to content component                                     |
| fullscreen (optional)          | boolean             | `false` | Takes up the entire screen while the loading spinner will be placed into the center |
| dim (optional)                 | boolean             | `false` | Dims the background                                                                 |
| white (optional)               | boolean             | `false` | Makes the background white                                                          |
| renderContent (optional)       | React.ReactNode     |         | Custom renderer function to override the default content/typography component       |
| margin (optional)              | string / number     |         | Margin applied to the loading spinner's `style`                                     |
| typographyProps (optional)     | any                 |         | Props that will be applied to the `Typography` component below the spinner          |
