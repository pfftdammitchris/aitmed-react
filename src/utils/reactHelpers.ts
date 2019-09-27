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
  MdPhotoSizeSelectLarge,
  MdTextFields,
  MdAudiotrack,
} from 'react-icons/md'
import { FaFileExcel, FaFileWord, FaCompress } from 'react-icons/fa'
import { audioExts, compressedExts } from './info'

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
  excel: {
    component: FaFileExcel,
    title: 'Excel',
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
  photoshop: {
    component: MdPhotoSizeSelectLarge,
    title: 'Photoshop',
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
    title: 'Pdf',
  },
  rtf: {
    component: MdTextFields,
    title: 'Rich Text File',
  },
  txt: {
    component: MdTextFields,
    title: 'Text File',
  },
  word: {
    component: FaFileWord,
    title: 'Word',
  },
  // Audio
  // IIFE returning an object
  ...(function() {
    return audioExts.reduce((acc: any, ext: string) => {
      acc[ext] = {
        component: MdAudiotrack,
        title: 'Audio Track',
      }
      return acc
    }, {})
  })(),
  // Compressed files
  // IIFE returning an object
  ...(function() {
    return compressedExts.reduce((acc: any, ext: string) => {
      acc[ext] = {
        component: FaCompress,
        title: 'Compressed File',
      }
      return acc
    }, {})
  })(),
}

export function isClassComponent(elementType: any): boolean {
  // elementType.prototype?.isReactComponent
  const { prototype = {} } = elementType
  return Boolean(prototype.isReactComponent)
}

// TODO: make this more complete
export const validReactHtmlAttrs = [
  'className',
  'dangerouslySetInnerHTML',
  'htmlFor',
]
