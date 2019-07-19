import React from 'react'
const { useCallback, useEffect, useReducer, useRef } = React
import OT from '@opentok/client'
import { info as toastInfo } from 'util/toast'

import { Hook, HookState, HookReducer } from './types'

const devMode = process.env.NODE_ENV === 'development'
export const devLog = (msg: string) => {
  if (devMode) console.log(`%c${msg}`, 'color:teal;font-weight:bold')
}

/* -------------------------------------------------------
  ---- PUBLISH CONSTANTS
-------------------------------------------------------- */
export const ACCESS_ALLOWED = 'accessAllowed'
export const ACCESS_DENIED = 'accessDenied'
export const ACCESS_DIALOG_CLOSED = 'accessDialogClosed'
export const ACCESS_DIALOG_OPENED = 'accessDialogOpened'
export const AUDIO_LEVEL_UPDATED = 'audioLevelUpdated'
export const DESTROYED = 'destroyed'
export const MEDIA_STOPPED = 'mediaStopped'
export const STREAM_CREATED = 'streamCreated'
export const STREAM_DESTROYED = 'streamDestroyed'
export const VIDEO_DIMENSIONS_CHANGED = 'videoDimensionsChanged'
export const VIDEO_ELEMENT_CREATED = 'videoElementCreated'
/* ----------------------------------------------------- */

