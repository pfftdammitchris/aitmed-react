import React from 'react'
import Typography from '@material-ui/core/Typography'
import { storiesOf } from '@storybook/react'
import Card from 'components/Card'
import doc from './docs/card.md'

storiesOf('Card', module)
  .addParameters({
    info: {
      text: doc,
    },
  })
  .add('default', () => (
    <Card
      render={({ CardHeader, CardDivider }: any) => (
        <div>
          <CardHeader>The header</CardHeader>
          <CardDivider />
          <Typography>Please Login Now</Typography>
        </div>
      )}
    />
  ))
