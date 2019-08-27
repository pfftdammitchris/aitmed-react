import React from 'react'
import Typography from 'components/Typography'

const Header: React.FC<any> = () => (
  <div style={{ position: 'relative', textAlign: 'center' }}>
    <Typography center>State of California </Typography>
    <Typography>Division of Worker's Compensation</Typography>
    <Typography variant="h6" fontWeight={700}>
      Primary Treating Physician's Progress Report (PR-2)
    </Typography>
  </div>
)

export default Header
