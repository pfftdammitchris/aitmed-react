import React from 'react'
import { makeStyles } from '@material-ui/styles'
import MuiTextField from '@material-ui/core/TextField'
import { FieldRenderProps } from 'react-final-form'
import cx from 'classnames'
import InputAdornment from './InputAdornment'
import Typography from '../../Typography'

interface FinalFormOutlinedTextFieldProps
  extends FieldRenderProps<any, HTMLElement> {
  input: any
  meta: any
  helperText?: string
  error?: boolean
  value?: any
  className?: string
  margin?: 'normal' | 'dense'
  inline?: boolean
  wrapperProps?: any
  errorProps?: any
  menuProps?: any
  formHelperTextProps?: any
  inputProps?: any
  inputLabelProps?: any
  selectDisplayProps?: any
  selectProps?: any
  select?: boolean
  classes?: any
}

// @ts-ignore
const useStyles = makeStyles((theme: any) => ({
  helperTextRoot: {
    color: '#666',
  },
  select: {
    fontSize: '0.9rem !important',
  },
  marginRight: ({ wrapperProps }: FinalFormOutlinedTextFieldProps) =>
    wrapperProps && {
      '& fieldset': {
        marginRight: wrapperProps.marginRight,
      },
    },
  input: {
    fontSize: '0.9rem',
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
    errorProps = {},
    classes: classesProp = {},
    // textfield props
    formHelperTextProps = {},
    inputProps = {},
    inputLabelProps = {},
    // select props
    selectProps = {},
    selectDisplayProps = {},
    menuProps = {},
    ...otherProps
  } = props
  // Override input.type for more control (ex: for show/hide passwords)
  const [inputType, setInputType] = React.useState(input && input.type)

  const classes = useStyles({ wrapperProps })

  const { marginRight, ...otherWrapperProps } = wrapperProps

  let fieldProps: any = {}

  // If the caller wants this to be a select field, only pass in the select props
  //    to avoid spammy console errors
  if (otherProps.select) {
    fieldProps = {
      SelectProps: {
        ...selectProps,
        classes: {
          ...classesProp,
          ...selectProps.classes,
          select: cx(
            classes.select,
            className,
            selectProps.classes && selectProps.classes.select,
          ),
        },
        MenuProps: menuProps,
        SelectDisplayProps: selectDisplayProps,
      },
      inputProps,
    }
  }
  // If the caller wants this to be a textfield, only pass in the textfield props
  else {
    fieldProps = {
      classes: {
        ...classesProp,
        root: cx(classesProp.root, className),
      },
      InputProps: {
        ...inputProps,
        classes: {
          ...inputProps.classes,
          input: classes.input,
        },
        endAdornment:
          inputProps.endAdornment ||
          (!!input && input.type === 'password' && (
            <InputAdornment
              isNull={inputProps.endAdornment === null}
              originalInputType={input && input.type}
              inputType={inputType}
              setInputType={setInputType}
            />
          )),
      },
      InputLabelProps: {
        shrink: true,
        ...inputLabelProps,
      },
      FormHelperTextProps: {
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
      },
    }
  }

  return (
    <>
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
          {...fieldProps}
          {...input}
          {...otherProps}
          type={inputType}
          variant="outlined"
        />
      </div>
      {meta && meta.error && meta.touched && (
        <Typography variant="caption" error {...errorProps}>
          {meta.error}
        </Typography>
      )}
    </>
  )
}

export default FinalFormOutlinedTextField
