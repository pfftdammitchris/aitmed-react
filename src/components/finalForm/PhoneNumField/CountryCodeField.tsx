import * as React from 'react'
import cx from 'classnames'
import { makeStyles } from '@material-ui/styles'
import OutlinedTextField from '../../finalForm/OutlinedTextField'
import countries from '../../../utils/countries'

interface CountryCodeFieldProps {
  input: any
  meta: any
  className?: string
  inputProps?: any
  inputLabelProps?: any
  selectProps?: any
}

const useStyles = makeStyles((theme: any) => ({
  root: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    '& fieldset': {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
      marginRight: -1,
    },
  },
  input: {
    minWidth: 80,
  },
}))

function CountryCodeField({
  input,
  meta,
  className,
  inputProps,
  inputLabelProps,
  selectProps,
  ...rest
}: CountryCodeFieldProps) {
  const classes = useStyles()

  const errMsg = meta.error || meta.submitError || ''

  function onChange(e) {
    e.persist()
    input.onChange(e.target.value)
  }

  return (
    <div className={classes.root}>
      <OutlinedTextField
        error={!!errMsg}
        helperText={errMsg}
        margin="normal"
        inputProps={{
          className: cx(classes.input, className),
          ...inputProps,
        }}
        inputLabelProps={{
          shrink: true,
          ...inputLabelProps,
        }}
        selectProps={{
          displayEmpty: true,
          native: true,
          onChange,
          ...selectProps,
        }}
        select
        {...rest}
      >
        {countries.codes.map((code) => (
          <option key={code} value={code}>
            {`${code} +${countries.mapper[code].phone_code}`}
          </option>
        ))}
      </OutlinedTextField>
    </div>
  )
}

export default CountryCodeField
