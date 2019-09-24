// API --> https://material-ui-pickers.dev/api/DatePicker
import React from 'react'
import format from 'date-fns/format'
import { DatePicker as MuiDatePicker } from '@material-ui/pickers'
import OutlinedTextField from './OutlinedTextField'
import DatePickerToolbar from './Toolbar'

interface DatePickerProps {
  label?: string
  value?: string
  onChange: (date: any) => void
  variant?: 'outlined' | 'standard' | 'filled'
}

function DatePicker({
  onChange: onChangeProp,
  value,
  label,
  variant = 'outlined',
  ...rest
}: DatePickerProps) {
  const [selectedDate, setSelectedDate] = React.useState<any>(new Date())

  function onChange(date: any) {
    setSelectedDate(new Date(date))
    if (onChangeProp) {
      onChangeProp(date)
    }
  }

  return (
    <MuiDatePicker
      // @ts-ignore
      TextFieldComponent={OutlinedTextField}
      ToolbarComponent={DatePickerToolbar}
      format={format(selectedDate, 'yyyy-MM-dd')}
      label={label}
      inputVariant={variant}
      variant="dialog"
      value={value || selectedDate}
      onChange={onChange}
      cancelLabel="Close"
      showTodayButton
      {...rest}
    />
  )
}

export default DatePicker
