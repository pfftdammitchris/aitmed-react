import React from 'react'
import { isFunction } from '../../../utils'

interface Args {
  input?: any
  clearSignature?: () => void
  signatureRef?: { current: null | any }
}

function useSignatureCanvas({
  input = {},
  clearSignature,
  signatureRef,
}: Args) {
  const [trimmedDataUrl, setTrimmedUrl] = React.useState('')

  function onDraw() {
    if (signatureRef && signatureRef.current) {
      if (!input.value && isFunction(input.onChange)) {
        input.onChange(true)
      }
      setTrimmedUrl(signatureRef.current.toDataURL('image/png'))
    } else {
      console.warn(
        'Tried to set the new drawing on canvas but signatureRef.current was null or undefined',
      )
    }
  }

  function clear() {
    if (signatureRef && signatureRef.current) {
      signatureRef.current.clear()
      if (input.value && isFunction(input.onChange)) {
        input.onChange(false)
      }
    } else if (isFunction(clearSignature)) {
      clearSignature()
    } else {
      console.warn(
        'Tried to clear the signature but no clearSignature function or signatureRef was available',
      )
    }
  }

  return {
    clear,
    onDraw,
    trimmedDataUrl,
  }
}

export default useSignatureCanvas
