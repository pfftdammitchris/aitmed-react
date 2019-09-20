import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { withStyles } from '@material-ui/styles'
import './styles.css'

const styles = (theme) => ({
  root: {
    margin: `${theme.spacing() * 3}px 0`,
    width: '100%',
    height: '100%',
    padding: 12,
    [theme.breakpoints.down('xs')]: {
      padding: 3,
    },
  },
})

const DwollaContainer = ({
  classes,
  className,
  children,
  render,
  hidden,
  ...otherProps
}) => {
  const renderProps = {}

  return (
    <div
      className={cx(classes.root, className)}
      id="iav"
      style={{
        display: hidden ? 'none' : 'auto',
      }}
      {...otherProps}
    >
      {children && typeof children === 'function'
        ? children(renderProps)
        : children}
      {render && render(renderProps)}
    </div>
  )
}

DwollaContainer.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  render: PropTypes.func,
  hidden: PropTypes.bool,
}

export default withStyles(styles)(DwollaContainer)
