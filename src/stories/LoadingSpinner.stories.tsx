import React from 'react'
import Grid from '@material-ui/core/Grid'
import { storiesOf } from '@storybook/react'
import Typography from 'components/Typography'
import LoadingSpinner from 'components/LoadingSpinner'
import getCodeDoc from 'utils/getCodeDoc'
import readme from './docs/loadingSpinner.md'

const darkBg = '#072E48'

const Container = (props: any) => (
  <div {...props} style={{ margin: 'auto', width: 450, padding: 20 }} />
)

const renderLoadingSpinner = ({ dark, spinner }: any = {}) => {
  const widths = ['xxs', 'xs', 'sm', 'md', 'lg', 'xl']
  return (
    <div style={{ background: dark ? darkBg : undefined }}>
      <Container>
        {widths.map((size) => {
          const spinnerProps = { [size]: size }
          return (
            <Grid key={`spinner${size}`} spacing={0} container>
              <Grid xs={2} item>
                <Typography white={!!dark}>{size}</Typography>
              </Grid>
              <Grid xs={6} item>
                <LoadingSpinner {...spinnerProps} {...spinner}>
                  Loading...
                </LoadingSpinner>
              </Grid>
            </Grid>
          )
        })}
      </Container>
    </div>
  )
}

storiesOf('LoadingSpinner', module)
  .add('README', () => <div />, {
    readme: { content: readme },
  })
  .add('default', () => renderLoadingSpinner(), {
    readme: {
      content: getCodeDoc(`
import React from 'react'
import LoadingSpinner from '@aitmed/react/components/LoadingSpinner'

const App = () => (
   <LoadingSpinner>
     Loading...
   </LoadingSpinner>
)
      `),
    },
  })
  .add(
    'dim (white bg)',
    () => renderLoadingSpinner({ spinner: { dim: true } }),
    {
      readme: {
        content: getCodeDoc(`
import React from 'react'
import LoadingSpinner from '@aitmed/react/components/LoadingSpinner'

const App = () => (
   <LoadingSpinner dim>
     Loading...
   </LoadingSpinner>
)
      `),
      },
    },
  )
  .add(
    'white (dark bg)',
    () => renderLoadingSpinner({ dark: true, spinner: { white: true } }),
    {
      readme: {
        content: getCodeDoc(`
import React from 'react'
import LoadingSpinner from '@aitmed/react/components/LoadingSpinner'

const App = () => (
  <div style={{ background: '#072E48' }}>
    <LoadingSpinner white>
      Loading...
    </LoadingSpinner>
  </div>
)
      `),
      },
    },
  )
  .add(
    'renderContent',
    () =>
      renderLoadingSpinner({
        spinner: {
          renderContent: () => (
            <Typography variant="h6" secondary center>
              Default children replaced
            </Typography>
          ),
        },
      }),
    {
      readme: {
        content: getCodeDoc(`
import React from 'react'
import LoadingSpinner from '@aitmed/react/components/LoadingSpinner'

const App = () => (
  <LoadingSpinner
    renderContent={() => (
      <Typography variant="h6" secondary center>
        Please wait a second...
      </Typography>
    )}
  />
)
      `),
      },
    },
  )
  .add(
    'fullscreen (white bg)',
    () => <LoadingSpinner fullscreen>Loading...</LoadingSpinner>,
    {
      readme: {
        content: getCodeDoc(`
import React from 'react'
import LoadingSpinner from '@aitmed/react/components/LoadingSpinner'

const App = () => (
  <LoadingSpinner fullscreen>
    Loading...
  </LoadingSpinner>
)
      `),
      },
    },
  )
  .add(
    'fullscreen (dark bg)',
    () => (
      <div
        style={{
          position: 'relative',
          height: '100vh',
          background: darkBg,
        }}
      >
        <LoadingSpinner white fullscreen>
          Loading...
        </LoadingSpinner>
      </div>
    ),
    {
      readme: {
        content: getCodeDoc(`
import React from 'react'
import LoadingSpinner from '@aitmed/react/components/LoadingSpinner'

const App = () => (
  <LoadingSpinner fullscreen white>
    Loading...
  </LoadingSpinner>
)
      `),
      },
    },
  )
