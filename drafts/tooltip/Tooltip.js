import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'
import { MdFiberManualRecord, MdInfo } from 'react-icons/md'
import MaterialUITooltip from '@material-ui/core/Tooltip'
import Fade from '@material-ui/core/Fade'

const styles = (theme) => ({
  root: {
    padding: 10,
  },
  bullet: {
    transform: 'scale(1.2) translateY(1px)',
    color: theme.palette.thirdary.light,
  },
  primary: {
    backgroundColor: theme.palette.primary.main,
  },
  secondary: {
    backgroundColor: theme.palette.secondary.main,
  },
  thirdary: {
    backgroundColor: theme.palette.thirdary.main,
  },
  darkAdmin: {
    backgroundColor: theme.palette.background.darkAdminDarkerShade,
    border: `1px solid ${theme.palette.secondary.dark}`,
  },
})

const Tooltip = ({
  classes,
  className,
  classNames = {},
  children,
  tooltip,
  placement = 'top',
  render,
  minWidth,
  style,
  primary,
  secondary,
  thirdary,
  darkAdmin,
  ...otherProps
}) => {
  const renderProps = {
    Bullet: (props) => (
      <MdFiberManualRecord className={classes.bullet} {...props} />
    ),
    InfoIcon: MdInfo,
  }

  return (
    <MaterialUITooltip
      classes={{
        tooltip: cx(classes.tooltip, className, classNames.tooltip, {
          [classes.primary]: !!primary,
          [classes.secondary]: !!secondary,
          [classes.thirdary]: !!thirdary,
          [classes.darkAdmin]: !!darkAdmin,
        }),
      }}
      TransitionComponent={Fade}
      placement={placement}
      title={typeof tooltip === 'function' ? tooltip(renderProps) : tooltip}
      style={{ minWidth, ...style }}
      {...otherProps}
    >
      <div className={classNames.content}>
        {render && render(renderProps)}
        {children && typeof children === 'function'
          ? children(renderProps)
          : children}
      </div>
    </MaterialUITooltip>
  )
}

Tooltip.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  classNames: PropTypes.shape({
    tooltip: PropTypes.string,
    content: PropTypes.string,
  }),
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  render: PropTypes.func,
  tooltip: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  placement: PropTypes.string,
  minWidth: PropTypes.number,
  style: PropTypes.object,
}

export default withStyles(styles)(Tooltip)
