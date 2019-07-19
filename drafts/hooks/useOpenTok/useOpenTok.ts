import React from 'react'
const { useEffect, useReducer, useRef } = React
import OT from '@opentok/client'
import { info as toastInfo } from 'util/toast'
import getWindowAitmed from 'util/useWindowAitmed'

const devMode = process.env.NODE_ENV === 'development'
export const devLog = (msg: string) => {
  if (devMode) console.log(`%c${msg}`, 'color:teal;font-weight:bold')
}

import { Hook, HookState, HookReducer } from './types'

import useSession from './useSession'
import usePublish from './usePublish'

const initialState: HookState = {
  sessionId: null,
  token: null,
}
const reducer: HookReducer = (state, action) => {
  switch (action.type) {
    case 'initial':
      if (!action.sessionId || !action.token) {
        return state
      }
      return { sessionId: action.sessionId, token: action.token }

    default:
      return state
  }
}
const useOpenTok: Hook = ({
  apiKey,
  sessionId,
  sessionToken,
  subscriberTargetElement,
  subscriberProperties = {},
  publisherTargetElement,
  publisherProperties = {},
  sessionEventHandlers,
  subscriberEventHandlers,
  publisherEventHandlers,
}) => {
  const windowAitmedRef = useRef<any>()
  // Instantiate window.aitmed + set openTok debug mode
  useEffect(() => {
    if (!windowAitmedRef.current) windowAitmedRef.current = getWindowAitmed()
    // @ts-ignore
    if (devMode) OT.setLogLevel(OT.DEBUG)
  }, [])

  const [hookState, hookDispatch] = useReducer(reducer, initialState)
  const session = useSession({
    apiKey,
    sessionId,
    sessionToken,
    subscriberTargetElement,
    subscriberProperties,
    sessionEventHandlers,
    subscriberEventHandlers,
  })

  const publisher = usePublish({
    session,
    targetElement: publisherTargetElement,
    properties: publisherProperties,
    eventHandlers: publisherEventHandlers,
  })

  return { session, publisher }
}

export default useOpenTok
