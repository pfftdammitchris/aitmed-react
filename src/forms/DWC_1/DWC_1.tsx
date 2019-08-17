import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Theme } from '@material-ui/core'
import { Form, Field } from 'react-final-form'
import arrayMutators from 'final-form-arrays'
import MuiTextField from '@material-ui/core/TextField'
import Flex from 'components/Flex'
import Typography from 'components/Typography'
import Button from 'components/Button'
import Divider from 'components/Divider'
import SignatureCanvas from 'components/finalForm/SignatureCanvas'

interface DWC_1Props {
  initialValues?: any
  onSubmit: (values: any) => Promise<void>
}

const useStyles = makeStyles((theme: any) => ({
  root: {},
  textFieldRoot: {},
  actions: {
    padding: '12px 0',
  },
}))

const DWC_1: React.FC<DWC_1Props> = ({ initialValues, onSubmit, ...props }) => {
  const classes = useStyles(undefined)
  const signatureRef = React.createRef()

  const TextField: React.FC<any> = (props) => (
    <MuiTextField
      classes={{ root: classes.textFieldRoot }}
      margin="dense"
      variant="outlined"
      fullWidth
      {...props}
    />
  )

  return (
    <Form
      keepDirtyOnReinitialize
      onSubmit={onSubmit}
      subscription={{ submitting: true }}
      mutators={arrayMutators}
      render={({ handleSubmit, submitting }: any) => (
        <form onSubmit={handleSubmit} className={classes.root}>
          <Divider />
          <Field
            component={SignatureCanvas}
            name="signature"
            signatureRef={signatureRef}
          />
          <div className={classes.actions}>
            <Button
              type="submit"
              hover={{ secondary: 'white' }}
              disabled={submitting}
              secondary
            >
              Submit
            </Button>
          </div>
        </form>
      )}
      initialValues={{
        ...initialValues,
      }}
      {...props}
    />
  )
}

export default DWC_1
