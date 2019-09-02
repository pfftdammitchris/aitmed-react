import React from 'react'
import Input from '@material-ui/core/Input'
import FormControl from '@material-ui/core/FormControl'
import withStyles from '@material-ui/core/styles/withStyles'
import Typography from '../../../components/common/Typography'

const styles = (theme) => ({
  root: {
    marginBottom: 15,
    [theme.breakpoints.down('xs')]: {
      marginBottom: 6,
    },
  },
  formControl: {
    borderRadius: 8,
    border: `1px solid ${theme.palette.borders.cloudiest}`,
    background: theme.palette.background.lightGrey2,
    '& label': {
      marginBottom: `${theme.spacing.unit * 3}px !important`,
    },
    '& input, textarea': {
      padding: '6px 0',
    },
    '&:hover': {
      background: theme.palette.background.light,
      border: `1px solid ${theme.palette.borders.slightyDark}`,
    },
  },
  label: {
    marginBottom: theme.spacing.unit,
  },
})

const ProviderMeetingNotesInput = ({
  classes,
  marginBottom,
  required,
  label,
  input,
  wrapperClassName,
  labelClassName,
  margin,
  meta: { touched, error, warning },
  ...others
}) => (
  <div className={classes.root}>
    <Typography className={classes.label} variant="subtitle1" darkBlue>
      {label}
    </Typography>
    <FormControl className={classes.formControl} fullWidth>
      <div style={{ marginBottom: 15 }}>
        <Input
          style={{ padding: 12 }}
          fullWidth
          multiline
          disableUnderline
          {...input}
          {...others}
        />
        {touched && error && <Typography color="error">{error}</Typography>}
        {touched && warning && (
          <Typography style={{ color: '#c1632f' }}>{warning}</Typography>
        )}
      </div>
    </FormControl>
  </div>
)

export default withStyles(styles)(ProviderMeetingNotesInput)
