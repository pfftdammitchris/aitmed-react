import React from 'react'
import Typography from '@material-ui/core/Typography'
import { storiesOf } from '@storybook/react'
import Card from '../components/Card'
import readme from './docs/card.md'

storiesOf('Card', module)
  .add('README', () => <div />, {
    readme: { content: readme },
  })
  .add('default', () => (
    <div style={{ maxWidth: 450, margin: 'auto' }}>
      <Card
        render={({ CardHeader, CardDivider }: any) => (
          <div>
            <CardHeader>The header</CardHeader>
            <CardDivider />
            <Typography>Please Login Now</Typography>
          </div>
        )}
      />
    </div>
  ))
