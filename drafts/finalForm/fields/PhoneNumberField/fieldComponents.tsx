import React from 'react'

import { FieldRenderProps } from 'react-final-form'

import MuiTextField, { TextFieldProps } from '@material-ui/core/TextField'
import MuiMenuItem from '@material-ui/core/MenuItem'

// Input Component
export const Input: React.FC<
  FieldRenderProps<any, HTMLElement> & { textFieldProps: TextFieldProps }
> = ({ input, meta, textFieldProps }) => {
  const errorMessage = meta.error || meta.submitError || null
  return (
    <MuiTextField
      {...input}
      InputLabelProps={{ shrink: true }}
      error={!!errorMessage}
      helperText={errorMessage || ''}
      {...textFieldProps}
    />
  )
}

// Select Component
export const Select: React.FC<
  FieldRenderProps<any, HTMLElement> & {
    items: { label: string; value: string }[]
    textFieldProps: TextFieldProps
  }
> = ({ input, meta, items, textFieldProps }) => {
  const errorMessage = meta.error || meta.submitError || null

  return (
    <MuiTextField
      {...input}
      InputLabelProps={{ shrink: true }}
      error={!!errorMessage}
      helperText={errorMessage || ''}
      {...textFieldProps}
      select
    >
      {items.map(({ label, value }) => {
        return (
          <MuiMenuItem key={value} value={value}>
            {label}
          </MuiMenuItem>
        )
      })}
    </MuiTextField>
  )
}
