import React from 'react'
import { Field } from 'react-final-form/dist'
import Flex from '../../components/Flex'
import { states } from '../../utils/info'
import { parsePhone } from '../../utils/finalForm'

interface RFA_ClaimsAdministratorProps {
  name: 'claimsAdministrator'
  component: React.FC<any>
}

const RFA_ClaimsAdministrator: React.FC<RFA_ClaimsAdministratorProps> = ({
  name,
  component: WrappedOutlinedTextField,
}: any) => (
  <>
    <Flex>
      <Field
        label="Company Name"
        name={`${name}.companyName`}
        component={WrappedOutlinedTextField}
        wrapperProps={{ marginRight: 3 }}
        fullWidth
      />
      <Field
        label="Contact Name"
        name={`${name}.contactName`}
        component={WrappedOutlinedTextField}
        fullWidth
      />
    </Flex>
    <Flex>
      <Field
        label="Address"
        name={`${name}.address`}
        component={WrappedOutlinedTextField}
        wrapperProps={{ marginRight: 3 }}
        fullWidth
      />
      <Field
        label="City"
        name={`${name}.city`}
        component={WrappedOutlinedTextField}
        wrapperProps={{ marginRight: 3 }}
        fullWidth
      />
      <Field
        name={`${name}.state`}
        component={WrappedOutlinedTextField}
        selectProps={{ SelectProps: { native: true } }}
        select
        fullWidth
      >
        {['Select State', ...states].map((state: string) => (
          <option key={`select_${state}`} value={state}>
            {state}
          </option>
        ))}
      </Field>
    </Flex>
    <Flex>
      <Field
        label="Zip Code"
        name={`${name}.zip`}
        component={WrappedOutlinedTextField}
        wrapperProps={{ marginRight: 3 }}
        fullWidth
      />
      <Field
        label="Phone"
        name={`${name}.phone`}
        parse={parsePhone}
        component={WrappedOutlinedTextField}
        wrapperProps={{ marginRight: 3 }}
        fullWidth
      />
      <Field
        label="Fax"
        parse={parsePhone}
        name={`${name}.fax`}
        component={WrappedOutlinedTextField}
        fullWidth
      />
    </Flex>
    <Field
      type="email"
      label="Email"
      name={`${name}.email`}
      component={WrappedOutlinedTextField}
      fullWidth
    />
  </>
)

export default RFA_ClaimsAdministrator
