<!-- STORY -->

```jsx
const App = () => (
  <Form
    onSubmit={onSubmit}
    subscription={{ submitting: true }}
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <Field
          name="phone"
          component={PhoneNumField}
          phoneFieldProps={{
            style: {
              background: 'teal',
              color: '#fff',
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
