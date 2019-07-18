import React from 'react'
import PropTypes from 'prop-types'
import Input from '@material-ui/core/Input'
import { Field } from 'react-final-form'
import withStyles from '@material-ui/core/styles/withStyles'
import Typography from '@material-ui/core/Typography'

const MyTypography = withStyles((theme) => ({
  typography: {
    fontSize: '0.9em',
    color: '#666',
    minHeight: theme.spacing.unit * 5,
    marginBottom: theme.spacing.unit,
  },
}))(({ classes, children }) => (
  <Typography className={classes.typography} align="left">
    {children}
  </Typography>
))

const styles = (theme) => ({
  hover: {
    '&:hover': {
      background: theme.palette.background.lightGrey2,
    },
  },
  input: {
    fontSize: '0.8rem',
  },
})

const ProviderDrawerSummaryMultilineField = ({
  classes,
  name,
  label,
  sublabel,
  ...fieldProps
}) => (
  <>
    <Typography variant="subtitle2" fontWeight={600}>
      {label}
    </Typography>
    {sublabel && <Typography variant="caption">{sublabel}</Typography>}
    <Field
      name={name}
      render={({ input, meta }) => <MyTypography>{input.value}</MyTypography>}
    />
  </>
)

ProviderDrawerSummaryMultilineField.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ProviderDrawerSummaryMultilineField)
