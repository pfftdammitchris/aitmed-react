import React from 'react'
import cx from 'classnames'
import { makeStyles, useTheme } from '@material-ui/styles'
import { Theme } from '@material-ui/core'
import Signature from 'react-signature-canvas'
import useSignatureCanvas from './useSignatureCanvas'
import Typography from '../../Typography'
import Button from '../../Button'
import X from './X'

interface SignatureCanvasProps {
  input: any
  meta: any
  signatureRef: { current: null | any }
  canvasContainerProps?: any
  canvasProps?: any
  classNames?: {
    x?: string
    canvasContainer?: string
    clearBtn?: string
  }
  clearBtnProps?: any
  clearSignature?: () => void
  hideClear?: boolean
  onDrawEnd?: () => void
  penColor?: string
  signatureCaption?: React.ReactNode
  signatureLabel?: React.ReactNode
  xProps?: any
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: 'relative',
  },
  contentRoot: {
    position: 'relative',
    '& label': {
      fontSize: '3.5em !important',
      fontWeight: 500,
    },
    borderBottom: '2px solid #000',
    display: 'flex',
    alignItems: 'flex-end',
  },

  canvasContainer: {
    width: '100%',
  },
  canvas: {
    width: '90%',
    height: 90,
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  clearBtn: {
    position: 'absolute',
    right: 0,
    bottom: -30,
    zIndex: 9999,
    padding: '0',
    margin: '0',
    fontSize: 9.8,
    minHeight: 0,
    height: 20,
  },
}))

/*
  An HTML canvas element used for signing purposes like forms.
  It just requires an onChange prop to update props.value, and signatureRef to grab a reference to it.
  The parent decides how to compute the state by passing in value and onChange as props.
  You can clear the canvas using the .clear() method by using the reference to the canvas.
  Supports react-final-form by applying input.value and input.onChange to props.value and props.onChange
*/

const FinalFormSignatureCanvas: React.FC<SignatureCanvasProps> = (props) => {
  const classes = useStyles()
  const theme = useTheme<Theme>()
  const {
    input,
    meta,
    canvasContainerProps = {},
    canvasProps,
    clearBtnProps,
    classNames = {},
    hideClear,
    onDrawEnd,
    penColor,
    signatureRef,
    signatureCaption,
    signatureLabel,
    xProps = {},
  } = props

  const { clear, onDraw, trimmedDataUrl } = useSignatureCanvas(props)

  return (
    <div className={classes.root}>
      <div className={classes.contentRoot}>
        <X
          signatureLabel={signatureLabel}
          xProps={{ ...xProps, className: cx(xProps.className, classNames.x) }}
        />
        <div
          {...canvasContainerProps}
          className={cx(
            classes.canvasContainer,
            classNames.canvasContainer,
            canvasContainerProps.className,
          )}
        >
          {trimmedDataUrl && meta.submitting ? (
            <img className={classes.canvas} src={trimmedDataUrl} />
          ) : (
            <Signature
              className={classes.canvas}
              ref={signatureRef}
              penColor={penColor || theme.palette.secondary.dark}
              clearOnResize={false}
              onEnd={onDrawEnd || onDraw}
              clearButton
              {...canvasProps}
            />
          )}
        </div>
      </div>
      {meta && meta.touched && meta.error && (
        <Typography variant="caption" error>
          {meta.error}
        </Typography>
      )}
      <Typography variant="caption">
        <strong>Note</strong>: Changes in screen size or screen orientation will
        disrupt the cursor positioning behavior. If this happens, clear the
        signature by clicking on the "Clear" button and try again.
      </Typography>
      {!hideClear && !!input && !!input.value && (
        <Button
          id="clear-button"
          className={cx(classes.clearBtn, classNames.clearBtn)}
          onClick={clear}
          hover={{ secondary: 'white' }}
          secondary
          {...clearBtnProps}
        >
          Clear
        </Button>
      )}
      {signatureCaption}
    </div>
  )
}

export default FinalFormSignatureCanvas
