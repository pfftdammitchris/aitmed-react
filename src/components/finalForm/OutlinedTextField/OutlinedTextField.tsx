import React from 'react'
import { makeStyles } from '@material-ui/styles'
import MuiTextField from '@material-ui/core/TextField'
import cx from 'classnames'
import Typography from 'components/Typography'

interface FinalFormOutlinedTextFieldProps {
  input?: any
  meta?: any
  className?: string
  inline?: boolean
  errorProps?: any
  formHelperTextProps?: any
  inputLabelProps?: any
  wrapperProps?: any
  marginRight?: number
  classes?: any
}

const useStyles = makeStyles((theme: any) => ({
  helperTextRoot: {
    color: theme.palette.text.soft,
  },
  marginRight: ({ wrapperProps }: FinalFormOutlinedTextFieldProps) =>
    wrapperProps && {
      '& fieldset': {
        marginRight: wrapperProps.marginRight,
      },
    },
}))

const FinalFormOutlinedTextField: React.FC<FinalFormOutlinedTextFieldProps> = (
  props,
) => {
  const {
    input,
    meta,
    inline,
    className,
    wrapperProps = {},
    formHelperTextProps = {},
    inputLabelProps = {},
    errorProps = {},
    classes: classesProp = {},
    ...otherProps
  } = props

  const classes = useStyles(props)

  const { marginRight, ...otherWrapperProps } = wrapperProps

  return (
    <div
      style={{
        display: inline ? 'inline-block' : 'block',
        flexGrow: 1,
      }}
      {...otherWrapperProps}
      className={cx(wrapperProps.className, {
        [classes.marginRight]: marginRight != undefined,
      })}
    >
      <MuiTextField
        margin="dense"
        classes={{
          ...classesProp,
          root: cx(classesProp.root, className),
        }}
        InputLabelProps={{
          shrink: true,
          ...inputLabelProps,
        }}
        FormHelperTextProps={{
          ...formHelperTextProps,
          classes: {
            root: cx(
              classes.helperTextRoot,
              formHelperTextProps.className,
              formHelperTextProps.classes
                ? formHelperTextProps.classes.root
                : undefined,
            ),
          },
        }}
        {...input}
        {...otherProps}
        variant="outlined"
      />
      {meta && meta.error && meta.touched && (
        <Typography variant="caption" error {...errorProps}>
          {meta.error}
        </Typography>
      )}
    </div>
  )
}

export default FinalFormOutlinedTextField
