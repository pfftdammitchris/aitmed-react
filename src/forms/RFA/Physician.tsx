import React from 'react'
import { Field } from 'react-final-form'
import Flex from 'components/Flex'
import { states } from 'utils/info'

interface RFA_PhysicianProps {
  name: 'physician'
  component: React.FC<any>
}

const RFA_Physician: React.FC<RFA_PhysicianProps> = ({
  name,
  component: WrappedOutlinedTextField,
}: any) => (
  <>
    <Flex xsBlock>
      <Field
        label="Name"
        name={`${name}.name`}
        component={WrappedOutlinedTextField}
        wrapperProps={{ marginRight: 3 }}
        fullWidth
      />
      <Field
        label="Practice Name"
        name={`${name}.practiceName`}
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
    <Flex spaceBetween>
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
        label="State"
        name={`${name}.state`}
        component={WrappedOutlinedTextField}
        SelectProps={{
          native: true,
        }}
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
    <Flex spaceBetween>
      <Field
        type="number"
        label="Zip Code"
        name={`${name}.zip`}
        component={WrappedOutlinedTextField}
        wrapperProps={{ marginRight: 3 }}
        fullWidth
      />
      <Field
        label="Phone"
        name={`${name}.phone`}
        component={WrappedOutlinedTextField}
        wrapperProps={{ marginRight: 3 }}
        fullWidth
      />
      <Field
        label="Fax"
        name={`${name}.fax`}
        component={WrappedOutlinedTextField}
        fullWidth
      />
    </Flex>
    <Flex spaceBetween>
      <Field
        label="Specialty"
        name={`${name}.specialty`}
        component={WrappedOutlinedTextField}
        wrapperProps={{ marginRight: 3 }}
        fullWidth
      />
      <Field
        type="number"
        format={(v) => v && v.replace(/[0-9]+/, '')}
        label="NPI"
        name={`${name}.NPI`}
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

export default RFA_Physician
