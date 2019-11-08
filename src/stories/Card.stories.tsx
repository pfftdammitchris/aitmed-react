import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import { muiTheme } from 'storybook-addon-material-ui'
import { storiesOf } from '@storybook/react'
import Card from '../components/Card'
import getCodeDoc from '../utils/getCodeDoc'
// @ts-ignore
import readme from './docs/card.md'
import theme from '../config/theme'

function Wrapper(props: any) {
  return <div style={{ maxWidth: 450 }} {...props} />
}

storiesOf('Card', module)
  .addDecorator(muiTheme(theme))
  .add('README', () => <div />, {
    readme: { content: readme },
  })
  .add('default', () => (
    <Wrapper>
      <Card
        render={({ CardHeader, CardDivider }: any) => (
          <div>
            <CardHeader>The header</CardHeader>
            <CardDivider />
            <Typography>Please Login Now</Typography>
          </div>
        )}
      />
    </Wrapper>
  ))
  .add(
    'props.classNames',
    () => {
      const useStyles = makeStyles({
        card: {
          border: '1px solid teal',
        },
        content: {
          border: '1px solid magenta',
        },
        divider: {
          margin: '50px 0',
        },
        header: {
          color: 'green !important',
          fontWeight: 700,
        },
      })

      return React.createElement(() => {
        const classes = useStyles()

        const classNames = {
          card: classes.card,
          content: classes.content,
          divider: classes.divider,
          header: classes.header,
        }

        return (
          <Wrapper>
            <Card
              classNames={classNames}
              render={({ CardHeader, CardDivider }: any) => (
                <div>
                  <CardHeader>The header</CardHeader>
                  <CardDivider />
                  <Typography>Please Login Now</Typography>
                </div>
              )}
            />
          </Wrapper>
        )
      })
    },
    {
      readme: {
        content: getCodeDoc(`
import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Card } from '@aitmed/react'

const useStyles = makeStyles({
  card: {
    border: '1px solid teal',
  },
  content: {
    border: '1px solid magenta',
  },
  divider: {
    margin: '50px 0',
  },
  header: {
    color: 'green',
    fontWeight: 700,
  },
})

const App = () => {
  const classes = useStyles()

  const classNames = {
    card: classes.card,
    content: classes.content,
    divider: classes.divider,
    header: classes.header,
  }

  return (
    <Wrapper>
      <Card
        classNames={classNames}
        render={({ CardHeader, CardDivider }: any) => (
          <div>
            <CardHeader>The header</CardHeader>
            <CardDivider />
            <Typography>Please Login Now</Typography>
          </div>
        )}
      />
    </Wrapper>
  )
}
    `),
      },
    },
  )
  .add(
    'props.contentProps',
    () => {
      const useStyles = makeStyles({
        content: {
          background: '#ddd',
        },
      })

      return React.createElement(() => {
        const classes = useStyles()
        return (
          <Wrapper>
            <Card
              contentProps={{
                className: classes.content,
                style: {
                  border: '1px solid red',
                },
              }}
              render={({ CardHeader, CardDivider }: any) => (
                <div>
                  <CardHeader>The header</CardHeader>
                  <CardDivider />
                  <Typography>Please Login Now</Typography>
                </div>
              )}
            />
          </Wrapper>
        )
      })
    },
    {
      readme: {
        content: getCodeDoc(`
import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Card } from '@aitmed/react'

const useStyles = makeStyles({
  content: {
    background: '#ddd',
  },
})

const App = () => {
  const classes = useStyles()
  return (
    <Wrapper>
      <Card
        contentProps={{
          className: classes.content,
          style: {
            border: '1px solid red',
          },
        }}
        render={({ CardHeader, CardDivider }: any) => (
          <div>
            <CardHeader>The header</CardHeader>
            <CardDivider />
            <Typography>Please Login Now</Typography>
          </div>
        )}
      />
    </Wrapper>
  )
}
    `),
      },
    },
  )
  .add(
    'props.render',
    () => {
      return React.createElement(() => {
        return (
          <Wrapper>
            <Card
              render={({ CardHeader, CardDivider }: any) => (
                <div>
                  <CardHeader>The header</CardHeader>
                  <CardDivider />
                  <Typography>Please Login Now</Typography>
                </div>
              )}
            />
          </Wrapper>
        )
      })
    },
    {
      readme: {
        content: `

<br />

> props.render is used to render children, and optionally passes in *CardDivider* and *CardHeader* as props back to the caller. *props.render* is required if props.children is unavailable.

<br />

${getCodeDoc(`
import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Card } from '@aitmed/react'

const App = () => {
  return (
    <Wrapper>
      <Card
        contentProps={{
          className: classes.content,
            style: {
              border: '1px solid red',
            },
          }}
        render={({ CardHeader, CardDivider }) => (
          <div>
            <CardHeader>The header</CardHeader>
            <CardDivider />
            <Typography>Please Login Now</Typography>
          </div>
        )}
      />
    </Wrapper>
    )
  }
    `)}
`,
      },
    },
  )
  .add(
    'props.square',
    () => {
      return React.createElement(() => {
        return (
          <Wrapper>
            <Card
              square
              render={({ CardHeader, CardDivider }: any) => (
                <div>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Consequuntur quos minus atque fuga aliquam odio nostrum nihil,
                  ratione, numquam laboriosam veritatis quaerat explicabo
                  praesentium at maiores architecto quae error aut.
                </div>
              )}
            />
          </Wrapper>
        )
      })
    },
    {
      readme: {
        content: getCodeDoc(`
import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Card } from '@aitmed/react'

const App = () => {
  return (
    <Wrapper>
      <Card
        square
        render={({ CardHeader, CardDivider }: any) => (
          <div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequuntur quos minus atque fuga aliquam odio nostrum nihil,
            ratione, numquam laboriosam veritatis quaerat explicabo
            praesentium at maiores architecto quae error aut.
          </div>
        )}
      />
    </Wrapper>
  )
}
`),
      },
    },
  )
