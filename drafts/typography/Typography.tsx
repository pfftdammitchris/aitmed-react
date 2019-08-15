// UNDER CONSTRUCTION
import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Typography from 'components/Typography'
import withStyles from '@material-ui/core/styles/withStyles'
import Divider from '@material-ui/core/Divider'

const styles = (theme) => ({
  h1: {
    fontWeight: 600,
    [theme.breakpoints.down('md')]: {
      fontSize: '4.5em',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '4em',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '2.3em',
    },
  },
  h2: {
    fontWeight: 500,
    [theme.breakpoints.down('md')]: {
      fontSize: '3.3em',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '3em !important',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.4em !important',
    },
  },
  h3: {
    fontWeight: 500,
    [theme.breakpoints.down('md')]: {
      fontSize: '2.8em',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '2.5em ',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.4em',
    },
  },
  h4: {
    fontWeight: 600,
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.8em',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1em',
    },
  },
  h5: {
    fontSize: '2em',
    fontWeight: 500,
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.55em',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.95em',
    },
  },
  h6: {
    fontSize: '1.3em',
    fontWeight: 400,
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.2em',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.85em',
    },
  },
  subtitle1: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.9em',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.75em',
    },
  },
  subtitle2: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.8em',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.7em',
    },
  },
  body1: {
    fontSize: '0.95em',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.82em',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.68em',
    },
  },
  body2: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.73em',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.6em',
    },
  },
  button: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.8em',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.65em',
    },
  },
  caption: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.7em',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.58em',
    },
  },
  subheading: {
    fontSize: '1.3em',
    fontWeight: 300,
    [theme.breakpoints.down('sm')]: {
      fontSize: '1em',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.8em',
    },
  },
  centerOnSmall: {
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
    },
  },
  primary: { color: `${theme.palette.primary.main} !important` },
  secondary: { color: `${theme.palette.secondary.main} !important` },
  thirdary: { color: `${theme.palette.thirdary.main} !important` },
  darkBlue: { color: `${theme.palette.secondary.darker} !important` },
  link: {
    color: theme.palette.link.normal,
    '&:hover': {
      color: theme.palette.link.hovering,
    },
  },
  italic: {
    fontStyle: 'italic',
  },
  unselected: {
    '-webkit-touch-callout': 'none',
    '-webkit-user-select': 'none',
    '-khtml-user-select': 'none',
    '-moz-user-select': 'none',
    '-ms-user-select': 'none',
    'user-select': 'none',
  },
})

const Typography = ({
  classes,
  theme,
  className,
  style,
  white,
  black,
  primary,
  secondary,
  darkBlue,
  thirdary,
  soft,
  inactive,
  error,
  red,
  link,
  variant,
  left,
  center,
  centerOnSmall,
  right,
  margin,
  marginBottom,
  padding,
  divider,
  display,
  fontWeight,
  italic,
  opacity,
  unselected,
  ...props
}) => {
  const customVariants = ['subheading']
  const settledVariant = patchVariant(variant)

  const styles = {}
  if (darkBlue) styles.color = theme.palette.secondary.darker
  if (white) styles.color = '#fff'
  if (black) styles.color = '#000'
  if (error || red) styles.color = theme.palette.error.main
  if (soft) styles.color = theme.palette.text.light
  if (inactive) styles.color = theme.palette.inactive
  if (marginBottom) styles.marginBottom = marginBottom
  if (padding) styles.padding = padding
  if (left) styles.textAlign = 'left'
  if (center) styles.textAlign = 'center'
  if (right) styles.textAlign = 'right'

  const classNames = []
  if (settledVariant) classNames.push(classes[settledVariant])
  if (centerOnSmall) classNames.push(classes.centerOnSmall)

  return (
    <>
      <Typography
        style={{ opacity, display, fontWeight, ...style, ...styles }}
        className={cx(className, ...classNames, {
          [classes.primary]: !!primary,
          [classes.secondary]: !!secondary,
          [classes.thirdary]: !!thirdary,
          [classes.darkBlue]: !!darkBlue,
          [classes.link]: !!link,
          [classes.italic]: !!italic,
          [classes.unselected]: unselected,
        })}
        variant={
          !customVariants.includes(settledVariant) ? settledVariant : undefined
        }
        {...props}
      />
      {divider && <Divider />}
    </>
  )
}

Typography.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  darkBlue: PropTypes.bool,
  thirdary: PropTypes.bool,
  white: PropTypes.bool,
  black: PropTypes.bool,
  error: PropTypes.bool,
  red: PropTypes.bool,
  soft: PropTypes.bool,
  inactive: PropTypes.bool,
  variant: PropTypes.oneOf(totalVariants()),
  left: PropTypes.bool,
  center: PropTypes.bool,
  centerOnSmall: PropTypes.bool,
  right: PropTypes.bool,
  margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  marginBottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  padding: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  divider: PropTypes.bool,
  display: PropTypes.string,
  italic: PropTypes.bool,
  opacity: PropTypes.number,
  unselected: PropTypes.bool,
}

export function totalVariants() {
  return [
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'subtitle1',
    'subtitle2',
    'body1',
    'body2',
    'caption',
    'button',
    'overline',
    'subheading', // custom
  ]
}

export function customVariants() {
  return ['subheading']
}

function patchVariant(variant) {
  if (!variant) return null
  let patchedVariant

  switch (variant) {
    case 'display1':
      patchedVariant = 'h1'
      break
    case 'display2':
      patchedVariant = 'h2'
      break
    case 'display3':
      patchedVariant = 'h3'
      break
    case 'display4':
      patchedVariant = 'h4'
      break
    case 'headline':
      patchedVariant = 'h5'
      break
    case 'title':
      patchedVariant = 'h6'
      break
    case 'body2':
      patchedVariant = 'body1'
      break
    case 'body1':
      patchedVariant = 'body2'
      break
    default:
      patchedVariant = variant
  }

  return patchedVariant
}

export default withStyles(styles, { withTheme: true })(Typography)
