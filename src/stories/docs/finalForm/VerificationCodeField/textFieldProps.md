<!-- STORY -->

<br />

```jsx
const App = () => (
  <Form
    onSubmit={onSubmit}
    subscription={{ submitting: true }}
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <Field
          name="phone_verification_code"
          component={VerificationCodeField}
          digits={6}
          textFieldProps={{
            style: {
              border: '1px solid green',
              borderRadius: '50%',
              fontWeight: 500,
            },
          }}
        />
        <div>
          <Button type="submit" primary small>
            Submit
          </Button>
        </div>
      </form>
    )}
  />
)
```
