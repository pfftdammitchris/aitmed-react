import React from 'react'
import cx from 'classnames'
import useTheme from '@material-ui/styles/useTheme'
import makeStyles from '@material-ui/styles/makeStyles'
import { Theme } from '@material-ui/core'
import Signature from 'react-signature-canvas'
import Typography from '../../Typography'
import Button from '../../Button'
import Flex from '../../Flex'

interface SignatureCanvasProps {
  input?: {
    value?: boolean
    onChange: (value: boolean) => void
  }
  meta?: any
  value?: boolean
  onChange?: (value: boolean) => void
  canvasContainerProps?: any
  canvasProps?: any
  className?: string
  classNames?: {
    x?: string
    canvasContainer?: string
    canvas?: string
    clearBtn?: string
  }
  clearBtnProps?: any
  clearSignature?: () => void
  hideClear?: boolean
  onDrawEnd?: () => void
  penColor?: string
  signatureRef?: { current: null | any }
  signatureInputRef?: { current: null | any }
  signatureCaption?: React.ReactNode
  signatureLabel?: React.ReactNode
  xProps?: any
}

// @ts-ignore
const useStyles = makeStyles((theme: any) => ({
  root: {
    position: 'relative',
  },
  contentRoot: {
    position: 'relative',
    width: '100%',
    '& h2': {
      fontWeight: 700,
      padding: '12px 12px 0',
    },
    '& label': {
      fontSize: '3.5em !important',
      fontWeight: 500,
    },
    borderBottom: '2px solid #000',
    display: 'flex',
    alignItems: 'flex-end',
  },
  x: {
    position: 'relative',
    bottom: 15,
    userSelect: 'none',
    display: 'inline-block',
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
    padding: '0 !important',
    margin: '0 !important',
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

const FinalFormSignatureCanvas: React.FC<SignatureCanvasProps> = ({
  input,
  meta,
  canvasContainerProps,
  canvasProps,
  clearBtnProps,
  className,
  classNames = {},
  clearSignature,
  hideClear,
  onChange,
  onDrawEnd,
  penColor,
  signatureRef,
  signatureInputRef,
  signatureCaption,
  signatureLabel,
  value,
  xProps,
}) => {
  const classes = useStyles()
  const theme = useTheme<Theme>()
  // Pass input ref to outside, so input value can be change from outside
  if (signatureInputRef) signatureInputRef.current = input

  const [trimmedDataUrl, setTrimmedUrl] = React.useState('')

  if (onChange == undefined && (!!input && typeof input === 'object')) {
    value = input.value
    onChange = input.onChange
  } else {
    console.warn(
      'Warning: You tried to set value and onChange with "input.value" and "input.onChange" ' +
        'but input was null or undefined',
    )
  }

  const onDraw = () => {
    if (!value && typeof onChange === 'function') onChange(true)
    // @ts-ignore
    if (signatureRef.current) {
      // @ts-ignore
      setTrimmedUrl(signatureRef.current.toDataURL('image/png'))
    } else {
      console.warn(
        'Tried to set the new drawing on canvas but signatureRef.current was null or undefined',
      )
    }
  }

  const clear = () => {
    if (typeof onChange === 'function') onChange(false)
    // @ts-ignore
    if (signatureRef.current != null) signatureRef.current.clear()
    else if (typeof clearSignature === 'function') clearSignature()
    else {
      console.warn(
        'Tried to clear the signature but no clearSignature function or signatureRef was available',
      )
    }
  }

  return (
    <div className={classes.root}>
      <div className={classes.contentRoot}>
        <Flex flexDirection="column">
          <Typography
            className={cx(classes.x, classNames.x)}
            variant="h2"
            {...xProps}
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
        <div
          className={cx(classes.canvasContainer, classNames.canvasContainer)}
          {...canvasContainerProps}
        >
          {trimmedDataUrl && meta.submitting ? (
            <img
              className={cx(classes.canvas, classNames.canvas, className)}
              src={trimmedDataUrl}
            />
          ) : (
            <Signature
              className={cx(classes.canvas, classNames.canvas, className)}
              ref={signatureRef}
              penColor={penColor || theme.palette.secondary.dark}
              clearOnResize={false}
              onEnd={onDrawEnd || onDraw}
              clearButton
              canvasProps={{
                className: cx(classes.canvas, classNames.canvas, className),
              }}
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
      {!hideClear && !!value && (
        <Button
          id="clear-button"
          className={classes.clearBtn}
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
