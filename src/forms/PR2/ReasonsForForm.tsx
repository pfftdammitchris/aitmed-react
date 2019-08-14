import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Theme } from '@material-ui/core'
import FormGroup from '@material-ui/core/FormGroup'
import Flex from 'components/Flex'
import Checkbox from 'components/Checkbox'
import useCache from 'hooks/useCache'

const reasons = {
  periodicReport: 'Periodic Report',
  changeInTreatmentPlan: 'Change in Treatment Plan',
  discharged: 'Discharged',
  changeInWorkStatus: 'Change in Work Status',
  referralOrConsultation: 'Need for Referral or Consultation',
  changeInPatientsCondition: "Change in Patient's Condition",
  surgeryOrHospitalization: 'Need for Surgery or Hospitalization',
  infoRequestedBy: 'Info Requested By',
  other: 'Other',
}
const reasonKeys = Object.keys(reasons)
const reasonsList = [
  reasonKeys.slice(0, 4),
  reasonKeys.slice(4, 7),
  reasonKeys.slice(7),
]

interface ReasonsForFormProps {
  input: {
    value: {
      [reason: string]: string
    }
    onChange: (value: { [reason: string]: string }) => void
  }
  meta?: any
  withTextfields: string[]
}

const useStyles = makeStyles({
  checkboxRoot: {
    color: '#333',
    transform: 'scale(0.9)',
    padding: 3,
  },
  checkboxLabel: {
    fontSize: '0.72rem',
    marginLeft: 0,
    marginRight: 11,
  },
})

const ReasonsForForm: React.FC<ReasonsForFormProps> = ({
  input,
  withTextfields = [],
}) => {
  const classes = useStyles()
  const { cache, onMountRef } = useCache()

  function updateOnBlur(key: string) {
    if (input && input.value) {
      if (cache[key]) {
        const nextValues = { ...input.value }
        nextValues[key] = String(cache[key].value || '')
        input.onChange(nextValues)
      } else {
        console.warn(
          `Warning: Tried to invoke input.onChange for textfield "${key}" inside updateOnBlur but it was not in the cache`,
        )
      }
    }
  }

  const onChange = (key: string) => (e: any) => {
    const { checked } = e.target
    if (input && input.value) {
      const nextValues = { ...input.value }
      const node = cache[key]
      // User is checking the box
      if (checked) {
        nextValues[key] = node ? node.value : ''
        if (withTextfields.includes(key)) {
          if (node) {
            nextValues[key] += String(cache[key].value || '')
          } else {
            nextValues[key] = ''
          }
        }
      }
      // User is unchecking the box
      else {
        if (key in nextValues) {
          delete nextValues[key]
          if (withTextfields.includes(key)) {
            if (node) {
              node.value = ''
              delete cache[key]
            }
          }
        }
      }
      input.onChange(nextValues)
    } else {
      console.warn(
        'You tried to invoke onChange inside ReasonsForForm but input or input.value is not an object',
      )
    }
  }

  function onBlur(key: string) {
    return () => {
      updateOnBlur(key)
    }
  }

  function onKeyPress(key: string) {
    return (e: any) => {
      if (e.charCode === 13) {
        updateOnBlur(key)
      }
    }
  }

  return (
    <FormGroup row>
      {reasonsList.map((list, index) => (
        <Flex key={`reasonList${index}`} flexGrow={1} spaceAround>
          {list.map((key: string) => (
            <Checkbox
              key={key}
              wrapperProps={{
                classes: {
                  label: classes.checkboxLabel,
                },
              }}
              classNames={{
                root: classes.checkboxRoot,
              }}
              label={reasons[key]}
              checked={!!input && !!input.value && key in input.value}
              onChange={onChange(key)}
              value={key}
              withTextField={
                withTextfields.includes(key) && {
                  inputRef: onMountRef(key),
                  onBlur: onBlur(key),
                  onKeyPress: onKeyPress(key),
                }
              }
            />
          ))}
        </Flex>
      ))}
    </FormGroup>
  )
}

export default ReasonsForForm
