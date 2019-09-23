<!-- STORY -->

```jsx
function onChange(fileList, e) {
  console.log(fileList)
  console.log(e)
}

function App() {
  return <FileUpload text="The Great Wall of Europe" onChange={onChange} />
}
```
