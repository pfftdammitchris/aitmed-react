import React from 'react'
import isFunction from 'lodash/isFunction'
import { makeStyles, useTheme } from '@material-ui/styles'
import Fade from '@material-ui/core/Fade'
import withWidth from '@material-ui/core/withWidth'
import cx from 'classnames'
import CircularProgress from '@material-ui/core/CircularProgress'
import logo from 'resources/appIcon.png'
import logoWhite from 'resources/appIconWhite.png'
import Typography from 'components/Typography'
import useLoadingSpinner from './useLoadingSpinner'
import { SpinnerWithWidthProps, LoadingSpinnerProps } from './types'

const useStyles = makeStyles({
  root: {
    zIndex: 999999,
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  fullscreen: {
    position: 'fixed',
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
  },
  spinner: {
    position: 'relative',
    margin: 'auto',
    display: 'block',
  },
  caption: {
    transition: 'all 0.3s ease-out',
    position: 'relative',
    width: '100%',
    height: '100%',
    textAlign: 'center',
    '& h3': {
      color: '#fff !important',
      fontWeight: 300,
    },
    '& h4': {
      color: '#fff !important',
      fontWeight: 300,
    },
    '& h5': {
      color: '#fff !important',
      fontWeight: 300,
    },
    '& h6': {
      color: '#fff !important',
      fontWeight: 300,
    },
  },
  dim: {
    background: 'rgba(0, 0, 0, 0.80)',
  },
  noOverlay: {
    background: 'none',
  },
  logoContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    display: 'flex',
    objectFit: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 35,
    height: 35,
    objectFit: 'cover',
  },
  xxs: { fontSize: '0.5rem !important' },
  xs: { fontSize: '0.6rem !important' },
  sm: { fontSize: '0.7rem !important' },
  md: { fontSize: '0.9rem !important' },
  lg: { fontSize: '0.9rem !important' },
  xl: { fontSize: '0.9rem !important' },
})

const SpinnerWithWidth: React.FC<SpinnerWithWidthProps> = ({
  width = 'xs',
  size,
  style,
  xxs,
  xs,
  sm,
  md,
  lg,
  xl,
  ...rest
}) => {
  const theme = useTheme<any>()
  const dynamicColor = useLoadingSpinner({ theme })
  let spinnerSize
  if (xxs || width === 'xxs') spinnerSize = 30
  else if (xs || width === 'xs') spinnerSize = 45
  else if (sm || width === 'sm') spinnerSize = 60
  else if (md || width === 'md') spinnerSize = 75
  else if (lg || width === 'lg') spinnerSize = 130
  else if (xl || width === 'xl') spinnerSize = 150
  else spinnerSize = 45

  return (
    <CircularProgress
      size={size || spinnerSize}
      thickness={1}
      style={{ color: dynamicColor, ...style }}
      {...rest}
    />
  )
}

const EnhancedSpinnerWithWidth: any = withWidth()(SpinnerWithWidth)

const calcTypographyVariant = ({ size, xxs, xs, sm, md, lg, xl }: any) => {
  if (xxs) return 'caption'
  else if (xs) return 'subtitle2'
  else if (sm) return 'subtitle1'
  else if (md) return 'h6'
  else if (lg) return 'h5'
  else if (xl) return 'h4'
  else {
    switch (size) {
      case 'xxs':
        return 'caption'
      case 'xs':
        return 'subtitle2'
      case 'sm':
        return 'subtitle1'
      case 'md':
        return 'h6'
      case 'lg':
        return 'subtitle2'
      case 'xl':
        return 'subtitle2'
      default:
        return 'subtitle1'
    }
  }
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  children,
  wrapperClassName,
  className,
  childrenClassName,
  wrapperStyle,
  childrenStyle,
  fullscreen = false,
  dim = false,
  white = false,
  renderContent,
  ...rest
}) => {
  const classes = useStyles(undefined)
  const styles = {}

  let logoSrc = logo // default to logo with dark text
  if (white || dim) logoSrc = logoWhite

  return (
    <div
      style={{ ...styles, ...wrapperStyle }}
      className={cx(classes.root, wrapperClassName, {
        [classes.fullscreen]: !!fullscreen,
        [classes.dim]: !!dim,
      })}
    >
      <div className={className} style={{ position: 'relative' }}>
        <div style={{ position: 'relative' }}>
          <EnhancedSpinnerWithWidth
            className={cx(classes.spinner, className)}
            {...rest}
          />
          <div className={classes.logoContainer}>
            <img src={logoSrc} className={classes.logo} title="AiTmed" />
          </div>
        </div>
        <Fade timeout={2000} in>
          {isFunction(renderContent) ? (
            // @ts-ignore
            renderContent()
          ) : (
            <Typography
              className={cx(classes.caption, childrenClassName, {
                [classes.xxs]: !!rest.xxs,
                [classes.xs]: !!rest.xs,
                [classes.sm]: !!rest.sm,
                [classes.md]: !!rest.md,
                [classes.lg]: !!rest.lg,
                [classes.xl]: !!rest.xl,
              })}
              style={{ marginTop: 12, ...childrenStyle }}
              variant={calcTypographyVariant(rest)}
              center
              white
            >
              {children}
            </Typography>
          )}
        </Fade>
      </div>
    </div>
  )
}

export default LoadingSpinner
