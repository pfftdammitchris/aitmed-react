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
          validate={() => 'The codes are all over the place'}
          errorTextProps={{
            style: {
              border: '1px solid red',
              fontWeight: 700,
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
