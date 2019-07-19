import React from 'react'
import { MdDone } from 'react-icons/md'
import Typography from 'components/common/Typography'

const BankVerified = (props) => (
  <Typography variant="subheading" primary center {...props}>
    <MdDone style={{ transform: 'translateY(5px)', width: 30, height: 30 }} />{' '}
    Your bank account is verified.
  </Typography>
)

export default BankVerified
