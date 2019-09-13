import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment'
import { FaEyeSlash, FaEye } from 'react-icons/fa'

interface OutlinedTextFieldInputAdornmentProps {
  children?: React.ReactNode
  originalInputType: string // react-final-form
  inputType: string
  setInputType: (inputType: string) => void
  iconButtonProps?: any
  iconProps?: any
}

function OutlinedTextFieldInputAdornment({
  children,
  originalInputType,
  inputType,
  setInputType,
  iconButtonProps,
  iconProps,
  ...rest
}: OutlinedTextFieldInputAdornmentProps) {
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
