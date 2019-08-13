import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import TextField from '@material-ui/core/TextField'

const styles = (theme) => ({
  root: {
    border: '1px solid teal',
  },
  fieldWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})

const Diagnoses = ({ classes, input, meta, items = [], onCheck, ...props }) => {
  const [checked, setChecked] = React.useState([])

  const WrappedTextField = ({ diagnosisProps, icd9Props, ...otherProps }) => (
    <div className={classes.fieldWrapper} {...otherProps}>
      <TextField
        id="outlined-name"
        margin="normal"
        variant="outlined"
        fullWidth
        {...diagnosisProps}
      />
      <TextField
        id="outlined-name"
        label="ICD-9"
        margin="normal"
        variant="outlined"
        fullWidth
        {...icd9Props}
      />
    </div>
  )

  return (
    <div>
      <WrappedTextField diagnosisProps={{}} icd9Props={{}} />
      <WrappedTextField diagnosisProps={{}} icd9Props={{}} />
      <WrappedTextField diagnosisProps={{}} icd9Props={{}} />
      <WrappedTextField diagnosisProps={{}} icd9Props={{}} />
      <WrappedTextField diagnosisProps={{}} icd9Props={{}} />
      <WrappedTextField diagnosisProps={{}} icd9Props={{}} />
      <WrappedTextField diagnosisProps={{}} icd9Props={{}} />
      <WrappedTextField diagnosisProps={{}} icd9Props={{}} />
    </div>
  )
}

export default withStyles(styles)(Diagnoses)
