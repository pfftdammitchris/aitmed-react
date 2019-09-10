import React from 'react'
import cx from 'classnames'
import { makeStyles } from '@material-ui/styles'
import Typography from '../../Typography'
import Flex from '../../Flex'

interface XProps {
  signatureLabel?: React.ReactNode
  xProps?: any
}

const useStyles = makeStyles({
  x: {
    position: 'relative',
    bottom: 15,
    userSelect: 'none',
    fontWeight: 700,
    padding: '12px 12px 0',
  },
})

function SignatureCanvasX({ signatureLabel, xProps = {} }: XProps) {
  const classes = useStyles()

  return (
    <Flex flexDirection="column">
      <Typography
        variant="h2"
        {...xProps}
        className={cx(xProps.className, classes.x)}
      >
        X
      </Typography>
      <Typography
        variant="caption"
        style={{ position: 'absolute', bottom: 0, left: 0 }}
      >
        {signatureLabel || 'Signature'}
      </Typography>
    </Flex>
  )
}

export default SignatureCanvasX
