import { useCallback, useEffect, useReducer } from 'react'
import api from 'api/client'

import { useSelector, useDispatch } from 'react-redux'
import {
  fetchAppointmentList_v2 as _fetchAppointmentList_v2,
  removeAppointment as _removeAppointment,
  addAppointment as _addAppointment,
} from 'actions/aitmed'

const initialState = {
  removeDetail: null,
  removing: false,
  error: null,
}
const reducer = (state, action) => {
  switch (action.type) {
    case 'remove':
      return {
        ...state,
        removeDetail: {
          id: action.id,
          status: action.status,
          reason: action.reason,
        },
        removing: true,
        error: null,
      }

    case 'removed':
      return {
        ...state,
        removeDetail: null,
        removing: false,
        error: null,
      }

    case 'error':
      return {
        removeDetail: null,
        removing: false,
        error: action.error,
      }

    default:
      return state
  }
}
const useAppointments = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  // Redux
  const { upcoming, pending, completed } = useSelector((state) => ({
    upcoming: state.aitmed.patient.appointments.upcoming,
    pending: state.aitmed.patient.appointments.pending,
    completed: state.aitmed.patient.appointments.completed,
  }))
  const reduxDispath = useDispatch()
  const fetchAppointmentList_v2 = ({ status, limit, order_by }) =>
    reduxDispath(_fetchAppointmentList_v2({ status, limit, order_by }))
  const removeAppointment = useCallback(
    ({ id, status }) => reduxDispath(_removeAppointment({ id, status })),
    [reduxDispath],
  )
  const addAppointmentRedux = ({ id, appointment, status }) =>
    reduxDispath(_addAppointment({ id, appointment, status }))

  const fetchAppointments = ({
    status = [],
    limit = 100,
    order_by = '-start_time',
  }) => {
    if (status.length > 0) {
      fetchAppointmentList_v2({ status, limit, order_by })
    }
  }

  const isAppointmentExist = useCallback(
    (id) => {
      return (
        upcoming.ids.includes(id) ||
        pending.ids.includes(id) ||
        completed.ids.includes(id)
      )
    },
    [upcoming, pending, completed],
  )

  const getStatus = (id) => {
    if (upcoming.ids.includes(id)) {
      return upcoming.items[id].status
    } else if (pending.ids.includes(id)) {
      return pending.items[id].status
    } else if (completed.ids.includes(id)) {
      return completed.items[id].status
    } else {
      return null
    }
  }

  const cancelAppointment = ({ id, reason }) => {
    if (!id || !reason) {
      throw new Error('id or reason missing')
    }
    const status = getStatus(id)
    if (!status) {
      throw new Error('appointment does not exist')
    }
    dispatch({ type: 'remove', id, status, reason })
  }

  useEffect(() => {
    const { removeDetail, removing } = state
    if (removing) {
      const { id, status, reason } = removeDetail
      if (isAppointmentExist(id)) {
        api
          .cancelAppointment(id, reason)
          .then(() => {
            removeAppointment({ id, status })
          })
          .catch((error) => {
            console.error(error)
            dispatch({ type: 'error', error })
          })
      } else {
        dispatch({ type: 'removed' })
      }
    }
  }, [state, isAppointmentExist, removeAppointment])

  const addAppointment = ({ appointment }) => {
    const { id, status } = appointment
    addAppointmentRedux({ id, appointment, status })
  }

  return {
    ...state,
    upcoming,
    pending,
    completed,
    fetchAppointments,
    cancelAppointment,
    addAppointment,
  }
}

export default useAppointments
