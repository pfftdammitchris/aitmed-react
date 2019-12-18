import React from 'react'
import { makeStyles } from '@material-ui/styles'
import cx from 'classnames'

export interface FlexProps {
  component?: React.ElementType<any>
  center?: boolean
  flexStart?: boolean
  flexEnd?: boolean
  flexGrow?: number
  flexDirection?: 'unset' | 'column' | 'column-reverse' | 'row' | 'row-reverse'
  flexWrap?: 'nowrap' | 'wrap'
  spaceBetween?: boolean
  spaceAround?: boolean
  style?: React.CSSProperties
  textAlign?: 'left' | 'center' | 'right'
  wrap?: boolean
  xsBlock?: boolean // In some cases we need an escape hatch to do display: 'block' on small screens
}

const useStyles = makeStyles((theme: any) => ({
  root: {},
  xsBlock: {
    [theme.breakpoints.down('xs')]: {
      display: 'block !important',
      // Sometimes we do a "wrapperProps={{ marginRight: 3 }} for input components".
      //    This is used to restore it on a mobile screen
      '& fieldset': {
        marginRight: 0,
      },
    },
  },
  spaced: {
    '& fieldset': {
      marginRight: 4,
    },
  },
}))

function computeJustify(props: FlexProps) {
  if (props.center) return 'center'
  if (props.spaceBetween) return 'space-between'
  if (props.spaceAround) return 'space-around'
  if (props.flexStart) return 'flex-start'
  if (props.flexEnd) return 'flex-end'
  return 'initial'
}

const Flex: React.FC<FlexProps> = (props) => {
  const classes = useStyles(props)
  const {
    component: Component = 'div',
    style,
    center,
    spaceBetween,
    spaceAround,
    flexStart,
    flexEnd,
    flexGrow,
    flexDirection = 'row',
    flexWrap = 'nowrap',
    textAlign,
    wrap,
    xsBlock,
    ...rest
  } = props
  return (
    <Component
      className={cx(classes.root, {
        [classes.xsBlock]: !!xsBlock,
      })}
      style={{
        display: 'flex',
        justifyContent: computeJustify(props),
        alignItems: 'flex-start',
        flexGrow,
        flexDirection,
        textAlign,
        flexWrap: wrap ? 'wrap' : flexWrap,
        ...style,
      }}
      {...rest}
    />
  )
}

export default Flex