const initialState: HookState = {
  initiating: false,
  initiated: false,
  video: false,
  audio: false,
  published: false,
}
const reducer: HookReducer = (state, action) => {
  const { type } = action
  switch (type) {
    case 'initiating':
      return { ...state, initiating: true, initiated: false }

    case 'initiated':
      return {
        ...state,
        initiating: false,
        initiated: true,
        video: true,
        audio: true,
      }

    case 'switch-video':
      return { ...state, video: !state.video }

    case 'switch-audio':
      return { ...state, audio: !state.audio }

    case 'published':
      return { ...state, published: true }

    case 'unpublished':
      return { ...state, published: false }

    default:
      return state
  }
}
const useOpenTokPublish: Hook = ({
  session,
  targetElement,
  properties,
  eventHandlers,
}) => {
  const ref = useRef<OT.Publisher>()
  const [hookState, hookDispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    if (!ref.current && session.initiated) {
      const { initiating, initiated } = hookState
      if (!initiating && !initiated) {
        hookDispatch({ type: 'initiating' })
      } else if (initiating && !initiated) {
        ref.current = OT.initPublisher(targetElement, properties, (error) => {
          if (error) {
            devLog(error.message)
          } else {
            if (ref.current && ref.current.stream) {
              ref.current.publishVideo(true)
              ref.current.publishAudio(true)
            }
            hookDispatch({ type: 'initiated' })
            devLog('Initiated Publisher')
          }
        })

        ref.current.on(
          ACCESS_ALLOWED,
          (event: OT.Event<'accessAllowed', OT.Publisher>) => {
            devLog('Publish - Access allowed')
            if (eventHandlers && eventHandlers.accessAllowed) {
              eventHandlers.accessAllowed(event)
            }
          },
        )

        ref.current.on(
          ACCESS_DENIED,
          (event: OT.Event<'accessDenied', OT.Publisher>) => {
            devLog('Publish - Access denied')
            if (eventHandlers && eventHandlers.accessDenied) {
              eventHandlers.accessDenied(event)
            }
          },
        )

        ref.current.on(
          ACCESS_DIALOG_CLOSED,
          (event: OT.Event<'accessDialogClosed', OT.Publisher>) => {
            devLog('Publish - Access dialog closed')
            if (eventHandlers && eventHandlers.accessDialogClosed) {
              eventHandlers.accessDialogClosed(event)
            }
          },
        )

        ref.current.on(
          ACCESS_DIALOG_OPENED,
          (event: OT.Event<'accessDialogOpened', OT.Publisher>) => {
            devLog('Publish - Access dialog opened')
            if (eventHandlers && eventHandlers.accessDialogOpened) {
              eventHandlers.accessDialogOpened(event)
            }
          },
        )

        // ref.current.on(AUDIO_LEVEL_UPDATED, (event: OT.Event<'audioLevelUpdated', OT.Publisher>) => {
        //   devLog('Publish - Access level updated')
        // })

        ref.current.on(
          DESTROYED,
          (event: OT.Event<'destroyed', OT.Publisher>) => {
            devLog('Publish - Destroyed')
            if (eventHandlers && eventHandlers.destroyed) {
              eventHandlers.destroyed(event)
            }
          },
        )

        ref.current.on(
          MEDIA_STOPPED,
          (event: OT.Event<'mediaStopped', OT.Publisher>) => {
            devLog('Publish - Media stopped')
            if (eventHandlers && eventHandlers.mediaStopped) {
              eventHandlers.mediaStopped(event)
            }
          },
        )

        ref.current.on(
          STREAM_CREATED,
          (event: OT.Event<'streamCreated', OT.Publisher>) => {
            devLog('Publish - Stream created')
            hookDispatch({ type: 'published' })
            if (eventHandlers && eventHandlers.streamCreated) {
              eventHandlers.streamCreated(event)
            }
          },
        )

        ref.current.on(
          STREAM_DESTROYED,
          (event: OT.Event<'streamDestroyed', OT.Publisher>) => {
            devLog('Publish - Stream destroyed')
            hookDispatch({ type: 'unpublished' })
            if (eventHandlers && eventHandlers.streamDestroyed) {
              eventHandlers.streamDestroyed(event)
            }
          },
        )

        ref.current.on(
          VIDEO_DIMENSIONS_CHANGED,
          (event: OT.Event<'videoDimensionsChanged', OT.Publisher>) => {
            devLog('Publish - Video dimensions changed')
            if (eventHandlers && eventHandlers.videoDimensionsChanged) {
              eventHandlers.videoDimensionsChanged(event)
            }
          },
        )

        ref.current.on(
          VIDEO_ELEMENT_CREATED,
          (event: OT.Event<'videoElementCreated', OT.Publisher>) => {
            devLog('Publish - Video element created')
            if (eventHandlers && eventHandlers.videoElementCreated) {
              eventHandlers.videoElementCreated(event)
            }
          },
        )
      }
    }
  }, [
    session.initiated,
    hookState,
    hookState.initiating,
    hookState.initiated,
    hookState.published,
    targetElement,
    properties,
    eventHandlers,
  ])

  useEffect(() => {
    if (session.ref.current && ref.current && hookState.initiated) {
      session.ref.current.publish(ref.current, (error) => {
        if (error) {
          devLog(error.message)
        } else {
          devLog('Publishing a stream')
        }
      })
    }
  }, [hookState.initiated, session.ref])

  const triggerVideo = useCallback((): void => {
    if (
      ref.current &&
      ref.current.stream &&
      hookState.video === ref.current.stream.hasVideo
    ) {
      ref.current.publishVideo(!hookState.video)
      hookDispatch({ type: 'switch-video' })
    }
  }, [hookState.video])

  const triggerAudio = useCallback((): void => {
    if (
      ref.current &&
      ref.current.stream &&
      hookState.audio === ref.current.stream.hasAudio
    ) {
      ref.current.publishAudio(!hookState.audio)
      hookDispatch({ type: 'switch-audio' })
    }
  }, [hookState.audio])

  const switchCamera = useCallback((): void => {
    if (ref.current) {
      ref.current.cycleVideo()
    }
  }, [])

  const unPublish = useCallback(() => {
    if (session.ref.current && ref.current) {
      session.ref.current.unpublish(ref.current)
    }
  }, [session.ref])

  return {
    ref,
    published: hookState.published,
    initiated: hookState.initiated,
    width: ref.current ? ref.current.videoWidth() : 0,
    height: ref.current ? ref.current.videoHeight() : 0,
    hasVideo: hookState.video,
    triggerVideo,
    hasAudio: hookState.audio,
    triggerAudio,
    switchCamera,
    unPublish,
  }
}

export default useOpenTokPublish
