import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Divider from '@material-ui/core/Divider'
import { Form, Field } from 'react-final-form'
import MuiButton from '@material-ui/core/Button'
import MuiTextField from '@material-ui/core/TextField'
import Typography from 'components/Typography'
import Header from './Header'
import ReasonsForForm from './ReasonsForForm'
import PatientInfo from './PatientInfo'
import ClaimsAdministrator from './ClaimsAdministrator'
import Diagnoses from './Diagnoses'
import WorkStatusCheckboxes from './WorkStatusCheckboxes'

const useStyles = makeStyles((theme) => ({
  root: {},
}))

const Flex = (props) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}
    {...props}
  />
)

const PR2 = ({ initialValues, onSubmit, onCheck, ...props }) => {
  const classes = useStyles(undefined)

  const TextField = (props) => (
    <MuiTextField variant="outlined" fullWidth {...props} />
  )

  return (
    <Form
      onSubmit={onSubmit}
      subscription={{ submitting: true }}
      render={({ handleSubmit, submitting }: any) => (
        <form onSubmit={handleSubmit} className={classes.root}>
          <Header />
          Check the box(es) which indicate why you are submitting a report at
          this time. If the patient is “Permanent and Stationary” (i.e., has
          reached maximum medical improvement), do not use this form. You may
          use DWC Form PR-3 or IMC Form 81556.
          <Field
            name="reasonsForForm"
            component={ReasonsForForm}
            withTextfields={['infoRequestedBy', 'other']}
          />
          <PatientInfo />
          <ClaimsAdministrator />
          <Divider />
          <Typography>
            The information below must be provided. You may use this form or you
            may substitute or append a narrative report.
          </Typography>
          <Typography>Subjective Complaints:</Typography>
          <TextField rows={5} rowsMax={10} multiline />
          <Typography>
            Objective Findings: (Include significant physical examination,
            laboratory, imaging, or other diagnostic findings.)
          </Typography>
          <TextField rows={5} rowsMax={10} multiline />
          <Typography>Diagnoses:</Typography>
          <Diagnoses />
          <Divider />
          <Typography>
            Treatment Plan: (Include treatment rendered to date. List methods,
            frequency and duration of planned treatment(s). Specify
            consultation/referral, surgery, and hospitalization. Identify each
            physician and non-physician provider. Specify type, frequency and
            duration of physical medicine services (e.g., physical therapy,
            manipulation, acupuncture). Use of CPT codes is encouraged. Have
            there been any changes in treatment plan? If so, why?
          </Typography>
          <TextField rows={5} rowsMax={10} multiline />
          <Typography>Work Status:</Typography>
          <WorkStatusCheckboxes />
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Typography>
              Primary Treating Physician: (Original signature, do not stamp)
            </Typography>
            <TextField label="Date of Exam" />
          </div>
          <Typography variant="caption">
            I declare under penalty of perjury that this report is true and
            correct to the best of my knowledge and that I have not violated
            Labor Code § 139.3.
          </Typography>
          <Flex>
            <TextField label="Signature: " />
            <TextField label="Cal. Lic. #: " />
          </Flex>
          <Flex>
            <TextField label="Executed At: " />
            <TextField label="Date: " />
          </Flex>
          <Flex>
            <TextField label="Name: " />
            <TextField label="Specialty: " />
          </Flex>
          <Flex>
            <TextField label="Address: " />
            <TextField label="Phone: " />
          </Flex>
          <TextField label="Next report due no later than  " />
          <div>
            <MuiButton type="submit" color="primary">
              Submit
            </MuiButton>
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
