import cx from 'classnames'

export function getPhoneFieldProps({ classes, errMsg = '', userProps = {} }) {
  const {
    classes: userClasses = {},
    className: userClassName,
    inputProps = {},
    inputLabelProps,
    ...restUserProps
  } = userProps

  return {
    ...restUserProps,
    classes: {
      ...userClasses,
      root: cx(classes.phone, userProps.className, userClasses.root),
    },
    margin: 'normal',
    inputProps: {
      ...inputProps,
      className: cx(classes.phoneInput, inputProps.className),
    },
    inputLabelProps: {
      shrink: true,
      ...inputLabelProps,
    },
    error: !!errMsg,
    helperText: errMsg,
  }
}

export function parsePhoneField({ currentPhoneVal, input }) {
  return (value: string) => {
    const trimValue = value.trim()
    let phone
    // If deleting a non number character
    if (
      trimValue.length < currentPhoneVal.length &&
      !/(\d)$/.test(currentPhoneVal)
    ) {
      phone = trimValue
    } else {
      phone = new AsYouType(input.value.code).input(trimValue)
    }
    return phone
  }
}
