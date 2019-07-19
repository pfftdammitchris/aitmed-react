import { types as SessionTypes } from './useSession'
import { types as PublishTypes } from './usePublish'
export { SessionTypes, PublishTypes }

interface HookProps {
  apiKey: string
  sessionId?: string | null
  sessionToken?: string | null
  publisherTargetElement?: string | HTMLElement | undefined
  publisherProperties: OT.PublisherProperties
  subscriberTargetElement?: string | HTMLElement | undefined
  subscriberProperties?: OT.SubscriberProperties | undefined
  sessionEventHandlers?: SessionTypes.SessionEventHandlers
  subscriberEventHandlers?: SessionTypes.SubscriberEventHandlers
  publisherEventHandlers?: PublishTypes.EventHandlers
}
interface HookReturn {
  session: SessionTypes.HookReturn
  publisher: PublishTypes.HookReturn
}
export type Hook = (props: HookProps) => HookReturn

export interface HookState {
  sessionId: string | null
  token: string | null
}
interface HookAction {
  type: string
  sessionId?: string
  token?: string
}
export type HookReducer = (state: HookState, action: HookAction) => HookState
