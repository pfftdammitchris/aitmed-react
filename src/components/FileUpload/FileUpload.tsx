import React from 'react'
import ReactProgressed from 'react-progressed'

interface FileUploadProps {
  children?: React.ReactNode
  text?: string
  onChange: (fileList: FileList, e: any) => void
  inputRef?: {
    readonly current: any | null
  }
}

function FileUpload(props: FileUploadProps) {
  return <ReactProgressed {...props} />
}

export default FileUpload
