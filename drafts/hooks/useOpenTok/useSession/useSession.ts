import React from 'react'
const { useCallback, useEffect, useReducer, useRef } = React
import OT from '@opentok/client'
import { info as toastInfo } from 'util/toast'

import enhanceSubscriber from './enhanceSubscriber'

import { Hook, HookState, HookReducer } from './types'

const devMode = process.env.NODE_ENV === 'development'
export const devLog = (msg: string) => {
  if (devMode) console.log(`%c${msg}`, 'color:teal;font-weight:bold')
}

/* -------------------------------------------------------
  ---- SESSION CONSTANTS
-------------------------------------------------------- */
export const CONNECTION_CREATED = 'connectionCreated'
export const CONNECTION_DESTROYED = 'connectionDestroyed'
export const CLIENT_DISCONNECTED = 'clientDisconnected'
export const FORCE_DISCONNECTED = 'forceDisconnected'
export const FORCE_UNPUBLISHED = 'forceUnpublished'
export const MEDIA_STOPPED = 'mediaStopped'
export const NETWORK_DISCONNECTED = 'networkDisconnected'
export const OT_NOT_CONNECTED = 'OT_NOT_CONNECTED'
export const SESSION_DISCONNECTED = 'sessionDisconnected'
export const SESSION_RECONNECTING = 'sessionReconnecting'
export const SESSION_RECONNECTED = 'sessionReconnected'
export const STREAM_CREATED = 'streamCreated'
export const STREAM_DESTROYED = 'streamDestroyed'
/* ----------------------------------------------------- */

