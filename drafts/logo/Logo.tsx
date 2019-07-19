import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'
import Link from 'components/common/Link'
import logo from 'resources/logo_no_bg.png'

const styles = (theme) => ({
  logo: {
    display: 'flex',
    alignItems: 'center',
    width: 46,
  },
})

const Logo = ({ classes, className }) => {
  const onClick = () => {
    window.location.href = '/'
  }
  return (
    <div onClick={onClick}>
      <img
        className={cx(classes.logo, className)}
        title="Artificial Intelligence TeleMedicine"
        alt="Logo"
        src={logo}
      />
    </div>
  )
}

Logo.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
}

export default withStyles(styles)(Logo)
