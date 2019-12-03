import ChevronLeftOutlinedIcon from '@material-ui/icons/ChevronLeftOutlined'
import ChevronRightOutlinedIcon from '@material-ui/icons/ChevronRightOutlined'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined'
import CropOutlinedIcon from '@material-ui/icons/CropOutlined'
import ZoomOutMapOutlinedIcon from '@material-ui/icons/ZoomOutMapOutlined'
import FullscreenOutlinedIcon from '@material-ui/icons/FullscreenOutlined'
import FullscreenExitOutlinedIcon from '@material-ui/icons/FullscreenExitOutlined'
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined'
import ExpandLessOutlinedIcon from '@material-ui/icons/ExpandLessOutlined'
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined'
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined'
import LastPageOutlinedIcon from '@material-ui/icons/LastPageOutlined'
import FirstPageOutlinedIcon from '@material-ui/icons/FirstPageOutlined'
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined'
import RecordVoiceOverOutlinedIcon from '@material-ui/icons/RecordVoiceOverOutlined'
import OpenWithOutlinedIcon from '@material-ui/icons/OpenWithOutlined'
import BugReportOutlinedIcon from '@material-ui/icons/BugReportOutlined'
import PictureAsPdfOutlinedIcon from '@material-ui/icons/PictureAsPdfOutlined'
import PhotoSizeSelectLargeOutlinedIcon from '@material-ui/icons/PhotoSizeSelectLargeOutlined'
import TextFieldsOutlinedIcon from '@material-ui/icons/TextFieldsOutlined'
import AudiotrackOutlinedIcon from '@material-ui/icons/AudiotrackOutlined'
import InsertDriveFileOutlinedIcon from '@material-ui/icons/InsertDriveFileOutlined'
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined'
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
    component: ChevronLeftOutlinedIcon,
    title: 'Move Left',
  },
  'arrow-right': {
    component: ChevronRightOutlinedIcon,
    title: 'Move Right',
  },
  bug: {
    component: BugReportOutlinedIcon,
    title: 'Bug/Error',
  },
  'burger-menu': {
    component: MenuOutlinedIcon,
    title: 'Open/Close the Menu',
  },
  edit: {
    component: EditOutlinedIcon,
    title: 'Edit',
  },
  excel: {
    component: InsertDriveFileOutlinedIcon,
    title: 'Excel',
  },
  cancel: {
    component: CloseOutlinedIcon,
    title: 'Cancel',
  },
  close: {
    component: CloseOutlinedIcon,
    title: 'Close',
  },
  crop: {
    component: CropOutlinedIcon,
    title: 'Crop photo',
  },
  drag: {
    component: OpenWithOutlinedIcon,
    title: 'Drag',
  },
  'exit-fullscreen': {
    component: FullscreenExitOutlinedIcon,
    title: 'Exit Fullscreen',
  },
  'expand-more': {
    component: ExpandMoreOutlinedIcon,
    title: 'Expand More',
  },
  'expand-less': {
    component: ExpandLessOutlinedIcon,
    title: 'Expand Less',
  },
  fullscreen: {
    component: FullscreenOutlinedIcon,
    title: 'Fullscreen',
  },
  'first-page': {
    component: FirstPageOutlinedIcon,
    title: 'Go to First Page',
  },
  'last-page': {
    component: LastPageOutlinedIcon,
    title: 'Go to Last Page',
  },
  more: {
    component: MoreHorizOutlinedIcon,
    title: 'See more',
  },
  photoshop: {
    component: PhotoSizeSelectLargeOutlinedIcon,
    title: 'Photoshop',
  },
  'zoom-out': {
    component: ZoomOutMapOutlinedIcon,
    title: 'Zoom Out',
  },
  webcam: {
    component: RecordVoiceOverOutlinedIcon,
    title: 'Webcam / Voice chat',
  },
  pdf: {
    component: PictureAsPdfOutlinedIcon,
    title: 'Pdf',
  },
  rtf: {
    component: TextFieldsOutlinedIcon,
    title: 'Rich Text File',
  },
  txt: {
    component: TextFieldsOutlinedIcon,
    title: 'Text File',
  },
  word: {
    component: InsertDriveFileOutlinedIcon,
    title: 'Word',
  },
  // Audio
  // IIFE returning an object
  ...(function() {
    return audioExts.reduce((acc: any, ext: string) => {
      acc[ext] = {
        component: AudiotrackOutlinedIcon,
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
        component: FileCopyOutlinedIcon,
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
