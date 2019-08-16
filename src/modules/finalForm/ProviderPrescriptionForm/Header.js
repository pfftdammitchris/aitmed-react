import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import Typography from 'components/common/Typography'
import onlyUpdateForKeys from 'util/onlyUpdateForKeys'
import logo from 'resources/logo.jpg'

const styles = (theme) => ({
  logoContainer: {
    padding: 8,
    textAlign: 'center',
    height: 60,
    width: 60,
  },
  logo: {
    width: '100%',
    height: '100%',
    border: '1px solid red',
  },
  licenseAndDEA: {
    width: '50%',
    display: 'flex',
    justifyContent: 'space-around',
    margin: 'auto',
  },
  telAndFax: {
    width: '60%',
    display: 'flex',
    justifyContent: 'space-around',
    margin: 'auto',
  },
})

const ProviderPrescriptionHeader = ({
  classes,
  prescriber,
  license,
  DEA,
  address,
  tel,
  email,
  supportEmail,
}) => (
  <>
    <div>
      <div className={classes.logoContainer}>
        <img className={classes.logo} src={logo} alt="" />
      </div>
      <Typography variant="h6" align="center">
        A Telemedicine Company
      </Typography>
      <Typography variant="subtitle2" align="center">
        {address}
      </Typography>
      <Typography variant="subtitle2" align="center">
        www.aitmed.com
      </Typography>
      <Typography variant="h4" align="center" style={{ fontWeight: 600 }}>
        {prescriber}
      </Typography>
    </div>
    <div className={classes.licenseAndDEA}>
      <Typography variant="subtitle2"> LIC # {license}</Typography>
      <Typography variant="subtitle2"> DEA # {DEA}</Typography>
    </div>
    <div className={classes.telAndFax}>
      {/* <Typography variant="subtitle2">
        {' '}
        {'\u2022'} TEL: {tel}
      </Typography> */}
      <Typography variant="subtitle2">
        {' '}
        {'\u2022'} Contact Provider: {email}
      </Typography>
    </div>
    <Typography variant="subtitle2" align="center">
      {' '}
      {'\u2022'} Contact AiTmed: {supportEmail}
    </Typography>
  </>
)

ProviderPrescriptionHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  prescriber: PropTypes.string,
  license: PropTypes.string,
  DEA: PropTypes.string,
  address: PropTypes.string,
  tel: PropTypes.string,
  email: PropTypes.string,
  supportEmail: PropTypes.string,
}

export default onlyUpdateForKeys([
  'prescriber',
  'license',
  'DEA',
  'address',
  'tel',
  'email',
  'supportEmail',
])(withStyles(styles)(ProviderPrescriptionHeader))
