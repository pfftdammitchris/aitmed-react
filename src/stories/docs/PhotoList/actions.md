# `props.actions`

<br />

<!-- STORY -->

<br />

```jsx
const items = [...]

const actions = [
  { name: 'edit', onClick },
  {
    name: 'cancel',
    title: 'what',
    onClick,
  },
  {
    component: function(props) {
      return <MdVpnLock style={{ color: 'salmon' }} />
    },
  },
  {
    name: 'music-video',
    component: function({ action, item, index }) {
      if (item && item.hasVideo) {
        return (
          <MdMusicVideo style={{ transform: 'scale(2.3)', color: 'hotpink' }} />
        )
      } else {
        const style: any = {}
        const Icon = (props) => <MdPermDataSetting {...props} />
        // If this is the last item in list then apply a black background to indicate to the user that this is the end
        if (index === items.length - 1) {
          style.color = 'hotpink'
          style.border = '1px solid magenta'
          style.borderRadius = '50%'
          style.transform = 'scale(2)'
        }
        return <Icon style={style} />
      }
    },
  },
]

function App() {
  return <PhotoList actions={actions} items={items} />
}
```
