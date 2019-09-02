import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Form, Field } from 'react-final-form'
import { FieldArray } from 'react-final-form-arrays'
import arrayMutators from 'final-form-arrays'
import MuiTextField from '@material-ui/core/TextField'
import format from 'date-fns/format'
import { parsePhone } from '../../utils/finalForm'
import Divider from '../../components/Divider'
import Flex from '../../components/Flex'
import Typography from '../../components/Typography'
import OutlinedTextField from '../../components/finalForm/OutlinedTextField'
import SignatureCanvas from '../../components/finalForm/SignatureCanvas'
import ICD10 from '../../modules/finalForm/ICD10'
import Header from './Header'
import ReasonsForForm from './ReasonsForForm'
import PatientInfo from './PatientInfo'
import ClaimsAdministration from './ClaimsAdministration'
import WorkStatusCheckboxes from './WorkStatusCheckboxes'

interface DWC_PR2Props {
  initialValues?: any
  genders: string[]
  specialties: string[]
  onSubmit: (values: any) => Promise<void>
  render?: (args: any) => any
}

const useStyles = makeStyles((theme: any) => ({
  root: {},
  textFieldRoot: {
    [theme.breakpoints.down('xs')]: {
      width: '100% !important',
    },
  },
}))

const Label: React.FC<any> = ({ children, ...rest }) => (
  <Typography variant="overline" fontWeight={700} {...rest}>
    {children}
  </Typography>
)

