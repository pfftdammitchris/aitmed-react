import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import { Field } from 'react-final-form'
import Typography from 'components/common/Typography'
import Icon from 'static/img/rx.png'
import shouldUpdate from 'util/shouldUpdate'

const styles = (theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      display: 'block',
    },
  },
  rxLogo: {
    width: 50,
    height: 45,
    borderRadius: '50%',
    margin: 12,
  },
  fieldsContainer: {},
  fieldLabel: {
    fontWeight: 500,
    minWidth: 130,
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.8rem',
    },
    [theme.breakpoints.down('xs')]: {
      minWidth: 100,
      fontSize: '0.6rem',
    },
  },
  staticFieldLabel: {
    fontWeight: 500,
    width: '100%',
    maxWidth: 50,
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.8rem',
      minWidth: 65,
    },
    [theme.breakpoints.down('xs')]: {
      minWidth: 100,
      fontSize: '0.6rem',
    },
  },
  staticFields: {
    display: 'flex',
    flexDirection: 'column',
  },
  staticFieldWrapper: {
    margin: '0 6px',
    height: 40,
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      height: 25,
    },
  },
  staticFieldValueWrapper: {
    width: '100%',
    marginLeft: 6,
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.8rem',
    },
  },
  staticFieldTextValue: {
    opacity: 0.76,
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.8rem',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.6rem',
    },
  },
  controlledTextfieldWrapper: {
    margin: '0 6px',
    height: 40,
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      height: 25,
    },
  },
  controlledTextField: {
    [theme.breakpoints.down('sm')]: {
      '& input': {
        fontSize: '0.8rem',
      },
    },
    [theme.breakpoints.down('xs')]: {
      '& input': {
        fontSize: '0.6rem',
      },
    },
  },
})

const RxField = ({ classes, input }) => {
  const FieldLabel = (props) => (
    <Typography className={classes.fieldLabel} {...props} />
  )
  const StaticField = ({ label, children }) => (
    <div className={classes.staticFieldWrapper}>
      <FieldLabel className={classes.staticFieldLabel}>{label}</FieldLabel>
      <div className={classes.staticFieldValueWrapper}>{children}</div>
    </div>
  )

  const staticFields = (
    <Grid className={classes.staticFields} xs={12} sm={4} item>
      <StaticField label="Date: ">
        <Field
          name={`${input.name}.date`}
          component={({ input }) => (
            <Typography className={classes.staticFieldTextValue}>
              {input.value}
            </Typography>
          )}
        />
      </StaticField>
      <StaticField label="Name: ">
        <Field
          name={`${input.name}.name`}
          component={({ input }) => (
            <Typography className={classes.staticFieldTextValue}>
              {input.value}
            </Typography>
          )}
        />
      </StaticField>
      <StaticField label="DOB: ">
        <Field
          name={`${input.name}.dateOfBirth`}
          component={({ input }) => (
            <Typography className={classes.staticFieldTextValue}>
              {/*input.value*/}{' '}
            </Typography>
          )}
        />
      </StaticField>
    </Grid>
  )

  const ControlledTextField = ({ input: _input, label }) => (
    <div className={classes.controlledTextfieldWrapper}>
      <FieldLabel>{label}</FieldLabel>
      <TextField
        className={classes.controlledTextField}
        type="text"
        fullWidth
        onChange={_input.onChange}
        value={
          _input.value
          // _input.value === 'undefined'
          //   ? ''
          //   : _input.name === 'rx.email'
          //   ? ''
          //   : _input.value
        }
      />
    </div>
  )

  const textFields = (
    <Grid xs={12} sm={8} item>
      <Field
        name={`${input.name}.address1`}
        render={({ input: _input }) => (
          <ControlledTextField
            label="Address"
            input={{
              ..._input,
              value: '',
            }}
          />
        )}
      />
      <Field
        name={`${input.name}.primary_phone_number`}
        render={({ input: _input }) => (
          <ControlledTextField label="Phone Number" input={_input} />
        )}
      />
      <Field
        name={`${input.name}.email`}
        render={({ input: _input }) => (
          <ControlledTextField label="Email Address" input={_input} />
        )}
      />
    </Grid>
  )

  return (
    <div className={classes.root}>
      <img src={Icon} className={classes.rxLogo} />
      <Grid className={classes.fieldsContainer} container>
        {staticFields}
        {textFields}
      </Grid>
    </div>
  )
}

RxField.propTypes = {
  classes: PropTypes.object.isRequired,
  input: PropTypes.object.isRequired,
}

export default shouldUpdate((prevProps, nextProps) => {
  if (prevProps.input.value !== nextProps.input.value) {
    return true
  }
  if (prevProps.meta.touched !== nextProps.meta.touched) {
    return true
  }
  if (prevProps.meta.error !== nextProps.meta.error) {
    return true
  }
  return false
})(withStyles(styles)(RxField))
