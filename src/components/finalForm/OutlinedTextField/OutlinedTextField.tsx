import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Theme } from '@material-ui/core'
import MuiTextField from '@material-ui/core/TextField'
import cx from 'classnames'
import Typography from 'components/Typography'

interface FinalFormOutlinedTextFieldProps {
  input?: any
  meta?: any
  className?: string
  inline?: boolean
  wrapperProps?: any
  formHelperTextProps?: any
  errorProps?: any
  marginRight?: number
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    //
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
    wrapperProps = {},
    formHelperTextProps = {},
    errorProps = {},
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
        FormHelperTextProps={{
          ...formHelperTextProps,
          classes: {
            root: cx(
              ...formHelperTextProps.classes,
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
