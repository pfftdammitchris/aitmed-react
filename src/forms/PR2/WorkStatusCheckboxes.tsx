import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Theme } from '@material-ui/core'
import FormGroup from '@material-ui/core/FormGroup'
import Checkbox from 'components/Checkbox'

interface WorkStatusCheckboxesProps {
  input: any
  meta: any
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  checkboxRoot: {
    color: '#333',
    transform: 'scale(0.9)',
    padding: 3,
  },
  checkboxLabel: {
    fontSize: '0.72rem',
    marginLeft: 0,
    marginRight: 11,
  },
}))

const WorkStatusCheckboxes: React.FC<WorkStatusCheckboxesProps> = ({
  input,
  meta,
  ...rest
}) => {
  const classes = useStyles(rest)
  const [checked, setChecked] = React.useState([])

  const checkboxes = [
    { label: 'Remain off work until' },
    {
      label: `Return to modified work on________________________ with the following limitations or restrictions
    (List all specific restrictions re: standing, sitting, bending, use of hands, etc.)`,
    },
    {
      label:
        'Return to full duty on ____________________with no limitations or restrictions.',
    },
  ]

  return (
    <FormGroup className={classes.root} row {...rest}>
      {checkboxes.map((props, index) => (
        <Checkbox
          key={`workStatusCheckbox${index}`}
          label="Remain off-work until"
          wrapperProps={{
            classes: {
              label: classes.checkboxLabel,
            },
          }}
          classNames={{
            root: classes.checkboxRoot,
          }}
          checked={checked.includes('')}
          onChange={undefined}
          value={''}
          {...props}
        />
      ))}
    </FormGroup>
  )
}

export default WorkStatusCheckboxes
