import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import Typography from 'components/common/Typography'
import logo from 'resources/logo12-11-18.png'

const styles = (theme) => ({
  root: {
    '& $logo': {
      padding: 8,
      textAlign: 'center',
      '& img': {
        width: 80,
        height: 80,
      },
    },
  },
  logo: {},
  email: {
    width: '60%',
    display: 'flex',
    justifyContent: 'space-around',
    margin: 'auto',
  },
})

const ProviderDrawerSummaryModal = ({ classes }) => (
  <>
    <div className={classes.root}>
      <div className={classes.logo}>
        <img src={logo} alt="" />
      </div>
      <Typography variant="h6" align="center">
        A Telemedicine Company
      </Typography>
      <Typography variant="subtitle2" align="center">
        www.aitmed.com
      </Typography>
      <Typography variant="subtitle2" align="center">
        1000 S Anaheim Blvd. Suite 208, Anaheim, CA 92805
      </Typography>
    </div>
    <div className={classes.email}>
      <Typography variant="subtitle2" align="center">
        provider@aitmed.com
      </Typography>
    </div>
  </>
)

ProviderDrawerSummaryModal.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ProviderDrawerSummaryModal)
