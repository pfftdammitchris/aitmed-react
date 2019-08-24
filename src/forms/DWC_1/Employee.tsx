import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Field } from 'react-final-form'
import Checkbox from 'components/Checkbox'
import SignatureCanvas from 'components/finalForm/SignatureCanvas'
import Flex from 'components/Flex'
import OutlinedTextField from 'components/finalForm/OutlinedTextField'
import Typography from 'components/Typography'

interface DWC_1_EmployeeProps {
  name: 'employee'
  signatureRef: any
}

const useStyles: (props: DWC_1_EmployeeProps) => any = makeStyles(
  (theme: any) => ({
    root: {
      //
    },
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
  }),
)

const InjuryFields: React.FC<{ name: string }> = ({ name }) => (
  <>
    <Flex>
      <Field
        label="Date of Injury"
        name={`${name}.date`}
        component={OutlinedTextField}
        fullWidth
        wrapperProps={{ marginRight: 3 }}
      />
      <Field
        label="Time of Injury"
        name={`${name}.time`}
        component={OutlinedTextField}
        fullWidth
      />
    </Flex>
    <Field
      label="Address Injury Occurred"
      name={`${name}.address`}
      component={OutlinedTextField}
      fullWidth
    />
    <Field
      label="Description of Injury"
      name={`${name}.address`}
      component={OutlinedTextField}
      fullWidth
    />
  </>
)

const DWC_1_Employee = ({ name, signatureRef, ...rest }: any) => {
  const classes = useStyles(rest)

  return (
    <div className={classes.root}>
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
          label="Today's Date"
          name={`${name}.date`}
          component={OutlinedTextField}
          fullWidth
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
          label="State"
          name={`${name}.state`}
          component={OutlinedTextField}
          fullWidth
          wrapperProps={{ marginRight: 3 }}
        />
        <Field
          label="Zip Code"
          name={`${name}.zip`}
          component={OutlinedTextField}
          fullWidth
        />
      </Flex>
      <InjuryFields name={`${name}.injury`} />
      <Flex>
        <Field
          label="Social Security No."
          name={`${name}.ssn`}
          component={OutlinedTextField}
          wrapperProps={{ marginRight: 3 }}
          fullWidth
        />
      </Flex>
      <div style={{ padding: '10px 5px' }}>
        <Field
          label="Email"
          name={`${name}.email`}
          component={OutlinedTextField}
          fullWidth
        />
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
        signatureRef={signatureRef}
      />
    </div>
  )
}

export default DWC_1_Employee
