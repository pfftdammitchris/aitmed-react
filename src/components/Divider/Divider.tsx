import React from 'react'
import cx from 'classnames'
import MuiDivider from '@material-ui/core/Divider'
import { makeStyles } from '@material-ui/styles'

interface DividerProps {
  classNames?: {
    root?: string
    absolute?: string
    inset?: string
    light?: string
    middle?: string
  }
  margin?: string | number
}

const useStyles: (props: DividerProps) => any = makeStyles((theme: any) => ({
  root: ({ margin }: DividerProps) => ({
    margin: margin || `${theme.spacing(2.5) + 'px'} auto`,
  }),
}))

const Divider: React.FC<DividerProps> = ({
  classNames = {},
  ...props
}: any) => {
  const classes = useStyles(props)

  return (
    <MuiDivider
      classes={{
        ...classNames,
        root: cx(classes.root, classNames.root),
      }}
      {...props}
    />
  )
}

export default Divider