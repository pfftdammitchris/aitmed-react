import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { error as toastError, success as toastSuccess } from 'util/toast'
import { fetchPaymentProfile } from 'actions/patients'
import { navigate } from 'gatsby'
import api from 'api/client'
import {
  InitialValues,
  UseUpdatePaymentAction,
  UseUpdatePaymentInitialState,
  UseUpdatePaymentArguments,
} from './types'

const { useCallback, useReducer, useRef } = React

const initialState: UseUpdatePaymentInitialState = {
  updating: false,
  updated: false,
  updateError: null,
  updatingTimedOut: false,
  attempts: 0,
}

const reducer = (
  state: UseUpdatePaymentInitialState,
  action: UseUpdatePaymentAction,
) => {
  switch (action.type) {
    case 'updating':
      return { ...state, ...initialState, updating: true }
    case 'updated':
      return { ...state, ...initialState, updated: true }
    case 'update-failed':
      return { ...state, ...initialState, updateError: action.error }
    case 'updating-timed-out':
      return { ...state, ...initialState, updatingTimedOut: true }
    case 'increment-attempts':
      return { ...state, attempts: action.count || state.attempts }
    default:
      return state
  }
}

const useUpdatePayment = ({
  id,
  timeout = 25000,
  location,
}: UseUpdatePaymentArguments = {}) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const dispatchAction = useDispatch()

  const { checkoutState, paymentProfileBeingEdited } = useSelector(
    (state) => ({
      checkoutState: state.aitmed.patient.checkoutState,
      paymentProfileBeingEdited:
        state.aitmed.patient.bank.paymentMethods[id] ||
        state.aitmed.patient.checkoutState.checkout.payment,
    }),
    [id],
  )
  const timedOutRef = useRef<any>()

  const updatePaymentProfile = useCallback(
    async (values: InitialValues) => {
      try {
        dispatch({ type: 'updating' })
        const timeoutDispatcher = () => dispatch({ type: 'updating-timed-out' })
        // Set a timer for timed out UX
        timedOutRef.current = setTimeout(timeoutDispatcher, timeout)
        const expiration_date = values.year + '-' + values.month
        const card_number = values.card_number
          ? values.card_number.replace(/\s/g, '')
          : ''
        const params = { ...values, expiration_date, card_number }
        const updatedPaymentProfile = await api.updateChasePaymentProfile(
          id,
          params,
        )

        if (timedOutRef.current) clearTimeout(timedOutRef.current)
        dispatch({ type: 'updated' })
        toastSuccess('Your payment method has been updated.')
        // Just re-fetch to refresh the redux slice to be safe
        dispatchAction(fetchPaymentProfile('CHASE'))
        if (
          location.state &&
          location.state.from === '/portal/patient/get_care/checkout'
        ) {
          //this accounts for the case that the patient's payment fails and are redirected to
          //update their payment. The intent is to redirect them back to the checkout flow.
          navigate('/portal/patient/get_care/checkout', {
            state: {
              checkout: {
                ...checkoutState.checkout,
                payment: updatedPaymentProfile,
              },
            },
          })
        } else {
          window.history.back()
        }
      } catch (error) {
        if (timedOutRef.current) clearTimeout(timedOutRef.current)
        dispatch({ type: 'update-failed', error })
        dispatch({ type: 'increment-attempts', count: state.attempts + 1 })
        toastError(
          'An error occured while attempting to create your payment payment option.',
        )
      }
    },
    [state.attempts],
  )

  return {
    ...state,
    updatePaymentProfile,
    paymentProfileBeingEdited,
  }
}

export default useUpdatePayment
