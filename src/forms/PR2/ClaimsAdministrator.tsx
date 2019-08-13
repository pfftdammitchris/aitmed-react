import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import TextField from '@material-ui/core/TextField'

const styles = (theme) => ({
  root: {
    border: '1px solid teal',
  },
})

const ClaimsAdministrator = ({
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
      <WrappedTextField label="Name" />
      <WrappedTextField label="Claim Number" />
      <WrappedTextField label="Address" />
      <WrappedTextField label="City" />
      <WrappedTextField label="State" />
      <WrappedTextField label="Zip" />
      <WrappedTextField label="Phone" />
      <WrappedTextField label="Fax" />
    </div>
  )
}

export default withStyles(styles)(ClaimsAdministrator)
