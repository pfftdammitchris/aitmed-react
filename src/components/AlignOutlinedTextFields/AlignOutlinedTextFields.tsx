import React from 'react'
import cx from 'classnames'
import { makeStyles } from '@material-ui/styles'
import { Theme } from '@material-ui/core'
import Context from './Context'
import Provider from './Provider'

export interface AlignOutlinedTextFieldsProps {
  children: React.ReactNode
  size?: 'small' | 'medium' | 'large'
}

const small = {
  '& input': {
    padding: '0',
  },
  '& select': {
    padding: '8px 6px',
  },
}

const medium = {
  '& input': {
    padding: '10px 8px',
  },
  '& select': {
    padding: '18.5px 14px',
  },
}

const large = {
  '& input': {
    padding: '16.5px 6px',
  },
  '& select': {
    padding: '24.5px 14px',
  },
}

const useStyles = makeStyles((theme: Theme) => ({
  small,
  medium: {
    ...medium,
    [theme.breakpoints.down('xs')]: {
      ...small,
    },
  },
  large: {
    ...large,
    [theme.breakpoints.down('xs')]: {
      '& input': {
        padding: '10.5px 6px',
      },
      '& select': {
        padding: '18.5px 14px',
      },
    },
  },
}))

function AlignOutlinedTextFields({
  children,
  ...rest
}: AlignOutlinedTextFieldsProps) {
  const classes = useStyles()
  const ctx = React.useContext<any>(Context)
  const size = ctx ? ctx.size : undefined
  console.log(size)

  return (
    <div
      className={cx({
        [classes.small]: size === 'small',
        [classes.medium]: size === 'medium',
        [classes.large]: size === 'large',
      })}
      {...rest}
    >
      {children}
    </div>
  )
}

export default (props: any) => (
  <Provider {...props}>
    <AlignOutlinedTextFields {...props} />
  </Provider>
)
