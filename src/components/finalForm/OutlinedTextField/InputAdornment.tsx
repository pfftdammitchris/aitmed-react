import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment'
import { FaEyeSlash, FaEye } from 'react-icons/fa'

interface OutlinedTextFieldInputAdornmentProps {
  children?: React.ReactNode
  isNull?: boolean
  originalInputType: string // react-final-form
  inputType: string
  setInputType: (inputType: string) => void
  iconButtonProps?: any
  iconProps?: any
  size?: any
}

function OutlinedTextFieldInputAdornment({
  children,
  isNull,
  originalInputType,
  inputType,
  setInputType,
  iconButtonProps,
  iconProps,
  size,
  ...rest
}: OutlinedTextFieldInputAdornmentProps) {
  if (isNull) {
    return null
  }

  function onToggle() {
    if (originalInputType === 'password') {
      if (inputType === 'password') {
        setInputType('text')
      } else if (inputType === 'text') {
        setInputType('password')
      }
    }
  }

  let child = children

  if (originalInputType === 'password') {
    if (inputType === 'password') {
      child = <FaEye {...iconProps} />
    } else if (inputType === 'text') {
      child = <FaEyeSlash {...iconProps} />
    }
  }

  return (
    <InputAdornment position="end" {...rest}>
      <IconButton
        edge="end"
        aria-label={
          originalInputType === 'password' ? 'toggle password visibility' : ''
        }
        onClick={onToggle}
        {...iconButtonProps}
      >
        {child}
      </IconButton>
    </InputAdornment>
  )
}

export default OutlinedTextFieldInputAdornment
