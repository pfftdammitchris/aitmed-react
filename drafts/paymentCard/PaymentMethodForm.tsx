/*
  RE-USABLE UI
    To use:
      - Pass in initial values if needed. Fields will be populated automatically. If a field
          is not included in initialValues it will be empty.
      - Pass in onSubmit. It will be called with the values the user filled in
      - Pass in "submitting" to provide your own loading state
      - Pass in "submittingText" to provide your own loading text
*/
import React from 'react'
import { Form, Field } from 'react-final-form/dist'
import { makeStyles } from '@material-ui/styles'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import Fade from '@material-ui/core/Fade'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import teal from '@material-ui/core/colors/teal'
import Cards from 'react-credit-cards'
import LoadingSpinner from 'components/LoadingSpinner'
import Typography from 'components/Typography'
import useCreditCard from './useCreditCard'
import { months, years, states } from './paymentUtils'
import 'react-credit-cards/es/styles-compiled.css'
import * as T from './types'

const useStyles = makeStyles((theme: any) => ({
  buttonContainer: {
    marginTop: '25px',
  },
  sectionLabel: {
    margin: '12px 0',
  },
  cssLabel: {
    '&$cssFocused': {
      color: teal[400],
    },
  },
  cssFocused: {},
  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: teal[400],
    },
  },
  notchedOutline: {},
  saveButton: {
    background: theme.palette.primary.main,
    color: '#fff',
  },
  cardContainer: {
    width: '100%',
    overflowX: 'auto',
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  input: {
    background: '#fff',
    margin: 0,
    marginBottom: 10,
  },
}))

const PatientPortalPaymentMethodForm: React.FC<T.PaymentMethodFormProps> = ({
  initialValues,
  onSubmit,
  submitting,
  submittingText = '',
  midLabel = '', // Provided for convenience to render something between the card image and the form because it looks better
  ...otherProps
}) => {
  const classes: any = useStyles()
  const { parse, getCardProps, getActive } = useCreditCard()

  const renderTextField: React.FC<any> = ({
    label,
    input: { name, value, onChange, onBlur, onFocus },
    meta: { touched, error },
    ...props
  }) => {
    return (
      <TextField
        InputLabelProps={{
          classes: {
            root: classes.cssLabel,
            focused: classes.cssFocused,
          },
        }}
        InputProps={{
          classes: {
            root: classes.cssOutlinedInput,
            focused: classes.cssFocused,
            notchedOutline: classes.notchedOutline,
          },
        }}
        classes={{ root: classes.input }}
        label={label}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        variant="outlined"
        type="text"
        required
        error={touched && !!error}
        helperText={touched && error}
        fullWidth
        margin="normal"
        {...props}
      />
    )
  }

  const renderSelect: React.FC<any> = ({
    label,
    input: { name, value, onChange, onBlur, onFocus },
    meta: { touched, error },
    items,
    ...props
  }) => (
    <TextField
      classes={{ root: classes.input }}
      select
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
      error={touched && !!error}
      helperText={touched && error}
      variant="outlined"
      fullWidth
      required
      {...props}
    >
      {items &&
        items.map((item: any, index: number) => {
          const isObj = (i: any) => typeof i === 'object'
          const _value = isObj(item) ? item.value : item
          const _label = isObj(item) ? item.label : item
          return (
            <MenuItem key={`${value}${index}_select`} value={_value}>
              {_label}
            </MenuItem>
          )
        })}
    </TextField>
  )

  return (
    <Form
      keepDirtyOnReinitialize
      initialValues={initialValues}
      onSubmit={onSubmit}
      {...otherProps}
      render={({ handleSubmit, submitting: _submitting, values, active }) => {
        // Allow for the parent to pass in their own "submitting" state
        const isSubmitting =
          typeof submitting === 'boolean' ? submitting : _submitting

        return (
          <>
            <Fade timeout={450} in>
              <form
                id="payment_information_form"
                className={classes.form}
                onSubmit={handleSubmit}
              >
                {isSubmitting && (
                  <LoadingSpinner fullscreen loading>
                    {submittingText || 'Submitting...'}
                  </LoadingSpinner>
                )}
                <div className={classes.cardContainer}>
                  <Cards
                    {...getCardProps(values)}
                    focused={getActive(active)}
                  />
                </div>
                {midLabel}
                <Field
                  label="Card Number"
                  name="card_number"
                  parse={parse}
                  render={renderTextField}
                />
                <Field
                  label="Month"
                  name="month"
                  items={months}
                  render={renderSelect}
                />
                <Field
                  label="Year"
                  name="year"
                  items={years}
                  render={renderSelect}
                />
                <Field
                  label="CVV"
                  name="cvv_code"
                  type="number"
                  parse={parse}
                  render={renderTextField}
                />
                <Typography
                  className={classes.sectionLabel}
                  variant="h5"
                  secondary
                >
                  Billing Information
                </Typography>
                <Field
                  name="billing_first_name"
                  label="First Name"
                  render={renderTextField}
                />
                <Field
                  name="billing_last_name"
                  label="Last Name"
                  render={renderTextField}
                />
                <Field
                  name="billing_address"
                  label="Address"
                  render={renderTextField}
                />
                <Field
                  name="billing_city"
                  label="City"
                  render={renderTextField}
                />
                <Field
                  label="State"
                  name="billing_state"
                  items={states}
                  render={renderSelect}
                />
                <Field
                  label="Zip"
                  name="billing_zip_code"
                  type="number"
                  parse={parse}
                  render={renderTextField}
                />
                <Grid
                  className={classes.buttonContainer}
                  container
                  direction="column"
                  alignItems="center"
                  justify="center"
                >
                  <Grid xs={12} item>
                    <Button
                      type="submit"
                      className={classes.saveButton}
                      size="large"
                      variant="contained"
                      disabled={submitting}
                    >
                      Save
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Fade>
          </>
        )
      }}
    />
  )
}

export default PatientPortalPaymentMethodForm
