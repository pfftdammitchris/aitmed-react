import React from 'react'
import { storiesOf } from '@storybook/react'
import { Form, Field } from 'react-final-form'
import Button from 'components/Button'
import SignatureCanvas from '../components/finalForm/SignatureCanvas'
// import getCodeDoc from 'utils/getCodeDoc'
import readme from './docs/signatureCanvas.md'

async function onSubmit(values) {
  try {
    console.log(values)
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
  .add('props.canvasContainerProps', () => {
    return (
      <Wrapper>
        <Field name="signature" component={SignatureCanvas} />
      </Wrapper>
    )
  })
  .add('props.canvasProps', () => {
    return (
      <Wrapper>
        <Field name="signature" component={SignatureCanvas} />
      </Wrapper>
    )
  })
  .add('props.className', () => {
    return (
      <Wrapper>
        <Field name="signature" component={SignatureCanvas} />
      </Wrapper>
    )
  })
  .add('props.classNames', () => {
    return (
      <Wrapper>
        <Field name="signature" component={SignatureCanvas} />
      </Wrapper>
    )
  })
  .add('props.clearBtnProps', () => {
    return (
      <Wrapper>
        <Field name="signature" component={SignatureCanvas} />
      </Wrapper>
    )
  })
  .add('props.clearSignature', () => {
    return (
      <Wrapper>
        <Field name="signature" component={SignatureCanvas} />
      </Wrapper>
    )
  })
  .add('props.hideClear', () => {
    return (
      <Wrapper>
        <Field name="signature" component={SignatureCanvas} />
      </Wrapper>
    )
  })
  .add('props.onDrawEnd', () => {
    return (
      <Wrapper>
        <Field name="signature" component={SignatureCanvas} />
      </Wrapper>
    )
  })
  .add('props.penColor', () => {
    return (
      <Wrapper>
        <Field name="signature" component={SignatureCanvas} />
      </Wrapper>
    )
  })
  .add('props.signatureRef', () => {
    return (
      <Wrapper>
        <Field name="signature" component={SignatureCanvas} />
      </Wrapper>
    )
  })
  .add('props.signatureCaption', () => {
    return (
      <Wrapper>
        <Field name="signature" component={SignatureCanvas} />
      </Wrapper>
    )
  })
  .add('props.signatureLabel', () => {
    return (
      <Wrapper>
        <Field name="signature" component={SignatureCanvas} />
      </Wrapper>
    )
  })
  .add('props.xProps', () => {
    return (
      <Wrapper>
        <Field name="signature" component={SignatureCanvas} />
      </Wrapper>
    )
  })
