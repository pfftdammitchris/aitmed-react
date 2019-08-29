import React from 'react'
import { Field } from 'react-final-form'
import SignatureCanvas from '../../components/finalForm/SignatureCanvas'
import OutlinedTextField from '../../components/finalForm/OutlinedTextField'
import Typography from '../../components/Typography'
import { parsePhone } from '../../utils/finalForm'

const DWC_1_Employee = ({ name, signatureRef }: any) => (
  <>
    <Typography variant="h6" gutterBottom>
      Employer
    </Typography>
    <Field
      label="Name"
      name={`${name}.name`}
      component={OutlinedTextField}
      fullWidth
    />
    <Field
      label="Address"
      name={`${name}.address`}
      component={OutlinedTextField}
      fullWidth
    />
    <Field
      type="date"
      label="Date first known of injury"
      name={`${name}.dateNoticedInjury`}
      component={OutlinedTextField}
      fullWidth
    />
    <Field
      type="date"
      label="Date when claim form was provided to employee"
      name={`${name}.dateClaimFormProvidedToEmployee`}
      component={OutlinedTextField}
      fullWidth
    />
    <Field
      type="date"
      label="Date when employer received claim form"
      name={`${name}.dateReceivedClaimForm`}
      component={OutlinedTextField}
      fullWidth
    />
    <Field
      label="Name of insurance carrier/adjusting agency"
      name={`${name}.insurance.name`}
      component={OutlinedTextField}
      fullWidth
    />
    <Field
      label="Address of insurance carrier/adjusting agency"
      name={`${name}.insurance.address`}
      component={OutlinedTextField}
      fullWidth
    />
    <Field
      label="Insurance policy number"
      name={`${name}.insurance.policyNumber`}
      component={OutlinedTextField}
      fullWidth
    />
    <Field
      label="Title"
      name={`${name}.title`}
      component={OutlinedTextField}
      fullWidth
    />
    <Field
      label="Phone"
      type="phone"
      parse={parsePhone}
      name={`${name}.phone`}
      component={OutlinedTextField}
      fullWidth
    />
    <Field
      // @ts-ignore
      component={SignatureCanvas}
      name={`${name}.signature`}
      signatureLabel="Signature of employer representative"
      signatureRef={signatureRef}
    />
  </>
)

export default DWC_1_Employee
