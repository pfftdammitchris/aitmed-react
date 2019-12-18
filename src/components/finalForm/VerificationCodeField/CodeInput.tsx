import React from 'react'
import { makeStyles } from '@material-ui/styles'
import OutlinedTextField from '../../OutlinedTextField'

function selectText(elem: any): void {
  if (elem) {
    elem.focus()
    // @ts-ignore
    elem.setSelectionRange(0, -1)
  }
}

export interface VerificationCodeFieldCodeInputProps {
  input: any
  meta: any
  id: string
  index: number
  focus: (index: number) => void
  focusNext: (index: number) => void
  getInputId: (index: number) => string
  getInputElem: (index: number) => React.ReactNode
}

const useStyles = makeStyles({
  textfieldWrapper: {
    maxWidth: 40,
    marginRight: 4,
  },
})

function VerificationCodeFieldCodeInput({
  input,
  meta,
  id,
  index,
  focusNext,
  getInputId,
  getInputElem,
  focus,
  ...rest
}: VerificationCodeFieldCodeInputProps) {
  const classes = useStyles()

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value.trim()
    input.onChange(value)
    if (value) {
      focusNext(index)
    }
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    e.persist()

    // the input field we are moving from
    const inputElem = getInputElem(index)

    switch (e.keyCode) {
      case 8: // backspace
        // Selects the text but not delete it. This is to make it intuitive for the user
        if (input.value === '') {
          e.preventDefault()
          e.stopPropagation()
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

  return (
    <OutlinedTextField
      id={id}
      wrapperProps={{ className: classes.textfieldWrapper }}
      {...input}
      {...rest}
      inputProps={{ onChange, onKeyDown }}
    />
  )
}

export default VerificationCodeFieldCodeInput
