// UNDER CONSTRUCTION
import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@material-ui/core'
import cx from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'

const styles = (theme) => ({
  root: {
    fontSize: '0.9em',
    textDecoration: 'none',
    fontFamily: 'Roboto, sans-serif',
    transition: 'all 0.3s ease-out',
    color: `${theme.palette.secondary.main}`,
    '&:hover': {
      color: `${theme.palette.link.hovering}`,
    },
  },
  secondaryHover: {
    color: '#fff',
    '&:hover': {
      color: `${theme.palette.link.hoveringOnSecondary} !important`,
    },
  },
  onSecondaryBackground: {
    color: '#fff !important',
    '&:hover': {
      color: `${theme.palette.link.hovering} !important`,
    },
  },
})

const LinkWrapper = ({
  classes,
  className,
  to,
  style,
  color,
  fontSize,
  secondaryHover,
  onSecondaryBackground,
  ...rest
}) => {
  const Ahref = (props) => <a target="_blank" {...props} />
  const GatsbyLink = (props) => <Link {...props} />

  let LinkComponent
  const linkProps = { style: { fontSize } }

  const isOutsideLink = /^(http)(s?):\/\//.test(to)
  const isLocalLink = !isOutsideLink

  if (isLocalLink) {
    LinkComponent = GatsbyLink
    linkProps.to = to
    if (!/^(\/)/i.test(to)) linkProps.to = `/${to}`
  } else if (isOutsideLink) {
    LinkComponent = Ahref
    linkProps.href = to
    linkProps.target = '_blank'
    linkProps.rel = 'noopener'
    linkProps.rel = 'noreferrer'
  }

  return (
    <Typography
      className={cx(classes.root, {
        [className]: !!className,
        [classes.secondaryHover]: !!secondaryHover,
        [classes.onSecondaryBackground]: !!onSecondaryBackground,
      })}
      style={{
        ...style,
        color,
      }}
      {...linkProps}
      {...rest}
    />
  )
}

LinkWrapper.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  to: PropTypes.string.isRequired,
  color: PropTypes.string,
  secondaryHover: PropTypes.bool,
  onSecondaryBackground: PropTypes.bool,
}

export default withStyles(styles)(LinkWrapper)
