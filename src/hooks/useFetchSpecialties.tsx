import React from 'react'
import axios from 'axios'
import { AiTmedContext } from '../AiTmedReact'

interface State {
  fetching: boolean
  fetched: boolean
  fetchError: typeof Error | null
  timedOut: boolean
  specialties: null | any[]
}

type Action =
  | { type: 'fetching' }
  | { type: 'fetched' }
  | { type: 'fetch-error'; error: typeof Error | null }
  | { type: 'timed-out' }
  | { type: 'set-specialties'; specialties: any[] }

const initialState: State = {
  fetching: false,
  fetched: false,
  fetchError: null,
  timedOut: false,
  specialties: null,
}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    default:
      return state
  }
}

const useFetchSpecialties = ({
  fetchOnMount,
  timeout = 20000,
}: {
  fetchOnMount?: boolean
  timeout?: number
}) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  const { baseUrl } = React.useContext(AiTmedContext)
  const timeoutRef = React.useRef<any>()

  async function fetchSpecialties() {
    try {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      timeoutRef.current = setTimeout(() => {
        dispatch({ type: 'timed-out' })
      }, timeout)
      console.log(baseUrl)

      const url = `${baseUrl}/v2/info/specialties/`
      const response = await axios.get(url)
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      dispatch({ type: 'set-specialties', specialties: response.data.data })
      return response.data
    } catch (error) {
      console.error(error)
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      throw error
    }
  }

  React.useEffect(() => {
    if (fetchOnMount) {
      dispatch({ type: 'fetching' })
      fetchSpecialties()
        .then((specialties) => {
          console.log(specialties)
          dispatch({ type: 'fetched' })
        })
        .catch((error) => {
          dispatch({ type: 'fetch-error', error })
        })
    }
  }, [])

  return {
    ...state,
  }
}

export default useFetchSpecialties
