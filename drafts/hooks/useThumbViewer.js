import { useReducer } from 'react'

const initialState = {
  opened: false,
  src: [],
  viewType: 'img', // default.   'img' || 'pdf
  viewerProps: {},
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'open-viewer':
      return {
        ...state,
        opened: true,
        viewType: action.viewType,
        src: action.src,
        viewerProps: action.viewerProps || {},
      }
    case 'close-viewer':
      return { ...state, opened: false, src: [] }
    default:
      return state
  }
}

// Hook for viewing images/pdf in a larger view
// Add additional custom functionality when needed
// NOTE: This is mainly used in conjunction with components/common/Lightbox
const useThumbViewer = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  // Creates and returns an object that can be passed into openImageViewer to generate an image in the lightbox view
  const createImgSrc = ({ src, ...opts }) => {
    return [{ src, ...opts }]
  }

  // Regarding the img viewer:
  //    Can create the image using createImageSrc(), pass in the return value from it
  //    Can also create a list of images using createImageSrcs(), pass in the return value from it
  const open = ({ viewType, src, fileName, viewerProps }) => {
    const viewerData =
      viewType === 'img'
        ? createImgSrc({
            src,
            caption: fileName,
            alt: fileName,
          })
        : window.URL.createObjectURL(src)
    dispatch({ type: 'open-viewer', viewType, src: viewerData, viewerProps })
  }

  const close = () => {
    dispatch({ type: 'close-viewer' })
  }

  const getExt = (str) => {
    const hasExt = str.indexOf('.') !== -1
    const indexExt = str.lastIndexOf('.')
    return hasExt ? str.slice(indexExt) : ''
  }

  const getExtFromBlobType = (blobType) => {
    if (/png/i.test(blobType)) return '.png'
    else if (/jpg/i.test(blobType)) return '.jpg'
    else if (/jpeg/i.test(blobType)) return '.jpeg'
    else if (/gif/i.test(blobType)) return '.gif'
    else if (/tif/i.test(blobType)) return '.tif'
    else if (/webp/i.test(blobType)) return '.webp'
    else if (/pdf/i.test(blobType)) return '.pdf'
    else if (/txt/i.test(blobType)) return '.txt'
    else return ''
  }

  // Useful evaluation when passing in a file type or occasionally a fileName with the ext
  const isPdf = (str) => typeof str === 'string' && str.includes('pdf')

  return {
    ...state,
    open,
    close,
    createImgSrc,
    getExt,
    getExtFromBlobType,
    isPdf,
  }
}

export default useThumbViewer
