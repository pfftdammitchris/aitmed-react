import { useState, useEffect, useRef } from 'react'
import get from 'lodash/get'
import { useSelector } from 'react-redux'
import { request } from 'util/requests'
import urls from 'config/urls'

// Provider Portal
// Needed to keep the waiting queue fresh and constantly updated for good UX
// Some loading indicators will go along well with this

const useWalkinQueue = ({ walkins = [] }) => {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [queue, setQueue] = useState([])
  const [fetchedTvUids, setFetchedTvUids] = useState([])

  const walkinsMap = useRef({})

  const user = useSelector((state) => state.app.user.user)
  const profileFetched = useSelector((state) => state.app.user.profileFetched)

  const convergeResponseWithWalkin = (tv_uid, cb) => (response) => {
    cb({
      attributes: get(response, 'data.users[0].attributes', {}),
      ...(walkinsMap.current[tv_uid] || {}),
    })
  }

  // Loops through the array of walkin patients and fetches their info
  const fetchUserInfo = (tv_uid) => {
    return new Promise((resolve, reject) => {
      request({
        url: urls.truevault.users.read(tv_uid, true),
        method: 'get',
        headers: {
          Authorization: `Basic ${btoa(user.profile.tv_api_key + ':')}`,
        },
      })
        .then((response) => {
          convergeResponseWithWalkin(tv_uid, resolve)(response)
        })
        .catch((err) => {
          console.log(err)
          // TODO: Handle this in the UX
          setError('An error occurred.')
          reject(err)
        })
    })
  }

  const promisesOfRequestsReducer = (fetchedIds) => {
    return (acc, walkin) => {
      const { patient_tv_uid: tv_uid } = walkin
      if (!walkinsMap.current[tv_uid]) {
        walkinsMap.current[tv_uid] = walkin
      }
      if (!fetchedTvUids.includes(tv_uid)) {
        acc.push(fetchUserInfo(tv_uid))
        fetchedIds.push(tv_uid)
      }
      return acc
    }
  }

  const getPromisesOfRequests = (_walkins = walkins) => {
    // Used for preventing future duplicate requests
    const fetchedIds = []
    const reducer = promisesOfRequestsReducer(fetchedIds)
    const promisesOfRequests = _walkins.reduce(reducer, [])
    setFetchedTvUids(fetchedIds)
    return promisesOfRequests
  }

  useEffect(() => {
    if (!profileFetched) {
      setError('Not Authorized')
    } else {
      if (walkins.length !== queue.length) {
        Promise.all(getPromisesOfRequests(walkins))
          .then((results) => {
            setQueue(results)
            setLoading(false)
          })
          .catch((err) => {
            console.error(err)
            setLoading(false)
          })
      }
    }
  }, [walkins.length, queue.length, profileFetched, walkins])

  return {
    loading,
    queue,
    count: queue.length,
    error,
  }
}

export default useWalkinQueue
