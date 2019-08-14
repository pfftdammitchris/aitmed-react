import React from 'react'
import MuiTextField from '@material-ui/core/TextField'
import Typography from 'components/Typography'

// No styles applied. Just support for error msg below the text field and final form functionality.
//    The rest is up to you
const FinalFormOutlinedTextField = ({
  input,
  meta,
  inline,
  wrapperProps,
  errorProps,
  ...rest
}: any) => (
  <div
    style={{
      display: inline ? 'inline-block' : 'block',
      flexGrow: 1,
    }}
    {...wrapperProps}
  >
    <MuiTextField margin="dense" {...input} {...rest} variant="outlined" />
    {meta && meta.error && meta.touched && (
      <Typography variant="caption" error {...errorProps}>
        {meta.error}
      </Typography>
    )}
  </div>
)

export default FinalFormOutlinedTextField
