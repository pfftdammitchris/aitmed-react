import React from 'react'
import { Field } from 'react-final-form'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import SignatureCanvas from 'components/common/SignatureCanvas'

const ProviderWorkAbsenceFooterAndSignature = ({
  signatureRef,
  signatureInputRef,
  clearSignature,
  validateSignature,
  signatureClassName,
}) => {
  return (
    <Grid
      style={{ margin: '5px 0' }}
      spacing={0}
      container
      direction="row"
      justify="flex-end"
      alignItems="center"
    >
      <Grid xs={12} sm={6} item>
        <Field
          classNames={{ canvasContainer: signatureClassName }}
          component={SignatureCanvas}
          name="signed"
          signatureRef={signatureRef}
          signatureInputRef={signatureInputRef}
          clearSignature={clearSignature}
          validate={validateSignature}
          hideClear
        />
      </Grid>
    </Grid>
  )
}

ProviderWorkAbsenceFooterAndSignature.propTypes = {
  signatureRef: PropTypes.object.isRequired,
  signatureInputRef: PropTypes.object.isRequired,
  clearSignature: PropTypes.func.isRequired,
  validateSignature: PropTypes.func.isRequired,
  signatureClassName: PropTypes.string.isRequired,
}

export default ProviderWorkAbsenceFooterAndSignature
