import React from 'react'
import { makeStyles } from '@material-ui/styles'
import MuiTextField from '@material-ui/core/TextField'
import cx from 'classnames'

interface OutlinedTextFieldProps {
  helperText?: string
  error?: boolean
  value?: any
  className?: string
  label?: React.ReactNode
  margin?: 'normal' | 'dense'
  fullWidth?: boolean
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
  size?: 'small' | 'medium' | 'large'
  classes?: any
}

const useStyles = makeStyles({
  helperTextRoot: {
    color: '#666',
  },
  select: {
    fontSize: '0.9rem !important',
  },
  marginRight: ({ wrapperProps }: OutlinedTextFieldProps) =>
    wrapperProps && {
      '& fieldset': {
        marginRight: wrapperProps.marginRight,
      },
    },
  input: {
    fontSize: '0.9rem',
  },
  selectSmall: {
    paddingTop: '10.5px !important',
    paddingBottom: '10.5px !important',
  },
  selectLarge: {
    paddingTop: '22.5px !important',
    paddingBottom: '22.5px !important',
  },
  inputMedium: {
    padding: '8px 12px',
  },
  inputLarge: {
    padding: 12,
  },
})

const OutlinedTextField: React.FC<OutlinedTextFieldProps> = (props) => {
  const {
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
    size = 'medium',
    ...otherProps
  } = props
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
            {
              [classes.selectSmall]: size === 'small',
              [classes.selectLarge]: size === 'large',
            },
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
          marginDense: cx(
            inputProps.classes ? inputProps.classes.marginDense : false,
            {
              [classes.inputMedium]: size === 'medium',
              [classes.inputLarge]: size === 'large',
            },
          ),
          input: cx(
            classes.input,
            inputProps.classes ? inputProps.classes.input : false,
          ),
        },
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
          {...otherProps}
          variant="outlined"
        />
      </div>
    </>
  )
}

export default OutlinedTextField
