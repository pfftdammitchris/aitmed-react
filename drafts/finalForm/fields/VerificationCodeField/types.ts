import React from 'react'
import { FieldRenderProps } from 'react-final-form/dist'
import { TextFieldProps } from '@material-ui/core/TextField'
import { GridProps } from '@material-ui/core/Grid'

export interface VerificationCodeFieldProps {
  autoSubmit?: boolean
  autoFocus?: boolean
  digits?: number
  gridContainerProps?: GridProps
  label?: string
  name: string
  textFieldProps?: TextFieldProps
  variant?: 'filled' | 'standard' | 'outlined'
  required?: boolean
  wrapperClass?: any
  wrapperProps?: GridProps
}

export interface VerificationCodeProps
  extends FieldRenderProps<any, HTMLElement> {
  autoSubmit?: boolean
  autoFocus?: boolean
  classes: any
  digits?: number
  gridContainerProps?: GridProps
  label?: string
  textFieldProps?: TextFieldProps
  variant?: 'filled' | 'standard' | 'outlined'
  required?: boolean
  wrapperClass?: any
  wrapperProps?: GridProps
}

interface HookProps {
  autoSubmit: boolean
  digits: number
  name: string
}
interface HookReturn {
  isFocused: boolean
  digitsArray: number[]
  onChange: (
    index: number,
  ) => (event: React.ChangeEvent<HTMLInputElement>) => void
  onKeyDown: (
    index: number,
  ) => (event: React.KeyboardEvent<HTMLInputElement>) => void
}
export type Hook = (props: HookProps) => HookReturn
