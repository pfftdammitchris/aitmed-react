import React from 'react'
import { Field } from 'redux-form'
import MaterialUITextField from '@material-ui/core/TextField'
import Typography from '../../../components/common/Typography'

const renderTextField = ({ input, label, sublabel, meta, ...others }) => (
  <MaterialUITextField
    margin="dense"
    InputProps={{ disableUnderline: true }}
    {...input}
    {...others}
  />
)

const renderPhysicalExaminationField = ({ input, label, className }) => (
  <div>
    <Typography variant="caption" fontWeight={600}>
      {label}
    </Typography>
    <Field
      component={renderTextField}
      name={`${input.name}.physical`}
      className={className}
      rows={1}
      rowsMax={2}
      multiline
      fullWidth
    />
  </div>
)

export default renderPhysicalExaminationField
