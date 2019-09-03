import React from 'react'
import isPlainObject from 'lodash/isPlainObject'
import isFunction from 'lodash/isFunction'
import { Form, Field } from 'react-final-form/dist'
import { makeStyles } from '@material-ui/styles'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import LoadingSpinner from '../../LoadingSpinner'
import Typography from '../../Typography'
import { months, states } from '../../../utils/info'
import Cards from './Cards'
import useCreditCard from './useCreditCard'
import MidLabel from './MidLabel'
import { years } from './utils'
import { CreditCardProps } from './types'
import 'react-credit-cards/es/styles-compiled.css'

const useStyles = makeStyles((theme: any) => ({
  buttonContainer: {
    margin: `${theme.spacing(2)}px auto`,
  },
  sectionLabel: {
    margin: '12px 0',
  },
  cssLabel: {
    '&$cssFocused': {
      color: theme.palette.secondary.main,
    },
  },
  cssFocused: {},
  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: theme.palette.secondary.main,
    },
  },
  notchedOutline: {},
  saveButton: {
    background: theme.palette.primary.main,
    color: '#fff',
  },
  input: {
    background: '#fff',
    margin: 0,
    marginBottom: 10,
  },
}))

const CreditCardForm: React.FC<CreditCardProps> = ({
  initialValues,
  onSubmit,
  render,
  submitting,
  submittingText = '',
  midLabel = '', // Provided for convenience to render something between the card image and the form because it looks better
  renderSubmit,
  renderTextField: renderTextFieldProp,
  renderSelectField: renderSelectProp,
  ...otherProps
}) => {
  const classes: any = useStyles()
  const { parse } = useCreditCard()

  const renderTextField: React.FC<any> = ({
    label,
    input,
    meta: { touched, error },
    ...props
  }) => (
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
      variant="outlined"
      error={touched && !!error}
      helperText={touched && error}
      fullWidth
      required
      {...input}
      {...props}
    />
  )

  const renderSelectField: React.FC<any> = ({
    label,
    input,
    meta: { touched, error },
    items,
    ...props
  }) => (
    <TextField
      classes={{ root: classes.input }}
      label={label}
      error={touched && !!error}
      helperText={touched && error}
      variant="outlined"
      fullWidth
      select
      required
      {...input}
      {...props}
    >
      {items &&
        items.map((item: any, index: number) => {
          const isObj = isPlainObject(item)
          const value = isObj ? item.value : item
          const label = isObj ? item.label : item
          return (
            <MenuItem key={`${value}${index}_select`} value={value}>
              {label}
            </MenuItem>
          )
        })}
    </TextField>
  )

  const finalRenderTextField = renderTextFieldProp || renderTextField
  const finalRenderSelectField = renderSelectProp || renderSelectField

  const fields = {
    card_number: {
      label: 'Card Number',
      name: 'card_number',
      render: finalRenderTextField,
      parse,
    },
    month: {
      label: 'Month',
      name: 'month',
      render: finalRenderSelectField,
      items: months,
    },
    year: {
      label: 'Year',
      name: 'year',
      render: finalRenderSelectField,
      items: years,
    },
    cvv: {
      label: 'CVV',
      name: 'cvv_code',
      render: finalRenderTextField,
      type: 'number',
      parse,
    },
    billing_first_name: {
      label: 'First Name',
      name: 'billing_first_name',
      render: finalRenderTextField,
    },
    billing_last_name: {
      label: 'Last Name',
      name: 'billing_last_name',
      render: finalRenderTextField,
    },
    billing_address: {
      label: 'Address',
      name: 'billing_address',
      render: finalRenderTextField,
    },
    billing_city: {
      label: 'City',
      name: 'billing_city',
      render: finalRenderTextField,
    },
    billing_state: {
      label: 'State',
      name: 'billing_state',
      render: finalRenderSelectField,
      items: states,
    },
    billing_zip_code: {
      label: 'Zip',
      name: 'billing_zip_code',
      render: finalRenderTextField,
      type: 'number',
      parse,
    },
  }

  const fieldKeys = [
    'card_number',
    'month',
    'year',
    'cvv_code',
    'billing_first_name',
    'billing_last_name',
    'billing_address',
    'billing_city',
    'billing_state',
    'billing_zip_code',
  ]

  const defaultRenderer = (formApi: any) => {
    const { handleSubmit, submitting: _submitting, active, values } = formApi
    // Allow for the parent to pass in their own "submitting" state
    const isSubmitting = !!submitting || _submitting
    return (
      <form id="aitmed-react-payment-form" onSubmit={handleSubmit}>
        <Cards activeField={active} values={values} />
        {!!midLabel && <MidLabel>{midLabel}</MidLabel>}
        {isSubmitting && (
          <LoadingSpinner margin="16px auto 20px">
            {submittingText || 'Submitting...'}
          </LoadingSpinner>
        )}
        <Field
          label="Card Number"
          name="card_number"
          parse={parse}
          render={finalRenderTextField}
        />
        <Field
          label="Month"
          name="month"
          items={months}
          render={finalRenderSelectField}
        />
        <Field
          label="Year"
          name="year"
          items={years}
          render={finalRenderSelectField}
        />
        <Field
          label="CVV"
          name="cvv_code"
          type="number"
          parse={parse}
          render={finalRenderTextField}
        />
        <Typography className={classes.sectionLabel} variant="h5" secondary>
          Billing Information
        </Typography>
        <Field
          name="billing_first_name"
          label="First Name"
          render={finalRenderTextField}
        />
        <Field
          name="billing_last_name"
          label="Last Name"
          render={finalRenderTextField}
        />
        <Field
          name="billing_address"
          label="Address"
          render={finalRenderTextField}
        />
        <Field name="billing_city" label="City" render={finalRenderTextField} />
        <Field
          label="State"
          name="billing_state"
          items={states}
          render={finalRenderSelectField}
        />
        <Field
          label="Zip"
          name="billing_zip_code"
          type="number"
          parse={parse}
          render={finalRenderTextField}
        />

        {isFunction(renderSubmit) ? (
          renderSubmit && renderSubmit(formApi)
        ) : (
          <Grid
            className={classes.buttonContainer}
            direction="column"
            alignItems="center"
            justify="center"
            container
          >
            <Grid xs={12} item>
              <Button
                type="submit"
                className={classes.saveButton}
                size="large"
                variant="contained"
                disabled={isSubmitting}
              >
                Save
              </Button>
            </Grid>
          </Grid>
        )}
      </form>
    )
  }

  return (
    <Form
      keepDirtyOnReinitialize
      initialValues={initialValues}
      onSubmit={onSubmit}
      subscription={{ submitting: true, active: true, values: true }}
      {...otherProps}
      render={(formApi: any) =>
        isFunction(render)
          ? render({ fields, fieldKeys, formApi, Cards })
          : defaultRenderer(formApi)
      }
    />
  )
}

export default CreditCardForm
