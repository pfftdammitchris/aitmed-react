import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import Typography from 'components/common/Typography'
import useAddPayment from './useAddPayment'
import Topbar from '../Me/Topbar'
import PaymentMethodForm from './PaymentMethodForm'
import { AddPaymentProps } from './types'

const styles = (theme: any) => ({
  formContainer: {
    overflow: 'auto',
    padding: '20px',
    width: '100%',
    height: `calc(100% - ${theme.spacing.unit * 10}px)`,
  },
})

const PatientPortalAddPayment: React.FC<AddPaymentProps> = ({ classes }) => {
  const {
    addPaymentProfile,
    creating,
    created,
    createError,
    creatingTimedOut,
  } = useAddPayment()

  return (
    <>
      <Topbar title="Add a payment method" />
      <Typography variant="caption" center paragraph>
        {creating && 'Creating...'}
        {created && 'Your payment profile has been created'}
        {createError &&
          (createError.message ||
            'An error occurred while trying to create your payment method.')}
        {creatingTimedOut &&
          'We could not get a response. The creation was timed out.'}
      </Typography>
      <div className={classes.formContainer}>
        <PaymentMethodForm
          onSubmit={addPaymentProfile}
          submitting={creating}
          submittingText="Creating your payment profile..."
        />
      </div>
    </>
  )
}

export default withStyles(styles)(PatientPortalAddPayment)
