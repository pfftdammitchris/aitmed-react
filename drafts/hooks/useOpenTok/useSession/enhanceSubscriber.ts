import React from 'react'
const { useEffect, useReducer, useRef } = React
import OT from '@opentok/client'
import { info as toastInfo } from 'util/toast'

import { EnhanceSubscriber } from './types'

const devMode = process.env.NODE_ENV === 'development'
export const devLog = (msg: string) => {
  if (devMode) console.log(`%c${msg}`, 'color:teal;font-weight:bold')
}

/* -------------------------------------------------------
  ---- Subscriber CONSTANTS
-------------------------------------------------------- */
export const CONNECTED = 'connected'
export const DESTROYED = 'destroyed'
export const VIDEO_DIMENSIONS_CHANGED = 'videoDimensionsChanged'
export const VIDEO_DISABLED = 'videoDisabled'
// VIDEO_DISABLED - reason
export const VIDEO_DISABLED_CODEC_NOT_SUPPORTED = 'codecNotSupported'
export const VIDEO_DISABLED_PUBLISHER_VIDEO = 'publishVideo'
export const VIDEO_DISABLED_QUALITY = 'quality'
export const VIDEO_DISABLED_SUBSCRIBE_TO_VIDEO = 'subscribeToVideo'

export const VIDEO_DISABLE_WARNING = 'videoDisableWarning'
export const VIDEO_DISABLE_WARNING_LIFTED = 'videoDisableWarningLifted'
export const VIDEO_ELEMENT_CREATED = 'videoElementCreated'
export const VIDEO_ENABLED = 'videoEnabled'
// VIDEO_ENABLED - reason
export const VIDEO_ENABLED_CODEC_CHANGED = 'codecChanged'
export const VIDEO_ENABLED_PUBLISH_VIDEO = 'publishVideo'
export const VIDEO_ENABLED_QUALITY = 'quality'
export const VIDEO_ENABLED_SUBSCRIBE_TO_VIDEO = 'subscribeToVideo'

/* ----------------------------------------------------- */

