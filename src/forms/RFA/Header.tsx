import React from 'react'
import Typography from 'components/Typography'

const RFA_Header: React.FC<any> = () => (
  <div style={{ position: 'relative', textAlign: 'center' }}>
    <Typography center>
      State of California, Division of Worker's Compensation
    </Typography>
    <Typography variant="h6" fontWeight={700}>
      REQUEST FOR AUTHORIZATION
    </Typography>
    <Typography variant="caption" fontWeight={700}>
      DWC Form RFA
    </Typography>
  </div>
)

export default RFA_Header
