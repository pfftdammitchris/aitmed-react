import React from 'react'
import Typography from '../../../components/Typography'

const ICD10OutsideLink = () => (
  <Typography variant="caption">
    To see a more descriptive list, click{' '}
    <a
      href="https://icd.codes/icd10cm"
      target="_blank"
      rel="noopener noreferrer"
    >
      here
    </a>
    .
  </Typography>
)

export default React.memo(ICD10OutsideLink, () => true)
