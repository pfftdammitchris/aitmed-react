import React from 'react'
import { storiesOf } from '@storybook/react'
import { Form, Field } from 'react-final-form'
import { makeStyles } from '@material-ui/styles'
import Button from '../components/Button'
import SignatureCanvas from '../components/finalForm/SignatureCanvas'
// import getCodeDoc from 'utils/getCodeDoc'
import Typography from '../components/Typography'
import readme from './docs/finalForm/SignatureCanvas/readme.md'
import canvasContainerPropsMd from './docs/finalForm/SignatureCanvas/canvasContainerProps.md'
import canvasPropsMd from './docs/finalForm/SignatureCanvas/canvasProps.md'
import classNamesMd from './docs/finalForm/SignatureCanvas/classNames.md'
import clearBtnPropsMd from './docs/finalForm/SignatureCanvas/clearBtnProps.md'
import clearSignatureMd from './docs/finalForm/SignatureCanvas/clearSignature.md'
import hideClearMd from './docs/finalForm/SignatureCanvas/hideClear.md'
import onDrawEndMd from './docs/finalForm/SignatureCanvas/onDrawEnd.md'
import penColorMd from './docs/finalForm/SignatureCanvas/penColor.md'
import signatureRefMd from './docs/finalForm/SignatureCanvas/signatureRef.md'
import signatureCaptionMd from './docs/finalForm/SignatureCanvas/signatureCaption.md'
import signatureLabelMd from './docs/finalForm/SignatureCanvas/signatureLabel.md'
import xPropsMd from './docs/finalForm/SignatureCanvas/xProps.md'

async function onSubmit(values) {
  try {
    console.log(values)
    window.alert(JSON.stringify(values, null, 2))
  } catch (error) {
    throw error
  }
}

function Wrapper({ children }) {
  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          {children}
          <div style={{ margin: '25px 0' }}>
            <Button type="submit" primary small>
              Submit
            </Button>
          </div>
        </form>
      )}
    />
  )
}

storiesOf('(final-form) SignatureCanvas', module)
  .add('README', () => <div />, {
    readme: { content: readme },
  })
  .add('default', () => {
    return (
      <Wrapper>
        <Field name="signature" component={SignatureCanvas} />
      </Wrapper>
    )
  })
  .add(
    'props.canvasContainerProps',
    () => {
      const useStyles = makeStyles({
        canvasContainer: {
          border: '1px solid teal',
          borderRadius: 50,
        },
      })
      return React.createElement(() => {
        const classes = useStyles()
        return (
          <Wrapper>
            <Field
              name="signature"
              component={SignatureCanvas}
              canvasContainerProps={{
                className: classes.canvasContainer,
              }}
            />
          </Wrapper>
        )
      })
    },
    { readme: { content: canvasContainerPropsMd } },
  )
  .add(
    'props.canvasProps',
    () => {
      const onBegin = () => {
        console.log('drawing on canvas')
      }

      const onEnd = () => {
        console.log('drew on canvas')
      }

      return (
        <Wrapper>
          <Field
            name="signature"
            component={SignatureCanvas}
            canvasProps={{
              minWidth: 5,
              maxWidth: 10.5,
              minDistance: 10,
              onBegin,
              onEnd,
              penColor: 'magenta',
            }}
          />
        </Wrapper>
      )
    },
    { readme: { content: canvasPropsMd } },
  )
  .add(
    'props.classNames',
    () => {
      const useStyles = makeStyles({
        x: {
          border: '1px solid teal',
        },
        canvasContainer: {
          border: '1px solid magenta',
        },
        clearBtn: {
          borderRadius: 25,
          fontSize: '1.5rem',
          minWidth: 250,
          minHeight: 50,
          background: 'salmon',
        },
      })

      return React.createElement(() => {
        const classes = useStyles()

        return (
          <Wrapper>
            <Field
              name="signature"
              component={SignatureCanvas}
              classNames={{
                x: classes.x,
                canvasContainer: classes.canvasContainer,
                clearBtn: classes.clearBtn,
              }}
            />
          </Wrapper>
        )
      })
    },
    { readme: { content: classNamesMd } },
  )
  .add(
    'props.clearBtnProps',
    () => {
      return (
        <Wrapper>
          <Field
            name="signature"
            component={SignatureCanvas}
            clearBtnProps={{
              style: { padding: '25px 50px', fontSize: '1.2rem' },
              hover: {
                thirdary: 'white',
              },
              thirdary: true,
            }}
          />
        </Wrapper>
      )
    },
    { readme: { content: clearBtnPropsMd } },
  )
  .add(
    'props.clearSignature',
    () => {
      return React.createElement(() => {
        function clearSignature() {
          window.alert('Clicked! Provide your own logic to clear the value')
        }

        return (
          <Wrapper>
            <Field
              name="signature"
              clearSignature={clearSignature}
              component={SignatureCanvas}
            />
          </Wrapper>
        )
      })
    },
    { readme: { content: clearSignatureMd } },
  )
  .add(
    'props.hideClear',
    () => {
      return (
        <Wrapper>
          <Field name="signature" component={SignatureCanvas} hideClear />
        </Wrapper>
      )
    },
    { readme: { content: hideClearMd } },
  )
  .add(
    'props.onDrawEnd',
    () => {
      const signatureRef = React.createRef()

      function onDrawEnd() {
        console.log('drew on canvas')
      }

      return (
        <Wrapper>
          <Field
            name="signature"
            component={SignatureCanvas}
            signatureRef={signatureRef}
            onDrawEnd={onDrawEnd}
          />
        </Wrapper>
      )
    },
    { readme: { content: onDrawEndMd } },
  )
  .add(
    'props.penColor',
    () => {
      return (
        <Wrapper>
          <Field
            name="signature"
            component={SignatureCanvas}
            penColor="orange"
          />
        </Wrapper>
      )
    },
    { readme: { content: penColorMd } },
  )
  .add(
    'props.signatureRef',
    () => {
      const signatureRef = React.createRef()

      return (
        <Wrapper>
          <Field
            name="signature"
            component={SignatureCanvas}
            signatureRef={signatureRef}
          />
        </Wrapper>
      )
    },
    { readme: { content: signatureRefMd } },
  )
  .add(
    'props.signatureCaption',
    () => {
      const signatureCaption = (
        <Typography variant="h4" style={{ border: '1px solid red' }} secondary>
          Custom signature caption
        </Typography>
      )
      return (
        <Wrapper>
          <Field
            name="signature"
            component={SignatureCanvas}
            signatureCaption={signatureCaption}
          />
        </Wrapper>
      )
    },
    { readme: { content: signatureCaptionMd } },
  )
  .add(
    'props.signatureLabel',
    () => {
      const signatureLabel = (
        <Typography
          variant="h6"
          style={{ border: '1px solid magenta' }}
          secondary
        >
          Custom signature label
        </Typography>
      )

      return (
        <Wrapper>
          <Field
            name="signature"
            component={SignatureCanvas}
            signatureLabel={signatureLabel}
          />
        </Wrapper>
      )
    },
    { readme: { content: signatureLabelMd } },
  )
  .add(
    'props.xProps',
    () => {
      const useStyles = makeStyles({
        x: {
          border: '2px solid maroon',
        },
      })

      return React.createElement(() => {
        const classes = useStyles()

        return (
          <Wrapper>
            <Field
              name="signature"
              component={SignatureCanvas}
              xProps={{
                className: classes.x,
                variant: 'h6',
                error: true,
              }}
            />
          </Wrapper>
        )
      })
    },
    { readme: { content: xPropsMd } },
  )
