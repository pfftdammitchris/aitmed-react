import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { FieldArray } from 'react-final-form-arrays'
import ICD10 from 'modules/ICD10'

interface DiagnosesProps {}

const useStyles = makeStyles({})

const Diagnoses: React.FC<DiagnosesProps> = (props) => {
  const classes = useStyles(props)

  return (
    <FieldArray
      component={ICD10}
      name="diagnoses"
      subscription={{ blur: true }}
    />
  )
}

export default Diagnoses
