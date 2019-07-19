import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { internetOnline, internetOffline } from 'actions/app'

/*
  Basically used to dispatch online/offline/disconnected status on redux
    Has potential for more custom use cases in the future
*/

const useInternet = ({ onOnline, onOffline } = {}) => {
  const dispatchAction = useDispatch()
  const isOnline = useSelector((state) => state.app.internet.isOnline)

  // Registers evente listeners to dispatch online/offline statuses to redux
  useEffect(() => {
    const handleOnline = () => {
      if (onOnline) onOnline()
      dispatchAction(internetOnline())
    }

    const handleOffline = () => {
      if (onOffline) onOffline()
      dispatchAction(internetOffline())
    }

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return function cleanup() {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [dispatchAction, onOffline, onOnline])

  // Invokes the redux dispatchers when there is a change in the online status of the browser
  useEffect(() => {
    if (window.navigator.onLine && !isOnline) {
      dispatchAction(internetOnline())
    } else if (!window.navigator.onLine && isOnline) {
      dispatchAction(internetOffline())
    }
  }, [dispatchAction, isOnline])

  return {
    isOnline,
  }
}

export default useInternet
