import React from 'react'
import { storiesOf } from '@storybook/react'
import readme from './docs/finalForm/utilities.md'

storiesOf('utilities', module)
  .add('common', () => {
    return (
      <div>
        <pre>callAll</pre>
      </div>
    )
  })
  .add(
    'final form',
    () => {
      return (
        <div>
          <pre>formatOnlyLetters</pre>
          <pre>formatOnlyNumbers</pre>
          <pre>parsePhone</pre>
          <pre>parseSSN</pre>
          <pre>validate</pre>
        </div>
      )
    },
    {
      readme: { content: readme },
    },
  )
  .add('info', () => {
    return (
      <div>
        <pre>states</pre>
        <pre>statesArrayObjects</pre>
        <pre>statesArrayObjectsMapper</pre>
        <pre>statesArrayObjectsMapperv2</pre>
        <pre>languages</pre>
        <pre>languagesList</pre>
        <pre>languagesMapper</pre>
        <pre>genders</pre>
        <pre>appointmentCodes</pre>
        <pre>months</pre>
        <pre>years</pre>
      </div>
    )
  })
