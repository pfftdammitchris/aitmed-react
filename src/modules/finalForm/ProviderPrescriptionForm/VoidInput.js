import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'react-final-form/dist'
import Grid from '@material-ui/core/Grid'
import withStyles from '@material-ui/core/styles/withStyles'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import range from 'lodash/range'
import Typography from '../../../components/common/Typography'

const styles = (theme) => ({
  text: {
    margin: `${theme.spacing.unit * 2}px 0`,
  },
  voidField: {
    width: 50,
  },
})

const validate = (bottles) => (value) => {
  const num = Number(value)
  if (!bottles) {
    return undefined
  } else if (bottles != value) {
    return 'Please choose the correct amount that you are prescribing'
  } else if (typeof value !== 'number') {
    return 'Please choose an answer'
  } else if (bottles.length > num) {
    return `This number cannot be more than ${bottles.length}`
  } else if (bottles.length < num) {
    return `This number cannot be less than ${bottles.length}`
  }
  return undefined
}

const ProviderPortalPrescriptionVoidInput = ({ classes, numBottles }) => {
  const numsArray = range(1, numBottles + 1)

  const header = (
    <Typography className={classes.text} variant="caption">
      Prescription is VOID if the number of drugs prescribed is not noted:{' '}
      {numsArray.map((num, i) => `${num}${i + 1 != numBottles ? ', ' : ''}`)}
    </Typography>
  )

  const renderSelectField = ({ input, meta: { touched, error } }) => (
    <div>
      <Select
        classes={{ root: classes.voidField }}
        variant="outlined"
        {...input}
      >
        {numsArray.map((num, index) => (
          <MenuItem key={`void${index}`} value={num}>
            {num}
          </MenuItem>
        ))}
      </Select>
      {touched && error && (
        <Typography variant="caption" color="error">
          {error}
        </Typography>
      )}
    </div>
  )

  return (
    <Grid container direction="row" alignItems="flex-start" justify="center">
      <Grid item xs={6}>
        {header}
      </Grid>
      <Grid item xs={6}>
        <Field
          validate={validate(numBottles)}
          type="number"
          name="void"
          style={{
            position: 'absolute',
            maxWidth: 160,
            fontWeight: 700,
          }}
          render={renderSelectField}
        />
      </Grid>
    </Grid>
  )
}

ProviderPortalPrescriptionVoidInput.propTypes = {
  classes: PropTypes.object.isRequired,
  numBottles: PropTypes.number,
}

export default withStyles(styles)(ProviderPortalPrescriptionVoidInput)
