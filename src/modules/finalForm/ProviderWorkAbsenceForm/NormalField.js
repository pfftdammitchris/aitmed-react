import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import Typography from '../../../components/common/Typography'

const styles = (theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      display: 'block',
    },
    '& input': {
      [theme.breakpoints.down('xs')]: {
        fontSize: '0.8rem',
      },
    },
  },
  label: {
    minWidth: 120,
    [theme.breakpoints.down('xs')]: {
      minWidth: 'auto',
      width: '100%',
      display: 'block',
    },
  },
  colon: {
    marginRight: 15,
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
})

const ProviderDrawerWorkAbsenceNormalField = ({ classes, style, ...props }) => (
  <div style={style} className={classes.root}>
    <Typography className={classes.label} variant="subtitle2">
      {props.label}
    </Typography>
    <Typography className={classes.colon} variant="subtitle2">
      :
    </Typography>
    {props.children}
  </div>
)

ProviderDrawerWorkAbsenceNormalField.propTypes = {
  classes: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  style: PropTypes.object,
  children: PropTypes.node,
}

export default withStyles(styles)(ProviderDrawerWorkAbsenceNormalField)
