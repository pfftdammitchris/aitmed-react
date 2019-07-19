import React from 'react'
import Grid from '@material-ui/core/Grid'
import { storiesOf } from '@storybook/react'
import Typography from 'components/typography'
import LoadingSpinner from 'components/loadingSpinner'
import doc from './docs/loadingSpinner.md'

const Container = (props: any) => (
  <div {...props} style={{ margin: 'auto', width: 450, padding: 20 }} />
)

const renderLoadingSpinner = ({ dark, spinner }: any = {}) => {
  const widths = ['xxs', 'xs', 'sm', 'md', 'lg', 'xl']
  return (
    <div style={{ background: dark ? '#072E48' : undefined }}>
      <Container>
        {widths.map((size) => {
          const spinnerProps = { [size]: size }
          return (
            <Grid spacing={0} container>
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
  .addParameters({ info: doc })
  .add('default', () => renderLoadingSpinner())
  .add('dim', () => renderLoadingSpinner({ spinner: { dim: true } }))
  .add('with dark background', () =>
    renderLoadingSpinner({ dark: true, spinner: { white: true } }),
  )
