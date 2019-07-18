// UNDER CONSTRUCTION
import React, { Fragment } from 'react'
import MaterialUIButton from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/styles'
import cx from 'classnames'
// import Link from 'components/link'

const Link = (props: any) => <a {...props} />

const useStyles = makeStyles((theme: any) => ({
  root: {
    position: 'relative',
    borderRadius: 50,
    boxShadow: 'none',
    background: theme.palette.primary.main,
    border: `1px solid ${theme.palette.primary.main}`,
    color: '#fff',
    '&:hover': {
      background: 'none',
      color: theme.palette.primary.main,
    },
  },
  primary: {
    border: `1px solid ${theme.palette.primary.main}`,
    color: '#fff',
    background: `${theme.palette.primary.main} !important`,
    '&:hover': {
      border: `1px solid ${theme.palette.primary.dark} !important`,
      background: `${theme.palette.primary.dark} !important`,
      color: '#fff',
    },
  },
  secondary: {
    border: `1px solid ${theme.palette.secondary.main}`,
    color: '#fff',
    background: `${theme.palette.secondary.main}`,
    '&:hover': {
      border: `1px solid ${theme.palette.secondary.dark} !important`,
      background: `${theme.palette.secondary.dark} !important`,
      color: '#fff',
    },
  },
  thirdary: {
    border: `1px solid ${theme.palette.thirdary.main}`,
    color: '#fff',
    background: theme.palette.thirdary.main,
    '&:hover': {
      border: `1px solid ${theme.palette.thirdary.dark} !important`,
      background: `${theme.palette.thirdary.dark} !important`,
      color: '#fff',
    },
  },
  neutral: {
    border: `1px solid ${theme.palette.inactive}`,
    color: '#fff',
    background: 'grey',
    '&:hover': {
      background: 'none !important',
      color: theme.palette.text.light,
    },
  },
  error: {
    border: `1px solid ${theme.palette.error.main}`,
    color: '#fff',
    background: theme.palette.error.main,
    '&:hover': {
      background: `${theme.palette.error.dark} !important`,
      color: '#fff',
    },
  },
  hoverPrimaryOnSecondary: {
    color: '#fff',
    border: `1px solid ${theme.palette.primary.main} !important`,
    '&:hover': {
      background: 'none !important',
      border: '1px solid #fff !important',
      color: '#fff !important',
    },
  },
  hoverPrimaryOnThirdary: {
    color: '#fff',
    border: `1px solid ${theme.palette.primary.main} !important`,
    '&:hover': {
      background: 'none !important',
      border: '1px solid #fff !important',
      color: '#fff !important',
    },
  },
  hoverPrimaryOnWhite: {
    color: '#fff',
    border: `1px solid ${theme.palette.primary.main} !important`,
    '&:hover': {
      background: 'none !important',
      color: `${theme.palette.primary.main} !important`,
    },
  },
  hoverPrimaryOnBlack: {
    color: '#fff',
    border: `1px solid ${theme.palette.primary.main}`,
    '&:hover': {
      background: 'none !important',
      color: '#fff !important',
    },
  },
  hoverSecondaryOnPrimary: {
    color: '#fff',
    background: theme.palette.secondary.main,
    border: `1px solid ${theme.palette.secondary.main}`,
    '&:hover': {
      border: '1px solid #fff',
      background: 'none !important',
      color: '#fff !important',
    },
  },
  hoverSecondaryOnThirdary: {
    color: '#fff',
    background: theme.palette.secondary.main,
    border: `1px solid ${theme.palette.secondary.main}`,
    '&:hover': {
      border: '1px solid #fff',
      background: 'none !important',
      color: '#fff !important',
    },
  },
  hoverSecondaryOnWhite: {
    color: '#fff',
    background: theme.palette.secondary.main,
    border: `1px solid ${theme.palette.secondary.main}`,
    '&:hover': {
      background: 'none !important',
      color: `${theme.palette.secondary.main} !important`,
    },
  },
  hoverSecondaryOnBlack: {
    color: '#fff',
    background: theme.palette.secondary.main,
    border: `1px solid ${theme.palette.secondary.main}`,
    '&:hover': {
      background: 'none !important',
      color: '#fff !important',
    },
  },
  hoverThirdaryOnPrimary: {
    color: '#fff',
    background: theme.palette.thirdary.main,
    border: `1px solid ${theme.palette.thirdary.main}`,
    '&:hover': {
      border: '1px solid #fff',
      background: 'none !important',
      color: '#fff !important',
    },
  },
  hoverThirdaryOnSecondary: {
    color: '#fff',
    background: theme.palette.thirdary.main,
    border: `1px solid ${theme.palette.thirdary.main} !important`,
    '&:hover': {
      border: '1px solid #fff !important',
      background: 'none !important',
      color: '#fff !important',
    },
  },
  hoverThirdaryOnWhite: {
    color: '#fff',
    background: theme.palette.thirdary.main,
    border: `1px solid ${theme.palette.thirdary.main} !important`,
    '&:hover': {
      background: 'none !important',
      color: `${theme.palette.thirdary.main} !important`,
    },
  },
  hoverThirdaryOnBlack: {
    color: '#fff',
    background: theme.palette.thirdary.main,
    border: `1px solid ${theme.palette.thirdary.main}`,
    '&:hover': {
      background: 'none !important',
      color: '#fff !important',
    },
  },
  hoverWhiteOnPrimary: {
    color: theme.palette.text.normal,
    background: '#fff',
    border: `1px solid ${theme.palette.primary.lighter}`,
    '&:hover': {
      border: '1px solid #fff',
      background: 'none !important',
      color: '#fff !important',
    },
  },
  hoverWhiteOnSecondary: {
    color: theme.palette.text.normal,
    background: '#fff',
    border: `1px solid ${theme.palette.secondary.lighter}`,
    '&:hover': {
      border: '1px solid #fff',
      background: 'none !important',
      color: '#fff !important',
    },
  },
  hoverWhiteOnThirdary: {
    color: theme.palette.text.normal,
    background: '#fff',
    border: `1px solid ${theme.palette.thirdary.lighter}`,
    '&:hover': {
      border: '1px solid #fff',
      background: 'none !important',
      color: '#fff !important',
    },
  },
  hoverWhiteOnBlack: {
    color: theme.palette.text.soft,
    background: '#fff',
    border: `1px solid ${theme.palette.borders.slightlyDark}`,
    '&:hover': {
      border: `1px solid ${theme.palette.borders.cloud} !important`,
      background: '#000 !important',
      color: '#fff !important',
    },
  },
  hoverBlackOnPrimary: {
    color: '#fff',
    background: '#000',
    border: '1px solid #000',
    '&:hover': {
      border: '1px solid #fff',
      background: 'none !important',
      color: '#fff !important',
    },
  },
  hoverBlackOnSecondary: {
    color: '#fff',
    background: '#000',
    border: '1px solid #000',
    '&:hover': {
      border: '1px solid #fff',
      background: 'none !important',
      color: '#fff !important',
    },
  },
  hoverBlackOnThirdary: {
    color: '#fff',
    background: '#000',
    border: '1px solid #000',
    '&:hover': {
      border: '1px solid #fff',
      background: 'none !important',
      color: '#fff !important',
    },
  },
  hoverBlackOnWhite: {
    color: '#fff',
    background: '#000',
    border: '1px solid #000',
    '&:hover': {
      border: `1px solid ${theme.palette.borders.dark} !important`,
      background: 'none !important',
      color: `${theme.palette.text.normal} !important`,
    },
  },
  hoverError: {
    '&:hover': {
      background: 'none !important',
      color: `${theme.palette.error.main} !important`,
    },
  },
  small: {
    fontSize: '0.65em',
  },
  medium: {
    fontSize: '0.8em',
  },
  large: {
    fontSize: '1.2em !important',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.9em !important',
    },
  },
  xlarge: {
    fontSize: '1.1em',
    padding: '20px 45px',
  },
  disabled: {
    background: `${theme.palette.inactive} !important`,
    border: `${theme.palette.inactive} !important`,
    color: '#fff !important',
  },
  outlined: {
    background: 'none !important',
  },
  textPrimary: {
    color: `${theme.palette.primary.main} !important`,
  },
  textSecondary: {
    color: `${theme.palette.secondary.main} !important`,
  },
  textThirdary: {
    color: `${theme.palette.thirdary.main} !important`,
  },
  textNeutral: {
    color: `${theme.palette.text.soft} !important`,
  },
  textDanger: {
    color: `${theme.palette.error.main} !important`,
  },
  centerOnSmall: {
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
      display: 'block',
      margin: 'auto',
    },
  },
}))

