import React from 'react'
import { makeStyles } from '@material-ui/styles'
import cx from 'classnames'

interface Props {
  center?: boolean
  flexStart?: boolean
  flexEnd?: boolean
  flexGrow?: number
  flexWrap?: 'nowrap' | 'wrap'
  spaceBetween?: boolean
  spaceAround?: boolean
  style?: React.CSSProperties
  wrap?: boolean
  xsBlock?: boolean // In some cases we need an escape hatch to do display: 'block' on small screens
}

const useStyles = makeStyles((theme: any) => ({
  root: {},
  xsBlock: {
    [theme.breakpoints.down('xs')]: {
      display: 'block !important',
    },
  },
}))

function computeJustify(props: Props) {
  if (props.center) return 'center'
  if (props.spaceBetween) return 'space-between'
  if (props.spaceAround) return 'space-around'
  if (props.flexStart) return 'flex-start'
  if (props.flexEnd) return 'flex-end'
  return 'initial'
}

const Flex: React.FC<Props> = (props) => {
  const classes = useStyles(props)
  const {
    style,
    center,
    spaceBetween,
    spaceAround,
    flexStart,
    flexEnd,
    flexGrow,
    flexWrap,
    wrap,
    xsBlock,
    ...rest
  } = props
  return (
    <div
      className={cx(classes.root, {
        [classes.xsBlock]: !!xsBlock,
      })}
      style={{
        display: 'flex',
        justifyContent: computeJustify(props),
        alignItems: 'center',
        flexGrow,
        flexWrap: wrap ? 'wrap' : flexWrap,
        ...style,
      }}
      {...rest}
    />
  )
}

export default Flex
