import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Form, Field } from 'react-final-form'
import arrayMutators from 'final-form-arrays'
import Button from 'components/Button'
import Divider from 'components/Divider'
import EmployeeFields from './Employee'
import EmployerFields from './Employer'
import { DWC_1FormValues } from './types'

interface DWC_1Props {
  initialValues?: DWC_1FormValues
  onSubmit: (values: DWC_1FormValues) => Promise<void>
}

const useStyles = makeStyles({
  root: {},
  textFieldRoot: {},
  actions: {
    padding: '12px 0',
  },
})

const DWC_1: React.FC<DWC_1Props> = ({ initialValues, onSubmit, ...props }) => {
  const classes = useStyles(undefined)
  const employeeSignatureRef = React.useRef()
  const employerSignatureRef = React.createRef()

  // const TextField: React.FC<any> = (props) => (
  //   <MuiTextField
  //     classes={{ root: classes.textFieldRoot }}
  //     margin="dense"
  //     variant="outlined"
  //     fullWidth
  //     {...props}
  //   />
  // )

  return (
    <Form
      keepDirtyOnReinitialize
      onSubmit={onSubmit}
      subscription={{ submitting: true }}
      // @ts-ignore
      mutators={arrayMutators}
      render={({ handleSubmit, submitting }: any) => (
        <form onSubmit={handleSubmit} className={classes.root}>
          {/* <EmployeeFields name="employee" signatureRef={employeeSignatureRef} />
          <Divider /> */}
          <EmployerFields name="employer" signatureRef={employerSignatureRef} />
          {/* <Field
            // @ts-ignore
            component={SignatureCanvas}
            name="signature"
            signatureRef={signatureRef}
          /> */}
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
