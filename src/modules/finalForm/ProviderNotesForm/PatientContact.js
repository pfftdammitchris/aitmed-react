import React from 'react'
import PropTypes from 'prop-types'
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined'
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined'
import Typography from '../../../components/common/Typography'

const ProviderMeetingDrawerPatientContact = ({
  firstName,
  middleName,
  lastName,
  email,
  primaryPhoneNum,
}) => (
  <div>
    <Typography variant="caption" primary>
      Patient contact:
    </Typography>
    <Typography variant="caption" style={{ marginLeft: 15 }} secondary>
      {firstName} {middleName && middleName + '. '} {lastName}
    </Typography>
    <Typography
      variant="caption"
      style={{ marginLeft: 15 }}
      title="Email and Phone Number"
      gutterBottom
      paragraph
    >
      <EmailOutlinedIcon
        style={{ color: '#356f97', transform: 'scale(1.2)' }}
      />{' '}
      {email}{' '}
      <PhoneOutlinedIcon
        style={{ color: '#356f97', transform: 'scale(1.2)' }}
      />{' '}
      {primaryPhoneNum}
    </Typography>
  </div>
)

ProviderMeetingDrawerPatientContact.propTypes = {
  email: PropTypes.string,
  firstName: PropTypes.string,
  middleName: PropTypes.string,
  lastName: PropTypes.string,
  primaryPhoneNum: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default React.memo(ProviderMeetingDrawerPatientContact)
