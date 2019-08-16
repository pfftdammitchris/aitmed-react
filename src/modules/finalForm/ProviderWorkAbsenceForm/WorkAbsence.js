import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import { Field } from 'react-final-form'

import Divider from '@material-ui/core/Divider'
import TextField from '@material-ui/core/TextField'

import Typography from 'components/common/Typography'
import FooterAndSignature from 'components/PortalPage/Provider/FooterAndSignature'
import Header from 'components/PortalPage/Provider/FormsHeader'

import renderFormDatePicker from '../renderFormDatePicker'

import NormalField from './NormalField'
import PleaseExcuse from './PleaseExcuse'
import FromDueTo from './FromDueTo'

const styles = (theme) => ({
  divider: {
    border: '3px solid black',
    margin: `${theme.spacing.unit.unit * 3}px 0`,
  },
  signatureCanvas: {
    width: '80%',
    maxHeight: 90,
    [theme.breakpoints.up('xs')]: {
      maxHeight: 60,
    },
  },
})

const ProviderWorkAbsenceForm = ({
  classes,
  patient,
  signatureRef,
  signatureInputRef,
  clearSignature,
  validateSignature,
  header,
}) => (
  <>
    <Header {...header} />
    <Divider className={classes.divider} />
    <Typography variant="h6" fontWeight={600} center gutterBottom paragraph>
      Leave of Absence
    </Typography>
    <NormalField label="Date">
      <Field
        data-testid="absence-date"
        type="date"
        name="date"
        component={({ input }) => <TextField readOnly value={input.value} />}
      />
    </NormalField>
    <NormalField label="Please Excuse">
      <Field
        name="pleaseExcuse"
        render={({ input }) => <TextField readOnly value={input.value} />}
      />
    </NormalField>
    <Field
      name="from"
      component={FromDueTo}
      label="From"
      options={['Work', 'School', 'Other']}
    />
    <Field
      name="dueTo"
      component={FromDueTo}
      label="Due to"
      options={['Injury', 'Illness', 'Other']}
    />
    <Divider className={classes.divider} />
    <PleaseExcuse firstName={patient.first_name} lastName={patient.last_name}>
      <Field
        name="requestExcuseFrom"
        textFieldProps={{
          helperText: 'From',
        }}
        render={renderFormDatePicker}
      />
      <Field
        name="requestExcuseTo"
        textFieldProps={{
          helperText: 'To',
        }}
        render={renderFormDatePicker}
      />
    </PleaseExcuse>
    <Divider className={classes.divider} />
    <NormalField style={{ marginBottom: 10 }} label="Next Appointment">
      <Field
        name="nextAppointment"
        textFieldProps={{
          inputProps: { 'data-testid': 'nextAppointment' },
          fullWidth: true,
        }}
        render={renderFormDatePicker}
      />
    </NormalField>
    <FooterAndSignature
      signatureClassName={classes.signatureCanvas}
      signatureRef={signatureRef}
      signatureInputRef={signatureInputRef}
      clearSignature={clearSignature}
      validateSignature={validateSignature}
    />
  </>
)

ProviderWorkAbsenceForm.propTypes = {
  classes: PropTypes.object.isRequired,
  patient: PropTypes.object,
  signatureRef: PropTypes.object.isRequired,
  signatureInputRef: PropTypes.object,
  clearSignature: PropTypes.func.isRequired,
  validateSignature: PropTypes.func.isRequired,
  header: PropTypes.object.isRequired,
}

export default withStyles(styles)(ProviderWorkAbsenceForm)
