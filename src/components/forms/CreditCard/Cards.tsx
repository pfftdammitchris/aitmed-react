import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Cards from 'react-credit-cards'
import { InitialValues, PaymentCardsAnimationProps } from './types'

const useStyles = makeStyles((theme: any) => ({
  root: {
    width: '100%',
    overflowX: 'auto',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(3),
  },
}))

// For <Cards />
// focused {string}: Focused card field. name|number|expiry|cvc
const getFocusedFieldName = (activeField: string): string => {
  switch (activeField) {
    case 'billing_first_name':
    case 'billing_last_name':
      return 'name'
    case 'card_number':
      return 'number'
    case 'month':
      return 'expiry'
    case 'year':
      return 'expiry'
    case 'cvv_code':
      return 'cvc'
    default:
      return activeField
  }
}

const getCardProps = (values: InitialValues = {}) => {
  const {
    card_number: number = '',
    billing_first_name = '',
    billing_last_name = '',
    month = '',
    year = '',
    cvv_code: cvc = '',
  } = values
  return {
    number,
    name: `${billing_first_name} ${billing_last_name}`,
    expiry: `${month}/${year}`,
    cvc,
  }
}

const PaymentCardsAnimation: React.FC<PaymentCardsAnimationProps> = ({
  activeField = '',
  values,
}) => {
  const classes: any = useStyles()
  return (
    <div className={classes.root}>
      <Cards
        {...getCardProps(values)}
        focused={getFocusedFieldName(activeField)}
      />
    </div>
  )
}

export default PaymentCardsAnimation
