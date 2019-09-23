# FileUpload

`FileUpload` is mainly used for Modal/Dialog but it can also be used normally in the UI.

## Types

```ts
interface FileUploadProps {
  text?: string
  onChange: (fileList: FileList, e: any) => void
  inputRef?: {
    readonly current: any | null
  }
}
```

## Usage

```jsx
import React from 'react'
import { FileUpload } from '@aitmed/react'

const App = () => {
  const ref = React.createRef()

  function onChange(fileList, e) {
    console.log(fileList)
    console.log(e)
  }

  return (
    <div style={{ maxWidth: 450 }}>
      <FileUpload
        text="Please select files to begin"
        onChange={onChange}
        inputRef={ref}
      />
    </div>
  )
}

export default App
```

## Props

| Prop                  | Type             | Default | Description                                                               |
| --------------------- | ---------------- | ------- | ------------------------------------------------------------------------- |
| `onChange` (required) | function         |         | Called when user selects files                                            |
| `text`                | string           |         | Text/label shown in the middle of the upload box when files aren't loaded |
| `multiple`            | boolean          | `true`  | Allows the user to select multiple files                                  |
| `inputRef`            | createRef/useRef |         | Can be used to grab a reference to the input element                      |
