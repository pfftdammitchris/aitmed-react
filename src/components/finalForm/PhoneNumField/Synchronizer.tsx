import * as React from 'react'
import { FormSpy } from 'react-final-form'
import { AsYouType, CountryCode } from 'libphonenumber-js'

export interface SynchronizerProps {
  phoneKey: string
}

export interface PhoneUpdaterProps {
  countryCode: CountryCode
  phoneNumber: string
  phoneKey: string
  form: any
}

const PhoneUpdater: React.FC<PhoneUpdaterProps> = React.memo(
  ({ phoneKey, countryCode, phoneNumber, form }) => {
    const phoneValue = new AsYouType(countryCode).input(phoneNumber)
    form.change(`${phoneKey}.phone_number`, phoneValue)

    // Always keep it populated
    React.useEffect(() => {
      if (!countryCode) {
        form.change(`${phoneKey}.code`, 'US')
      }
    }, [countryCode, form, phoneKey])

    return null
  },
  (props, nextProps) => props.countryCode === nextProps.countryCode,
)

function Synchronizer({ phoneKey, ...rest }: SynchronizerProps) {
  return (
    <FormSpy
      subscription={{ values: true }}
      render={({ values, form }) => (
        <PhoneUpdater
          phoneKey={phoneKey}
          countryCode={values && values[phoneKey] && values[phoneKey].code}
          phoneNumber={
            values && values[phoneKey] && values[phoneKey].phone_number
          }
          form={form}
        />
      )}
      {...rest}
    />
  )
}

export default Synchronizer