const enhanceSubscriber: EnhanceSubscriber = ({
  session,
  stream,
  sessionDispatch,
  targetElement,
  properties = {},
  eventHandlers,
}) => {
  if (!session.current) {
    return null
  }

  const subscriber: OT.Subscriber = session.current.subscribe(
    stream,
    targetElement,
    properties,
    (error?: OT.OTError) => {
      if (error) {
        devLog('There was an error subscribing to the stream')
      } else {
        devLog('You are now subscribing to the stream')
        sessionDispatch({ type: 'add-stream', stream, subscriber })
      }
    },
  )

  subscriber.on(CONNECTED, (event: OT.Event<'connected', OT.Subscriber>) => {
    devLog('Subscriber - Connected')
    if (eventHandlers && typeof eventHandlers.connected === 'function') {
      eventHandlers.connected(event)
    }
  })

  subscriber.on(DESTROYED, (event: OT.Event<'destroyed', OT.Subscriber>) => {
    devLog('Subscriber - Destroyed')
    sessionDispatch({ type: 'remove-stream', streamId: stream.streamId })
    if (eventHandlers && typeof eventHandlers.destroyed === 'function') {
      eventHandlers.destroyed(event)
    }
  })

  // The stream of a subscriber's video dimensions can change if a stream published from a
  // mobile device resizes, based on a change in the device orientation. It can also occur if
  // the video source is a screen-sharing window and the user publishing the stream resizes
  // the window that is the source for the stream.
  subscriber.on(
    VIDEO_DIMENSIONS_CHANGED,
    (event: OT.Event<'videoDimensionsChanged', OT.Subscriber>) => {
      devLog('Subscriber - Video dimensions changed')
      if (
        eventHandlers &&
        typeof eventHandlers.videoDimensionsChanged === 'function'
      ) {
        eventHandlers.videoDimensionsChanged(event)
      }
    },
  )

  subscriber.on(
    VIDEO_DISABLED,
    (
      event: OT.Event<'videoDisabled', OT.Subscriber> & {
        reason: string
      },
    ) => {
      switch (event.reason) {
        case VIDEO_DISABLED_CODEC_NOT_SUPPORTED:
          devLog('Subscriber - Video disabled - Codec not supported')
          if (
            eventHandlers &&
            typeof eventHandlers.videoDisabledCodecNotSupported === 'function'
          ) {
            eventHandlers.videoDisabledCodecNotSupported(event)
          }
          break

        case VIDEO_DISABLED_PUBLISHER_VIDEO:
          devLog('Subscriber - Video disabled - Publisher video')
          if (
            eventHandlers &&
            typeof eventHandlers.videoDisabledPublishVideo === 'function'
          ) {
            eventHandlers.videoDisabledPublishVideo(event)
          }
          break

        case VIDEO_DISABLED_QUALITY:
          devLog('Subscriber - Video disabled - Quality')
          if (
            eventHandlers &&
            typeof eventHandlers.videoDisabledQuality === 'function'
          ) {
            eventHandlers.videoDisabledQuality(event)
          }
          break

        case VIDEO_DISABLED_SUBSCRIBE_TO_VIDEO:
          devLog('Subscriber - Video disabled - Subscribe to video')
          if (
            eventHandlers &&
            typeof eventHandlers.videoDisabledSubscribeToVideo === 'function'
          ) {
            eventHandlers.videoDisabledSubscribeToVideo(event)
          }
          break

        default:
          devLog('Subscriber - Video disabled')
          if (
            eventHandlers &&
            typeof eventHandlers.videoDisabled === 'function'
          ) {
            eventHandlers.videoDisabled(event)
          }
          break
      }
    },
  )

  subscriber.on(
    VIDEO_DISABLE_WARNING,
    (event: OT.Event<'videoDisableWarning', OT.Subscriber>) => {
      devLog('Subscriber - Video disable warning')
      if (
        eventHandlers &&
        typeof eventHandlers.videoDisableWarning === 'function'
      ) {
        eventHandlers.videoDisableWarning(event)
      }
    },
  )

  subscriber.on(
    VIDEO_DISABLE_WARNING_LIFTED,
    (event: OT.Event<'videoDisableWarningLifted', OT.Subscriber>) => {
      devLog('Subscriber - Video disable warning lifted')
      if (
        eventHandlers &&
        typeof eventHandlers.videoDisableWarningLifted === 'function'
      ) {
        eventHandlers.videoDisableWarningLifted(event)
      }
    },
  )

  subscriber.on(
    VIDEO_ELEMENT_CREATED,
    (event: OT.Event<'videoElementCreated', OT.Subscriber>) => {
      devLog('Subscriber - Video element created')
      if (
        eventHandlers &&
        typeof eventHandlers.videoElementCreated === 'function'
      ) {
        eventHandlers.videoElementCreated(event)
      }
    },
  )

  subscriber.on(
    VIDEO_ENABLED,
    (
      event: OT.Event<'videoEnabled', OT.Subscriber> & {
        reason: string
      },
    ) => {
      switch (event.reason) {
        case VIDEO_ENABLED_CODEC_CHANGED:
          // Subscriber video was enabled after a codec change from an incompatible codec
          devLog('Subscriber - Video enabled - Codec changed')
          if (
            eventHandlers &&
            typeof eventHandlers.videoEnabledCodecChanged === 'function'
          ) {
            eventHandlers.videoEnabledCodecChanged(event)
          }
          break

        case VIDEO_ENABLED_PUBLISH_VIDEO:
          devLog('Subscriber - Video enabled - Publisher video')
          if (
            eventHandlers &&
            typeof eventHandlers.videoEnabledPublishVideo === 'function'
          ) {
            eventHandlers.videoEnabledPublishVideo(event)
          }
          break

        case VIDEO_ENABLED_QUALITY:
          devLog('Subscriber - Video enabled - Quality')
          if (
            eventHandlers &&
            typeof eventHandlers.videoEnabledQuality === 'function'
          ) {
            eventHandlers.videoEnabledQuality(event)
          }
          break

        case VIDEO_ENABLED_SUBSCRIBE_TO_VIDEO:
          // Subscriber started or stopped subscribing to video, by calling subscribeToVideo(false)
          devLog('Subscriber - Video enabled - Subscribe to video')
          if (
            eventHandlers &&
            typeof eventHandlers.videoEnabledSubscribeToVideo === 'function'
          ) {
            eventHandlers.videoEnabledSubscribeToVideo(event)
          }
          break

        default:
          devLog('Subscriber - Video enabled')
          if (
            eventHandlers &&
            typeof eventHandlers.videoEnabled === 'function'
          ) {
            eventHandlers.videoEnabled(event)
          }
          break
      }
    },
  )

  return subscriber
}

export default enhanceSubscriber
