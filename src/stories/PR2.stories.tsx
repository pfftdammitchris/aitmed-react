import React from 'react'
// import Grid from '@material-ui/core/Grid'
import { storiesOf } from '@storybook/react'
// import Typography from 'components/Typography'
import PR2 from 'forms/PR2'

const onCheck = (name) => (e) => {
  console.log('checked: ', e.target.checked)
}

const onSubmit = async (values) => {
  try {
    console.log(values)
  } catch (error) {
    throw error
  }
}

storiesOf('forms', module).add('PR2', () => {
  return <PR2 onSubmit={onSubmit} onCheck={onCheck} />
})
