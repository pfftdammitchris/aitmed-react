// Re-usable checkbox > with comments tailored for react-final-form
import { useEffect, useReducer } from 'react'
import reduce from 'lodash/reduce'
import isPlainObject from 'lodash/isPlainObject'

type Action =
  | { type: 'on-check'; name: string }
  | { type: 'on-text-change'; values: { [name: string]: string } }

interface State {
  values: { [name: string]: string }
  current?: string
}

interface UseCheckboxesObjectized {
  options: string[]
  value: { [name: string]: string }
  onChange: (value: { [name: string]: string }) => void
}

const toComments = (options: string[]) =>
  reduce(
    options,
    (acc: { [option: string]: string }, option: string) => {
      if (option && !acc[option]) {
        acc[option] = ''
      }
      return acc
    },
    {},
  )

const initialState: State = {
  values: {},
  // current: '', // current will be returned after the user inputs their first value
}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'on-check':
      return {
        ...state,
        current: action.name,
      }
    case 'on-text-change':
      return {
        ...state,
        values: {
          ...state.values,
          ...action.values,
        },
      }
    default:
      return state
  }
}

const useCheckboxesObjectized = ({
  options = [],
  value,
  onChange,
}: UseCheckboxesObjectized) => {
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    values: toComments(options),
  })

  const onCheckboxChange = (name: string) => {
    if (state.current === name) return
    dispatch({ type: 'on-check', name })
  }

  const onTextChange = (name: string) => (e: any) => {
    dispatch({ type: 'on-text-change', values: { [name]: e.target.value } })
  }

  useEffect(() => {
    if (isPlainObject(value)) {
      const { current } = state
      // If the value's field is not using the state's current field
      if (current) {
        if (!(current in value)) {
          onChange({ [current]: state.values[current] })
        } else {
          // If the value's field value is different than the one in the state
          if (value[current] !== state.values[current]) {
            onChange({ [current]: state.values[current] })
          }
        }
      }
    }
  }, [state, value, onChange])

  return {
    ...state,
    onCheckboxChange,
    onTextChange,
  }
}

export default useCheckboxesObjectized
