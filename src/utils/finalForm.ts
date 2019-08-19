import * as types from './finalFormUtilTypes'

// export const filterModifiedValues = (
//   values: any,
//   modifiedFields: types.ModifiedFields,
// ) => {
//   const reducer = (acc: any, fieldName: string) => {
//     const modifiedField = modifiedFields[fieldName]
//     if (modifiedField) {
//       const [field, subField] = fieldName.split('.')
//       // Bring out the sub field to top level to submit as one flat object in the API call
//       acc[subField] = values[field][subField]
//     }
//     return acc
//   }
//   return reduce(Object.keys(modifiedFields), reducer, {})
// }
