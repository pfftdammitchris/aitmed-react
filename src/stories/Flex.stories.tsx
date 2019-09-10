import React from 'react'
import { storiesOf } from '@storybook/react'
import Flex from '../components/Flex'
import getCodeDoc from 'utils/getCodeDoc'
import readme from './docs/flex.md'

const FlexComponent = (props) => (
  <div style={{ background: 'navy', height: 300 }}>
    <Flex {...props}>
      <div style={{ padding: 12, background: '#333', color: '#fff' }}>
        I am a block level element
      </div>
      <div style={{ padding: 12, background: 'maroon', color: '#fff' }}>
        I am another block level element
      </div>
    </Flex>
  </div>
)

storiesOf('Flex', module)
  .addParameters({
    info: {
      text: '',
    },
  })
  .add('README', () => <div />, {
    readme: { content: readme },
  })
  .add('default', () => <FlexComponent />, {
    readme: {
      content: getCodeDoc(`
import React from 'react'
import { Flex } from '@aitmed/react'

const App = () => (
  <div style={{ background: 'navy', height: 300 }}>
    <Flex>
      <div style={{ padding: 12, background: '#333', color: '#fff' }}>
        I am a block level element
      </div>
      <div style={{ padding: 12, background: 'maroon', color: '#fff' }}>
        I am another block level element
      </div>
    </Flex>
  </div>
)
      `),
    },
  })
  .add('props.center', () => <FlexComponent center />, {
    readme: {
      content: getCodeDoc(`
import React from 'react'
import { Flex } from '@aitmed/react'

const App = () => (
  <div style={{ background: 'navy', height: 300 }}>
    <Flex center>
      <div style={{ padding: 12, background: '#333', color: '#fff' }}>
        I am a block level element
      </div>
      <div style={{ padding: 12, background: 'maroon', color: '#fff' }}>
        I am another block level element
      </div>
    </Flex>
  </div>
)
      `),
    },
  })
  .add('props.flexStart', () => <FlexComponent flexStart />, {
    readme: {
      content: getCodeDoc(`
import React from 'react'
import { Flex } from '@aitmed/react'

const App = () => (
  <div style={{ background: 'navy', height: 300 }}>
    <Flex flexStart>
      <div style={{ padding: 12, background: '#333', color: '#fff' }}>
        I am a block level element
      </div>
      <div style={{ padding: 12, background: 'maroon', color: '#fff' }}>
        I am another block level element
      </div>
    </Flex>
  </div>
)
      `),
    },
  })
  .add('props.flexEnd', () => <FlexComponent flexEnd />, {
    readme: {
      content: getCodeDoc(`
import React from 'react'
import { Flex } from '@aitmed/react'

const App = () => (
  <div style={{ background: 'navy', height: 300 }}>
    <Flex flexEnd>
      <div style={{ padding: 12, background: '#333', color: '#fff' }}>
        I am a block level element
      </div>
      <div style={{ padding: 12, background: 'maroon', color: '#fff' }}>
        I am another block level element
      </div>
    </Flex>
  </div>
)
      `),
    },
  })
  .add('props.flexGrow', () => <FlexComponent flexGrow="1" />, {
    readme: {
      content: getCodeDoc(`
import React from 'react'
import { Flex } from '@aitmed/react'

const App = () => (
  <div style={{ background: 'navy', height: 300 }}>
    <Flex flexGrow="1">
      <div style={{ padding: 12, background: '#333', color: '#fff' }}>
        I am a block level element
      </div>
      <div style={{ padding: 12, background: 'maroon', color: '#fff' }}>
        I am another block level element
      </div>
    </Flex>
  </div>
)
      `),
    },
  })
  .add('props.flexDirection', () => <FlexComponent flexDirection="column" />, {
    readme: {
      content: getCodeDoc(`
import React from 'react'
import { Flex } from '@aitmed/react'

const App = () => (
  <div style={{ background: 'navy', height: 300 }}>
    <Flex flexDirection="column">
      <div style={{ padding: 12, background: '#333', color: '#fff' }}>
        I am a block level element
      </div>
      <div style={{ padding: 12, background: 'maroon', color: '#fff' }}>
        I am another block level element
      </div>
    </Flex>
  </div>
)
      `),
    },
  })
  .add('props.flexWrap', () => <FlexComponent flexWrap="wrap" />, {
    readme: {
      content: getCodeDoc(`
import React from 'react'
import { Flex } from '@aitmed/react'

const App = () => (
  <div style={{ background: 'navy', height: 300 }}>
    <Flex flexWrap="wrap">
      <div style={{ padding: 12, background: '#333', color: '#fff' }}>
        I am a block level element
      </div>
      <div style={{ padding: 12, background: 'maroon', color: '#fff' }}>
        I am another block level element
      </div>
    </Flex>
  </div>
)
      `),
    },
  })
  .add('props.spaceAround', () => <FlexComponent spaceAround />, {
    readme: {
      content: getCodeDoc(`
import React from 'react'
import { Flex } from '@aitmed/react'

const App = () => (
  <div style={{ background: 'navy', height: 300 }}>
    <Flex spaceAround>
      <div style={{ padding: 12, background: '#333', color: '#fff' }}>
        I am a block level element
      </div>
      <div style={{ padding: 12, background: 'maroon', color: '#fff' }}>
        I am another block level element
      </div>
    </Flex>
  </div>
)
      `),
    },
  })
  .add('props.spaceBetween', () => <FlexComponent spaceBetween />, {
    readme: {
      content: getCodeDoc(`
import React from 'react'
import { Flex } from '@aitmed/react'

const App = () => (
  <div style={{ background: 'navy', height: 300 }}>
    <Flex spaceBetween>
      <div style={{ padding: 12, background: '#333', color: '#fff' }}>
        I am a block level element
      </div>
      <div style={{ padding: 12, background: 'maroon', color: '#fff' }}>
        I am another block level element
      </div>
    </Flex>
  </div>
)
      `),
    },
  })
  .add(
    'props.style',
    () => <FlexComponent style={{ padding: 6, border: '1px solid red' }} />,
    {
      readme: {
        content: getCodeDoc(`
import React from 'react'
import { Flex } from '@aitmed/react'

const App = () => (
  <div style={{ background: 'navy', height: 300 }}>
    <Flex style={{ padding: 6, border: '1px solid red' }}>
      <div style={{ padding: 12, background: '#333', color: '#fff' }}>
        I am a block level element
      </div>
      <div style={{ padding: 12, background: 'maroon', color: '#fff' }}>
        I am another block level element
      </div>
    </Flex>
  </div>
)
      `),
      },
    },
  )
  .add('props.textAlign', () => <FlexComponent textAlign="right" />, {
    readme: {
      content: getCodeDoc(`
import React from 'react'
import { Flex } from '@aitmed/react'

const App = () => (
  <div style={{ background: 'navy', height: 300 }}>
    <Flex textAlign="right">
      <div style={{ padding: 12, background: '#333', color: '#fff' }}>
        I am a block level element
      </div>
      <div style={{ padding: 12, background: 'maroon', color: '#fff' }}>
        I am another block level element
      </div>
    </Flex>
  </div>
)
      `),
    },
  })
  .add('props.wrap', () => <FlexComponent wrap />, {
    readme: {
      content: getCodeDoc(`
import React from 'react'
import { Flex } from '@aitmed/react'

const App = () => (
  <div style={{ background: 'navy', height: 300 }}>
    <Flex wrap>
      <div style={{ padding: 12, background: '#333', color: '#fff' }}>
        I am a block level element
      </div>
      <div style={{ padding: 12, background: 'maroon', color: '#fff' }}>
        I am another block level element
      </div>
    </Flex>
  </div>
)
      `),
    },
  })
  .add('props.xsBlock', () => <FlexComponent xsBlock />, {
    readme: {
      content: getCodeDoc(`
import React from 'react'
import { Flex } from '@aitmed/react'

const App = () => (
  <div style={{ background: 'navy', height: 300 }}>
    <Flex xsBlock>
      <div style={{ padding: 12, background: '#333', color: '#fff' }}>
        I am a block level element
      </div>
      <div style={{ padding: 12, background: 'maroon', color: '#fff' }}>
        I am another block level element
      </div>
    </Flex>
  </div>
)
      `),
    },
  })
