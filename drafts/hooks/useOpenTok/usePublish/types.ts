import OT from '@opentok/client'
import { types as SessionTypes } from '../useSession'

interface HookProps {
  session: SessionTypes.HookReturn
  targetElement?: string | HTMLElement | undefined
  properties?: OT.PublisherProperties | undefined
  eventHandlers?: EventHandlers
}
export interface HookReturn {
  ref: React.MutableRefObject<OT.Publisher | undefined>
  published: boolean
  initiated: boolean
  width?: number
  height?: number
  hasVideo: boolean
  triggerVideo: () => void
  hasAudio: boolean
  triggerAudio: () => void
  switchCamera: () => void
  unPublish: () => void
}
export type Hook = (props: HookProps) => HookReturn

export interface HookState {
  initiating: boolean
  initiated: boolean
  video: boolean
  audio: boolean
  published: boolean
}
interface HookAction {
  type: string
}
export type HookReducer = (state: HookState, action: HookAction) => HookState

export interface EventHandlers {
  accessAllowed?: (event?: OT.Event<'accessAllowed', OT.Publisher>) => void
  accessDenied?: (event?: OT.Event<'accessDenied', OT.Publisher>) => void
  accessDialogClosed?: (
    event?: OT.Event<'accessDialogClosed', OT.Publisher>,
  ) => void
  accessDialogOpened?: (
    event?: OT.Event<'accessDialogOpened', OT.Publisher>,
  ) => void
  audioLevelUpdated?: (
    event?: OT.Event<'audioLevelUpdated', OT.Publisher>,
  ) => void
  destroyed?: (event?: OT.Event<'destroyed', OT.Publisher>) => void
  mediaStopped?: (event?: OT.Event<'mediaStopped', OT.Publisher>) => void
  streamCreated?: (event?: OT.Event<'streamCreated', OT.Publisher>) => void
  streamDestroyed?: (event?: OT.Event<'streamDestroyed', OT.Publisher>) => void
  videoDimensionsChanged?: (
    event?: OT.Event<'videoDimensionsChanged', OT.Publisher>,
  ) => void
  videoElementCreated?: (
    event?: OT.Event<'videoElementCreated', OT.Publisher>,
  ) => void
}
