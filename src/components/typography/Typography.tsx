import React from 'react'
import cx from 'classnames'
import MUITypography from '@material-ui/core/Typography'
import useTheme from '@material-ui/styles/useTheme'
import { makeStyles } from '@material-ui/styles'
import Divider from '@material-ui/core/Divider'
import { TypographyProps } from './types'

// @ts-ignore
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
    [theme.breakpoints.down('md')]: {
      fontSize: '0.90em',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.82em',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.68em',
    },
  },
  body2: {
    [theme.breakpoints.down('md')]: {
      fontSize: '0.80em',
    },
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
    [theme.breakpoints.down('lg')]: {
      fontSize: '0.7.5em',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '0.7em',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.65em',
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
  primary: primaryProp,
  secondary: secondaryProp,
  thirdary: thirdaryProp,
  darkBlue,
  white,
  black,
  error: errorProp,
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

  // Computes the font color
  if (primaryProp) styles.color = theme.palette.primary.main
  else if (secondaryProp) styles.color = theme.palette.secondary.main
  else if (thirdaryProp) styles.color = theme.palette.thirdary.main
  else if (darkBlue) styles.color = theme.palette.secondary.dark
  else if (errorProp || red) styles.color = theme.palette.error.main
  else if (white) styles.color = '#fff'
  else if (black) styles.color = '#000'

  if (margin) styles.margin = margin
  if (marginBottom) styles.marginBottom = marginBottom
  if (padding) styles.padding = padding
  if (fontWeight) styles.fontWeight = fontWeight
  if (left) styles.textAlign = 'left'
  if (center) styles.textAlign = 'center'
  if (right) styles.textAlign = 'right'

  // @ts-ignore
  const classNames = [classes[variant]]
  if (centerOnSmall) classNames.push(classes.centerOnSmall)

  return (
    <>
      <MUITypography
        style={{ ...style, ...styles }}
        className={cx(className, ...classNames, {
          [classes.primary]: !!primaryProp,
          [classes.secondary]: !!secondaryProp,
          [classes.thirdary]: !!thirdaryProp,
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
