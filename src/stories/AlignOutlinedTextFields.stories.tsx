import React from 'react'
import { storiesOf } from '@storybook/react'
import { muiTheme } from 'storybook-addon-material-ui'
import AlignOutlinedTextFields from '../components/AlignOutlinedTextFields'
import OutlinedTextField from '../components/OutlinedTextField'
import Flex from '../components/Flex'
import theme from '../config/theme'
import readme from './docs/alignOutlinedTextFields.md'

storiesOf('AlignOutlinedTextFields', module)
  .addDecorator(muiTheme(theme))
  .add('README', () => <div />, {
    readme: { content: readme },
  })
  .add(
    'default',
    () => (
      <AlignOutlinedTextFields>
        <Flex>
          <OutlinedTextField
            label="Email"
            wrapperProps={{ marginRight: 3 }}
            fullWidth
          />
          <OutlinedTextField selectProps={{ native: true }} select fullWidth>
            {['Select State', 'CA', 'WA'].map((state: any, index: number) => (
              <option key={`state${index}`} value={state}>
                {state}
              </option>
            ))}
          </OutlinedTextField>
        </Flex>
      </AlignOutlinedTextFields>
    ),
    {
      readme: {
        content: `
<!-- STORY -->

\`\`\`jsx
import React from 'react'
import { Form, Field } from 'react-final-form'
import { AlignOutlinedTextFields, Flex, OutlinedTextField } from '@aitmed/react'

function App() {
  const states = ['CA', 'WA']

  return (
    <AlignOutlinedTextFields>
      <Flex>
        <OutlinedTextField
          label="Email"
          wrapperProps={{ marginRight: 3 }}
          fullWidth
        />
        <OutlinedTextField selectProps={{ native: true }} select fullWidth>
          {['Select State', 'CA', 'WA'].map((state: any, index: number) => (
            <option key={\`state\${index}\`} value={state}>
              {state}
            </option>
          ))}
        </OutlinedTextField>
      </Flex>
    </AlignOutlinedTextFields>
  )
}
\`\`\`
      `,
      },
    },
  )
