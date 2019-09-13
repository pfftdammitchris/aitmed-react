/* -------------------------------------------------------
  ---- VALIDATORS (pass into "validate" prop to <Field />)
-------------------------------------------------------- */

export const validate = {
  NPI(str: string) {
    if (!str) return undefined
    if (str.length > 32) {
      return 'NPI cannot exceed 32 characters'
    }
    return undefined
  },
}
