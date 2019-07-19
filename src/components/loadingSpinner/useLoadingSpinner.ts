import { useState, useEffect, useCallback } from 'react'
import random from 'lodash/random'

const useLoadingSpinner = ({ theme }: any) => {
  const [dynamicColor, setNewDynamicColor] = useState(
    theme.palette.secondary.main,
  )

  const getRandomColor = useCallback(() => {
    const colors = [
      theme.palette.primary.lightest,
      theme.palette.primary.lighter,
      theme.palette.primary.main,
      theme.palette.secondary.lightest2,
      theme.palette.secondary.lightest,
      theme.palette.secondary.main,
      theme.palette.thirdary.lighter,
      theme.palette.thirdary.light,
    ]
    return colors[random(0, colors.length - 1)]
  }, [
    theme.palette.primary.lighter,
    theme.palette.primary.lightest,
    theme.palette.primary.main,
    theme.palette.secondary.lightest,
    theme.palette.secondary.lightest2,
    theme.palette.secondary.main,
    theme.palette.thirdary.light,
    theme.palette.thirdary.lighter,
  ])

  useEffect(() => {
    const start = setInterval(() => setNewDynamicColor(getRandomColor()), 1400)
    return () => clearInterval(start)
  }, [getRandomColor])

  return dynamicColor
}

export default useLoadingSpinner
