import React from 'react'
import { Field } from 'react-final-form'
import { makeStyles } from '@material-ui/styles'
import { Theme } from '@material-ui/core'
import Flex from 'components/Flex'
import OutlinedTextField from 'components/finalForm/OutlinedTextField'

interface PatientInfoProps {
  name: string
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
}))

const PatientInfo: React.FC<PatientInfoProps> = ({ name, ...props }) => {
  const classes = useStyles(props)
  const WrappedTextField = (props) => <OutlinedTextField {...props} />

  return (
    <Flex center wrap>
      <Field
        component={WrappedTextField}
        name={`${name}.firstName`}
        label="First Name"
      />
      <Field
        component={WrappedTextField}
        name={`${name}.middleName`}
        label="Middle Name"
      />
      <Field
        component={WrappedTextField}
        name={`${name}.lastName`}
        label="Last Name"
      />
      <Field component={WrappedTextField} name={`${name}.sex`} label="Gender" />
      <Field
        component={WrappedTextField}
        name={`${name}.dob`}
        label="Date of Birth"
      />
      <Field
        component={WrappedTextField}
        name={`${name}.address`}
        label="Address"
      />
      <Field
        component={WrappedTextField}
        name={`${name}.occupation`}
        label="Occupation"
      />
      <Field
        component={WrappedTextField}
        name={`${name}.socialSecurity`}
        label="Social Security No."
      />
      <Field
        component={WrappedTextField}
        name={`${name}.phone`}
        label="Phone"
      />
    </Flex>
  )
}

export default PatientInfo
