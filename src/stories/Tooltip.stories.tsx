import React from 'react'
import { storiesOf } from '@storybook/react'
import { muiTheme } from 'storybook-addon-material-ui'
import Tooltip from '../components/Tooltip'
import Button from '../components/Button'
import theme from '../config/theme'
import readme from './docs/tooltip.md'

function Wrapper(props) {
  return <div style={{ padding: '25px 0' }} {...props} />
}

storiesOf('Tooltip', module)
  .addDecorator(muiTheme(theme))
  .add('README', () => <div />, {
    readme: { content: readme },
  })
  .add(
    'default',
    () => (
      <Wrapper>
        <Tooltip title="lorem ipsum something something">
          <Button type="button" hover={{ primary: 'white' }} primary small>
            Hover for the tooltip
          </Button>
        </Tooltip>
      </Wrapper>
    ),
    {
      readme: {
        content: `
<!-- STORY -->

\`\`\`jsx
import React from 'react'
import { Button, Tooltip } from '@aitmed/react'

function App() {
  return (
    <Tooltip title="lorem ipsum something something">
      <Button type="button" hover={{ primary: 'white' }} primary small>
        Hover for the tooltip
      </Button>
    </Tooltip>
  )
}
\`\`\`
      `,
      },
    },
  )
