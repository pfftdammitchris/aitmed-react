import React from 'react'
import cx from 'classnames'
import Input from '@material-ui/core/Input'
import withStyles from '@material-ui/core/styles/withStyles'
import InputLabel from '@material-ui/core/InputLabel'
import Typography from 'components/typography'

const styles = (theme) => ({
  container: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },
  label: {
    color: theme.palette.text.soft,
    fontSize: '0.8em',
  },
  input: {
    padding: 10,
    borderRadius: 10,
    marginTop: 6,
    marginBottom: theme.spacing.unit,
    border: `1px solid ${theme.palette.borders.cloudiest2}`,
    color: '#666',
    fontSize: '0.9em',
    boxSizing: 'content-box',
    boxShadow: '0 1px 5px rgba(150, 150, 150, 0.2)',
    '&:hover': {
      border: `1px solid ${theme.palette.borders.slightlyDark}`,
    },
  },
  requiredStar: {
    color: theme.palette.error.main,
    position: 'absolute',
    left: -13,
  },
  errorText: {
    position: 'relative',
    top: -6,
  },
})

/*
  An input that transitions to a react-final-form compatible input if "reduxForm" is true
  Defaults to a regular input
*/

const Cardv2Input = ({
  classes,
  wrapperClassName,
  className,
  reduxForm,
  finalForm = reduxForm,
  label,
  required,
  Input: CustomInput,
  input,
  meta,
  submitting,
  ...otherProps
}) => {
  let props = {}

  if (reduxForm) {
    props = input
  } else {
    props = otherProps
  }

  const inputClasses = {
    root: wrapperClassName,
    input: cx(classes.input, className),
  }

  let InputField = Input

  if (CustomInput) {
    if (CustomInput.inputType === 'select') {
      inputClasses.root = cx(classes.input, className, wrapperClassName)
      delete inputClasses.input
    }
    InputField = CustomInput
  }

  return (
    <>
      <InputLabel className={classes.label}>{label}</InputLabel>
      <div className={classes.container}>
        {required && <span className={classes.requiredStar}>*</span>}
        <InputField
          classes={inputClasses}
          margin="dense"
          fullWidth
          disableUnderline
          {...otherProps}
          {...props}
        />
      </div>
      {meta && meta.touched && meta.error && (
        <Typography className={classes.errorText} variant="caption" error>
          {meta.error}
        </Typography>
      )}
    </>
  )
}

// Cardv2Input.propTypes = {
//   classes: PropTypes.object.isRequired,
//   wrapperClassName: PropTypes.string,
//   className: PropTypes.string,
//   reduxForm: PropTypes.bool,
//   finalForm: PropTypes.bool,
//   submitting: PropTypes.bool,
//   label: PropTypes.string,
//   required: PropTypes.bool,
//   input: PropTypes.object, // convenience for reduxForm
//   meta: PropTypes.object, // convenience for reduxForm
//   Input: PropTypes.func, // convenience for overwriting the input field
// }

export default withStyles(styles)(Cardv2Input)
