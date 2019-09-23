import React from 'react'
import ReactProgressed from 'react-progressed'
import { makeStyles } from '@material-ui/styles'

interface FileUploadProps {
  children?: React.ReactNode
  text?: string
  onChange: (fileList: FileList, e: any) => void
  inputRef?: {
    readonly current: any | null
  }
}

const useStyles = makeStyles((theme: any) => ({
  root: {
    //
  },
}))

function FileUpload(props: FileUploadProps) {
  const classes = useStyles(props)

  return <ReactProgressed {...props} />
}

export default FileUpload
