import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import PropTypes from 'prop-types'
import { Field } from 'react-final-form/dist'
import { renderQuantityOption, renderBottleRefills } from './fieldRenderers'
import RxInputField from './RxInputField'

const styles = (theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    minHeight: 60,
    [theme.breakpoints.down('xs')]: {
      display: 'block',
    },
    '& $checkbox': {
      marginLeft: 0,
      padding: 0,
      color: theme.palette.text.soft,
      display: 'inline-block',
      '& svg': {
        width: 18,
        height: 18,
      },
    },
  },
  name: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '15px 5px',
    borderRight: `2px solid ${theme.palette.text.soft}`,
    borderBottom: `2px solid ${theme.palette.text.soft}`,
    [theme.breakpoints.down('xs')]: {
      borderLeft: `2px solid ${theme.palette.text.soft}`,
    },
    minWidth: '55%',
  },
  checkbox: {},
  meta: {
    maxWidth: '40%',
    padding: '5px 10px',
    borderRight: `2px solid ${theme.palette.text.soft}`,
    borderBottom: `2px solid ${theme.palette.text.soft}`,
    [theme.breakpoints.down('xs')]: {
      borderLeft: `2px solid ${theme.palette.text.soft}`,
    },
    flexWrap: 'wrap',
    [theme.breakpoints.down('lg')]: {
      maxWidth: '100%',
      display: 'flex',
    },
    '& $quantityField': {
      padding: 0,
      '& $quantityLabel': {
        fontSize: '1em',
      },
    },
    '& $quantityFormControl': {
      position: 'relative',
      left: 18,
    },
    '& $refills': {
      padding: 0,
      [theme.breakpoints.down('xs')]: {},
      '& $refillsLabel': {
        fontSize: '1em',
      },
      '& $refillsCheckboxesContainerClassName': {
        paddingLeft: 3,
        fontSize: '0.85rem',
      },
    },
  },
  quantityField: {},
  quantityFormControl: {},
  quantityLabel: {},
  refills: {},
  refillsLabel: {},
  refillsCheckboxesContainerClassName: {},
  actions: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottom: `2px solid ${theme.palette.text.soft}`,
    [theme.breakpoints.down('xs')]: {
      borderLeft: `2px solid ${theme.palette.text.soft}`,
      borderRight: `2px solid ${theme.palette.text.soft}`,
    },
    padding: 1,
    flexBasis: '4%',
    '& $deleteIcon': {
      opacity: 0.5,
      display: 'block',
      margin: 'auto',
      textAlign: 'center',
      cursor: 'pointer',
      '&:hover': {
        opacity: 1,
        background: theme.palette.thirdary.main,
        color: '#fff',
      },
    },
  },
  deleteIcon: {},
})

const BottleField = ({ classes, input, index, destroy }) => {
  const quantities = ['1-24', '25-50', '51-71', '75-100', '100-150', '150+']

  return (
    <div id={`bottle-field${index}`} className={classes.root}>
      <Field
        name={`${input.name}.name`}
        index={index}
        render={({ input, meta, ...otherProps }) => (
          <Typography variant="h6" component="div" className={classes.name}>
            <span style={{ marginRight: 10 }}>{index + 1})</span>
            <TextField multiline {...input} {...otherProps} fullWidth />
          </Typography>
        )}
      />
      <div className={classes.meta}>
        <Typography variant="subtitle2" component="div">
          <span style={{ fontSize: '0.9em' }}>Quantity: </span>
          <Field
            name={`${input.name}.quantity`}
            component={renderQuantityOption}
            options={quantities}
            className={classes.quantityField}
            checkboxClassName={classes.checkbox}
            labelClassName={classes.quantityLabel}
            formControlClassName={classes.quantityFormControl}
          />
        </Typography>
        <Field
          component={renderBottleRefills}
          name={`${input.name}.refills`}
          className={classes.refills}
          checkboxClassName={classes.checkbox}
          checkboxesContainerClassName={
            classes.refillsCheckboxesContainerClassName
          }
          labelClassName={classes.refillsLabel}
        />
      </div>
      <div className={classes.actions}>
        <Typography
          title="Remove prescription bottle"
          onClick={() => destroy(index)}
          className={classes.deleteIcon}
        >
          X
        </Typography>
      </div>
    </div>
  )
}

BottleField.propTypes = {
  classes: PropTypes.object.isRequired,
  input: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  destroy: PropTypes.func.isRequired,
}

export function renderBottleName({ index, className }) {
  return (
    <Typography variant="h6" component="div" className={className}>
      <span style={{ marginRight: 10 }}>{index + 1})</span>
      <RxInputField index={index} />
    </Typography>
  )
}

export default withStyles(styles)(React.memo(BottleField))
