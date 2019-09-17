import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { FieldRenderProps } from 'react-final-form'
import OriginalOutlinedTextField from '../../OutlinedTextField'
import InputAdornment from './InputAdornment'
import Typography from '../../Typography'

interface FinalFormOutlinedTextFieldProps
  extends FieldRenderProps<any, HTMLElement> {
  input: any
  meta: any
  inputProps?: any
  errorProps?: any
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

const FinalFormOutlinedTextField: React.FC<FinalFormOutlinedTextFieldProps> = ({
  input,
  meta,
  errorProps = {},
  inputProps = {},
  ...otherProps
}) => {
  // Override input.type for more control (ex: for show/hide passwords)
  const [inputType, setInputType] = React.useState(input && input.type)

  return (
    <>
      <OriginalOutlinedTextField
        {...input}
        {...otherProps}
        inputProps={{
          ...inputProps,
          type: inputType,
          variant: 'outlined',
          margin: 'dense',
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
        }}
      />
      {meta && meta.error && meta.touched && (
        <Typography variant="caption" error {...errorProps}>
          {meta.error}
        </Typography>
      )}
    </>
  )
}

export default FinalFormOutlinedTextField
