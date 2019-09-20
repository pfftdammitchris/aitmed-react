<!-- STORY -->

<br />

**Using the array of objects version**

```jsx
const src = [
  {
    src:
      'https://jsmanifest.s3-us-west-1.amazonaws.com/posts/keeping-ui-completely-synchronized-when-uploading-files-in-react/thumbnail.jpg',
    caption: 'I would love to go to Georgia',
  },
  {
    src:
      'https://jsmanifest.s3-us-west-1.amazonaws.com/posts/6-ways-to-help-keep-you-going-when-working-on-javascript-projects/thumbnail.jpg',
    caption: 'Lucky Charms',
  },
  {
    src:
      'https://jsmanifest.s3-us-west-1.amazonaws.com/posts/the-power-of-higher-order-functions-in-javascript/thumbnail.jpg',
    caption: 'You found me',
  },
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
