import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Form } from 'react-final-form'
import arrayMutators from 'final-form-arrays'
import AlignOutlinedTextFields from '../../components/AlignOutlinedTextFields'
import Divider from '../../components/Divider'
import EmployeeFields from './Employee'
import EmployerFields from './Employer'
import { DWC_1FormValues } from './types'

interface DWC_PR1Props {
  initialValues?: DWC_1FormValues
  states: string[]
  onSubmit: (values: DWC_1FormValues) => Promise<void>
  render?: (args: any) => any
}

const useStyles = makeStyles({
  root: {},
  textFieldRoot: {},
})

const DWC_PR1: React.FC<DWC_PR1Props> = ({
  render,
  initialValues,
  onSubmit,
  states = [],
  ...props
}) => {
  const classes = useStyles(undefined)
  const employeeSignatureRef = React.useRef()
  const employerSignatureRef = React.createRef()

  return (
    <AlignOutlinedTextFields>
      <Form
        keepDirtyOnReinitialize
        onSubmit={onSubmit}
        subscription={{ submitting: true }}
        // @ts-ignore
        mutators={arrayMutators}
        render={({ handleSubmit, submitting, ...rest }: any) => (
          <form onSubmit={handleSubmit} className={classes.root}>
            <EmployeeFields
              name="employee"
              signatureRef={employeeSignatureRef}
              states={states}
            />
            <Divider />
            <EmployerFields
              name="employer"
              signatureRef={employerSignatureRef}
            />
            {render && render({ submitting, ...rest })}
          </form>
        )}
        initialValues={initialValues}
        {...props}
      />
    </AlignOutlinedTextFields>
  )
}

export default DWC_PR1
