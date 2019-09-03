import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import { FieldArray } from 'react-final-form-arrays/dist'
import { Form, Field } from 'react-final-form/dist'
import arrayMutators from 'final-form-arrays/dist'
import AutoSaver from '../../../components/PortalPage/Provider/Meeting/Drawer/CurrentEncounter/AutoSaver'
import Button from '../../../components/common/Button'
import PatientContact from './PatientContact'
import ICD10 from './ICD10'
import Input from './Input'
import VitalsDisplay from './VitalsDisplay'

const styles = (theme) => ({
  root: {
    padding: '35px 0',
  },
  notesBtn: {
    display: 'block',
    margin: 'auto',
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.7rem',
      marginTop: 10,
    },
  },
})

const PortalProviderNotes = ({
  classes,
  onSubmit,
  initialValues,
  firstName,
  middleName,
  lastName,
  email,
  primaryPhoneNum,
  updateNotesFormValues,
  activeModal,
  getCurrentValues,
  appointment,
}) => {
  return (
    <Form
      keepDirtyOnReinitialize
      mutators={arrayMutators}
      initialValues={initialValues}
      onSubmit={onSubmit}
      subscription={{ submitting: true }}
      render={({ handleSubmit }) => (
        <form
          id="provider-notes-form"
          onSubmit={handleSubmit}
          className={classes.root}
        >
          <AutoSaver
            formName="notes"
            updateNotesFormValues={updateNotesFormValues}
            activeModal={activeModal}
            getCurrentValues={getCurrentValues}
          />
          <PatientContact
            firstName={firstName}
            middleName={middleName}
            lastName={lastName}
            email={email}
            primaryPhoneNum={primaryPhoneNum}
          />
          <Field
            component={Input}
            name="hpiNotes"
            id="notes-hpiNotes"
            label="HPI And Patient History"
            rows={4}
            rowsMax={12}
          />
          <VitalsDisplay appointment={appointment} />
          <Field
            component={Input}
            name="physical"
            id="notes-physical"
            label="Physical Examination"
            rows={1}
            rowsMax={12}
          />
          <FieldArray
            component={ICD10}
            name="diagnosis"
            label="ICD10"
            subscription={{ blur: true }}
          />
          <Field
            component={Input}
            name="assessmentPlan"
            id="notes-assessmentPlan"
            label="Assessment & Treatment Plan"
            rows={1}
            rowsMax={12}
          />
          <Field
            component={Input}
            name="opinion"
            id="notes-opinion"
            label="Second Opinion (optional)"
            rows={1}
            rowsMax={12}
          />
          <Field
            component={Input}
            name="referral"
            id="notes-referral"
            label="Special Referral (optional)"
            rows={1}
            rowsMax={12}
          />
          <div>
            <Button
              id="notes-drawer-button"
              type="submit"
              className={classes.notesBtn}
              hover={{ secondary: 'white' }}
              secondary
            >
              Review Notes
            </Button>
          </div>
        </form>
      )}
    />
  )
}

PortalProviderNotes.propTypes = {
  classes: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.object,
  firstName: PropTypes.string,
  middleName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  primaryPhoneNum: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  activeModal: PropTypes.string,
  getCurrentValues: PropTypes.func.isRequired,
}

export default React.memo(withStyles(styles)(PortalProviderNotes))
