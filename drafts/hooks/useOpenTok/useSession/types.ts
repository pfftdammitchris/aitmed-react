import React from 'react'
import OT from '@opentok/client'

interface HookProps {
  apiKey: string
  sessionId?: string | null
  sessionToken?: string | null
  subscriberTargetElement?: string | HTMLElement | undefined
  subscriberProperties?: OT.SubscriberProperties | undefined
  sessionEventHandlers?: SessionEventHandlers
  subscriberEventHandlers?: SubscriberEventHandlers
}

export interface HookReturn {
  ref: React.MutableRefObject<OT.Session | undefined>
  initiated: boolean
  streams: HookStateStream

  disconnectSession: () => void
  disconnectStream: (streamId: string, callback?: any) => void
  disconnectAllStreams: () => void
}
export type Hook = (props: HookProps) => HookReturn

export interface HookStateStream {
  ids: string[]
  mapper: {
    [key: string]: {
      stream: OT.Stream
      subscriber: OT.Subscriber
      active: boolean
    }
  }
}
export interface HookState {
  id: string | null
  token: string | null
  initiating: boolean
  initiated: boolean
  streams: HookStateStream
}
interface HookAction {
  type: string
  id?: string
  token?: string
  stream?: OT.Stream
  streamId?: string
  subscriber?: OT.Subscriber
}
export type HookReducer = (state: HookState, action: HookAction) => HookState

export interface SessionEventHandlers {
  connectionCreated?: (
    event?: OT.Event<'connectionCreated', OT.Session>,
  ) => void
  connectionDestroyed?: (
    event?: OT.Event<'connectionDestroyed', OT.Session>,
  ) => void
  clientDisconnected?: (
    event?: OT.Event<'clientDisconnected', OT.Session>,
  ) => void
  otNotConnected?: (error?: OT.OTError) => void
  sessionDisconnected?: (
    event?: OT.Event<'sessionDisconnected', OT.Session>,
  ) => void
  sessionDisconnectedClientDisconnected?: (
    event?: OT.Event<'sessionDisconnected', OT.Session>,
  ) => void
  sessionDisconnectedForceDisconnected?: (
    event?: OT.Event<'sessionDisconnected', OT.Session>,
  ) => void
  sessionDisconnectedNetworkDisconnected?: (
    event?: OT.Event<'sessionDisconnected', OT.Session>,
  ) => void

  sessionReconnecting?: (
    event?: OT.Event<'sessionReconnecting', OT.Session>,
  ) => void
  sessionReconnected?: (
    event?: OT.Event<'sessionReconnected', OT.Session>,
  ) => void
  streamCreated?: (event?: OT.Event<'streamCreated', OT.Session>) => void

  streamDestroyed?: (event?: OT.Event<'streamDestroyed', OT.Session>) => void
  streamDestroyedClientDisconnected?: (
    event?: OT.Event<'streamDestroyed', OT.Session>,
  ) => void
  streamDestroyedForceDisconnected?: (
    event?: OT.Event<'streamDestroyed', OT.Session>,
  ) => void
  streamDestroyedForceUnpublished?: (
    event?: OT.Event<'streamDestroyed', OT.Session>,
  ) => void
  streamDestroyedMediaStopped?: (
    event?: OT.Event<'streamDestroyed', OT.Session>,
  ) => void
  streamDestroyedNetworkDisconnected?: (
    event?: OT.Event<'streamDestroyed', OT.Session>,
  ) => void
}

// enhanceSubscriber.ts
interface EnhanceSubscriberProps {
  session: React.MutableRefObject<OT.Session | undefined>
  stream: OT.Stream
  sessionDispatch: React.Dispatch<HookAction>
  targetElement?: string | HTMLElement | undefined
  properties?: OT.SubscriberProperties | undefined
  eventHandlers?: SubscriberEventHandlers
}
export type EnhanceSubscriber = (
  props: EnhanceSubscriberProps,
) => OT.Subscriber | null

export interface SubscriberEventHandlers {
  connected?: (event?: OT.Event<'connected', OT.Subscriber>) => void
  destroyed?: (event?: OT.Event<'destroyed', OT.Subscriber>) => void
  videoDimensionsChanged?: (
    event?: OT.Event<'videoDimensionsChanged', OT.Subscriber>,
  ) => void

  videoDisabled?: (event?: OT.Event<'videoDisabled', OT.Subscriber>) => void
  videoDisabledCodecNotSupported?: (
    event?: OT.Event<'videoDisabled', OT.Subscriber>,
  ) => void
  videoDisabledPublishVideo?: (
    event?: OT.Event<'videoDisabled', OT.Subscriber>,
  ) => void
  videoDisabledQuality?: (
    event?: OT.Event<'videoDisabled', OT.Subscriber>,
  ) => void
  videoDisabledSubscribeToVideo?: (
    event?: OT.Event<'videoDisabled', OT.Subscriber>,
  ) => void

  videoDisableWarning?: (
    event?: OT.Event<'videoDisableWarning', OT.Subscriber>,
  ) => void
  videoDisableWarningLifted?: (
    event?: OT.Event<'videoDisableWarningLifted', OT.Subscriber>,
  ) => void
  videoElementCreated?: (
    event?: OT.Event<'videoElementCreated', OT.Subscriber>,
  ) => void

  videoEnabled?: (event?: OT.Event<'videoEnabled', OT.Subscriber>) => void
  videoEnabledCodecChanged?: (
    event?: OT.Event<'videoEnabled', OT.Subscriber>,
  ) => void
  videoEnabledPublishVideo?: (
    event?: OT.Event<'videoEnabled', OT.Subscriber>,
  ) => void
  videoEnabledQuality?: (
    event?: OT.Event<'videoEnabled', OT.Subscriber>,
  ) => void
  videoEnabledSubscribeToVideo?: (
    event?: OT.Event<'videoEnabled', OT.Subscriber>,
  ) => void
}
