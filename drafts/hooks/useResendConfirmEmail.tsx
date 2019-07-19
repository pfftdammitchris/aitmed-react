import { useReducer, useRef } from 'react'
import { navigate } from 'gatsby'
import { error as toastError } from 'util/toast'
import api from 'api/client'

type Action =
  | { type: 'sending' }
  | { type: 'sent' }
  | { type: 'error'; error: any; errorMessage: string }
  | { type: 'timed-out' }

interface InitialState {
  sending: boolean
  sent: boolean
  sendError: any
  timedOut: boolean
  errorMessage: string
}

const initialState = {
  sending: false,
  sent: false,
  sendError: null,
  timedOut: false,
  errorMessage: '',
}

const reducer = (state: InitialState, action: Action): InitialState => {
  switch (action.type) {
    case 'sending':
      return { ...initialState, sending: true }
    case 'sent':
      return { ...initialState, sent: true }
    case 'error':
      return {
        ...initialState,
        sendError: action.error,
        errorMessage: action.errorMessage,
      }
    case 'timed-out':
      return { ...initialState, timedOut: true }
    default:
      return state
  }
}

const useResendConfirmEmail = ({
  location,
  modal,
  timeout = 25000,
}: {
  location: {
    search: string
  }
  modal: {
    opened: boolean
    open: () => void
    close: () => void
  }
  timeout?: number
}) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const timeoutRef = useRef<any>()

  const onSubmit = (values: { email?: string }) => {
    return new Promise((resolve, reject) => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      dispatch({ type: 'sending' })

      timeoutRef.current = setTimeout(() => {
        dispatch({ type: 'timed-out' })
      }, timeout)

      api
        .sendConfirmationEmail(values.email)
        .then(() => {
          if (timeoutRef.current) clearTimeout(timeoutRef.current)
          dispatch({ type: 'sent' })
          modal.open()
          resolve()
        })
        .catch((error: any) => {
          if (timeoutRef.current) clearTimeout(timeoutRef.current)
          console.error(error.response)
          let errMsg = ''
          if (
            error.response &&
            error.response.data &&
            error.response.data.message
          ) {
            errMsg = error.response.data.message
            toastError(errMsg)
          } else if (error.response.status === 500) {
            errMsg = error.message
            toastError('Server error. ' + errMsg)
          } else {
            errMsg = error.message
            toastError(errMsg)
          }
          dispatch({ type: 'error', error, errorMessage: errMsg })
          reject(error)
        })
    })
  }

  const onClose = () => {
    modal.close()
    let accountType: string | null = ''
    if (location) {
      if (location.search) {
        const searchParams = new URLSearchParams(location.search)
        accountType = searchParams.get('a')
      }
    }
    navigate(`/signin${accountType ? `/${accountType}` : ''}`)
  }

  return {
    ...state,
    onSubmit,
    onClose,
  }
}

export default useResendConfirmEmail
