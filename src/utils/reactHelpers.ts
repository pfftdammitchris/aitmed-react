import {
  MdChevronLeft,
  MdChevronRight,
  MdModeEdit,
  MdCropFree,
  MdZoomOutMap,
  MdFullscreen,
  MdFullscreenExit,
  MdExpandMore,
  MdExpandLess,
  MdClose,
  MdMoreHoriz,
  MdLastPage,
  MdFirstPage,
  MdMenu,
  MdVoiceChat,
  MdOpenWith,
  MdBugReport,
  MdPictureAsPdf,
} from 'react-icons/md'

export interface IconProps {
  name?: string
  title?: string
  component?: React.ElementType<any>
}

// Common props for each icon and the component itself
// Keys are their names
export const commonIcons: {
  [name: string]: IconProps
} = {
  'arrow-left': {
    component: MdChevronLeft,
    title: 'Move Left',
  },
  'arrow-right': {
    component: MdChevronRight,
    title: 'Move Right',
  },
  bug: {
    component: MdBugReport,
    title: 'Bug/Error',
  },
  'burger-menu': {
    component: MdMenu,
    title: 'Open/Close the Menu',
  },
  edit: {
    component: MdModeEdit,
    title: 'Edit',
  },
  cancel: {
    component: MdClose,
    title: 'Cancel',
  },
  close: {
    component: MdClose,
    title: 'Close',
  },
  crop: {
    component: MdCropFree,
    title: 'Crop photo',
  },
  drag: {
    component: MdOpenWith,
    title: 'Drag',
  },
  'exit-fullscreen': {
    component: MdFullscreenExit,
    title: 'Exit Fullscreen',
  },
  'expand-more': {
    component: MdExpandMore,
    title: 'Expand More',
  },
  'expand-less': {
    component: MdExpandLess,
    title: 'Expand Less',
  },
  fullscreen: {
    component: MdFullscreen,
    title: 'Fullscreen',
  },
  'first-page': {
    component: MdFirstPage,
    title: 'Go to First Page',
  },
  'last-page': {
    component: MdLastPage,
    title: 'Go to Last Page',
  },
  more: {
    component: MdMoreHoriz,
    title: 'See more',
  },
  'zoom-out': {
    component: MdZoomOutMap,
    title: 'Zoom Out',
  },
  webcam: {
    component: MdVoiceChat,
    title: 'Webcam / Voice chat',
  },
  pdf: {
    component: MdPictureAsPdf,
    title: 'PDF',
  },
}
