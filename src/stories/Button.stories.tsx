import React from 'react'
import { storiesOf } from '@storybook/react'
import { muiTheme } from 'storybook-addon-material-ui'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Select from '@material-ui/core/Select'
import Grid from '@material-ui/core/Grid'
import Flex from '../components/Flex'
import Divider from '../components/Divider'
import Button from '../components/Button'
import Typography from '../components/Typography'
import Checkbox from '../components/Checkbox'
import theme from '../config/theme'
import readme from './docs/button.md'

function CPanel(props: any) {
  return props.children
}

CPanel.Section = function({ header, children }: any) {
  return (
    <FormControl style={{ display: 'block', margin: 'auto' }}>
      <Typography component="div" variant="h6" center>
        {header}
      </Typography>
      {children}
    </FormControl>
  )
}

storiesOf('Button', module)
  .addDecorator(muiTheme(theme))
  .add('README', () => <div />, {
    readme: { content: readme },
  })
  .add('controls', () => {
    function useSizeSwitches() {
      const [size, setSize] = React.useState('medium')
      const [disabled, setDisabled] = React.useState(false)
      const [disableFocusRipple, setDisableFocusRipple] = React.useState(false)
      const [disableRipple, setDisableRipple] = React.useState(false)
      const [fullWidth, setFullWidth] = React.useState(false)
      const [variant, setVariant] = React.useState<any>('text')

      const radios = [
        { value: 'small', label: 'Small' },
        { value: 'medium', label: 'Medium' },
        { value: 'large', label: 'Large' },
        { value: 'xlarge', label: 'X-Large' },
      ]

      const variants = [
        { value: 'text', label: 'text' },
        { value: 'flat', label: 'flat' },
        { value: 'outlined', label: 'outlined' },
        { value: 'contained', label: 'contained' },
        { value: 'raised', label: 'raised' },
        { value: 'tab', label: 'tab' },
        { value: 'extendedFab', label: 'extendedFab' },
      ]

      const onSizeChange = (e) => setSize(e.target.value)

      const onDisabledChange = () => setDisabled((d) => !d)

      const onDisableFocusRippleChange = () => setDisableFocusRipple((d) => !d)

      const onDisableRippleChange = () => setDisableRipple((d) => !d)

      const onFullWidthChange = () => setFullWidth((w) => !w)

      const onVariantChange = (newVariant?: string) => () =>
        setVariant((v) => newVariant || !v)

      const reset = () => {
        setSize('medium')
        setDisabled(false)
        setDisableFocusRipple(false)
        setDisableRipple(false)
        setFullWidth(false)
        setVariant('text')
      }

      return {
        size,
        disabled,
        disableFocusRipple,
        disableRipple,
        fullWidth,
        variant,
        radios,
        variants,
        reset,
        onSizeChange,
        onDisabledChange,
        onDisableFocusRippleChange,
        onDisableRippleChange,
        onFullWidthChange,
        onVariantChange,
      }
    }

    return React.createElement(() => {
      const {
        size,
        disabled,
        disableFocusRipple,
        disableRipple,
        fullWidth,
        variant,
        onSizeChange,
        onDisabledChange,
        onDisableFocusRippleChange,
        onDisableRippleChange,
        onFullWidthChange,
        onVariantChange,
        reset,
        radios,
        variants,
      } = useSizeSwitches()

      const buttonState = {
        size,
        disabled,
        disableFocusRipple,
        disableRipple,
        fullWidth,
        variant,
      }

      const ButtonWrapper: React.FC<any> = ({
        children,
        label,
        centerContent,
        variant,
        contentStyles = {},
        wrapperStyles = {},
        typographyProps = {},
        ...props
      }) => {
        return (
          <Grid xs={12} style={wrapperStyles} item>
            {label && (
              <Typography
                variant={variant || 'h5'}
                align="center"
                gutterBottom
                {...typographyProps}
                style={{
                  color: props.primary
                    ? theme.palette.primary.main
                    : props.secondary
                    ? theme.palette.secondary.main
                    : props.thirdary
                    ? theme.palette.thirdary.main
                    : props.red
                    ? theme.palette.error.main
                    : '#333',
                  ...(typographyProps.style || typographyProps.styles || {}),
                }}
              >
                {label}
              </Typography>
            )}
            <div
              style={{ textAlign: centerContent && 'center', ...contentStyles }}
            >
              {children}
            </div>
          </Grid>
        )
      }

      return (
        <>
          <div>
            <Typography variant="h2" gutterBottom paragraph center>
              Controls
            </Typography>
            <Grid justify="center" container>
              <Grid xs={12} sm={5} item>
                <CPanel>
                  <CPanel.Section header="Change size">
                    <RadioGroup
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'row',
                      }}
                      value={size}
                      onChange={onSizeChange}
                    >
                      {radios.map((props, i) => (
                        <FormControlLabel
                          key={`sizeControl${i}`}
                          control={
                            <Radio style={{ display: 'inline-block' }} />
                          }
                          {...props}
                        />
                      ))}
                    </RadioGroup>
                  </CPanel.Section>
                  <Divider />
                  <CPanel.Section
                    header={
                      <Typography variant="subtitle2">
                        disabled{' '}
                        <Checkbox
                          checked={disabled}
                          onChange={onDisabledChange}
                        />
                      </Typography>
                    }
                  />
                  <Divider />
                  <CPanel.Section
                    header={
                      <Typography variant="subtitle2">
                        disableRipple{' '}
                        <Checkbox
                          checked={disableRipple}
                          onChange={onDisableRippleChange}
                        />
                      </Typography>
                    }
                  />
                  <Divider />
                  <CPanel.Section
                    header={
                      <Typography variant="subtitle2">
                        disableFocusRipple{' '}
                        <Checkbox
                          checked={disableFocusRipple}
                          onChange={onDisableFocusRippleChange}
                        />
                      </Typography>
                    }
                  />
                  <Divider />
                  <CPanel.Section
                    header={
                      <Typography variant="subtitle2">
                        fullWidth{' '}
                        <Checkbox
                          checked={fullWidth}
                          onChange={onFullWidthChange}
                        />
                      </Typography>
                    }
                  />
                  <Divider />
                  <CPanel.Section header="variant">
                    <RadioGroup
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'row',
                      }}
                      value={variant}
                    >
                      {variants.map((props, i) => (
                        <FormControlLabel
                          key={`sizeControl${i}`}
                          onChange={onVariantChange(props.value)}
                          control={
                            <Radio style={{ display: 'inline-block' }} />
                          }
                          {...props}
                        />
                      ))}
                    </RadioGroup>
                  </CPanel.Section>
                  <CPanel.Section
                    header={<Button onClick={reset}>Back to default</Button>}
                  />
                </CPanel>
              </Grid>
              <Grid
                style={{ display: 'flex', flexDirection: 'column' }}
                xs={12}
                sm={5}
                item
              >
                <ButtonWrapper
                  wrapperStyles={{
                    display: !!fullWidth && 'block',
                  }}
                  label="Primary"
                  primary
                >
                  <div style={{ textAlign: 'center' }}>
                    <Button
                      size={size}
                      outlined={variant === 'outlined'}
                      {...buttonState}
                      primary
                    >
                      Button
                    </Button>
                  </div>
                </ButtonWrapper>
                <ButtonWrapper
                  wrapperStyles={{ display: !!fullWidth && 'block' }}
                  label="Secondary"
                  secondary
                >
                  <div style={{ textAlign: 'center' }}>
                    <Button
                      size={size}
                      outlined={variant === 'outlined'}
                      {...buttonState}
                      secondary
                    >
                      Button
                    </Button>
                  </div>
                </ButtonWrapper>
                <ButtonWrapper
                  wrapperStyles={{ display: !!fullWidth && 'block' }}
                  label="Thirdary"
                  thirdary
                >
                  <div style={{ textAlign: 'center' }}>
                    <Button
                      size={size}
                      outlined={variant === 'outlined'}
                      {...buttonState}
                      thirdary
                    >
                      Button
                    </Button>
                  </div>
                </ButtonWrapper>
                <ButtonWrapper
                  wrapperStyles={{ display: !!fullWidth && 'block' }}
                  label="Danger"
                  red
                >
                  <div style={{ textAlign: 'center' }}>
                    <Button
                      size={size}
                      outlined={variant === 'outlined'}
                      {...buttonState}
                      red
                    >
                      Button
                    </Button>
                  </div>
                </ButtonWrapper>
                <ButtonWrapper
                  wrapperStyles={{ display: !!fullWidth && 'block' }}
                  label="Neutral"
                >
                  <div style={{ textAlign: 'center' }}>
                    <Button size={size} {...buttonState}>
                      Button
                    </Button>
                  </div>
                </ButtonWrapper>
              </Grid>
            </Grid>
          </div>
        </>
      )
    })
  })
  .add('hovers', () => {
    return React.createElement(() => {
      const wrapperStyles = {
        padding: 20,
        borderBottom: `1px solid ${theme.palette.borders.ghost}`,
      }
      const typographyProps = {
        variant: 'subtitle2',
        paragraph: true,
      }
      const ButtonWrapper: React.FC<any> = ({
        children,
        label,
        centerContent,
        variant,
        contentStyles = {},
        wrapperStyles = {},
        typographyProps = {},
        ...props
      }) => (
        <Grid xs={12} sm={3} style={wrapperStyles} item {...props}>
          {label && (
            <Typography
              variant={variant || 'h5'}
              align="center"
              gutterBottom
              {...typographyProps}
              style={{
                color: props.primary
                  ? theme.palette.primary.main
                  : props.secondary
                  ? theme.palette.secondary.main
                  : props.thirdary
                  ? theme.palette.thirdary.main
                  : props.red
                  ? theme.palette.error.main
                  : '#333',
                ...(typographyProps.style || typographyProps.styles || {}),
              }}
            >
              {label}
            </Typography>
          )}
          <div
            style={{ textAlign: centerContent && 'center', ...contentStyles }}
          >
            {children}
          </div>
        </Grid>
      )
      const WrapperWrapped = (props) => (
        <ButtonWrapper
          sm={3}
          wrapperStyles={wrapperStyles}
          typographyProps={typographyProps}
          centerContent
          {...props}
        />
      )

      const PrimaryHovers = () => (
        <>
          <WrapperWrapped label="[Primary] hovering over secondary">
            <Button hover={{ primary: 'secondary' }}>Hover Me</Button>
          </WrapperWrapped>
          <WrapperWrapped label="[Primary] hovering over thirdary">
            <Button hover={{ primary: 'thirdary' }}>Hover Me</Button>
          </WrapperWrapped>
          <WrapperWrapped label="[Primary] hovering over white">
            <Button hover={{ primary: 'white' }}>Hover Me</Button>
          </WrapperWrapped>
          <WrapperWrapped label="[Primary] hovering over black">
            <Button hover={{ primary: 'black' }}>Hover Me</Button>
          </WrapperWrapped>
        </>
      )

      const SecondaryHovers = () => (
        <>
          <WrapperWrapped label="[Secondary] hovering over primary">
            <Button hover={{ secondary: 'primary' }}>Hover Me</Button>
          </WrapperWrapped>
          <WrapperWrapped label="[Secondary] hovering over thirdary">
            <Button hover={{ secondary: 'thirdary' }}>Hover Me</Button>
          </WrapperWrapped>
          <WrapperWrapped label="[Secondary] hovering over white">
            <Button hover={{ secondary: 'white' }}>Hover Me</Button>
          </WrapperWrapped>
          <WrapperWrapped label="[Secondary] hovering over black">
            <Button hover={{ secondary: 'black' }}>Hover Me</Button>
          </WrapperWrapped>
        </>
      )

      const ThirdaryHovers = () => (
        <>
          <WrapperWrapped label="[Thirdary] hovering over primary">
            <Button hover={{ thirdary: 'primary' }}>Hover Me</Button>
          </WrapperWrapped>
          <WrapperWrapped label="[Thirdary] hovering over secondary">
            <Button hover={{ thirdary: 'secondary' }}>Hover Me</Button>
          </WrapperWrapped>
          <WrapperWrapped label="[Thirdary] hovering over white">
            <Button hover={{ thirdary: 'white' }}>Hover Me</Button>
          </WrapperWrapped>
          <WrapperWrapped label="[Thirdary] hovering over black">
            <Button hover={{ thirdary: 'black' }}>Hover Me</Button>
          </WrapperWrapped>
        </>
      )

      const WhiteHovers = () => (
        <>
          <WrapperWrapped label="[White] hovering over primary">
            <Button hover={{ white: 'primary' }}>Hover Me</Button>
          </WrapperWrapped>
          <WrapperWrapped label="[White] hovering over secondary">
            <Button hover={{ white: 'secondary' }}>Hover Me</Button>
          </WrapperWrapped>
          <WrapperWrapped label="[White] hovering over thirdary">
            <Button hover={{ white: 'thirdary' }}>Hover Me</Button>
          </WrapperWrapped>
          <WrapperWrapped label="[White] hovering over black">
            <Button hover={{ white: 'black' }}>Hover Me</Button>
          </WrapperWrapped>
        </>
      )

      const BlackHovers = () => (
        <>
          <WrapperWrapped label="[Black] hovering over primary">
            <Button hover={{ black: 'primary' }}>Hover Me</Button>
          </WrapperWrapped>
          <WrapperWrapped label="[Black] hovering over secondary">
            <Button hover={{ black: 'secondary' }}>Hover Me</Button>
          </WrapperWrapped>
          <WrapperWrapped label="[Black] hovering over thirdary">
            <Button hover={{ black: 'thirdary' }}>Hover Me</Button>
          </WrapperWrapped>
          <WrapperWrapped label="[Black] hovering over white">
            <Button hover={{ black: 'white' }}>Hover Me</Button>
          </WrapperWrapped>
        </>
      )

      const DangerHovers = () => (
        <>
          <WrapperWrapped label="[Red / Danger / Error]">
            <Button hover={{ red: true }} danger>
              Hover Me
            </Button>
          </WrapperWrapped>
        </>
      )

      const [bg, setBg] = React.useState('#fff')

      const onBgChange = (e) => {
        if (e.target.value !== bg) {
          switch (e.target.value) {
            case 'primary':
              return setBg(theme.palette.primary.main)
            case 'secondary':
              return setBg(theme.palette.secondary.main)
            case 'thirdary':
              return setBg(theme.palette.thirdary.main)
            case 'white':
              return setBg('#fff')
            case 'black':
              return setBg('#000')
            default:
              break
          }
        }
      }

      return (
        <div
          style={{
            background: bg,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Grid
            style={{ minHeight: '100vh' }}
            justify="center"
            alignItems="center"
            container
          >
            <Grid xs={12} item>
              <Typography variant="h2" gutterBottom paragraph center>
                Buttons supporting the "hover" props
              </Typography>
              <Flex style={{ padding: 12 }} center>
                <Select
                  onChange={onBgChange}
                  style={{ padding: 3, minWidth: 200 }}
                  variant="outlined"
                  native
                >
                  {[
                    'Choose background',
                    'primary',
                    'secondary',
                    'thirdary',
                    'white',
                    'black',
                  ].map((option: string) => (
                    <option key={`option_${option}`} value={option}>
                      {option}
                    </option>
                  ))}
                </Select>
              </Flex>
            </Grid>
            <PrimaryHovers />
            <SecondaryHovers />
            <ThirdaryHovers />
            <WhiteHovers />
            <BlackHovers />
            <DangerHovers />
          </Grid>
        </div>
      )
    })
  })
