<!-- STORY -->

<br />

**Using the object version**

```jsx
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
      <Lightbox
        src={{
          src:
            'https://jsmanifest.s3-us-west-1.amazonaws.com/posts/6-ways-to-help-keep-you-going-when-working-on-javascript-projects/thumbnail.jpg',
          caption: 'This is one hell of a caption',
        }}
        opened={opened}
        onClose={onClose}
      />
    </div>
  )
}
```
