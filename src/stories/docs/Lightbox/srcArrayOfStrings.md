<!-- STORY -->

<br />

**Using the array of strings version**

```jsx
const src = [
  'https://jsmanifest.s3-us-west-1.amazonaws.com/posts/the-power-of-higher-order-functions-in-javascript/thumbnail.jpg',
  'https://jsmanifest.s3-us-west-1.amazonaws.com/posts/build-your-app-with-just-react-hooks/thumbnail.jpg',
  'https://jsmanifest.s3-us-west-1.amazonaws.com/posts/6-ways-to-help-keep-you-going-when-working-on-javascript-projects/thumbnail.jpg',
  'https://jsmanifest.s3-us-west-1.amazonaws.com/posts/8-miraculous-ways-to-bolster-your-react-apps/thumbnail.jpg',
  'https://jsmanifest.s3-us-west-1.amazonaws.com/posts/keeping-ui-completely-synchronized-when-uploading-files-in-react/thumbnail.jpg',
]

function App() {
  const [opened, setOpened] = React.useState(false)
  const open = () => setOpened(true)
  const onClose = () => setOpened(false)

  return (
    <div>
      <Button
        onClick={open}
        type="submit"
        hover={{ primary: 'white' }}
        primary
        small
      >
        Open Lightbox
      </Button>
      <Lightbox src={src} opened={opened} onClose={onClose} />
    </div>
  )
}
```
