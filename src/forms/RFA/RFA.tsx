import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Form, Field } from 'react-final-form'
import createDecorator from 'final-form-focus'
import { Theme } from '@material-ui/core'
import format from 'date-fns/format'
import Typography from '../../components/Typography'
import Checkbox from '../../components/Checkbox'
import Divider from '../../components/Divider'
import OutlinedTextField from '../../components/finalForm/OutlinedTextField'
import Button from '../../components/Button'
import SignatureCanvas from '../../components/finalForm/SignatureCanvas'
import Header from './Header'
import Subheader from './Subheader'
import EmployeeFields from './Employee'
import PhysicianFields from './Physician'
import ClaimsAdministratorFields from './ClaimsAdministrator'
import UROFields from './URO'
import { RFA_FormValues } from './types'

interface RFAProps {
  initialValues?: RFA_FormValues
  specialties: string[]
  onSubmit: (values: RFA_FormValues) => Promise<void>
}

const useStyles: (props: RFAProps) => any = makeStyles((theme: Theme) => ({
  root: {
    overflowX: 'hidden',
  },
  actions: {
    padding: '12px 0',
  },
  checkboxRoot: {
    color: '#333',
    transform: 'scale(0.9)',
    padding: 0,
    marginLeft: 12,
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

const focusOnError = createDecorator()

const RFA: React.FC<RFAProps> = ({
  initialValues = {},
  onSubmit,
  specialties = [],
  ...props
}: any) => {
  const signatureRef = React.useRef()
  const uroSignatureRef = React.useRef()
  const classes = useStyles(props)

  const WrappedOutlinedTextField: React.FC<any> = (args) => (
    <OutlinedTextField classes={{ root: classes.textFieldRoot }} {...args} />
  )

  const WrappedCheckbox: React.FC<any> = ({ input, meta, ...rest }) => (
    <Checkbox
      classes={{ label: classes.checkboxLabel }}
      classNames={{
        root: classes.checkboxRoot,
      }}
      {...input}
      {...rest}
    />
  )

  const todaysDate = format(new Date(), 'yyyy-MM-dd')

  return (
    <Form
      keepDirtyOnReinitialize
      onSubmit={onSubmit}
      subscription={{ submitting: true }}
      decorators={[focusOnError]}
      initialValues={{
        ...initialValues,
        physicianSignature: {
          date: todaysDate,
          ...initialValues.physicianSignature,
        },
      }}
      render={({ handleSubmit }: any) => (
        <form onSubmit={handleSubmit} className={classes.root}>
          <Header />
          <Subheader />
          <Divider />
          <Field
            component={WrappedCheckbox}
            type="checkbox"
            label="New Request"
            name="newRequest"
          />
          <Field
            component={WrappedCheckbox}
            type="checkbox"
            label="Expedited Review: Check box if employee faces an imminent and serious threat to his or her health"
            name="expeditedReview"
          />
          <Field
            component={WrappedCheckbox}
            type="checkbox"
            label=" Check box if request is a written confirmation of a prior oral request"
            name="confirmationPriorOralRequest"
          />
          <Field
            component={WrappedCheckbox}
            type="checkbox"
            label="Resubmission – Change in Material Facts"
            name="resubmission"
          />
          <Divider />
          <Typography variant="h6" gutterBottom paragraph>
            Employee Information
          </Typography>
          <EmployeeFields
            name="employee"
            component={WrappedOutlinedTextField}
          />
          <Divider />
          <Typography variant="h6" gutterBottom paragraph>
            Requesting Physician Information
          </Typography>
          <PhysicianFields
            name="physician"
            component={WrappedOutlinedTextField}
            specialties={specialties}
          />
          <Divider />
          <Typography variant="h6" gutterBottom paragraph>
            Claims Administrator Information
          </Typography>
          <ClaimsAdministratorFields
            name="claimsAdministrator"
            component={WrappedOutlinedTextField}
          />
          <Divider />
          <Typography variant="h6" gutterBottom paragraph>
            Requested Treatment
          </Typography>
          <Typography variant="subtitle2" gutterBottom paragraph>
            List each specific requested medical services, goods, or items in
            the below space or indicate the specific page number(s) of the
            attached medical report on which the requested treatment can be
            found. Up to five (5) procedures may be entered.
          </Typography>
          <Field
            // @ts-ignore
            component={SignatureCanvas}
            name="physicianSignature.signed"
            signatureLabel="Requesting Physician Signature"
            signatureRef={signatureRef}
          />
          <br />
          <Field
            name="physicianSignature.date"
            render={({ input }: any) => (
              <WrappedOutlinedTextField
                label="Date"
                value={format(new Date(input.value), 'MM-dd-yyyy')}
                disabled
              />
            )}
          />
          <Divider />
          <Typography variant="h6" gutterBottom paragraph>
            Claims Administrator/Utilization Review Organization (URO) Response
          </Typography>
          <UROFields
            name="uroResponse"
            textfield={WrappedOutlinedTextField}
            checkbox={WrappedCheckbox}
            signatureRef={uroSignatureRef}
          />
          <div className={classes.actions}>
            <Button
              type="submit"
              hover={{ secondary: 'white' }}
              // disabled={submitting}
              secondary
            >
              Submit
            </Button>
          </div>
        </form>
      )}
    />
  )
}

export default RFA
