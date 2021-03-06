import React from 'react'
import Button from '../../../components/Button'

const ProviderPortalMeetingICD10AddButton: React.FC<any> = (props) => (
  <Button
    type="button"
    hover={{ secondary: 'white' }}
    title="Add another ICD10"
    secondary
    {...props}
  >
    Add
  </Button>
)

export default ProviderPortalMeetingICD10AddButton
