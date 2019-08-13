import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Theme } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import Checkbox from '@material-ui/core/Checkbox'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'

interface Props {
  input: {
    value: {
      [reason: string]: string
    }
    onChange: (value: { [reason: string]: string }) => void
  }
  meta: any
  withTextfields: string[]
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    border: '1px solid teal',
  },
}))

const reasons = {
  periodicReport: 'Periodic Report',
  changeInTreatmentPlan: 'Change in Treatment Plan',
  discharged: 'Discharged',
  changeInWorkStatus: 'Change in Work Status',
  referralOrConsultation: 'Need for Referral or Consultation',
  infoRequestedBy: 'Info Requested By',
  changeInPatientsCondition: "Change in Patient's Condition",
  surgeryOrHospitalization: 'Need for Surgery or Hospitalization',
  other: 'Other',
}

const reasonKeys = Object.keys(reasons)

const ReasonsForForm: React.FC<Props> = ({
  input,
  meta,
  withTextfields = [],
  ...props
}) => {
  const classes = useStyles()
  const cachedTextFieldsRef = React.useRef({})
  const cachedTextFields = cachedTextFieldsRef.current

  function updateOnBlur(key: string, thisName: string = '<unknown>') {
    if (input && input.value) {
      if (cachedTextFields[key]) {
        const nextValues = { ...input.value }
        nextValues[key] = String(cachedTextFields[key].value) || ''
        input.onChange(nextValues)
      } else {
        console.warn(
          `Warning: Tried to invoke input.onChange for textfield "${key}" inside updateOnBlur -> ${thisName} but it was not in the cache. Check innerRef on the TextField`,
        )
      }
    }
  }

  const onChange = (key: string) => (e: any) => {
    const { checked } = e.target
    if (input && input.value) {
      const nextValues = { ...input.value }
      // User is checking the box
      if (checked) {
        nextValues[key] = ''
        if (withTextfields.includes(key)) {
          if (cachedTextFields[key]) {
            nextValues[key] += String(cachedTextFields[key].value) || ''
          }
        }
      }
      // User is unchecking the box
      else {
        if (key in nextValues) {
          delete nextValues[key]
          if (withTextfields.includes(key)) {
            if (cachedTextFields[key]) {
              cachedTextFields[key].value = ''
            }
          }
        }
      }
      return input.onChange(nextValues)
    } else {
      console.warn(
        'You tried to invoke onChange inside ReasonsForForm but input or input.value is not an object',
      )
    }
  }

  const onTextFieldBlur = (key: string) => () => {
    updateOnBlur(key, 'onTextFieldBlur')
  }

  const onKeyPress = (key: string) => (e: any) => {
    if (e.charCode === 13) {
      updateOnBlur(key, 'onKeyPress')
    }
  }

  // Should insert the DOM references to the cache before any html element
  //    event handlers are invoked
  const applyRef = (key: string) => (e: any) => {
    if (key && e) {
      if (!(key in cachedTextFields)) {
        if (document.getElementById(key)) {
          cachedTextFields[key] = document.getElementById(key)
        }
        if (cachedTextFields[key] == undefined) {
          console.warn(
            `Warning: Tried to set textfield "${key}" in the cache but it was null or undefined`,
          )
        }
      }
    }
  }

  return (
    <FormGroup className={classes.root} row>
      {reasonKeys.map((key: string) => (
        <>
          <FormControlLabel
            control={
              <Checkbox
                checked={!!input && !!input.value && key in input.value}
                onChange={onChange(key)}
                value={key}
                {...props}
              />
            }
            label={reasons[key]}
          />
          {withTextfields.includes(key) && (
            <TextField
              innerRef={applyRef(key)}
              onBlur={onTextFieldBlur(key)}
              onKeyPress={onKeyPress(key)}
              id={key}
            />
          )}
        </>
      ))}
    </FormGroup>
  )
}

export default ReasonsForForm
