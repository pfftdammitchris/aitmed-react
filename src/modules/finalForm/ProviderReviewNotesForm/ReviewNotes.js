import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import { Field } from 'react-final-form'
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import Typography from '../../../components/common/Typography'
import SignatureCanvas from '../../../components/common/SignatureCanvas'
import Header from '../../../components/PortalPage/Provider/FormsHeader'
import renderFormDatePicker from '../renderFormDatePicker'
import PatientDemographics from './PatientDemographics'
import MultilineField from './MultilineField'
import ICD10 from './ICD10'

const styles = (theme) => ({
  divider: {
    border: '3px solid black',
    margin: `${theme.spacing.unit * 3}px 0`,
  },
  spacing: {
    padding: 0,
  },
  signatureCanvas: {
    width: '90%',
    maxHeight: 90,
    [theme.breakpoints.up('xs')]: {
      maxHeight: 60,
    },
  },
})

const ProviderPortalCurrentEncounterReviewNotes = ({
  classes,
  initialValues,
  appointment,
  signatureRef,
  signatureInputRef,
  clearSignature,
  validateSignature,
  header,
  filterDiagnosisFalseys,
}) => (
  <>
    <Header {...header} />
    <Divider className={classes.divider} />
    <Typography variant="h6" fontWeight={600} center gutterBottom paragraph>
      PHYSICIAN EVALUATION REPORT
    </Typography>
    <div className={classes.spacing}>
      <PatientDemographics />
      <Divider className={classes.divider} />
      <MultilineField
        label="History of Present Illness"
        name="hpiNotes"
        id="summary-hpiNotes"
      />
      <MultilineField
        label="Review Of Systems"
        sublabel="Negative except as Mentioned"
        name="review"
        id="summary-review"
      />
      <MultilineField
        label="Physical Examination"
        name="physical"
        id="summary-physical"
      />
      {!!filterDiagnosisFalseys(initialValues.diagnosis).length && (
        <Field
          component={ICD10}
          name="diagnosis"
          label="Diagnosis"
          sublabel="ICD10"
          id="summary-icd10"
        />
      )}
      <MultilineField
        label="Assessment and Treatment Plan"
        name="assessmentPlan"
        id="summary-assessmentPlan"
      />
      {initialValues.opinion && (
        <MultilineField
          label="Second Opinion"
          name="opinion"
          id="summary-opinion"
        />
      )}
      {initialValues.referral && (
        <MultilineField
          label="Special Referral"
          name="referral"
          id="summary-referral"
        />
      )}
      <Grid spacing={8} alignItems="center" container>
        <Grid item xs={7} />
        <Grid item xs={12}>
          <Field
            classNames={{ canvasContainer: classes.signatureCanvas }}
            label="Sign your name"
            component={SignatureCanvas}
            name="signed"
            signatureRef={signatureRef}
            signatureInputRef={signatureInputRef}
            clearSignature={clearSignature}
            validate={validateSignature}
            canvasProps={{ 'data-testid': 'summary-signature' }}
            hideClear
          />
          <Typography variant="subtitle2" align="right">
            Signature
          </Typography>
        </Grid>
      </Grid>
      <Grid alignItems="center" spacing={8} container>
        <Grid item>
          <Typography variant="subtitle2" fontWeight={600}>
            Next Follow Up
          </Typography>
        </Grid>
        <Grid item>
          <Field name="nextFollowUp" render={renderFormDatePicker} />
        </Grid>
        <Grid item xs={2} />
        {/* <Grid item>
          <Typography variant="subtitle2" fontWeight={600} right>
            Provider:{' '}
            {appointment &&
              `${appointment.provider.first_name} ${
                appointment.provider.last_name
              }, ${appointment.provider.education_degree}`}
          </Typography>
        </Grid> */}
      </Grid>
    </div>
  </>
)

ProviderPortalCurrentEncounterReviewNotes.propTypes = {
  classes: PropTypes.object.isRequired,
  appointment: PropTypes.object,
  signatureRef: PropTypes.object.isRequired,
  signatureInputRef: PropTypes.object.isRequired,
  initialValues: PropTypes.object.isRequired,
  clearSignature: PropTypes.func.isRequired,
  validateSignature: PropTypes.func.isRequired,
  header: PropTypes.object.isRequired,
}

export default withStyles(styles)(ProviderPortalCurrentEncounterReviewNotes)
