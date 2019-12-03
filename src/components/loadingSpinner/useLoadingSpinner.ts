import { useState, useEffect, useCallback } from 'react'
import random from 'lodash/random'
import { primary, secondary, thirdary } from '../../config/theme'

const useLoadingSpinner = () => {
  const [dynamicColor, setNewDynamicColor] = useState(secondary.main)

  const getRandomColor = useCallback(() => {
    const colors = [
      primary.lightest,
      primary.lighter,
      primary.main,
      // @ts-ignore
      secondary.lightest2,
      secondary.lightest,
      secondary.main,
      thirdary.lighter,
      thirdary.light,
    ]
    return colors[random(0, colors.length - 1)]
  }, [
    primary.lighter,
    primary.lightest,
    primary.main,
    secondary.lightest,
    // @ts-ignore
    secondary.lightest2,
    secondary.main,
    thirdary.light,
    thirdary.lighter,
  ])

  useEffect(() => {
    const start = setInterval(() => setNewDynamicColor(getRandomColor()), 1400)
    return () => clearInterval(start)
  }, [getRandomColor])

  return dynamicColor
}

export default useLoadingSpinner
