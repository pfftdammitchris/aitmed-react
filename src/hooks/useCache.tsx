// Hook used to interact with many refs or values in one interface
import React from 'react'

const useCache = (initialCache = {}) => {
  const cacheRef = React.useRef(initialCache)
  const cache = cacheRef.current

  function cacheValue(key: string, value: any) {
    cache[key] = value
  }

  // Utility to cache react elements on mount
  function onMountRef(key: string) {
    return (e: any) => {
      if (key) {
        // cacheValue(key, e)
        cache[key] = e
      } else if (e.target && e.target.name) {
        // cacheValue(e.target.name, e)
        cache[e.target.name] = e
      }
    }
  }

  return {
    cache,
    cacheValue,
    onMountRef,
  }
}

export default useCache
