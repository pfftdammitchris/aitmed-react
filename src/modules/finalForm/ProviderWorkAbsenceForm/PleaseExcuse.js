import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import Typography from 'components/common/Typography'

const styles = (theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      display: 'block',
    },
    '& p': {
      color: '#333',
      fontStyle: 'italic',
      fontSize: '0.7rem',
    },
  },
  colon: {
    marginRight: 15,
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
})

const ProviderPortalCurrentEncounterWorkAbsencePleaseExcuse = ({
  classes,
  children,
  firstName,
  lastName,
}) => (
  <div className={classes.container}>
    <Typography variant="subtitle2">
      Please excuse {firstName}
      {lastName}
    </Typography>
    <Typography className={classes.colon} variant="subtitle2">
      :
    </Typography>
    {children}
  </div>
)

ProviderPortalCurrentEncounterWorkAbsencePleaseExcuse.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  firstName: PropTypes.node,
  lastName: PropTypes.node,
}

export default withStyles(styles)(
  ProviderPortalCurrentEncounterWorkAbsencePleaseExcuse,
)
