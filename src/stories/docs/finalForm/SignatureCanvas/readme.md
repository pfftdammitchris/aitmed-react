# SignatureCanvas

`SignatureCanvas` is used to collect a user's signature. It is mostly needed in forms.

## Usage

```jsx
import React from 'react'
import { Form, Field } from 'react-final-form'
import { SignatureCanvas } from '@aitmed/react/dist/components/finalForm'

async function onSubmit(values) {
  try {
    console.log(values)
  } catch (error) {
    throw error
  }
}

const App = () => (
  <Form
    onSubmit={onSubmit}
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <Field name="signature" component={SignatureCanvas} {...props} />
        <div style={{ margin: '25px 0' }}>
          <Button type="submit" primary small>
            Submit
          </Button>
        </div>
      </form>
    )}
  />
)
```

To use the component you will need to pass it in as the `component` prop of a `Field` component.

The `SignatureCanvas` will function normally afterwards as it needs to receive the required `input` prop that is passed in from `Field`.

When the user draws on the canvas, `input.onChange` will be called and the value of the `SignatureCanvas` will be set to `true`. If the canvas is empty/cleared, `input.onChange` will be called and the value will change to `false`. This behavior is used to ensure that the user signs the canvas before a form is submitted.

| Prop                          | Type            | Default | Description                                                                                                 |
| ----------------------------- | --------------- | ------- | ----------------------------------------------------------------------------------------------------------- |
| `input` (provided by `Field`) | object          |         | The input prop from [FieldRenderProps](https://final-form.org/docs/react-final-form/types/FieldRenderProps) |
| `meta` (provided by `Field`)  | object          |         | The meta prop from [FieldRenderProps](https://final-form.org/docs/react-final-form/types/FieldRenderProps)  |
| `canvasContainerProps`        | object          |         | Props applied to the canvas container                                                                       |
| `canvasProps`                 | object          |         | Props applied to the canvas                                                                                 |
| `className`                   | string          |         | Class name passed to the canvas                                                                             |
| `classNames`                  | object          |         | Object of class names to pass through several components/elements                                           |
| `clearBtnProps`               | object          |         | Props applied to the clear button                                                                           |
| `clearSignature`              | function        |         | Function called to clear the signature. This will not be called if `signatureRef` is used                   |
| `hideClear`                   | boolean         |         | Hide the clear button                                                                                       |
| `onDrawEnd`                   | function        |         | Function called when the user has drawn on the canvas                                                       |
| `penColor`                    | string          |         | Applies `font-color` to the pen                                                                             |
| `signatureRef`                | ref             |         | `Ref` used to control the signature canvas                                                                  |
| `signatureCaption`            | React.ReactNode |         | Renders anything under the canvas                                                                           |
| `signatureLabel`              | React.ReactNode |         | Renders anything on top of the `X` component                                                                |
| `xProps`                      | object          |         | Props passed to the `X` components                                                                          |
