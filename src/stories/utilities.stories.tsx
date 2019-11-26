import React from 'react'
import { storiesOf } from '@storybook/react'
import commonUtilitiesReadme from './docs/commonUtilities.md'
import readme from './docs/finalForm/utilities.md'

storiesOf('utilities', module)
  .add(
    'common',
    () => {
      return (
        <div>
          <pre>callAll</pre>
        </div>
      )
    },
    {
      readme: { content: commonUtilitiesReadme },
    },
  )
  .add(
    'final form',
    () => {
      return <div />
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
