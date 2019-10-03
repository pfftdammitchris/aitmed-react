# `props.onDescriptionClick`

<br />

<!-- STORY -->

<br />

```jsx
const items = [
  'https://jsmanifest.s3-us-west-1.amazonaws.com/posts/build-a-cool-character-select-screen-in-react/destroyer.pdf',
  'https://jsmanifest.s3-us-west-1.amazonaws.com/posts/build-a-cool-character-select-screen-in-react/knight.doc',
  'https://jsmanifest.s3-us-west-1.amazonaws.com/posts/build-a-cool-character-select-screen-in-react/morph1.docx',
]

function onDescriptionClick(options: any, event: any): void {
  console.log(options)
  console.log(event)
  window.alert(JSON.stringify(options, null, 2))
}

const actions = [...]

function App() {
  return (
    <PhotoList actions={actions} items={items} onDescriptionClick={onDescriptionClick} />
  )
}
```
