## `FileUpload` can take children as well. You can use it to display thumbnails using `props.onChange`

<!-- STORY -->

```jsx
import React from 'react'
import { FileUpload } from '@aitmed/react'

function App() {
  const [srcs, setSrcs] = React.useState<string[]>([])

  function onChange(fileList: FileList) {
    Array.from(fileList).forEach((file: Blob) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = function() {
        setSrcs((prev) => [...prev, reader.result])
      }
      reader.onerror = function(error) {
        console.log('Error: ', error)
      }
    })
  }

  return (
    <div style={{ maxWidth: 500 }}>
      <FileUpload onChange={customOnChange}>
        {!srcs.length && (
          <div
            style={{ width: '100%', height: '100%', textAlign: 'center' }}
          >
            <h4>Select Images to See Thumbnails</h4>
            <img
              src="https://pixabay.com/get/55e2d6444351a514f1dc8460825668204022dfe05558734f74267bdd/underwater-3237939_640.jpg"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>
        )}

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          {srcs.map((src, index) => (
            <img
              key={`img_${index}`}
              src={src}
              style={{
                borderRadius: 6,
                width: 150,
                height: 150,
                objectFit: 'cover',
                margin: 4,
              }}
            />
          ))}
        </div>
      </FileUpload>
    </div>
  )
}
```
