import React from 'react'
import cx from 'classnames'
import { makeStyles } from '@material-ui/styles'
import FiberManualRecordOutlinedIcon from '@material-ui/icons/FiberManualRecordOutlined'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'
import MaterialUITooltip from '@material-ui/core/Tooltip'
import Fade from '@material-ui/core/Fade'

interface TooltipProps {
  title: React.ReactNode
  children: React.ReactNode
  classes?: any
  className?: string
  placement?:
    | 'bottom-end'
    | 'bottom-start'
    | 'bottom'
    | 'left-end'
    | 'left-start'
    | 'left'
    | 'right-end'
    | 'right-start'
    | 'right'
    | 'top-end'
    | 'top-start'
    | 'top'
  primary?: boolean
  secondary?: boolean
  thirdary?: boolean
  darkAdmin?: boolean
  minWidth?: number | string
  style?: React.CSSProperties
  rootDivProps?: any
  render?: (renderProps: any) => React.ReactNode
}

const useStyles = makeStyles((theme: any) => ({
  root: {
    padding: 10,
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
  bullet: {
    transform: 'scale(1.2) translateY(1px)',
    color: theme.palette.thirdary.light,
  },
}))

function Tooltip({
  classes: classesProp = {},
  className,
  children,
  title,
  placement = 'top',
  primary = false,
  secondary = false,
  thirdary = false,
  darkAdmin = false,
  minWidth,
  style,
  rootDivProps,
  render,
  ...rest
}: TooltipProps) {
  const classes = useStyles()

  const renderProps = {
    Bullet: (props: any) => (
      <FiberManualRecordOutlinedIcon className={classes.bullet} {...props} />
    ),
    InfoIcon: InfoOutlinedIcon,
  }

  return (
    <MaterialUITooltip
      classes={{
        tooltip: cx(classes.root, className, classesProp.tooltip, {
          [classes.primary]: !!primary,
          [classes.secondary]: !!secondary,
          [classes.thirdary]: !!thirdary,
          [classes.darkAdmin]: !!darkAdmin,
        }),
        ...classesProp,
      }}
      TransitionComponent={Fade}
      placement={placement}
      title={title}
      style={{ minWidth, ...style }}
      {...rest}
    >
      <div {...rootDivProps}>
        {typeof render === 'function' ? render(renderProps) : children}
      </div>
    </MaterialUITooltip>
  )
}

export default Tooltip
