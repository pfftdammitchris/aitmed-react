import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import Typography from 'components/common/Typography'
import Link from 'components/common/Link'
import useUpdatePayment from './useUpdatePayment'
import Topbar from '../Me/Topbar'
import PaymentMethodForm from './PaymentMethodForm'
import { UpdatePaymentProps } from './types'
import amexCard from 'static/img/amex_card.png'
import dinersCard from 'static/img/diners_card.png'
import discoverCard from 'static/img/discover_card.png'
import jcbCard from 'static/img/jcb_card.png'
import masterCard from 'static/img/master_card.png'
import visaCard from 'static/img/visa_card.png'
import defaultCard from 'static/img/default_card.png'

const styles = (theme: any) => ({
  formContainer: {
    overflow: 'auto',
    padding: '20px',
    width: '100%',
    height: `calc(100% - ${theme.spacing.unit * 10}px)`,
  },
  cardInfoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardIcon: {
    width: '60px',
    height: '50px',
    marginRight: 10,
  },
})
const getCardIcon = (type) => {
  switch (type) {
    case 'Amex':
      return amexCard

    case 'DinersClub':
      return dinersCard

    case 'Discover':
      return discoverCard

    case 'JCB':
      return jcbCard

    case 'MasterCard':
      return masterCard

    case 'Visa':
      return visaCard

    default:
      return defaultCard
  }
}
const PatientPortalUpdatePayment: React.FC<UpdatePaymentProps> = ({
  classes,
  children,
  id,
  location,
}) => {
  const {
    attempts,
    paymentProfileBeingEdited,
    updatePaymentProfile,
    updating,
    updated,
    updateError,
    updatingTimedOut,
  } = useUpdatePayment({ id, location })

  let errMsg =
    'An error occurred while trying to update your payment method. Please try again.'
  if (updateError) {
    if (updateError.message) errMsg = updateError.message
    if (updateError.response && updateError.response.status == 400) {
      errMsg =
        'An error occurred while trying to update your payment method. Please try again.'
    }
  }

  return (
    <>
      <Topbar title="Update payment" />
      <div className={classes.formContainer}>
        <PaymentMethodForm
          onSubmit={updatePaymentProfile}
          submitting={updating}
          submittingText="Updating your payment profile..."
          midLabel={
            <>
              <div className={classes.cardInfoContainer}>
                <img
                  src={getCardIcon(paymentProfileBeingEdited.card_type)}
                  className={classes.cardIcon}
                />
                <Typography variant="h6">
                  editing/replacing card ending in{' '}
                  {paymentProfileBeingEdited &&
                    paymentProfileBeingEdited.card_last_digits}
                </Typography>
              </div>
              <Typography variant="h5" error={!!updateError} center paragraph>
                {updating && 'Updating...'}
                {updated && 'Your payment profile has been updated'}
                {updateError && errMsg}
                {updatingTimedOut &&
                  'We could not get a response. The update request was timed out.'}
                {!id &&
                  'We could not retrieve the information for this payment method.'}
              </Typography>
              {attempts > 1 && (
                <Typography variant="h6" error center paragraph>
                  You have attempted {attempts} times to update your payment
                  method information but the update did not go through.
                  <br />
                  Would you like to{' '}
                  <Link to="/portal/patient/me/add-payment">
                    create another payment method
                  </Link>{' '}
                  instead?
                </Typography>
              )}
            </>
          }
        />
      </div>
      {children}
    </>
  )
}

export default withStyles(styles)(PatientPortalUpdatePayment)
