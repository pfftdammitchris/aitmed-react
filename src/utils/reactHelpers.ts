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
} from 'react-icons/md'

// Common props for each icon and the component itself
export const commonIcons = {
  'arrow-left': {
    Icon: MdChevronLeft,
    title: 'Move Left',
  },
  'arrow-right': {
    Icon: MdChevronRight,
    title: 'Move Right',
  },
  bug: {
    Icon: MdBugReport,
    title: 'Bug/Error',
  },
  'burger-menu': {
    Icon: MdMenu,
    title: 'Open/Close the Menu',
  },
  edit: {
    Icon: MdModeEdit,
    title: 'Edit',
  },
  cancel: {
    Icon: MdClose,
    title: 'Cancel',
  },
  close: {
    Icon: MdClose,
    title: 'Close',
  },
  crop: {
    Icon: MdCropFree,
    title: 'Crop photo',
  },
  drag: {
    Icon: MdOpenWith,
    title: 'Drag',
  },
  'exit-fullscreen': {
    Icon: MdFullscreenExit,
    title: 'Exit Fullscreen',
  },
  'expand-more': {
    Icon: MdExpandMore,
    title: 'Expand More',
  },
  'expand-less': {
    Icon: MdExpandLess,
    title: 'Expand Less',
  },
  fullscreen: {
    Icon: MdFullscreen,
    title: 'Fullscreen',
  },
  'first-page': {
    Icon: MdFirstPage,
    title: 'Go to First Page',
  },
  'last-page': {
    Icon: MdLastPage,
    title: 'Go to Last Page',
  },
  more: {
    Icon: MdMoreHoriz,
    title: 'See more',
  },
  'zoom-out': {
    Icon: MdZoomOutMap,
    title: 'Zoom Out',
  },
  webcam: {
    Icon: MdVoiceChat,
    title: 'Webcam / Voice chat',
  },
}
