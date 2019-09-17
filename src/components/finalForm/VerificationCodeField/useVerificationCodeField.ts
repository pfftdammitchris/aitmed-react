import React from 'react'
import { useForm } from 'react-final-form'
import { selectText } from './utils'

function useVerificationCodeField({ input }: { input: any }) {
  const form = useForm()

  function getInputId(index: number) {
    return `${input.name}.${index}`
  }

  function getInputElem(index: number): HTMLElement | null {
    return document.getElementById(getInputId(index))
  }

  function focus(index: number) {
    const element = getInputElem(index)
    if (element) element.focus()
  }

  function blur(index: number) {
    const element = getInputElem(index)
    if (element) element.blur()
  }

  // Focus to next field or automatically attempt to submit the form when we reach the end
  function focusNext(index: number) {
    if (getInputElem(index + 1)) {
      focus(index + 1)
    } else {
      blur(index)
      form.submit()
    }
  }

  // Each input takes maximum 1 character.
  //    This puts the focus onto the next input automatically when user types a value
  function onChange(index: number) {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value.trim()
      form.change(e.target.name, value)
      if (value) focusNext(index)
    }
  }

  function onKeyDown(index: number) {
    return (e: React.KeyboardEvent<HTMLInputElement>) => {
      e.persist()
      const code = form.getState().values[name]
      const value = code ? code[index] : ''

      if (value === e.key) {
        form.change(getInputId(index), '')
      } else {
        const inputElem = getInputElem(index)

        e.preventDefault()
        e.stopPropagation()

        switch (e.keyCode) {
          case 8: // backspace
            if (value === '') {
              const prevInputElem = getInputElem(index - 1)
              if (prevInputElem) {
                focus(index - 1)
                selectText(prevInputElem)
              }
            }
            break
          case 37: // left
          case 38: // up
            if (getInputElem(index - 1)) focus(index - 1)
            break
          case 39: // right
          case 40: // down
            if (getInputElem(index + 1)) focus(index + 1)
            break
          default:
            selectText(inputElem)
            break
        }
      }
    }
  }

  return {
    getInputId,
    onChange,
    onKeyDown,
  }
}

export default useVerificationCodeField