const Button: React.FC<any> = ({
  className,
  children,
  primary,
  secondary,
  thirdary,
  neutral,
  error,
  red,
  danger,
  hover = {},
  small,
  medium,
  large,
  xlarge,
  size,
  disabled,
  outlined,
  to,
  textColor,
  background,
  overwriteClassName,
  overWrittenClassNames,
  centerOnSmall,
  ...others
}) => {
  const classes = useStyles()
  const muiSizes = ['small', 'medium', 'large']

  const Wrapper = ({ children }: any) => {
    const WrapperComponent = to ? Link : Fragment
    const wrapperProps: any = {}
    if (to) wrapperProps.to = to
    return <WrapperComponent {...wrapperProps}>{children}</WrapperComponent>
  }

  const classNames = cx(classes.root, className, {
    [classes.primary]: !!primary,
    [classes.secondary]: !!secondary,
    [classes.error]: !!error || !!red || !!danger,
    [classes.root]: !secondary,
    [classes.thirdary]: !!thirdary,
    [classes.neutral]:
      !!neutral ||
      (!primary &&
        !secondary &&
        !thirdary &&
        !error &&
        !outlined &&
        !Object.keys(hover).length),
    [classes.hoverPrimaryOnSecondary]: hover.primary === 'secondary',
    [classes.hoverPrimaryOnThirdary]: hover.primary === 'thirdary',
    [classes.hoverPrimaryOnWhite]: hover.primary === 'white',
    [classes.hoverPrimaryOnBlack]: hover.primary === 'black',
    [classes.hoverSecondaryOnPrimary]: hover.secondary === 'primary',
    [classes.hoverSecondaryOnThirdary]: hover.secondary === 'thirdary',
    [classes.hoverSecondaryOnBlack]: hover.secondary === 'black',
    [classes.hoverSecondaryOnWhite]: hover.secondary === 'white',
    [classes.hoverThirdaryOnPrimary]: hover.thirdary === 'primary',
    [classes.hoverThirdaryOnSecondary]: hover.thirdary === 'secondary',
    [classes.hoverThirdaryOnWhite]: hover.thirdary === 'white',
    [classes.hoverThirdaryOnBlack]: hover.thirdary === 'black',
    [classes.hoverWhiteOnPrimary]: hover.white === 'primary',
    [classes.hoverWhiteOnSecondary]: hover.white === 'secondary',
    [classes.hoverWhiteOnThirdary]: hover.white === 'thirdary',
    [classes.hoverWhiteOnBlack]: hover.white === 'black',
    [classes.hoverBlackOnPrimary]: hover.black === 'primary',
    [classes.hoverBlackOnSecondary]: hover.black === 'secondary',
    [classes.hoverBlackOnThirdary]: hover.black === 'thirdary',
    [classes.hoverBlackOnWhite]: hover.black === 'white',
    [classes.hoverError]: !!hover.red || !!hover.danger || !!hover.error,
    [classes.small]: !!small || size === 'small',
    [classes.medium]: !!medium || size === 'medium',
    [classes.large]: !!large || size === 'large',
    [classes.xlarge]: !!xlarge || size === 'xlarge',
    [classes.disabled]: disabled,
    [classes.outlined]: !!outlined,
    [classes.textPrimary]: textColor === 'primary',
    [classes.textSecondary]:
      (textColor === 'secondary' || !!outlined) &&
      (!!secondary || !!hover.secondary),
    [classes.textThirdary]:
      (textColor === 'thirdary' || !!outlined) &&
      (!!thirdary || !!hover.primary),
    [classes.textNeutral]: (textColor === 'neutral' || !!outlined) && !!neutral,
    [classes.textDanger]:
      (['error', 'red', 'danger'].includes(textColor) || !!outlined) &&
      (!!danger ||
        !!red ||
        !!error ||
        !!hover.danger ||
        !!hover.red ||
        !!hover.error),
    [classes.centerOnSmall]: !!centerOnSmall,
  })

  return (
    <Wrapper>
      <MaterialUIButton
        style={{ background }}
        className={overwriteClassName ? overWrittenClassNames : classNames}
        variant={
          (!!outlined && 'outlined') ||
          // @ts-ignore
          (!!others.variant === 'outlined' && 'outlined') ||
          'contained'
        }
        size={
          (muiSizes.includes(size) && size) ||
          (small ? 'small' : medium ? 'medium' : large ? 'large' : 'medium')
        }
        disabled={disabled}
        {...others}
      >
        {children}
      </MaterialUIButton>
    </Wrapper>
  )
}

// Button.propTypes = {
//   classes: PropTypes.object.isRequired,
//   children: PropTypes.node.isRequired,
//   className: PropTypes.string,
//   primary: PropTypes.bool,
//   secondary: PropTypes.bool,
//   thirdary: PropTypes.bool,
//   neutral: PropTypes.bool,
//   error: PropTypes.bool,
//   red: PropTypes.bool,
//   danger: PropTypes.bool,
//   hover: PropTypes.shape({
//     primary: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
//     secondary: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
//     thirdary: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
//     white: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
//     black: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
//   }),
//   small: PropTypes.bool,
//   medium: PropTypes.bool,
//   large: PropTypes.bool,
//   xlarge: PropTypes.bool,
//   size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']),
//   disabled: PropTypes.bool,
//   outlined: PropTypes.bool,
//   to: PropTypes.string,
//   textColor: PropTypes.string,
//   background: PropTypes.string,
//   overwriteClassName: PropTypes.bool,
//   overWrittenClassNames: PropTypes.string,
//   centerOnSmall: PropTypes.bool,
// }

export default Button
