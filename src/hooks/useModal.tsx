import { useReducer } from 'react'

export interface InitialState {
  opened: boolean
  data: any
  context?: any
}

export interface UseModalReturnType extends InitialState {
  open: ({ data, context }: any) => void
  close: () => void
}

type Action = { type: 'open'; data?: any; context?: any } | { type: 'close' }

const initialState: InitialState = {
  opened: false,
  data: {},
  context: null, // Just provided for convenience
}

const reducer = (state: InitialState = initialState, action: Action) => {
  switch (action.type) {
    case 'open':
      return {
        ...state,
        opened: true,
        data: action.data || {},
        context: action.context || null,
      }
    case 'close':
      return { ...state, opened: false, data: {}, context: null }
    default:
      return state
  }
}

const useModal = (): UseModalReturnType => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const open = ({ data, context }: any = {}) => {
    dispatch({ type: 'open', data, context })
  }

  const close = () => {
    dispatch({ type: 'close' })
  }

  return {
    ...state,
    open,
    close,
  }
}

export default useModal