const initialState: HookState = {
  id: null,
  token: null,
  initiating: false,
  initiated: false,
  streams: {
    ids: [],
    mapper: {},
  },
}
const reducer: HookReducer = (state, action) => {
  const { type, id, token, stream, streamId, subscriber } = action
  switch (type) {
    case 'initiate':
      if (!id || !token) {
        return state
      }
      return { ...initialState, id, token }

    case 'initiating':
      return { ...state, initiating: true, initiated: false }

    case 'initiated':
      return { ...state, initiating: false, initiated: true }

    case 'add-stream':
      if (
        !stream ||
        state.streams.ids.includes(stream.streamId) ||
        !subscriber
      ) {
        return state
      }
      return {
        ...state,
        streams: {
          ...state.streams,
          ids: [...state.streams.ids, stream.streamId],
          mapper: {
            ...state.streams.mapper,
            [stream.streamId]: { stream, subscriber, active: false },
          },
        },
      }

    case 'remove-stream':
      const { ids, mapper } = state.streams
      const index = ids.findIndex((element) => {
        return element === streamId
      })
      if (!streamId || index === -1) return state
      ids.splice(index, 1)
      const newMapper = { ...mapper }
      delete newMapper[streamId]
      return {
        ...state,
        streams: {
          ...state.streams,
          ids,
          mapper: newMapper,
        },
      }

    default:
      return state
  }
}
const useSession: Hook = ({
  apiKey,
  sessionId,
  sessionToken,
  subscriberTargetElement,
  subscriberProperties = {},
  sessionEventHandlers,
  subscriberEventHandlers,
}) => {
  const ref = useRef<OT.Session>()
  const [hookState, hookDispatch] = useReducer(reducer, initialState)

  // Initial Hook State
  useEffect(() => {
    if (
      sessionId &&
      sessionToken &&
      sessionId !== hookState.id &&
      sessionToken !== hookState.token &&
      !hookState.initiating
    ) {
      hookDispatch({ type: 'initiate', id: sessionId, token: sessionToken })
    }
  }, [sessionId, sessionToken, hookState])

  // Initial Session
  useEffect(() => {
    const { id, token, initiating, initiated } = hookState
    if (!ref.current && id && token && !initiating && !initiated) {
      // The user supports WebRTC
      if (OT.checkSystemRequirements() == 1) {
        ref.current = OT.initSession(apiKey, id)
      } else {
        // The user does not support WebRTC
        // TODO: Handle this
      }
    }
  }, [hookState, apiKey])

  const initialSubscriber = useCallback(
    (stream: OT.Stream) => {
      if (ref.current) {
        enhanceSubscriber({
          session: ref,
          stream,
          sessionDispatch: hookDispatch,
          targetElement: subscriberTargetElement,
          properties: subscriberProperties,
          eventHandlers: subscriberEventHandlers,
        })
      }
    },
    [subscriberTargetElement, subscriberProperties, subscriberEventHandlers],
  )
  useEffect(() => {
    const { token, initiating, initiated } = hookState
    if (ref.current && token && !initiating && !initiated) {
      hookDispatch({ type: 'initiating' })
      ref.current.connect(token, (error?: OT.OTError) => {
        if (error) {
          devLog('An error occurred when connecting')
          // err.name err.message
          switch (error.name) {
            case OT_NOT_CONNECTED:
              // Tell them to check their connection
              if (
                sessionEventHandlers &&
                typeof sessionEventHandlers.otNotConnected === 'function'
              ) {
                sessionEventHandlers.otNotConnected(error)
              }
              break
            default:
              break
          }
          devLog(`Session did not connect due to error: ${error.message}`)
        } else {
          if (window.navigator && window.navigator.permissions) {
            navigator.permissions
              .query({ name: 'camera' })
              .then(({ state }: { state: any }) => {
                if (state === 'denied') {
                  // Prompt the patient about his video being off
                  toastInfo(
                    'It seems we are denied access from publishing your camera to the screen. Please allow ' +
                      "camera access for our website in your browser's settings.",
                  )
                }
              })
          }
          hookDispatch({ type: 'initiated' })
        }
      })

      ref.current.on(
        CONNECTION_CREATED,
        (event: OT.Event<'connectionCreated', OT.Session>) => {
          devLog('Session - Connection created')
          if (
            sessionEventHandlers &&
            typeof sessionEventHandlers.connectionCreated === 'function'
          ) {
            sessionEventHandlers.connectionCreated(event)
          }
        },
      )

      ref.current.on(
        CONNECTION_DESTROYED,
        (event: OT.Event<'connectionDestroyed', OT.Session>) => {
          devLog('Session - Connection destroyed')
          if (
            sessionEventHandlers &&
            typeof sessionEventHandlers.connectionDestroyed === 'function'
          ) {
            sessionEventHandlers.connectionDestroyed(event)
          }
        },
      )

      ref.current.on(
        SESSION_DISCONNECTED,
        (
          event: OT.Event<'sessionDisconnected', OT.Session> & {
            reason: string
          },
        ) => {
          switch (event.reason) {
            case CLIENT_DISCONNECTED:
              devLog('Session - Disconnected - Client disconnected')
              if (
                sessionEventHandlers &&
                typeof sessionEventHandlers.sessionDisconnectedClientDisconnected ===
                  'function'
              ) {
                sessionEventHandlers.sessionDisconnectedClientDisconnected(
                  event,
                )
              }
              break
            case FORCE_DISCONNECTED:
              devLog('Session - Disconnected - Force disconnected')
              if (
                sessionEventHandlers &&
                typeof sessionEventHandlers.sessionDisconnectedForceDisconnected ===
                  'function'
              ) {
                sessionEventHandlers.sessionDisconnectedForceDisconnected(event)
              }
              break
            case NETWORK_DISCONNECTED:
              devLog('Session - Disconnected - Network disconnected')
              if (
                sessionEventHandlers &&
                typeof sessionEventHandlers.sessionDisconnectedNetworkDisconnected ===
                  'function'
              ) {
                sessionEventHandlers.sessionDisconnectedNetworkDisconnected(
                  event,
                )
              }
              break
            default:
              devLog('Session - Disconnected')
              if (
                sessionEventHandlers &&
                typeof sessionEventHandlers.sessionDisconnected === 'function'
              ) {
                sessionEventHandlers.sessionDisconnected(event)
              }
              break
          }
        },
      )

      ref.current.on(
        SESSION_RECONNECTING,
        (event: OT.Event<'sessionReconnecting', OT.Session>) => {
          devLog('Session - Session reconnecting')
          if (
            sessionEventHandlers &&
            typeof sessionEventHandlers.sessionReconnecting === 'function'
          ) {
            sessionEventHandlers.sessionReconnecting(event)
          }
        },
      )

      ref.current.on(
        SESSION_RECONNECTED,
        (event: OT.Event<'sessionReconnected', OT.Session>) => {
          devLog('Session - Session reconnected')
          if (
            sessionEventHandlers &&
            typeof sessionEventHandlers.sessionReconnected === 'function'
          ) {
            sessionEventHandlers.sessionReconnected(event)
          }
        },
      )

      ref.current.on(
        STREAM_CREATED,
        (
          event: OT.Event<'streamCreated', OT.Session> & { stream: OT.Stream },
        ) => {
          devLog('Session - Stream created')
          initialSubscriber(event.stream)
          if (
            sessionEventHandlers &&
            typeof sessionEventHandlers.streamCreated === 'function'
          ) {
            sessionEventHandlers.streamCreated(event)
          }
        },
      )

      ref.current.on(
        STREAM_DESTROYED,
        (
          event: OT.Event<'streamDestroyed', OT.Session> & {
            stream: OT.Stream
            reason: string
          },
        ) => {
          // By default, when a streamDestroyed event is dispatched for a stream you are subscribed to,
          // the corresponding doctor objects (there could be more than one) are destroyed and
          // removed from the HTML DOM
          // e..preventDefault()
          hookDispatch({
            type: 'remove-stream',
            streamId: event.stream.streamId,
          })
          // Returns all of the doctor objects for a Stream
          // Now you can adjust the DOM elements around each
          //    doctor to the stream, and then delete it yourself.

          // A stream other than him/herself leaves the session
          switch (event.reason) {
            // Client disconnected from the session by calling the disconnect() method of the Session object or by closing the browser
            case CLIENT_DISCONNECTED:
              devLog('Session - Stream destroyed - Client disconnected')
              // A moderator has disconnected the publisher of the stream from the session, by calling the forceDisconnect() method of the Session object
              if (
                sessionEventHandlers &&
                typeof sessionEventHandlers.streamDestroyedClientDisconnected ===
                  'function'
              ) {
                sessionEventHandlers.streamDestroyedClientDisconnected(event)
              }
              break
            // A moderator has forced the publisher of the stream to stop publishing the stream, by calling the forceUnpublish() method of the Session object
            case FORCE_DISCONNECTED:
              //A moderator has forced the publisher to stop publishing the stream
              devLog('Session - Stream destroyed - Force disconnected')
              if (
                sessionEventHandlers &&
                typeof sessionEventHandlers.streamDestroyedForceDisconnected ===
                  'function'
              ) {
                sessionEventHandlers.streamDestroyedForceDisconnected(event)
              }
              break
            case FORCE_UNPUBLISHED:
              //A moderator has forced the publisher to unpublish the stream
              devLog('Session - Stream destroyed - Force unpublished')
              if (
                sessionEventHandlers &&
                typeof sessionEventHandlers.streamDestroyedForceUnpublished ===
                  'function'
              ) {
                sessionEventHandlers.streamDestroyedForceUnpublished(event)
              }
              break
            // The user publishing the stream has stopped sharing media.
            // For example, the user closed the window that is a source for a screen-sharing stream.
            // Or the user disconnected a microphone that was the audio source for an audio-only stream.
            // Or the video and audio sources are MediaStreamTrack elements and the sources of the media are stopped or destroyed.
            case MEDIA_STOPPED:
              //The user publishing the stream has stopped sharing some kind of media
              devLog('Session - Stream destroyed - Media stopped')
              if (
                sessionEventHandlers &&
                typeof sessionEventHandlers.streamDestroyedMediaStopped ===
                  'function'
              ) {
                sessionEventHandlers.streamDestroyedMediaStopped(event)
              }
              break
            // The network connection terminated abruptly (for example, the client lost their internet connection)
            case NETWORK_DISCONNECTED:
              //Network has disconnected from the session
              devLog('Session - Stream destroyed - Network disconnected')
              if (
                sessionEventHandlers &&
                typeof sessionEventHandlers.streamDestroyedNetworkDisconnected ===
                  'function'
              ) {
                sessionEventHandlers.streamDestroyedNetworkDisconnected(event)
              }
              break
            default:
              devLog('Session - Stream destroyed')
              if (
                sessionEventHandlers &&
                typeof sessionEventHandlers.streamDestroyed === 'function'
              ) {
                sessionEventHandlers.streamDestroyed(event)
              }
              break
          }
        },
      )
    }
  }, [hookState, initialSubscriber, sessionEventHandlers])

  const disconnectSession = useCallback(() => {
    if (ref.current) {
      ref.current.disconnect()
    }
  }, [])

  const disconnectStream = useCallback(
    (streamId: string, callback?: any) => {
      const stream = hookState.streams.mapper[streamId].stream || null
      if (ref.current && hookState.streams.ids.length > 0 && stream) {
        ref.current.forceUnpublish(stream, (error?: OT.OTError) => {
          if (error) {
            devLog(error.message)
          } else {
            if (typeof callback === 'function') {
              callback()
            }
          }
        })
      }
    },
    [hookState.streams],
  )

  const disconnectAllStreams = useCallback(() => {
    const ids = hookState.streams.ids
    if (ref.current && ids.length > 0) {
      ids.map((streamId: string) => {
        disconnectStream(streamId)
        return null
      })
    }
  }, [hookState.streams.ids, disconnectStream])

  return {
    ref,
    initiated: hookState.initiated,
    streams: hookState.streams,
    disconnectSession,
    disconnectStream,
    disconnectAllStreams,
  }
}

export default useSession
