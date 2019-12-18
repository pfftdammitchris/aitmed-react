import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Theme } from '@material-ui/core'
// @ts-ignore
import { Field } from 'react-final-form'
import OutlinedTextField from '../../components/finalForm/OutlinedTextField'
import Flex from '../../components/Flex'
import { states } from '../../utils/info'
import { formatOnlyNumbers, parsePhone } from '../../utils'

export interface ClaimsAdministrationProps {
  name: string
}

const useStyles = makeStyles((theme: Theme) => ({
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
      <Flex xsBlock>
        <Field
          name={`${name}.name`}
          component={WrappedTextField}
          label="Name"
          wrapperProps={{ marginRight: 3 }}
          fullWidth
        />
        <Field
          name={`${name}.claimNumber`}
          component={WrappedTextField}
          label="Claim Number"
          wrapperProps={{ marginRight: 3 }}
          fullWidth
        />
        <Field
          name={`${name}.fax`}
          component={WrappedTextField}
          parse={parsePhone}
          label="Fax"
          wrapperProps={{ marginRight: 3 }}
          fullWidth
        />
        <Field
          name={`${name}.address`}
          component={WrappedTextField}
          label="Address"
          wrapperProps={{ marginRight: 3 }}
          fullWidth
        />
      </Flex>
      <Flex xsBlock>
        <Field
          name={`${name}.city`}
          component={WrappedTextField}
          label="City"
          wrapperProps={{ marginRight: 3 }}
          fullWidth
        />
        <Field
          name={`${name}.zip`}
          component={WrappedTextField}
          parse={formatOnlyNumbers}
          label="Zip"
          wrapperProps={{ marginRight: 3 }}
          fullWidth
        />
        <Field
          name={`${name}.phone`}
          component={WrappedTextField}
          parse={parsePhone}
          label="Phone"
          wrapperProps={{ marginRight: 3 }}
          fullWidth
        />
        <Field
          name={`${name}.state`}
          component={WrappedTextField}
          selectProps={{ native: true }}
          select
          fullWidth
        >
          {['Select State', ...states].map((state: any, index: number) => (
            <option key={`state${index}`} value={state}>
              {state}
            </option>
          ))}
        </Field>
      </Flex>
    </>
  )
}

export default ClaimsAdministration
