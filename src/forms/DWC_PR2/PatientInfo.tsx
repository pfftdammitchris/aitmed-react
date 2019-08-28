import React from 'react'
import { Field } from 'react-final-form'
import { makeStyles } from '@material-ui/styles'
import { parsePhone, parseSSN } from 'utils/finalForm'
import Flex from 'components/Flex'
import OutlinedTextField from 'components/finalForm/OutlinedTextField'

interface PatientInfoProps {
  name: string
  genders: string[]
}

const useStyles = makeStyles((theme: any) => ({
  root: {},
  textFieldRoot: {
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
}))

const PatientInfo: React.FC<PatientInfoProps> = ({
  name,
  genders,
  ...props
}) => {
  const classes = useStyles(props)
  const WrappedTextField: React.FC<any> = (props) => (
    <OutlinedTextField classes={{ root: classes.textFieldRoot }} {...props} />
  )

  return (
    <>
      <Flex>
        <Field
          component={WrappedTextField}
          name={`${name}.firstName`}
          label="First Name"
          wrapperProps={{ marginRight: 3 }}
          fullWidth
        />
        <Field
          component={WrappedTextField}
          name={`${name}.middleName`}
          label="Middle Name"
          wrapperProps={{ marginRight: 3 }}
          fullWidth
        />
        <Field
          component={WrappedTextField}
          name={`${name}.lastName`}
          label="Last Name"
          fullWidth
        />
      </Flex>
      <Flex xsBlock>
        <Field
          component={WrappedTextField}
          name={`${name}.sex`}
          wrapperProps={{ marginRight: 3 }}
          selectProps={{ native: true }}
          select
          fullWidth
        >
          {['Select Gender', ...genders].map((gender: string) => (
            <option key={`gender_${gender}`} value={gender}>
              {gender}
            </option>
          ))}
        </Field>
        <Field
          type="date"
          component={WrappedTextField}
          name={`${name}.dob`}
          label="Date of Birth"
          wrapperProps={{ marginRight: 3 }}
          fullWidth
        />
        <Field
          component={WrappedTextField}
          name={`${name}.address`}
          label="Address"
          fullWidth
        />
      </Flex>
      <Flex xsBlock>
        <Field
          component={WrappedTextField}
          name={`${name}.occupation`}
          label="Occupation"
          wrapperProps={{ marginRight: 3 }}
          fullWidth
        />
        <Field
          component={WrappedTextField}
          name={`${name}.socialSecurity`}
          parse={parseSSN}
          label="Social Security No."
          wrapperProps={{ marginRight: 3 }}
          fullWidth
        />
        <Field
          component={WrappedTextField}
          name={`${name}.phone`}
          parse={parsePhone}
          label="Phone"
          fullWidth
        />
      </Flex>
    </>
  )
}

export default PatientInfo
