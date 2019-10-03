# `props.items`

<br />

<!-- STORY -->

<br />

```jsx
const items = [
  'https://jsmanifest.s3-us-west-1.amazonaws.com/posts/6-ways-to-help-keep-you-going-when-working-on-javascript-projects/thumbnail.jpg',
  'https://jsmanifest.s3-us-west-1.amazonaws.com/posts/8-miraculous-ways-to-bolster-your-react-apps/thumbnail.zip',
  'https://jsmanifest.s3-us-west-1.amazonaws.com/posts/keeping-ui-completely-synchronized-when-uploading-files-in-react/thumbnail.7z',
  'https://jsmanifest.s3-us-west-1.amazonaws.com/posts/26-miraculous-vscode-tools-for-javascript-developers-in-2019/todotree1.pdf',
  {
    src:
      'https://jsmanifest.s3-us-west-1.amazonaws.com/posts/26-miraculous-vscode-tools-for-javascript-developers-in-2019/bracketpaircolorizer.wma',
    title: '26 tools',
    hasVideo: true,
  },
]

const actions = [...]

function App() {
  return (
    <PhotoList
      actions={actions}
      items={items}
    />
  )
}
```
