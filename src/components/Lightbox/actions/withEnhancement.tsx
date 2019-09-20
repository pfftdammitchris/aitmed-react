// Enhances action icons with additional functionality
//    This allows the use of labels, custom colors, etc
import React from 'react'
import { withStyles } from '@material-ui/styles'
import MuiIconButton from '@material-ui/core/IconButton'
import Typography from '../../Typography'
import { getDisplayName } from '../../../utils'

interface Config {
  label?: string
}

const styles = (theme: any) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    '&:hover': {
      '& svg': {
        color: theme.palette.primary.lightest,
      },
      '& $label': {
        color: `${theme.palette.primary.lightest} !important`,
      },
    },
    '& svg': {
      color: '#fff',
    },
  },
  label: {
    fontSize: '0.6rem',
  },
})

function withLightboxActionEnhancement(WrappedComponent: any, config?: Config) {
  class WithLightboxActionIconButton extends React.Component<any> {
    render() {
      const { classes, innerProps, ...rest } = this.props

      let label

      if (config) {
        label = config.label
      }

      return (
        <div style={{ display: 'inline-block' }}>
          <div className={classes.root}>
            <MuiIconButton color="primary" {...innerProps}>
              <WrappedComponent {...rest} />
            </MuiIconButton>
            {label && (
              <Typography
                className={classes.label}
                variant="caption"
                white
                center
              >
                {label}
              </Typography>
            )}
          </div>
        </div>
      )
    }
  }

  // @ts-ignore
  WithLightboxActionIconButton.displayName = `withLightboxActionEnhancement(${getDisplayName(
    WrappedComponent,
  )})`

  return withStyles(styles)(WithLightboxActionIconButton)
}

export default withLightboxActionEnhancement
