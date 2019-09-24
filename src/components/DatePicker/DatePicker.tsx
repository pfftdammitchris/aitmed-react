// API --> https://material-ui-pickers.dev/api/DatePicker
import React from 'react'
import format from 'date-fns/format'
import {
  DatePicker as MuiDatePicker,
  DatePickerProps as MuiDatePickerProps,
} from '@material-ui/pickers'
import OutlinedTextField from './OutlinedTextField'
import DatePickerToolbar from './Toolbar'

type DatePickerVariant = 'dialog' | 'inline' | 'static' | undefined
type DatePickerInputVariant = 'outlined' | 'standard' | 'filled'

interface DatePickerProps extends MuiDatePickerProps {
  label?: string
  value: number | Date
  onChange: (date: any) => void
  variant?: DatePickerVariant
  inputVariant?: DatePickerInputVariant
}

function DatePicker({
  onChange: onChangeProp,
  value,
  label,
  variant = 'dialog',
  inputVariant = 'outlined',
  ...rest
}: DatePickerProps) {
  function onChange(date: any) {
    if (onChangeProp) {
      onChangeProp(date)
    }
  }

  const formattedValue = format(value, 'yyyy-MM-dd')

  return (
    <MuiDatePicker
      // @ts-ignore
      TextFieldComponent={OutlinedTextField}
      ToolbarComponent={DatePickerToolbar}
      format={formattedValue}
      label={label}
      inputVariant={inputVariant}
      variant={variant}
      value={formattedValue}
      onChange={onChange}
      cancelLabel="Close"
      showTodayButton
      {...rest}
    />
  )
}

export default DatePicker
