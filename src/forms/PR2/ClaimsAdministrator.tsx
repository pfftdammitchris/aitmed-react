import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Theme } from '@material-ui/core'
import { Field } from 'react-final-form'
import OutlinedTextField from 'components/finalForm/OutlinedTextField'
import Flex from 'components/Flex'
import { states } from 'utils/info'

interface ClaimsAdministratorProps {
  name: string
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    //
  },
  textField: {
    fontSize: '0.7rem !important',
  },
}))

const ClaimsAdministrator: React.FC<ClaimsAdministratorProps> = ({
  name,
  onCheck,
  ...props
}) => {
  const classes = useStyles(props)

  const WrappedTextField = (props) => (
    <OutlinedTextField
      classes={{
        root: classes.textField,
      }}
      {...props}
    />
  )

  return (
    <Flex center wrap>
      <Field name={`${name}.name`} component={WrappedTextField} label="Name" />
      <Field
        name={`${name}.claimNumber`}
        component={WrappedTextField}
        label="Claim Number"
      />
      <Field name={`${name}.fax`} component={WrappedTextField} label="Fax" />
      <Field
        name={`${name}.address`}
        component={WrappedTextField}
        label="Address"
      />
      <Field name={`${name}.city`} component={WrappedTextField} label="City" />
      <Field name={`${name}.zip`} component={WrappedTextField} label="Zip" />
      <Field
        name={`${name}.phone`}
        component={WrappedTextField}
        label="Phone"
      />
      <Field
        name={`${name}.state`}
        label="State"
        render={({ input, meta, ...rest }) => (
          <WrappedTextField
            SelectProps={{ native: true, displayEmpty: true }}
            select
            fullWidth
            {...input}
            {...rest}
          >
            {states.map((state: string) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </WrappedTextField>
        )}
      />
    </Flex>
  )
}

export default ClaimsAdministrator
351216598
