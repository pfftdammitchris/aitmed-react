<br />

<!-- STORY -->

<br />

**Using the string version**

```jsx
const src =
  'https://m.media-amazon.com/images/M/MV5BODIyMDU3NDUzMF5BMl5BanBnXkFtZTcwNzg0MTUzNA@@._V1_SY1000_CR0,0,666,1000_AL_.jpg'

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
