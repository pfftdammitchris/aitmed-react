import { createRef } from 'react'

const useFileInputHandlers = ({ onChange, inputRef, readAs }) => {
  const ref = inputRef || createRef()

  const handleOnChange = (e) => {
    const files = Array.from(e.target.files)
    const as = readAs.toLowerCase()

    const dataPromises = files.map((file) => {
      return new Promise((resolve) => {
        const reader = new FileReader()
        reader.onload = (result) => resolve([result, file])
        switch (as) {
          case 'binary': {
            return reader.readAsBinaryString(file)
          }
          case 'buffer': {
            return reader.readAsArrayBuffer(file)
          }
          case 'text': {
            return reader.readAsText(file)
          }
          case 'url': {
            return reader.readAsDataURL(file)
          }
          default:
            break
        }
      })
    })
    Promise.all(dataPromises).then(onChange.bind(null, e))
  }

  const triggerInput = () => ref.current && ref.current.click()

  return {
    handleOnChange,
    triggerInput,
    ref,
  }
}

export default useFileInputHandlers
