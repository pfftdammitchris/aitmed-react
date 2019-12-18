import React from 'react'
import { useForm } from 'react-final-form'
import InputLabel from '@material-ui/core/InputLabel'

export interface VerificationCodeFieldInputLabelProps {
  label?: React.ReactNode
  input: any
}

function VerificationCodeFieldInputLabel({
  label,
  input,
  ...rest
}: VerificationCodeFieldInputLabelProps) {
  const form = useForm()
  if (!label) return null

  let isFocused = false
  const active = form.getState().active

  if (active) {
    isFocused = active.includes(input.name)
  }

  return (
    <InputLabel focused={isFocused} {...rest}>
      {label}
    </InputLabel>
  )
}

export default VerificationCodeFieldInputLabel
