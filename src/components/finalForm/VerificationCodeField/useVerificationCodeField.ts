import { useForm } from 'react-final-form'

function useVerificationCodeField({
  input,
  autoSubmit,
}: {
  input: any
  autoSubmit?: boolean
}) {
  const form = useForm()

  function getInputId(index: number) {
    return `${input.name}[${index}]`
  }

  function getInputElem(index: number): HTMLElement | null {
    return document.getElementById(getInputId(index))
  }

  function focus(index: number) {
    const element = getInputElem(index)
    if (element) element.focus()
  }

  // Focus to next field or automatically attempt to submit the form when we reach the end
  function focusNext(index: number) {
    // const elem = getInputElem(index + 1)
    // console.log(elem)
    if (getInputElem(index + 1)) {
      focus(index + 1)
    } else {
      blur(index)
      if (autoSubmit) {
        form.submit()
      }
    }
  }

  function blur(index: number) {
    const element = getInputElem(index)
    if (element) element.blur()
  }

  return {
    getInputId,
    getInputElem,
    focus,
    focusNext,
    blur,
  }
}

export default useVerificationCodeField
