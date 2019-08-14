import React from 'react'
import { makeStyles } from '@material-ui/styles'
import TextField from '@material-ui/core/TextField'

interface DiagnosesProps {}

const useStyles = makeStyles({
  fieldWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})

const Diagnoses: React.FC<DiagnosesProps> = (props) => {
  const classes = useStyles(props)

  const WrappedTextField = ({
    diagnosisProps,
    icd9Props,
    ...otherProps
  }: any) => (
    <div className={classes.fieldWrapper} {...otherProps}>
      <TextField
        id="outlined-name"
        margin="dense"
        variant="outlined"
        fullWidth
        {...diagnosisProps}
      />
      &nbsp;&nbsp;
      <TextField
        id="outlined-name"
        label="ICD-9"
        margin="dense"
        variant="outlined"
        fullWidth
        {...icd9Props}
      />
    </div>
  )

  return <WrappedTextField diagnosisProps={{}} icd9Props={{}} />
}

export default Diagnoses
