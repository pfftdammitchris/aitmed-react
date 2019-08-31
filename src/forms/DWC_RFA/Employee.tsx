import React from 'react'
import { Field } from 'react-final-form'
import Flex from '../../components/Flex'
import OutlinedTextField from '../../components/finalForm/OutlinedTextField'

interface RFA_EmployeeProps {
  name: 'employee'
  component: React.FC<any>
}

const RFA_Employee: React.FC<RFA_EmployeeProps> = ({
  name,
  component: WrappedOutlinedTextField,
}: any) => (
  <>
    <Flex spaceBetween>
      <Field
        label="First Name"
        name={`${name}.firstName`}
        component={WrappedOutlinedTextField}
        wrapperProps={{ marginRight: 3 }}
        fullWidth
      />
      <Field
        label="Middle Name"
        name={`${name}.middleName`}
        component={WrappedOutlinedTextField}
        wrapperProps={{ marginRight: 3 }}
        fullWidth
      />
      <Field
        label="Last Name"
        name={`${name}.lastName`}
        component={WrappedOutlinedTextField}
        fullWidth
      />
    </Flex>
    <Flex xsBlock>
      <Field
        type="date"
        label="Date of Injury"
        name={`${name}.dateOfInjury`}
        component={OutlinedTextField}
        wrapperProps={{ marginRight: 3 }}
        fullWidth
      />
      <Field
        type="date"
        label="Date of Birth"
        name={`${name}.dob`}
        component={OutlinedTextField}
        fullWidth
      />
    </Flex>
    <Flex spaceBetween>
      <Field
        label="Claim Number"
        name={`${name}.claimNumber`}
        component={OutlinedTextField}
        wrapperProps={{ marginRight: 3 }}
        fullWidth
      />
      <Field
        label="Employer"
        name={`${name}.employer`}
        component={OutlinedTextField}
        fullWidth
      />
    </Flex>
  </>
)

export default RFA_Employee
