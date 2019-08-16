import React from 'react'
import { storiesOf } from '@storybook/react'
import Grid from '@material-ui/core/Grid'
import Typography from 'components/Typography'
import readme from './docs/typography.md'

const lorem = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
explicabo ipsa eveniet porro ullam itaque possimus natus aperiam corrupti
vitae laboriosam debitis laudantium excepturi ducimus maxime necessitatibus
adipisci, officia perferendis.`

storiesOf('Typography', module)
  .addParameters({
    info: {
      text: '',
    },
  })
  .add('README', () => <div />, {
    readme: { content: readme },
  })
  .add('default', () => <Typography>{lorem}</Typography>)
  .add('primary', () => <Typography primary>{lorem}</Typography>)
  .add('secondary', () => <Typography secondary>{lorem}</Typography>)
  .add('thirdary', () => <Typography thirdary>{lorem}</Typography>)
  .add('link', () => <Typography link>{lorem}</Typography>)
  .add('italic', () => <Typography italic>{lorem}</Typography>)
  .add('unselected', () => <Typography unselected>{lorem}</Typography>)
  .add('centerOnSmall', () => <Typography centerOnSmall>{lorem}</Typography>)
  .add('variants', () => {
    const variants = Object.keys({
      h1: 'h1',
      h2: 'h2',
      h3: 'h3',
      h4: 'h4',
      h5: 'h5',
      h6: 'h6',
      subtitle1: 'h6',
      subtitle2: 'h6',
      body1: 'p',
      body2: 'p',
    })
    return variants.map((variant) => (
      <Grid key={variant} justify="center" container>
        <Grid xs={2} item>
          {variant}
        </Grid>
        <Grid xs={6} item>
          <Typography variant={variant}>Lorem, ipsum </Typography>
        </Grid>
      </Grid>
    ))
  })
