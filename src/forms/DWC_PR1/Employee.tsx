import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Field } from 'react-final-form'
import format from 'date-fns/format'
import { parseSSN } from '../../utils/finalForm'
import Checkbox from '../../components/Checkbox'
import SignatureCanvas from '../../components/finalForm/SignatureCanvas'
import Flex from '../../components/Flex'
import OutlinedTextField from '../../components/finalForm/OutlinedTextField'
import Typography from '../../components/Typography'

interface DWC_1_EmployeeProps {
  name: 'employee'
  signatureRef: any
  states: string[]
}

const useStyles = makeStyles((theme: any) => ({
  spaced: {
    '& fieldset': {
      marginRight: 2,
    },
  },
  checkboxRoot: {
    color: '#333',
    transform: 'scale(0.9)',
    padding: 3,
    [theme.breakpoints.down('xs')]: {
      marginLeft: 8,
    },
  },
  checkboxLabel: {
    fontSize: '0.72rem',
    marginLeft: 0,
    marginRight: 11,
    userSelect: 'none',
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.67rem',
    },
  },
}))

const DWC_1_Employee: React.FC<DWC_1_EmployeeProps> = ({
  name,
  signatureRef,
  states = [],
  ...rest
}) => {
  const classes = useStyles(rest)

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Employee
      </Typography>
      <Flex>
        <Field
          label="Name"
          name={`${name}.name`}
          component={OutlinedTextField}
          wrapperProps={{ marginRight: 3 }}
          fullWidth
        />
        <Field
          type="date"
          label="Today's Date"
          name={`${name}.date`}
          fullWidth
          render={({ input, meta, ...rest }) => (
            <OutlinedTextField
              {...input}
              {...rest}
              value={format(new Date(), 'yyyy-MM-dd')}
            />
          )}
        />
      </Flex>
      <Field
        label="Home Address"
        name={`${name}.address`}
        component={OutlinedTextField}
        fullWidth
      />
      <Flex>
        <Field
          label="City"
          name={`${name}.city`}
          component={OutlinedTextField}
          fullWidth
          wrapperProps={{ marginRight: 3 }}
        />
        <Field
          label="Zip Code"
          name={`${name}.zip`}
          component={OutlinedTextField}
          wrapperProps={{ marginRight: 3 }}
          fullWidth
        />
        <Field
          name={`${name}.state`}
          component={OutlinedTextField}
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
      <Flex>
        <Field
          type="date"
          label="Date of Injury"
          name={`${name}.injury.date`}
          component={OutlinedTextField}
          wrapperProps={{ marginRight: 3 }}
          fullWidth
        />
        <Field
          type="time"
          label="Time of Injury"
          name={`${name}.injury.time`}
          component={OutlinedTextField}
          fullWidth
        />
      </Flex>
      <Field
        label="Address Injury Occurred"
        name={`${name}.injury.address`}
        component={OutlinedTextField}
        fullWidth
      />
      <Field
        label="Description of Injury"
        name={`${name}.injury.description`}
        component={OutlinedTextField}
        fullWidth
      />
      <Field
        label="Social Security No."
        name={`${name}.ssn`}
        component={OutlinedTextField}
        parse={parseSSN}
        fullWidth
      />
      <Field
        type="email"
        label="Email"
        name={`${name}.email`}
        component={OutlinedTextField}
        fullWidth
      />
      <div style={{ padding: '10px 5px' }}>
        <Field
          name={`${name}.receiveClaimNoticesByEmail`}
          type="checkbox"
          render={({ input, ...rest }) => (
            <Checkbox
              classes={{
                label: classes.checkboxLabel,
              }}
              classNames={{
                root: classes.checkboxRoot,
              }}
              label="Check this box if you agree to receive notices about your claim by email only"
              {...input}
              {...rest}
            />
          )}
        />
      </div>
      <Field
        // @ts-ignore
        component={SignatureCanvas}
        name={`${name}.signature`}
        signatureLabel="Patient Signature"
        signatureRef={signatureRef}
      />
    </>
  )
}

export default DWC_1_Employee
