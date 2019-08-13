import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import Checkbox from '@material-ui/core/Checkbox'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'

const styles = (theme) => ({
  root: {
    border: '1px solid teal',
  },
})

const WorkStatusCheckboxes = ({
  classes,
  input,
  meta,
  items = [],
  onCheck,
  ...props
}) => {
  const [checked, setChecked] = React.useState([])

  return (
    <FormGroup className={classes.root} row>
      <FormControlLabel
        control={
          <Checkbox
            checked={checked.includes('')}
            onChange={undefined}
            value={''}
          />
        }
        label="Remain off-work until"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={checked.includes('')}
            onChange={undefined}
            value={''}
          />
        }
        label="Return to modified work on________________________ with the following limitations or restrictions
          (List all specific restrictions re: standing, sitting, bending, use of hands, etc.):
         "
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={checked.includes('')}
            onChange={undefined}
            value={''}
          />
        }
        label="Return to full duty on ____________________with no limitations or restrictions."
      />
    </FormGroup>
  )
}

export default withStyles(styles)(WorkStatusCheckboxes)
