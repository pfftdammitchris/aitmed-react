// Under construction

import React from 'react'
import OT from '@opentok/client'
import { error } from 'util/toast'
import getWindowAitmed from 'util/useWindowAitmed'
import { env } from 'config/urls'
import useMount from 'hooks/useMount'

// Required to pass in token + sessionId
function useOpentokClient({ streamSettings, token, sessionId }) {
  const [publisherInitiated, setPublisherInitiated] = React.useState(false)
  const [micOn, setMicOn] = React.useState(true)
  const [videoOn, setVideoOn] = React.useState(true)

  const apiKey = {
    dev: '46141062',
    prod: '46141052',
  }

  const settings = {
    apiKey: env === 'testapi' ? apiKey.dev : apiKey.prod,
    stream: {
      insertMode: 'append',
      width: '100%',
      height: '100%',
      showControls: false,
      fitMode: 'contain',
      ...streamSettings,
    },
  }

  const windowAitmed = getWindowAitmed()
  const getWindowAitmedOpentok = () => {
    if (!windowAitmed.opentok) {
      windowAitmed.opentok = {}
    }
    return windowAitmed.opentok
  }

  const initSession = ({ onOpen, onError, onPublishOpen }) => {
    const windowAitmedOpentok = getWindowAitmedOpentok()
    if (!windowAitmedOpentok.session) {
      windowAitmedOpentok.session = OT.initSession(settings.apiKey, sessionId)
    }
    windowAitmedOpentok.session.connect(token, (error) => {
      if (error) {
        console.error(error)
        if (onError) onError(error)
      } else {
        if (onOpen) onOpen(windowAitmedOpentok.session)
        // if windowAitmedOpentok.publisher is not falsey, then the provider might be trying to reconnect to the previous session because he navigated away
        windowAitmedOpentok.session.publish(
          windowAitmedOpentok.publisher,
          (err) => {
            if (err) {
              console.error(err)
            } else {
              if (onPublishOpen) onPublishOpen()
            }
          },
        )
      }
    })
  }

  const disconnectSession = (cb) => {
    const windowAitmedOpentok = getWindowAitmedOpentok()
    if (windowAitmedOpentok.session) {
      windowAitmedOpentok.session.disconnect()
    }
    if (cb) cb()
  }

  // Create the publisher object that represents the view of the video session
  const initPublisher = (cb) => {
    const windowAitmedOpentok = getWindowAitmedOpentok()
    windowAitmedOpentok.publisher = OT.initPublisher(
      'publisher',
      settings.stream,
      (err) => {
        if (err) {
          if (err.name === 'OT_MEDIA_ERR_DECODE') {
            error('	A decoding error occurred while trying to play the video.')
          }
          if (err.name === 'OT_MEDIA_ERR_NETWORK') {
            error(
              'A decoding error occurred while trying to play the video stream.',
            )
          }
          if (err.name === 'OT_MEDIA_ERR_SRC_NOT_SUPPORTED') {
            error(
              'The stream has been detected to be not suitable for playback.',
            )
          }
          if (err.name === 'OT_NOT_SUPPORTED') {
            error('Something in the user media request is not supported.')
          }
          if (err.name === 'OT_NO_DEVICES_FOUND') {
            error('No devices were found to provide the media stream.')
          }
          if (err.name === 'OT_NO_VALID_CONSTRAINTS') {
            error(
              'Video and audio were both disabled. You need to enable at least one.',
            )
          }
          if (err.name === 'OT_SCREEN_SHARING_NOT_SUPPORTED') {
            error('Screen sharing is not supported in the browser.')
          }
          if (err.name === 'OT_SCREEN_SHARING_EXTENSION_NOT_REGISTERED') {
            error(
              'Screen-sharing support in this browser requires an extension, but one has not been registered.',
            )
          }
          if (err.name === 'OT_SCREEN_SHARING_EXTENSION_NOT_INSTALLED') {
            error(
              'Screen-sharing support in this browser requires an extension, but the extension is not installed.',
            )
          }
          const authenticationError = err.code === 1004
          if (authenticationError) {
            displayToastForCodeErrors(err)
          }
        }

        setPublisherInitiated(true)
        if (cb) cb(windowAitmedOpentok.publisher)
      },
    )
  }

  // Forces the publisher of the specified stream to stop publishing the stream.
  // This dispatches the event "streamDestroyed" to all clients subscribed to the stream
  const closePublisher = (session, stream, onComplete) => {
    if (!session) session = windowAitmedOpentok.session
    if (!stream || !session) return
    session.forceUnpublish(stream, (err) => {
      if (err) return console.error(err)
      const windowAitmedOpentok = getWindowAitmedOpentok()
      windowAitmedOpentok.publisher = null
      windowAitmedOpentok.session = null
      if (onComplete) onComplete()
    })
  }

  // Error codes: https://tokbox.com/developer/sdks/js/reference/Error.html
  function displayToastForCodeErrors(err) {
    switch (err.code) {
      case 1004: // Authentication error (invalid/expired token)
        error(
          'An error occurred while establishing a video connection with the patient. The token is invalid. Please contact our support team about this issue.',
        )
        break
      case 1005: // Invalid session ID
      case 1006: // Connect failed (Network connection)
      case 1026: // Terms of service violation
      case 1027: // Connection limit exceeded
      case 2001: // Unexpected response from the OpenTok server / Publish failed / Subscribe failed
      case 1010: // Client is not connected to OpenTok session. May have disconnected beforehand
      case 1520: // Unable to force disconnect. Possibly the token is not set to moderator
      case 1500: // Unable to publish. Reasons: Token role not set to publisher/moderator, the end-user has denied access to camera/microphone, or page is loaded with HTTP on chrome (requires HTTPS)
      case 1601: // Internal error / WebRTC publisher error. Try reconnecting/republishing
      case 1013: // WebRTC PeerConnection error. Try resubscribing/reconnecting to session
      case 1553: // WebRTC workflor error. Try resubscribing/reconnecting to session
      case 1600: // Internal error/WebRTC subscriber error. Try resubscribing/reconnecting to session
      case 1605: // Stream limit exceeded
      case 1550: // Screen sharing not supported
      case 1551: // A screen-sharing extensions needs to be registerred but it's not.
      case 1552: // A screen-sharing extension is required, but is not installed.
        break
      default:
        error(
          'An error occurred. Please contact our support team about this issue.',
        )
    }
  }

  const deletePublisherFromDOM = () => {
    const windowAitmedOpentok = getWindowAitmedOpentok()
    windowAitmedOpentok.publisher.destroy()
  }

  useMount(() => {
    if (env === 'testapi') {
      OT.setLogLevel(OT.DEBUG)
    }
  })

  const toggleMuteOn = () => {
    const windowAitmedOpentok = getWindowAitmedOpentok()
    if (!windowAitmedOpentok.publisher) return
    windowAitmedOpentok.publisher.publishAudio(true)
    setMicOn(true)
  }

  const toggleMuteOff = () => {
    const windowAitmedOpentok = getWindowAitmedOpentok()
    if (!windowAitmedOpentok.publisher) return
    windowAitmedOpentok.publisher.publishAudio(false)
    setMicOn(false)
  }

  const toggleVideoOn = () => {
    const windowAitmedOpentok = getWindowAitmedOpentok()
    if (!windowAitmedOpentok.publisher) return
    windowAitmedOpentok.publisher.publishVideo(true)
    setVideoOn(true)
  }

  const toggleVideoOff = () => {
    const windowAitmedOpentok = getWindowAitmedOpentok()
    if (!windowAitmedOpentok.publisher) return
    windowAitmedOpentok.publisher.publishVideo(false)
    setVideoOn(false)
  }

  return {
    windowAitmed,
    getWindowAitmedOpentok,
    initSession,
    initPublisher,
    publisherInitiated,
    setPublisherInitiated,
    closePublisher,
    disconnectSession,
    deletePublisherFromDOM,
    micOn,
    videoOn,
    toggleMuteOn,
    toggleMuteOff,
    toggleVideoOn,
    toggleVideoOff,
  }
}

export default useOpentokClient
