import React from 'react'
import { Field } from 'react-final-form'
import { parsePhone } from '../../utils'
import Flex from '../../components/Flex'
import OutlinedTextField from '../../components/finalForm/OutlinedTextField'
import SignatureCanvas from '../../components/finalForm/SignatureCanvas'

interface RFA_UROResponseProps {
  name: 'uroResponse'
  textfield: React.FC<any>
  checkbox: React.FC<any>
  signatureRef: any
}

const RFA_UROResponse: React.FC<RFA_UROResponseProps> = ({
  name,
  textfield: WrappedOutlinedTextField,
  checkbox: WrappedCheckbox,
  signatureRef,
}: any) => (
  <>
    <Field
      component={WrappedCheckbox}
      type="checkbox"
      label="Approved"
      name="uroResponse.approved"
    />
    <Field
      component={WrappedCheckbox}
      type="checkbox"
      label="Denied or Modified"
      name="uroResponse.deniedOrModified"
    />
    <Field
      component={WrappedCheckbox}
      type="checkbox"
      label="Delay (See separate notification of delay)"
      name="uroResponse.delay"
    />
    <Field
      component={WrappedCheckbox}
      type="checkbox"
      label="Requested treatment has been previously denied"
      name="uroResponse.treatmentPreviouslyDenied"
    />
    <Field
      component={WrappedCheckbox}
      type="checkbox"
      label="Liability for treatment is disputed (See separate letter)"
      name="uroResponse.liabilityForTreatmentDisputed"
    />
    <br />
    <Flex xsBlock>
      <Field
        label="Authorization Number (if assigned)"
        name={`${name}.authorizationNumber`}
        component={WrappedOutlinedTextField}
        wrapperProps={{ marginRight: 3 }}
        fullWidth
      />
      <Field
        label="Authorized Agent Name"
        name={`${name}.authorizedAgentName`}
        component={WrappedOutlinedTextField}
        fullWidth
      />
    </Flex>
    <Flex>
      <Field
        label="Phone"
        parse={parsePhone}
        name={`${name}.phone`}
        component={WrappedOutlinedTextField}
        wrapperProps={{ marginRight: 3 }}
        fullWidth
      />
      <Field
        label="Fax"
        parse={parsePhone}
        name={`${name}.fax`}
        component={WrappedOutlinedTextField}
        fullWidth
      />
    </Flex>
    <Flex>
      <Field
        type="date"
        label="Date"
        name={`${name}.date`}
        component={OutlinedTextField}
        wrapperProps={{ marginRight: 3 }}
        fullWidth
      />
      <Field
        type="email"
        label="Email"
        name={`${name}.email`}
        component={WrappedOutlinedTextField}
        fullWidth
      />
    </Flex>
    <Field
      // @ts-ignore
      component={SignatureCanvas}
      name={`${name}.signed`}
      signatureLabel="Requesting Physicians Signature"
      signatureRef={signatureRef}
    />
    <br />
    <Field
      label="Comments"
      name={`${name}.comments`}
      component={WrappedOutlinedTextField}
      rows={4}
      rowsMax={5}
      multiline
      fullWidth
    />
  </>
)

export default RFA_UROResponse
