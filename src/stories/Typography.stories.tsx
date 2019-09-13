import React from 'react'
import { storiesOf } from '@storybook/react'
import Grid from '@material-ui/core/Grid'
import getCodeDoc from '../utils/getCodeDoc'
import Typography from '../components/Typography'
import readme from './docs/typography.md'

const Wrapper = (props) => (
  <div style={{ maxWidth: 450, padding: 12 }}>
    <Typography {...props} />
  </div>
)

const lorem = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
explicabo ipsa eveniet porro ullam itaque possimus natus aperiam corrupti
vitae laboriosam debitis laudantium excepturi ducimus maxime necessitatibus
adipisci, officia perferendis.`

storiesOf('Typography', module)
  .add('README', () => <div />, {
    readme: { content: readme },
  })
  .add('default', () => <Wrapper>{lorem}</Wrapper>, {
    readme: {
      content: getCodeDoc(`
import React from 'react'
import { Typography } from '@aitmed/react'

const App = () => (
  <Typography>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
    explicabo ipsa eveniet porro ullam itaque possimus natus aperiam corrupti
    vitae laboriosam debitis laudantium excepturi ducimus maxime necessitatibus
    adipisci, officia perferendis.
  </Typography>
)
`),
    },
  })
  .add('props.primary', () => <Wrapper primary>{lorem}</Wrapper>, {
    readme: {
      content: getCodeDoc(`
import React from 'react'
import { Typography } from '@aitmed/react'

const App = () => (
  <Typography primary>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
    explicabo ipsa eveniet porro ullam itaque possimus natus aperiam corrupti
    vitae laboriosam debitis laudantium excepturi ducimus maxime necessitatibus
    adipisci, officia perferendis.
  </Typography>
)`),
    },
  })
  .add('props.secondary', () => <Wrapper secondary>{lorem}</Wrapper>, {
    readme: {
      content: getCodeDoc(`
import React from 'react'
import { Typography } from '@aitmed/react'

const App = () => (
  <Typography secondary>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
    explicabo ipsa eveniet porro ullam itaque possimus natus aperiam corrupti
    vitae laboriosam debitis laudantium excepturi ducimus maxime necessitatibus
    adipisci, officia perferendis.
  </Typography>
)`),
    },
  })
  .add('props.thirdary', () => <Wrapper thirdary>{lorem}</Wrapper>, {
    readme: {
      content: getCodeDoc(`
import React from 'react'
import { Typography } from '@aitmed/react'

const App = () => (
  <Typography thirdary>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
    explicabo ipsa eveniet porro ullam itaque possimus natus aperiam corrupti
    vitae laboriosam debitis laudantium excepturi ducimus maxime necessitatibus
    adipisci, officia perferendis.
  </Typography>
)`),
    },
  })
  .add('props.link', () => <Wrapper link>{lorem}</Wrapper>, {
    readme: {
      content: getCodeDoc(`
import React from 'react'
import { Typography } from '@aitmed/react'

const App = () => (
  <Typography link>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
    explicabo ipsa eveniet porro ullam itaque possimus natus aperiam corrupti
    vitae laboriosam debitis laudantium excepturi ducimus maxime necessitatibus
    adipisci, officia perferendis.
  </Typography>
)`),
    },
  })
  .add('props.italic', () => <Wrapper italic>{lorem}</Wrapper>, {
    readme: {
      content: getCodeDoc(`
import React from 'react'
import { Typography } from '@aitmed/react'

const App = () => (
  <Typography italic>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
    explicabo ipsa eveniet porro ullam itaque possimus natus aperiam corrupti
    vitae laboriosam debitis laudantium excepturi ducimus maxime necessitatibus
    adipisci, officia perferendis.
  </Typography>
)`),
    },
  })
  .add('props.unselected', () => <Wrapper unselected>{lorem}</Wrapper>, {
    readme: {
      content: getCodeDoc(`
import React from 'react'
import { Typography } from '@aitmed/react'

const App = () => (
  <Typography unselected>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
    explicabo ipsa eveniet porro ullam itaque possimus natus aperiam corrupti
    vitae laboriosam debitis laudantium excepturi ducimus maxime necessitatibus
    adipisci, officia perferendis.
  </Typography>
)`),
    },
  })
  .add('props.centerOnSmall', () => <Wrapper centerOnSmall>{lorem}</Wrapper>, {
    readme: {
      content: getCodeDoc(`
import React from 'react'
import { Typography } from '@aitmed/react'

const App = () => (
  <Typography centerOnSmall>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
    explicabo ipsa eveniet porro ullam itaque possimus natus aperiam corrupti
    vitae laboriosam debitis laudantium excepturi ducimus maxime necessitatibus
    adipisci, officia perferendis.
  </Typography>
)`),
    },
  })
  .add(
    'props.variants',
    () => {
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
    },
    {
      readme: {
        content: getCodeDoc(`
import React from 'react'
import { Typography } from '@aitmed/react'

const App = () => (
  <Typography variant="h1">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
    explicabo ipsa eveniet porro ullam itaque possimus natus aperiam corrupti
    vitae laboriosam debitis laudantium excepturi ducimus maxime necessitatibus
    adipisci, officia perferendis.
  </Typography>
)`),
      },
    },
  )
