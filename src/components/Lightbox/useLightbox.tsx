import React from 'react'
import isArray from 'lodash/isArray'
import isString from 'lodash/isString'
import { LightboxSrc, SrcProps } from './types'

function format(src: SrcProps) {
  if (isArray(src)) {
    // 2 versions:
    //    1. array of strings
    //    2. array of objects
    return src.map((options: LightboxSrc) => {
      let option: LightboxSrc = { src: '' }
      if (isString(options)) {
        option.src = options
      } else {
        if (options && typeof options === 'object') {
          option = options
        }
      }
      return option
    })
  } else if (src && typeof src === 'object') {
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
      const formatted = format(src)
      setImages(format(src))
    }
  }, [])

  return {
    images,
  }
}

export default useLightbox
