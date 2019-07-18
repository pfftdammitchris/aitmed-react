import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import cx from 'classnames'
import Typography from 'components/common/Typography'

const styles = (theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      display: 'block',
    },
  },
  label: {
    [theme.breakpoints.down('xs')]: {
      marginTop: 10,
    },
  },
  optionsContainer: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 10,
    },
  },
  colon: {
    marginRight: 15,
    [theme.breakpoints.down('lg')]: {
      display: 'none',
    },
  },
  input: {
    [theme.breakpoints.down('xs')]: {},
  },
})

const shouldCheck = ({ inputName, value, option }) => {
  if (inputName === 'from') {
    if (value === 'Work' && option === 'Work') return true
    if (value === 'School' && option === 'School') return true
    const valueIsOther = !['Work', 'School'].includes(value)
    const optionIsOther = !['Work', 'School'].includes(option)
    if (valueIsOther && optionIsOther && value) return true
  } else if (inputName === 'dueTo') {
    if (value === 'Injury' && option === 'Injury') return true
    if (value === 'Illness' && option === 'Illness') return true
    const valueIsOther = !['Injury', 'Illness'].includes(value)
    const optionIsOther = !['Injury', 'Illness'].includes(option)
    if (valueIsOther && optionIsOther && value) return true
  }
  return false
}

const ProviderDrawerWorkAbsenceFromDueToFields = ({
  classes,
  className,
  input,
  label,
  options,
}) => {
  const onInputChange = (e) => input.onChange(e.target.value)
  const optionsWithoutOther = options.filter((opt) => opt !== 'Other')
  const enableTextField = !optionsWithoutOther.includes(input.value)
  // Helps to start the text field with an empty string instead of an awkward "Other" string
  const textFieldValue = input.value === 'Other' ? '' : input.value
  return (
    <div className={cx(className, classes.container)}>
      <Typography
        className={classes.label}
        variant="subtitle2"
        style={{ minWidth: 60 }}
      >
        {label}
      </Typography>
      <Typography className={classes.colon} variant="subtitle2">
        :
      </Typography>
      <div className={classes.optionsContainer}>
        {options.map((option) => (
          <FormControlLabel
            key={option}
            control={
              <input
                type="checkbox"
                data-testid={`${input.name}.${option}`}
                checked={shouldCheck({
                  inputName: input.name,
                  value: input.value,
                  option,
                })}
                onChange={() => input.onChange(option)}
                value={option}
              />
            }
            label={option}
          />
        ))}
      </div>
      <TextField
        id={`${input.name}-input`}
        className={classes.input}
        type="text"
        value={enableTextField ? textFieldValue : ''}
        onChange={onInputChange}
        disabled={!enableTextField}
        fullWidth
      />
    </div>
  )
}

ProviderDrawerWorkAbsenceFromDueToFields.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
}

export default withStyles(styles)(ProviderDrawerWorkAbsenceFromDueToFields)