const PR2: React.FC<DWC_PR2Props> = ({
  render,
  initialValues,
  onSubmit,
  genders = [],
  specialties = [],
  ...props
}) => {
  const classes = useStyles(undefined)
  const signatureRef = React.createRef()

  const TextField: React.FC<any> = (props) => (
    <MuiTextField
      className={classes.textFieldRoot}
      margin="dense"
      variant="outlined"
      fullWidth
      {...props}
    />
  )

  const WrappedOutlinedTextField: React.FC<any> = (props) => (
    <OutlinedTextField className={classes.textFieldRoot} {...props} />
  )

  // Extracted these fields outside since TS was giving a useless component prop error
  const workStatusForPatient = (
    // @ts-ignore
    <Field name="workStatusForPatient" component={WorkStatusCheckboxes} />
  )
  const signatureCanvas = (
    <Field
      component={SignatureCanvas}
      name="signature"
      signatureRef={signatureRef}
    />
  )

  return (
    <Form
      keepDirtyOnReinitialize
      onSubmit={onSubmit}
      subscription={{ submitting: true }}
      // @ts-ignore
      mutators={arrayMutators}
      render={({ handleSubmit, submitting, ...rest }: any) => (
        <form onSubmit={handleSubmit} className={classes.root}>
          <Header />
          <Divider />
          <Typography variant="body2">
            Check the box(es) which indicate why you are submitting a report at
            this time. If the patient is “Permanent and Stationary” (i.e., has
            reached maximum medical improvement), do not use this form. You may
            use DWC Form PR-3 or IMC Form 81556.
          </Typography>
          <Divider margin="10px auto" />
          <Field
            name="reasonsForForm"
            // @ts-ignore
            component={ReasonsForForm}
            withTextfields={['infoRequestedBy', 'other']}
          />
          <Divider />
          <Label>Patient:</Label>
          <PatientInfo name="patientInfo" genders={genders} />
          <br />
          <Label>Claims Administration:</Label>
          <ClaimsAdministration name="claimsAdministration" />
          <br />
          <Typography gutterBottom paragraph italic>
            The information below must be provided. You may use this form or you
            may substitute or append a narrative report.
          </Typography>
          <Label>Subjective Complaints:</Label>
          <Field
            name="subjectiveComplaints"
            component={OutlinedTextField}
            rows={5}
            rowsMax={10}
            multiline
            fullWidth
          />
          <br />
          <br />
          <Label>
            Objective Findings:
            <br />
            <Typography variant="caption">
              (Include significant physical examination, laboratory, imaging, or
              other diagnostic findings.)
            </Typography>
          </Label>
          <Field
            name="objectiveFindings"
            component={WrappedOutlinedTextField}
            rows={5}
            rowsMax={10}
            multiline
            fullWidth
          />
          <br />
          <br />
          <Label>Diagnoses:</Label>
          <FieldArray component={ICD10} name="diagnoses" />
          <Divider />
          <Typography variant="body1" gutterBottom paragraph>
            <b>Treatment Plan</b>: (Include treatment rendered to date. List
            methods, frequency and duration of planned treatment(s). Specify
            consultation/referral, surgery, and hospitalization.{' '}
            <strong>Identify each physician and non-physician provider</strong>.
            Specify type, frequency and duration of physical medicine services
            (e.g., physical therapy, manipulation, acupuncture). Use of CPT
            codes is encouraged. Have there been any <strong>changes</strong> in
            treatment plan? If so, why?
          </Typography>
          <Field
            name="treatmentPlan"
            component={OutlinedTextField}
            rows={5}
            rowsMax={10}
            multiline
            fullWidth
          />
          <br />
          <br />
          <Label>Work Status:</Label>
          {workStatusForPatient}
          <Divider />
          <Flex spaceBetween>
            <Typography variant="caption">
              Primary Treating Physician: (Original signature, do not stamp)
            </Typography>
            <Field
              name="dateOfExam"
              type="date"
              render={({ input, meta, ...rest }) => (
                <TextField
                  helperText="Date of Exam"
                  FormHelperTextProps={{ style: { color: '#333' } }}
                  {...input}
                  {...rest}
                />
              )}
            />
          </Flex>
          <Divider />
          <Typography variant="caption">
            I declare under penalty of perjury that this report is true and
            correct to the best of my knowledge and that I have not violated
            Labor Code § 139.3.
          </Typography>
          <br />
          <br />
          <Flex xsBlock spaceBetween>
            <Field
              label="California License No."
              name="licenseNumber"
              component={WrappedOutlinedTextField}
              wrapperProps={{ marginRight: 3 }}
              fullWidth
            />
            <Field
              label="Phone"
              name="phone"
              parse={parsePhone}
              component={WrappedOutlinedTextField}
              fullWidth
            />
          </Flex>
          <Flex xsBlock spaceBetween>
            <Field
              type="date"
              label="Executed At"
              name="executedAt"
              component={WrappedOutlinedTextField}
              wrapperProps={{ marginRight: 3 }}
              fullWidth
            />
            <Field
              type="date"
              name="date"
              label="Date"
              fullWidth
              render={({ input, meta, ...rest }) => (
                <WrappedOutlinedTextField
                  {...input}
                  {...rest}
                  value={format(new Date(), 'yyyy-MM-dd')}
                />
              )}
            />
          </Flex>
          <Flex xsBlock spaceBetween>
            <Field
              label="Name"
              name="name"
              component={WrappedOutlinedTextField}
              wrapperProps={{ marginRight: 3 }}
              fullWidth
            />
            <Field
              name="specialty"
              component={WrappedOutlinedTextField}
              selectProps={{ native: true }}
              select
              fullWidth
            >
              {['Select Specialty', ...specialties].map((specialty: string) => (
                <option key={`specialty_${specialty}`} value={specialty}>
                  {specialty}
                </option>
              ))}
            </Field>
          </Flex>
          <Flex xsBlock spaceBetween>
            <Field
              label="Address"
              name="address"
              component={WrappedOutlinedTextField}
              fullWidth
            />
          </Flex>
          <Divider />
          <Flex>
            <Typography variant="body2">
              Next report due no later than: &nbsp;&nbsp;
            </Typography>
            <Field
              name="nextReportDueNoLaterThan"
              type="date"
              render={({ input, meta, ...rest }) => (
                <MuiTextField {...input} {...rest} />
              )}
            />
          </Flex>
          <Divider />
          {signatureCanvas}
          {render && render({ submitting, ...rest })}
        </form>
      )}
      initialValues={{
        reasonsForForm: {
          // periodicReport: '',
          // changeInTreatmentPlan: '',
          // discharged: '',
          // changeInWorkStatus: '',
          // referralOrConsultation: '',
          // infoRequestedBy: '',
          // changeInPatientsCondition: '',
          // surgeryOrHospitalization: '',
          // other: '',
        },
        // patientInfo: {
        //   lastName: '',
        //   firstName: '',
        //   middleName: '',
        //   sex: '',
        //   dob: '',
        //   address: '',
        //   city: '',
        //   state: '',
        //   zip: '',
        //   occupation: '',
        //   socialSecurity: '',
        //   phone: '',
        // },
        // claimsAdministration: {
        //   name: '',
        //   claimNumber: '',
        //   address: '',
        //   city: '',
        //   state: '',
        //   zip: '',
        //   phone: '',
        //   fax: '',
        // },
        // subjectiveComplaints: '',
        // objectiveFindings: '',
        // diagnoses: [
        // {
        //   diagnose: '',
        //   icd9: '',
        // },
        // {
        //   diagnose: '',
        //   icd9: '',
        // },
        // {
        //   diagnose: '',
        //   icd9: '',
        // },
        // ],
        // treatmentPlan: '',
        workStatusForPatient: {
          // remainOffWorkUntil: '',
          // returnToModifiedWork: {
          //   on: '',
          //   limitations: '',
          // },
          // returnToFullDuty: {
          //   on: '',
          // },
        },
        // employer: {
        //   name: '',
        //   phone: '',
        // },
        // dateOfExam: '',
        // signature: '',
        // licenseNumber: '',
        // executedAt: '',
        // date: '',
        // name: '',
        // specialty: '',
        // address: '',
        // phone: '',
        // nextReportDueNoLaterThan: '',
        ...initialValues,
      }}
      {...props}
    />
  )
}

export default PR2
