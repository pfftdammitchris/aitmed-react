import React from 'react'
import ReactProgressed from 'react-progressed'
import { css } from '../../utils'

interface FileUploadProps {
  children?: React.ReactNode
  text?: string
  onChange: (fileList: FileList, e: any) => void
  inputRef?: {
    readonly current: any | null
  }
  borderStyle?: 'dashed' | 'solid'
  borderColor?: string
  borderSize?: string | number
}

function FileUpload({
  borderColor = 'rgb(110, 135, 139)',
  borderStyle = 'dashed',
  borderSize = '3px',
  ...rest
}: FileUploadProps) {
  // @ts-ignore
  const input = <ReactProgressed {...rest} />

  return (
    <>
      {input}
      <style>
        {`
          .styles_fileInputLabel__22jS8 {
            border: ${css.resolvePx(
              borderSize,
            )} ${borderStyle} ${borderColor} !important;
          }
        `}
      </style>
    </>
  )
}

export default FileUpload
