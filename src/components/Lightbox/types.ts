export interface LightboxComponent {
  carouselProps: any
  currentIndex: number
  currentView: any
  data: any
  formatters: any
  frameProps?: any
  getStyles: (key: string, props: any) => React.CSSProperties
  index: number
  interactionIsIdle: boolean
  isFullscreen: boolean
  isModal: boolean
  modalProps: any
  trackProps: any
  views: Array<any>
}

export type LightboxSrc = { src: string; caption?: string; [key: string]: any }

export type SrcProps = string | string[] | LightboxSrc | LightboxSrc[]
