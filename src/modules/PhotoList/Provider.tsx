import React from 'react'
import format from 'date-fns/format'
import * as T from './types'
import Context from './Context'
import { processItems } from './utils'
import { isArray, isFunction, validReactHtmlAttrs } from '../../utils'
import { OnClick } from '../../types'

export interface PhotoListContextValue {
  actions?: T.PhotoListItemAction[]
  items: T.PhotoListItem[] | null
  icons?: T.PhotoListIconConfig
  defaultDownloadName?: string
  placeholder?: React.ReactNode | string
  onVisualClick?: T.OnVisualClick
  onTitleClick: T.OnTitleClick
  onDescriptionClick?: T.OnDescriptionClick
  onActionClick?: T.OnActionClick
}

type PhotoListAction =
  | { type: 'set-actions'; actions: any }
  | { type: 'set-items'; items: T.PhotoListItem[] }

interface PhotoListState {
  items: T.PhotoListItem[] | null
  actions: any
}

const initialState: PhotoListState = {
  items: null,
  actions: null,
  // mode: 'compact', // inc. feature
}

const reducer = (
  state: PhotoListState = initialState,
  action: PhotoListAction,
): PhotoListState => {
  switch (action.type) {
    case 'set-actions':
      return { ...state, actions: action.actions }
    case 'set-items':
      return { ...state, items: action.items || [] }
    default:
      return state
  }
}

const today = format(new Date(), 'yy-MM-dd_hh:mma')

function usePhotoList({
  items,
  icons,
  actions,
  placeholder,
  defaultDownloadName,
  onVisualClick: onVisualClickProp,
  onTitleClick: onTitleClickProp,
  onDescriptionClick: onDescriptionClickProp,
}: PhotoListContextValue) {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  const divRef = React.useRef(document.createElement('div'))
  const imgRef = React.useRef(document.createElement('img'))
  const inputRef = React.useRef(document.createElement('input'))

  const defaultFileName = defaultDownloadName || today

  // Will strip away custom attrs that isn't supported by native html
  function returnValidHtmlAttrs(obj) {
    return Object.keys(obj).reduce((acc, prop) => {
      if (
        prop in divRef.current ||
        prop in imgRef.current ||
        prop in inputRef.current ||
        validReactHtmlAttrs.includes(prop)
      ) {
        acc[prop] = obj[prop]
      }
      return acc
    }, {})
  }

  function onVisualClick(item: T.PhotoListItem, index: number): OnClick {
    return (e) => {
      if (isFunction(onVisualClickProp)) {
        onVisualClickProp({ item, index }, e)
      }
    }
  }

  function onTitleClick(item: T.PhotoListItem, index: number): OnClick {
    return (e) => {
      if (isFunction(onTitleClickProp)) {
        onTitleClickProp({ item, index }, e)
      }
    }
  }

  function onDescriptionClick(item: T.PhotoListItem, index: number): OnClick {
    return (e) => {
      if (isFunction(onDescriptionClickProp)) {
        onDescriptionClickProp({ item, index }, e)
      }
    }
  }

  function onActionClick(
    action: T.PhotoListItemAction,
    item: T.PhotoListItem,
    index: number,
  ): OnClick {
    return (e) => {
      if (action && isFunction(action.onClick)) {
        action.onClick({ item, action, index }, e)
      }
    }
  }

  React.useEffect(() => {
    console.log('provider useEffect')
    if (isArray(items)) {
      dispatch({ type: 'set-items', items: processItems(items) })
    }
  }, [items])

  return {
    ...state,
    actions,
    defaultFileName,
    divRef,
    imgRef,
    icons,
    placeholder,
    onVisualClick,
    onTitleClick,
    onDescriptionClick,
    onActionClick,
    returnValidHtmlAttrs,
  }
}

function PhotoListContextProvider({ children, ...rest }: any) {
  const ctx = usePhotoList(rest)
  return <Context.Provider value={ctx}>{children}</Context.Provider>
}

export default PhotoListContextProvider
