import { useReducer, useEffect, useCallback, useRef } from 'react'
import isPlainObject from 'lodash/isPlainObject'
import moment from 'moment'
import reduce from 'lodash/reduce'
import { FaDownload } from 'react-icons/fa'
import { MdZoomOutMap, MdRemove } from 'react-icons/md'
import { browser } from 'util/extractions'

const initialState = {
  actions: null,
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'set-actions':
      return { ...state, actions: action.actions }
    default:
      return state
  }
}

const usePhotoList = ({
  actionProps,
  defaultDownloadName,
  onZoom = () => {},
  onRemove = () => {},
  onDownload = download,
} = {}) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const nativeActions = useRef({
    zoom: {
      id: 'photo-list-zoom',
      Icon: MdZoomOutMap,
      wrapperProps: { title: 'Zoom into view' },
      onClick: onZoom,
    },
    download: {
      id: 'photo-list-download',
      Icon: FaDownload,
      wrapperProps: { title: 'Download' },
      onClick: onDownload,
    },
    remove: {
      id: 'photo-list-remove',
      Icon: MdRemove,
      wrapperProps: { title: 'Remove this row' },
      onClick: onRemove,
    },
  })

  const today = moment().format('MM-DD-YY_hh:mma')
  const defaultFileName = defaultDownloadName || today

  const setActions = (changes) => {
    dispatch({ type: 'set-actions', actions: changes })
  }

  const processActions = useCallback(
    (actions) => {
      if (!isPlainObject(actions)) return []
      const actionKeys = Object.keys(actions)
      const reduceFunc = (arr, actionKey) => {
        if (nativeActions.current.hasOwnProperty(actionKey)) {
          let action
          // If it is a boolean, the dev wants to use the default implementation. Object = overwrite
          if (typeof actions[actionKey] === 'boolean') {
            action = nativeActions.current[actionKey]
          } else action = actions[actionKey]
          arr.push(action)
        } else arr.push(actions[actionKey])
        return arr
      }
      return reduce(actionKeys, reduceFunc, [])
    },
    [nativeActions],
  )

  function download(src, { ext = '', fileName = defaultFileName }) {
    if (browser().versions.ios) {
      window.open(src, fileName)
    } else {
      const dlink = document.createElement('a')
      dlink.download = fileName
      dlink.href = src
      document.body.appendChild(dlink)
      dlink.click()
      document.body.removeChild(dlink)
    }
  }
  useEffect(() => {
    nativeActions.current = {
      zoom: {
        id: 'photo-list-zoom',
        Icon: MdZoomOutMap,
        wrapperProps: { title: 'Zoom into view' },
        onClick: onZoom,
      },
      download: {
        id: 'photo-list-download',
        Icon: FaDownload,
        wrapperProps: { title: 'Download' },
        onClick: onDownload,
      },
      remove: {
        id: 'photo-list-remove',
        Icon: MdRemove,
        wrapperProps: { title: 'Remove this row' },
        onClick: onRemove,
      },
    }
  })
  useEffect(() => {
    setActions(processActions(actionProps))
  }, [actionProps, processActions])

  return {
    ...state,
    download,
    defaultFileName,
    onZoom,
  }
}

export default usePhotoList
