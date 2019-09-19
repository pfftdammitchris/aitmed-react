import React from 'react'
import cx from 'classnames'
import { makeStyles } from '@material-ui/styles'
import { Theme } from '@material-ui/core'

interface AlignOutlinedTextFieldsProps {
  children: React.ReactNode
  size?: 'small' | 'medium' | 'large'
}

const useStyles = makeStyles((theme: Theme) => ({
  small: {
    '& input': {},
    '& select': {
      padding: '18.5px 14px',
    },
  },
  default: {
    '& input': {},
    '& select': {
      padding: '18.5px 14px',
    },
  },
}))

function AlignOutlinedTextFields({
  children,
  size = 'medium',
  ...rest
}: AlignOutlinedTextFieldsProps) {
  const classes = useStyles()

  return (
    <div
      className={cx({
        // [classes.small]: size === 'small',
        [classes.default]: size === 'medium',
      })}
      {...rest}
    >
      {children}
    </div>
  )
}

export default AlignOutlinedTextFields
