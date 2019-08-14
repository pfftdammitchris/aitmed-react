import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Form, Field } from 'react-final-form'
import MuiTextField from '@material-ui/core/TextField'
import Flex from 'components/Flex'
import Typography from 'components/Typography'
import Button from 'components/Button'
import Divider from 'components/Divider'
import Header from './Header'
import ReasonsForForm from './ReasonsForForm'
import PatientInfo from './PatientInfo'
import ClaimsAdministrator from './ClaimsAdministrator'
import Diagnoses from './Diagnoses'
import WorkStatusCheckboxes from './WorkStatusCheckboxes'

const useStyles = makeStyles((theme) => ({
  root: {},
  actions: {
    padding: '12px 0',
  },
}))

const Label: React.FC<any> = ({ children, ...rest }) => (
  <Typography variant="overline" fontWeight={700} {...rest}>
    {children}
  </Typography>
)

const PR2 = ({ initialValues, onSubmit, onCheck, ...props }) => {
  const classes = useStyles(undefined)

  const TextField = (props) => (
    <MuiTextField margin="dense" variant="outlined" fullWidth {...props} />
  )

  return (
    <Form
      onSubmit={onSubmit}
      subscription={{ submitting: true }}
      render={({ handleSubmit, submitting }: any) => (
        <form onSubmit={handleSubmit} className={classes.root}>
          <Header />
          <Divider />
          Check the box(es) which indicate why you are submitting a report at
          this time. If the patient is “Permanent and Stationary” (i.e., has
          reached maximum medical improvement), do not use this form. You may
          use DWC Form PR-3 or IMC Form 81556.
          <Divider margin="10px auto" />
          <Field
            name="reasonsForForm"
            component={ReasonsForForm}
            withTextfields={['infoRequestedBy', 'other']}
          />
          <Divider />
          <Label>Patient:</Label>
          <PatientInfo name="patientInfo" />
          <br />
          <Label>Claims Administration:</Label>
          <ClaimsAdministrator name="claimsAdministrator" />
          <br />
          <Typography gutterBottom paragraph italic>
            The information below must be provided. You may use this form or you
            may substitute or append a narrative report.
          </Typography>
          <Label>Subjective Complaints:</Label>
          <TextField rows={5} rowsMax={10} multiline />
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
          <TextField rows={5} rowsMax={10} multiline />
          <br />
          <br />
          <Label>Diagnoses:</Label>
          <Diagnoses />
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
          <TextField rows={5} rowsMax={10} multiline />
          <br />
          <br />
          <Label>Work Status:</Label>
          <WorkStatusCheckboxes />
          <Divider />
          <Flex spaceBetween>
            <Typography variant="caption">
              Primary Treating Physician: (Original signature, do not stamp)
            </Typography>
            <TextField label="Date of Exam" />
          </Flex>
          <Divider />
          <Typography variant="caption">
            I declare under penalty of perjury that this report is true and
            correct to the best of my knowledge and that I have not violated
            Labor Code § 139.3.
          </Typography>
          <br />
          <br />
          <Flex spaceBetween>
            <TextField label="Signature " /> &nbsp;&nbsp;
            <TextField label="California License No. " />
          </Flex>
          <Flex spaceBetween>
            <TextField label="Executed At " /> &nbsp;&nbsp;
            <TextField label="Date " />
          </Flex>
          <Flex spaceBetween>
            <TextField label="Name " /> &nbsp;&nbsp;
            <TextField label="Specialty " />
          </Flex>
          <Flex spaceBetween>
            <TextField label="Address " /> &nbsp;&nbsp;
            <TextField label="Phone " />
          </Flex>
          <Divider />
          <Flex>
            <Typography variant="body2">
              Next report due no later than: &nbsp;&nbsp;
            </Typography>
            <MuiTextField />
          </Flex>
          <Divider />
          <div className={classes.actions}>
            <Button type="submit" hover={{ secondary: 'white' }} secondary>
              Submit
            </Button>
          </div>
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
        patientInfo: {
          lastName: '',
          firstName: '',
          middleName: '',
          sex: '',
          dob: '',
          address: '',
          city: '',
          state: '',
          zip: '',
          occupation: '',
          socialSecurity: '',
          phone: '',
        },
        claimsAdministrator: {
          name: '',
          claimNumber: '',
          address: '',
          city: '',
          state: '',
          zip: '',
          phone: '',
          fax: '',
        },
        subjectiveComplaints: '',
        objectiveFindings: '',
        diagnoses: [
          {
            diagnose: '',
            icd9: '',
          },
        ],
        treatmentPlan: '',
        workStatusForPatient: {
          remainOffWorkUntil: '',
          returnToModifiedWork: {
            on: '',
            limitations: '',
          },
          returnToFullDuty: {
            on: '',
          },
        },
        employer: {
          name: '',
          phone: '',
        },
        dateOfExam: '',
        signature: '',
        licenseNumber: '',
        executedAt: '',
        date: '',
        name: '',
        specialty: '',
        address: '',
        phone: '',
        nextReportDueNoLaterThan: '',
        ...initialValues,
      }}
      {...props}
    />
  )
}

export default PR2
