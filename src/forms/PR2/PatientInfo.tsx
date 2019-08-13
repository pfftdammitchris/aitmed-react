import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import TextField from '@material-ui/core/TextField'

const styles = (theme) => ({
  root: {
    border: '1px solid teal',
  },
})

const PatientInfo = ({
  classes,
  input,
  meta,
  items = [],
  onCheck,
  ...props
}) => {
  const [checked, setChecked] = React.useState([])

  const WrappedTextField = (props) => (
    <TextField
      id="outlined-name"
      label="Last"
      margin="normal"
      variant="outlined"
      {...props}
    />
  )

  return (
    <div>
      <WrappedTextField label="Last" />
      <WrappedTextField label="First" />
      <WrappedTextField label="M.I." />
      <WrappedTextField label="Sex" />
      <WrappedTextField label="D.O.B" />
      <WrappedTextField label="Address" />
      <WrappedTextField label="Occupation" />
      <WrappedTextField label="SS #" />
      <WrappedTextField label="Phone" />
    </div>
  )
}

export default withStyles(styles)(PatientInfo)
