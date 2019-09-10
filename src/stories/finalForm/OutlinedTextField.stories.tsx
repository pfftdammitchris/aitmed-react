import React from 'react'
import { storiesOf } from '@storybook/react'
import { Form, Field } from 'react-final-form'
import { makeStyles } from '@material-ui/styles'
import Button from 'components/Button'
import OutlinedTextField from 'components/finalForm/OutlinedTextField'
import readme from 'stories/docs/finalForm/OutlinedTextField/readme.md'
import classNameMd from 'stories/docs/finalForm/OutlinedTextField/className.md'
import inlineMd from 'stories/docs/finalForm/OutlinedTextField/inline.md'
import wrapperPropsMd from 'stories/docs/finalForm/OutlinedTextField/wrapperProps.md'
import errorPropsMd from 'stories/docs/finalForm/OutlinedTextField/errorProps.md'
import formHelperTextPropsMd from 'stories/docs/finalForm/OutlinedTextField/formHelperTextProps.md'
import inputPropsMd from 'stories/docs/finalForm/OutlinedTextField/inputProps.md'
import inputLabelPropsMd from 'stories/docs/finalForm/OutlinedTextField/inputLabelProps.md'
import menuPropsMd from 'stories/docs/finalForm/OutlinedTextField/menuProps.md'
import selectDisplayPropsMd from 'stories/docs/finalForm/OutlinedTextField/selectDisplayProps.md'
import selectPropsMd from 'stories/docs/finalForm/OutlinedTextField/selectProps.md'
import marginRightMd from 'stories/docs/finalForm/OutlinedTextField/marginRight.md'
import selectMd from 'stories/docs/finalForm/OutlinedTextField/select.md'
import classesMd from 'stories/docs/finalForm/OutlinedTextField/classes.md'

function onSubmit(values) {
  console.log(values)
  window.alert(JSON.stringify(values, null, 2))
}

function Wrapper({ children }) {
  return (
    <Form
      onSubmit={onSubmit}
      subscription={{ submitting: true }}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          {children}
          <div>
            <Button type="submit" primary small>
              Submit
            </Button>
          </div>
        </form>
      )}
    />
  )
}

storiesOf('(final-form) OutlinedTextField', module)
  .add('README', () => <div />, {
    readme: { content: readme },
  })
  .add('default', () => (
    <Wrapper>
      <Field name="age" component={OutlinedTextField} label="Your age" />
    </Wrapper>
  ))
  .add(
    'props.className',
    () => {
      const useStyles = makeStyles({
        root: {
          border: '2px solid maroon',
        },
      })
      return React.createElement(() => {
        const classes = useStyles()
        return (
          <Wrapper>
            <Field
              name="age"
              component={OutlinedTextField}
              label="Your age"
              className={classes.root}
            />
          </Wrapper>
        )
      })
    },
    { readme: { content: classNameMd } },
  )
  .add(
    'props.inline',
    () => (
      <Wrapper>
        <Field
          name="age"
          component={OutlinedTextField}
          label="Your age"
          inline
        />
        <Field
          name="age2"
          component={OutlinedTextField}
          label="Your age #2"
          inline
        />
      </Wrapper>
    ),
    { readme: { content: inlineMd } },
  )
  .add(
    'props.wrapperProps',
    () => (
      <Wrapper>
        <Field
          name="age"
          component={OutlinedTextField}
          label="Your age"
          wrapperProps={{
            style: {
              border: '1px solid magenta',
            },
          }}
        />
      </Wrapper>
    ),
    { readme: { content: wrapperPropsMd } },
  )
  .add(
    'props.errorProps',
    () => (
      <Wrapper>
        <Field
          name="age"
          component={OutlinedTextField}
          label="Your age"
          placeholder="Type something"
          validate={() => 'This is the error component'}
          errorProps={{
            style: {
              border: '1px solid red',
              fontWeight: 700,
            },
          }}
        />
      </Wrapper>
    ),
    { readme: { content: errorPropsMd } },
  )
  .add(
    'props.formHelperTextProps',
    () => (
      <Wrapper>
        <Field
          name="age"
          component={OutlinedTextField}
          helperText="Your age"
          formHelperTextProps={{
            error: true,
            component: 'h1',
            filled: true,
            variant: 'filled',
          }}
        />
      </Wrapper>
    ),
    { readme: { content: formHelperTextPropsMd } },
  )
  .add(
    'props.inputProps',
    () => (
      <Wrapper>
        <Field
          name="age"
          component={OutlinedTextField}
          label="Your age"
          inputProps={{
            style: {
              border: '1px solid orange',
            },
            onKeyPress: (e) => console.log(e.target.value),
          }}
        />
      </Wrapper>
    ),
    { readme: { content: inputPropsMd } },
  )
  .add(
    'props.inputLabelProps',
    () => (
      <Wrapper>
        <Field
          name="age"
          component={OutlinedTextField}
          label="Your age"
          inputLabelProps={{
            style: {
              border: '1px solid orange',
              color: 'magenta',
            },
          }}
        />
      </Wrapper>
    ),
    { readme: { content: inputLabelPropsMd } },
  )
  .add(
    'props.selectProps',
    () => {
      const items = [false, 'california', 'florida', 'miami', 'new york']
      return (
        <Wrapper>
          <Field
            name="state"
            component={OutlinedTextField}
            label="Select a state"
            selectProps={{
              style: {
                color: 'magenta',
                minWidth: 250,
              },
              displayEmpty: true,
              variant: 'outlined',
              labelWidth: 100,
              native: true,
            }}
            select
          >
            {items.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </Field>
        </Wrapper>
      )
    },
    { readme: { content: selectPropsMd } },
  )
  .add(
    'props.select',
    () => {
      const items = [false, 'california', 'florida', 'miami', 'new york']
      return (
        <Wrapper>
          <Field
            name="state"
            component={OutlinedTextField}
            label="State"
            select
          >
            {items.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </Field>
        </Wrapper>
      )
    },
    { readme: { content: selectMd } },
  )
  .add('props.classes', () => {
    return (
      <Wrapper>
        <Field name="state" component={OutlinedTextField} label="State" />
      </Wrapper>
    )
  })
