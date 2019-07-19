import React from 'react'
import { locale } from 'localization/localization'
import renderSelectField from 'components/common/renderSelectField'
import { genders } from 'util/info'

// the values in this object are the values the server only accepts
// keep the keys in this object in sync with the locale file for now
export const genderMapper = {
  Male: 'MALE',
  Female: 'FEMALE',
  'Prefer Not to Say': 'PNS',
}

// will replace this with the locale version below soon
export const formattedGenders = genders.map(({ code, translations }) => ({
  value: code,
  label: translations['en-US'],
}))

export const formattedGendersLocale = Object.keys(
  locale.common.personalInformation.you.genderOptions,
  // the key from locale genderOptions object
).map((genderOptionKey) => {
  const genderOptionValue =
    locale.common.personalInformation.you.genderOptions[genderOptionKey]
  return {
    // the "code" key from the server response is the value
    value: genderMapper[genderOptionValue],
    // the gender option value in the locale object looks good to be a label in the UI
    label: genderOptionValue,
  }
})

class SelectGender extends React.Component {
  // Used as an escape-hatch to overwrite and detect custom input classes in react-final-forms
  static inputType = 'select'

  componentDidMount = () => {
    const { input } = this.props
    if (!input.value) {
      input.onChange(formattedGenders[0].value)
    }
  }

  onChange = (value) => {
    this.props.onChange(value)
  }

  render() {
    const { children, input, meta, label, localeMode, ...custom } = this.props

    const SelectField = renderSelectField

    if (!input)
      throw new Error(
        'Missing an input prop with shape: { value, onChange, name } in <SelectGender />',
      )

    return (
      <SelectField
        data-testid="select-gender-child"
        label={label}
        children={children}
        input={input}
        meta={meta}
        items={localeMode ? formattedGendersLocale : formattedGenders}
        disableUnderline
        fullWidth
        native
        {...custom}
      />
    )
  }
}

export default SelectGender
