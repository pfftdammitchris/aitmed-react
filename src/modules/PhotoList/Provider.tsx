import React from 'react'
import format from 'date-fns/format'
import * as T from './types'
import Context from './Context'
import { processItems } from './utils'
import { isArray, isFunction, downloadLink } from '../../utils'

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
  onAvatarClick: onAvatarClickProp,
  onTitleClick: onTitleClickProp,
  onDescriptionClick: onDescriptionClickProp,
}: any) {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  const defaultFileName = defaultDownloadName || today

  function onAvatarClick(item: T.PhotoListItem, index: number) {
    return (e: React.MouseEvent<HTMLElement>) => {
      if (isFunction(onAvatarClickProp)) {
        onAvatarClickProp({ item, index }, e)
      }
    }
  }

  function onTitleClick(item: T.PhotoListItem, index: number) {
    return (e: React.MouseEvent<HTMLElement>) => {
      if (isFunction(onTitleClickProp)) {
        onTitleClickProp({ item, index }, e)
      }
    }
  }

  function onDescriptionClick(item: T.PhotoListItem, index: number) {
    return (e: React.MouseEvent<HTMLElement>) => {
      if (isFunction(onDescriptionClickProp)) {
        onDescriptionClickProp({ item, index }, e)
      }
    }
  }

  function onActionClick(
    action: T.PhotoListItemAction,
    item: T.PhotoListItem,
    index: number,
  ) {
    return (e: React.MouseEvent<any>) => {
      if (action && isFunction(action.onClick)) {
        action.onClick({ item, action, index }, e)
      }
    }
  }

  React.useEffect(() => {
    if (isArray(items)) {
      dispatch({ type: 'set-items', items: processItems(items) })
    }
  }, [])

  return {
    ...state,
    actions,
    defaultFileName,
    icons,
    placeholder,
    onAvatarClick,
    onTitleClick,
    onDescriptionClick,
    onActionClick,
  }
}

function PhotoListContextProvider({ children, ...rest }: any) {
  const ctx = usePhotoList(rest)
  return <Context.Provider value={ctx}>{children}</Context.Provider>
}

export default PhotoListContextProvider
