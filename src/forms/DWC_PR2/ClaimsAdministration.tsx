import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Theme } from '@material-ui/core'
import { Field } from 'react-final-form'
import OutlinedTextField from 'components/finalForm/OutlinedTextField'
import Flex from 'components/Flex'
import { states } from 'utils/info'

interface ClaimsAdministrationProps {
  name: string
}

const useStyles = makeStyles((theme: any) => ({
  textFieldRoot: {
    [theme.breakpoints.down('xs')]: {
      width: '100% !important',
    },
  },
}))

const ClaimsAdministration: React.FC<ClaimsAdministrationProps> = ({
  name,
  ...props
}) => {
  const classes = useStyles(props)

  const WrappedTextField: React.FC<any> = (props) => (
    <OutlinedTextField
      classes={{
        root: classes.textFieldRoot,
      }}
      {...props}
    />
  )

  return (
    <>
      <Flex center wrap xsBlock>
        <Field
          name={`${name}.name`}
          component={WrappedTextField}
          label="Name"
        />
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
        <Field
          name={`${name}.city`}
          component={WrappedTextField}
          label="City"
        />
        <Field name={`${name}.zip`} component={WrappedTextField} label="Zip" />
        <Field
          name={`${name}.phone`}
          component={WrappedTextField}
          label="Phone"
        />
      </Flex>
      <Field
        name={`${name}.state`}
        label="Select State"
        render={({ input, meta, ...rest }) => (
          <WrappedTextField
            SelectProps={{ native: true }}
            select
            fullWidth
            {...input}
            {...rest}
          >
            {[undefined, ...states].map((state: string, index: number) => (
              <option key={`state${index}`} value={state}>
                {state}
              </option>
            ))}
          </WrappedTextField>
        )}
      />
    </>
  )
}

export default ClaimsAdministration
