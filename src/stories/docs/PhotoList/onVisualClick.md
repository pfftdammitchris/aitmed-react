# `props.onVisualClick`

<br />

<!-- STORY -->

<br />

```jsx
const items = [
  {
    src:
      'https://jsmanifest.s3-us-west-1.amazonaws.com/posts/build-a-cool-character-select-screen-in-react/sage.jpg',
    description: 'click me now',
  },
  'https://jsmanifest.s3-us-west-1.amazonaws.com/posts/build-a-cool-character-select-screen-in-react/selectionscreen1.jpg',
]

function onVisualClick(options: any, event: any): void {
  console.log(options)
  console.log(event)
  window.alert(JSON.stringify(options, null, 2))
}

const actions = [...]

function App() {
  return (
    <PhotoList actions={actions} items={items} onVisualClick={onVisualClick} />
  )
}
```
