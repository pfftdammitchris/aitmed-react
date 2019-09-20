import React from 'react'
import { isArray, isObject, isString } from '../../utils'
import { LightboxSrc, SrcProps } from './types'

function format(src: SrcProps) {
  if (isArray(src)) {
    // 2 versions:
    //    1. array of strings
    //    2. array of objects
    // @ts-ignore
    return src.map((options: LightboxSrc) => {
      let option: LightboxSrc = { src: '' }
      if (isString(options)) {
        option.src = options
      } else {
        if (isObject(options)) {
          option = options
        }
      }
      return option
    })
  } else if (isObject(src)) {
    return [src]
  }
  // We will assume its a string now
  else {
    return [{ src }]
  }
}

function useLightbox({ src }) {
  const [images, setImages] = React.useState<any | null>()

  React.useEffect(() => {
    if (src && !images) {
      setImages(format(src))
    }
  }, [])

  return {
    images,
  }
}

export default useLightbox
