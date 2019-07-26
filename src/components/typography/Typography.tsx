// UNDER CONSTRUCTION
import React from 'react'
import cx from 'classnames'
import { Typography as MUITypography } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/styles'
import Divider from '@material-ui/core/Divider'
import { TypographyProps } from './types'

const useStyles = makeStyles((theme: any) => ({
  h1: {
    fontWeight: 600,
    [theme.breakpoints.down('md')]: {
      fontSize: '4.5em',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '4em',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.7em',
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
      fontSize: '1.1em',
    },
  },
  h4: {
    fontWeight: 500,
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
  primary: { color: theme.palette.primary.main },
  secondary: { color: `${theme.palette.secondary.main} !important` },
  thirdary: { color: theme.palette.thirdary.main },
  darkBlue: { color: theme.palette.secondary.darker },
  link: {
    cursor: 'pointer',
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
  centerOnSmall: {
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
    },
  },
}))

const Typography: React.FC<TypographyProps> = ({
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
  fontWeight,
  italic,
  unselected,
  ...props
}) => {
  const classes = useStyles()
  const theme = useTheme<any>()

  const styles: any = {}
  if (darkBlue) styles.color = theme.palette.secondary.darker
  if (white) styles.color = '#fff'
  if (black) styles.color = '#000'
  if (error || red) styles.color = theme.palette.error.main
  if (soft) styles.color = theme.palette.text.light
  if (inactive) styles.color = theme.palette.inactive
  if (marginBottom) styles.marginBottom = marginBottom
  if (fontWeight) styles.fontWeight = fontWeight
  if (padding) styles.padding = padding
  if (left) styles.textAlign = 'left'
  if (center) styles.textAlign = 'center'
  if (right) styles.textAlign = 'right'

  const classNames = []
  if (centerOnSmall) classNames.push(classes.centerOnSmall)
  if (variant && variant !== 'subheading') classNames.push(classes[variant])

  return (
    <>
      <MUITypography
        style={{ ...style, ...styles }}
        className={cx(className, ...classNames, {
          [classes.primary]: !!primary,
          [classes.secondary]: !!secondary,
          [classes.thirdary]: !!thirdary,
          [classes.darkBlue]: !!darkBlue,
          [classes.link]: !!link,
          [classes.italic]: !!italic,
          [classes.unselected]: !!unselected,
        })}
        // @ts-ignore
        variant={variant !== 'subheading' ? variant : undefined}
        {...props}
      />
      {divider && <Divider />}
    </>
  )
}

export default Typography