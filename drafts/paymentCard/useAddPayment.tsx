import * as React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { error as toastError, success as toastSuccess } from 'util/toast'
import { insertPaymentMethod } from 'actions/patients'
import api from 'api/client'
import {
  InitialValues,
  UseAddPaymentAction,
  UseAddPaymentInitialState,
} from './types'

const { useReducer, useRef } = React

// Used for reducers to have UX cleared for creating states, + prevents boilerplate
const createInitialState = {
  creating: false,
  created: false,
  createError: null,
  creatingTimedOut: false,
}

const initialState: UseAddPaymentInitialState = {
  // Add more when necessary
  ...createInitialState,
}

const reducer = (
  state: UseAddPaymentInitialState,
  action: UseAddPaymentAction,
) => {
  switch (action.type) {
    case 'creating':
      return { ...state, ...createInitialState, creating: true }
    case 'created':
      return { ...state, ...createInitialState, created: true }
    case 'create-failed':
      return { ...state, ...createInitialState, createError: action.error }
    case 'creating-timed-out':
      return { ...state, ...createInitialState, creatingTimedOut: true }
    default:
      return state
  }
}

const useAddPayment = ({ timeout = 25000 } = {}) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const dispatchAction = useDispatch()

  const timedOutRef = useRef<any>()

  const addPaymentProfile = async (values: InitialValues) => {
    try {
      dispatch({ type: 'creating' })
      const timeoutDispatcher = () => dispatch({ type: 'creating-timed-out' })
      // Set a timer for timed out UX
      timedOutRef.current = setTimeout(timeoutDispatcher, timeout)
      const expiration_date = values.year + '-' + values.month
      const card_number = values.card_number
        ? values.card_number.replace(/\s/g, '')
        : ''
      const params = { ...values, expiration_date, card_number }
      const result = await api.createChasePaymentProfile(params)
      if (timedOutRef.current) clearTimeout(timedOutRef.current)
      dispatch({ type: 'created' })
      toastSuccess('Your payment option has been successfully created.')
      // Update the redux state slice so the app will be updated
      dispatchAction(insertPaymentMethod(result))
      window.history.back()
    } catch (error) {
      if (timedOutRef.current) clearTimeout(timedOutRef.current)
      dispatch({ type: 'create-failed', error })
      toastError(
        'An error occured while attempting to create your payment payment option.',
      )
    }
  }

  return {
    ...state,
    addPaymentProfile,
  }
}

useAddPayment.propTypes = {
  index: PropTypes.number.isRequired,
}

export default useAddPayment
