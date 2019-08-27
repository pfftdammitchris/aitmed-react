import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Theme } from '@material-ui/core'

interface RFAProps {
  //
}

const useStyles: (props: RFAProps) => any = makeStyles((theme: Theme) => ({
  root: {
    //
  },
}))

const RFA = (props: any) => {
  const classes = useStyles(props)

  return <RFA />
}

export default RFA
