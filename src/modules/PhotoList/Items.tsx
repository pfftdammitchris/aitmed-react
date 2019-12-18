import React from 'react'
import PhotoListContext from './Context'
import { PhotoListContextValue } from './Provider'

export interface PhotoListItemsProps {
  render: (ctx: PhotoListContextValue) => any
}

function PhotoListItems({ render }: PhotoListItemsProps) {
  const ctx = React.useContext(PhotoListContext)

  if (ctx == undefined) {
    return null
  }

  return render(ctx)
}

export default PhotoListItems
