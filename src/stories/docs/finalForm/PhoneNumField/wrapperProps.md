<!-- STORY -->

```jsx
const wrapperProps = {
  style: {
    background: 'red',
    color: '#fff',
    fontWeight: 700,
  },
}

const App = () => (
  <Form
    onSubmit={onSubmit}
    subscription={{ submitting: true }}
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <Field
          name="phone"
          component={PhoneNumField}
          wrapperProps={wrapperProps}
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
