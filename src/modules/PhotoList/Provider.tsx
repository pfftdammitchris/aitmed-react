import React from 'react'
import isPlainObject from 'lodash/isPlainObject'
import reduce from 'lodash/reduce'
import { FaDownload } from 'react-icons/fa'
import { MdZoomOutMap, MdRemove } from 'react-icons/md'
import format from 'date-fns/format'
import Context from './Context'
import { processItems } from './utils'
import { isArray, downloadLink } from '../../utils'

const initialState = {
  items: null,
  actions: null,
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'set-actions':
      return { ...state, actions: action.actions }
    case 'set-items':
      return { ...state, items: action.items || [] }
    default:
      return state
  }
}

function usePhotoList({
  items,
  actions,
  defaultDownloadName,
  placeholder,
} = {}) {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  const today = format(new Date(), 'yy-MM-dd_hh:mma')
  const defaultFileName = defaultDownloadName || today

  // const processActions = React.useCallback(
  //   (actions) => {
  //     if (!isPlainObject(actions)) return []
  //     const actionKeys = Object.keys(actions)
  //     const reduceFunc = (arr, actionKey) => {
  //       if (nativeActions.current.hasOwnProperty(actionKey)) {
  //         let action
  //         // If it is a boolean, the dev wants to use the default implementation. Object = overwrite
  //         if (typeof actions[actionKey] === 'boolean') {
  //           action = nativeActions.current[actionKey]
  //         } else action = actions[actionKey]
  //         arr.push(action)
  //       } else arr.push(actions[actionKey])
  //       return arr
  //     }
  //     return reduce(actionKeys, reduceFunc, [])
  //   },
  //   [nativeActions],
  // )

  // React.useEffect(() => {
  //   setActions(processActions({}))
  // }, [processActions])

  // React.useEffect(() => {
  //   setActions(processActions(actionProps))
  // }, [actionProps, processActions])

  React.useEffect(() => {
    if (isArray(items)) {
      dispatch({ type: 'set-items', items: processItems(items) })
    }
  }, [])

  return {
    ...state,
    defaultFileName,
    placeholder,
  }
}

function PhotoListContextProvider({ children, ...rest }: any) {
  const ctx = usePhotoList(rest)
  return <Context.Provider value={ctx}>{children}</Context.Provider>
}

export default PhotoListContextProvider
