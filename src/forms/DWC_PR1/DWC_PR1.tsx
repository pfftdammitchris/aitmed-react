import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Form } from 'react-final-form'
import arrayMutators from 'final-form-arrays'
import Button from '../../components/Button'
import Divider from '../../components/Divider'
import EmployeeFields from './Employee'
import EmployerFields from './Employer'
import { DWC_1FormValues } from './types'

interface DWC_PR1Props {
  initialValues?: DWC_1FormValues
  states: string[]
  onSubmit: (values: DWC_1FormValues) => Promise<void>
}

const useStyles = makeStyles({
  root: {},
  textFieldRoot: {},
  actions: {
    padding: '12px 0',
  },
})

const DWC_PR1: React.FC<DWC_PR1Props> = ({
  initialValues,
  onSubmit,
  states = [],
  ...props
}) => {
  const classes = useStyles(undefined)
  const employeeSignatureRef = React.useRef()
  const employerSignatureRef = React.createRef()

  return (
    <Form
      keepDirtyOnReinitialize
      onSubmit={onSubmit}
      subscription={{ submitting: true }}
      // @ts-ignore
      mutators={arrayMutators}
      render={({ handleSubmit, submitting }: any) => (
        <form onSubmit={handleSubmit} className={classes.root}>
          <EmployeeFields
            name="employee"
            signatureRef={employeeSignatureRef}
            states={states}
          />
          <Divider />
          <EmployerFields name="employer" signatureRef={employerSignatureRef} />
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
      initialValues={initialValues}
      {...props}
    />
  )
}

export default DWC_PR1
