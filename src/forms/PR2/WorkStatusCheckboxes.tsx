import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { FormGroup, TextField, Theme } from '@material-ui/core'
import get from 'lodash/get'
import has from 'lodash/has'
import Flex from 'components/Flex'
import Checkbox from 'components/Checkbox'
import Typography from 'components/Typography'
import useObjectizedCheckboxes from 'hooks/finalForm/useObjectizedCheckboxes'

interface WorkStatusCheckboxesProps {
  input: {
    name: 'workStatusForPatient'
    value: {
      remainOffWorkUntil?: string
      returnToModifiedWork?: {
        on?: string
        limitations?: string
      }
      returnToFullDuty?: {
        on?: string
      }
    }
    onChange: (args: any) => void
  }
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
    userSelect: 'none',
  },
  textField: {
    fontSize: '0.72rem !important',
  },
}))

const EnhancedTextField: React.FC<any> = (props) => {
  const classes = useStyles(props)
  return (
    <TextField
      margin="dense"
      {...props}
      classes={{ root: classes.textField, ...props.classes }}
    />
  )
}

const WorkStatusCheckboxes: React.FC<WorkStatusCheckboxesProps> = ({
  input = {},
  meta,
  ...rest
}) => {
  const classes = useStyles(rest)
  const { nodes, onChange, getTextFieldProps } = useObjectizedCheckboxes({
    input,
  })

  const checkboxProps = {
    wrapperProps: {
      classes: {
        label: classes.checkboxLabel,
      },
    },
    classNames: {
      root: classes.checkboxRoot,
    },
  }

  return (
    <FormGroup className={classes.root} row {...rest}>
      <Flex>
        <Checkbox
          label="Remain off-work until"
          value={
            input.value && get(input.value, `${input.name}.remainOffWorkUntil`)
          }
          onChange={onChange('remainOffWorkUntil')}
          checked={!!input.value && has(input.value, 'remainOffWorkUntil')}
          {...checkboxProps}
        />
        <EnhancedTextField
          {...getTextFieldProps({ name: 'remainOffWorkUntil' })}
        />
      </Flex>
      <Checkbox
        label={
          <Flex>
            Return to modified work on &nbsp;&nbsp;
            <EnhancedTextField
              {...getTextFieldProps({ name: 'returnToModifiedWork.on' })}
            />
            &nbsp;&nbsp; with the following limitations or restrictions:
          </Flex>
        }
        value={
          input.value && get(input.value, `${input.name}.returnToModifiedWork`)
        }
        onChange={onChange('returnToModifiedWork')}
        checked={!!input.value && has(input.value, 'returnToModifiedWork')}
        {...checkboxProps}
      />
      <Typography variant="body2">
        (List all specific restrictions re: standing, sitting, bending, use of
        hands, etc.)
      </Typography>
      <EnhancedTextField
        fullWidth
        {...getTextFieldProps({
          name: 'returnToModifiedWork.limitations',
        })}
      />
      <Checkbox
        label={
          <Flex>
            Return to full duty on&nbsp;&nbsp;
            <EnhancedTextField
              {...getTextFieldProps({ name: 'returnToFullDuty.on' })}
            />
            &nbsp;&nbsp; with no limitations or restrictions.
          </Flex>
        }
        value={
          input.value && get(input.value, `${input.name}.returnToFullDuty`)
        }
        onChange={onChange('returnToFullDuty')}
        checked={!!input.value && has(input.value, 'returnToFullDuty')}
        {...checkboxProps}
      />
    </FormGroup>
  )
}

export default WorkStatusCheckboxes
