import React from 'react'
import makeStyles from '@material-ui/styles/makeStyles'

const useStyles = makeStyles((theme: any) => ({
  root: {
    marginBottom: theme.spacing(3),
  },
}))

const CreditCardFormMidLabel: React.FC<any> = (props) => {
  const classes: any = useStyles()
  return <div className={classes.root} {...props} />
}

export default CreditCardFormMidLabel
