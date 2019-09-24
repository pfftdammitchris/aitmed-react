import React from 'react'
import { Form } from 'react-final-form'
import { storiesOf } from '@storybook/react'
import arrayMutators from 'final-form-arrays'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import { muiTheme } from 'storybook-addon-material-ui'
import Grid from '@material-ui/core/Grid'
import AlignOutlinedTextFields, {
  Context,
  Provider,
} from '../components/AlignOutlinedTextFields'
import EmployeeFields from '../forms/DWC_PR1/Employee'
import EmployerFields from '../forms/DWC_PR1/Employer'
import Divider from '../components/Divider'
import OutlinedTextField from '../components/OutlinedTextField'
import Button from '../components/Button'
import Typography from '../components/Typography'
import Flex from '../components/Flex'
import theme from '../config/theme'
import readme from './docs/AlignOutlinedTextFields/readme.md'
import sizeMd from './docs/AlignOutlinedTextFields/size.md'

function onSubmit(values) {
  console.log(values)
}

storiesOf('AlignOutlinedTextFields', module)
  .addDecorator(muiTheme(theme))
  .addDecorator((s) => (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Provider>{s()}</Provider>
    </MuiPickersUtilsProvider>
  ))
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
  .add(
    'props.size',
    () => {
      return React.createElement(() => {
        const { size, setSize } = React.useContext<any>(Context)

        const employeeSignatureRef = React.useRef()
        const employerSignatureRef = React.createRef()

        function onSizeChange(newSize) {
          return () => setSize(newSize)
        }

        const sizeBtns = [
          { onClick: onSizeChange('small'), children: 'Small', name: 'small' },
          {
            onClick: onSizeChange('medium'),
            children: 'Medium',
            name: 'medium',
          },
          { onClick: onSizeChange('large'), children: 'Large', name: 'large' },
        ]

        const DWC_PR1 = ({ states = [], ...props }) => (
          <Form
            keepDirtyOnReinitialize
            onSubmit={onSubmit}
            subscription={{ submitting: true }}
            // @ts-ignore
            mutators={arrayMutators}
            render={({ handleSubmit, submitting, ...rest }: any) => (
              <form onSubmit={handleSubmit}>
                <EmployeeFields
                  name="employee"
                  signatureRef={employeeSignatureRef}
                  states={states}
                />
                <Divider />
                <EmployerFields
                  name="employer"
                  signatureRef={employerSignatureRef}
                />
              </form>
            )}
            {...props}
          />
        )

        return (
          <div style={{ padding: 25 }}>
            <Grid spacing={1} justify="center" container>
              <Grid item>
                <Typography
                  variant="h1"
                  gutterBottom
                  paragraph
                  secondary
                  center
                >
                  Select a Size
                </Typography>
                {sizeBtns.map((props, index) => (
                  <React.Fragment key={`size_${index}`}>
                    <Button
                      type="button"
                      hover={{ primary: 'white' }}
                      disabled={props.name === size}
                      primary
                      small
                      {...props}
                    />
                    &nbsp;
                  </React.Fragment>
                ))}
              </Grid>
            </Grid>
            <Divider />
            <Grid spacing={1} justify="center" container>
              <AlignOutlinedTextFields size={size}>
                <DWC_PR1 onSubmit={onSubmit} />
              </AlignOutlinedTextFields>
            </Grid>
          </div>
        )
      })
    },
    { readme: { content: sizeMd } },
  )
