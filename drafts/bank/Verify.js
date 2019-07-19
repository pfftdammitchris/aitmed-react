// This component is intended to be rendered under the Dwolla render prop component
// to work normally.

import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Fade from '@material-ui/core/Fade'
import Slide from '@material-ui/core/Slide'
import { FaConnectdevelop } from 'react-icons/fa'
import withStyles from '@material-ui/core/styles/withStyles'
import Typography from 'components/common/Typography'
import Cardv2 from 'components/common/Cardv2'
import Button from 'components/common/Button'
import InfiniteSpin from 'components/enhancers/InfiniteSpin'
import calculateScrollOffset from 'util/calculateScrollOffset'
import scrollToElement from 'util/scrollToElement'
import DoubleArrow from './DoubleArrow'
import Guider from './Guider'

const styles = (theme) => ({
  root: {
    width: '100%',
    height: '100%',
  },
  guidingText: {
    marginRight: 12,
  },
  guidingTextDesktop: {
    marginRight: '25px !important',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  guidingTextMobile: {
    marginRight: 12,
    display: 'none',
    [theme.breakpoints.down('xs')]: {
      display: 'block',
    },
  },
  right: {
    '& button': {
      marginRight: 8,
    },
    '& $verifyingSymbol': {
      padding: '35px 12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 12,
      '& svg': {
        color: theme.palette.secondary.main,
        transform: 'scale(3)',
        [theme.breakpoints.down('xs')]: {
          transform: 'scale(2.5)',
        },
      },
    },
  },
  verifyingSymbol: {},
  iavCardv2: {
    margin: `${theme.spacing.unit}px 0`,
  },
  iav: {
    '& $verifyingSymbol': {
      padding: '15px 12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      '& svg': {
        color: theme.palette.secondary.main,
      },
    },
    verifyingSymbol: {},
    spinner: {
      width: 20,
      height: 20,
      transform: 'scale(2)',
    },
  },
  iavElement: {},
})

/*
  - Once finished, the user should not see this component anymore
    - Instead, a UI should show to indicate that the bank account is verified
*/

const BankVerify = ({
  classes,
  Container,
  verified,
  verifying,
  start,
  cancelVerifying,
  scrollOffset,
}) => {
  if (verified === true) return null

  const error = verified && typeof verified === 'object' ? verified : null

  // eslint-disable-next-line
  const [isOverTime, setIsOverTime] = useState(false)
  const onVerifyClick = (start) => () => {
    // Setup timer for display retrying message
    setIsOverTime(false)
    setTimeout(() => {
      // After 10000ms, if bank verify form has been rendered, stop the timer
      if (
        document.getElementById('iav') &&
        document.getElementById('iav').children &&
        document.getElementById('iav').children.length > 0
      )
        return
      // Otherwise, detecting the bank verify form is rendered or not every 1000ms
      setIsOverTime(true)
      const intervalId = setInterval(() => {
        const iavElem = document.getElementById('iav')
        // If bank verify form has been rendered, stop the timer
        if (iavElem && iavElem.children && iavElem.children.length > 0) {
          setIsOverTime(false)
          clearInterval(intervalId)
        }
      }, 1000)
    }, 10000)

    start({
      onDwollaLoad: (iavElem) => {
        const y = calculateScrollOffset({ element: iavElem })
        scrollToElement(iavElem, { x: 0, y: y + (scrollOffset || 200) })
      },
    })
  }

  return (
    <Grid
      style={{ minHeight: verifying ? '120vh' : 'auto' }}
      className={classes.root}
      spacing={0}
      container
    >
      {!error && !verifying && (
        <Guider>
          <Typography
            data-testid="verifytxt"
            className={classes.guidingText}
            variant="subheading"
            fontWeight={500}
            secondary
          >
            Verify your bank account
          </Typography>
          <DoubleArrow />
        </Guider>
      )}
      {!error && verifying && (
        <Fade timeout={3500} in>
          <Slide direction="right" timeout={1500} mountOnEnter in>
            <Guider>
              <Typography
                className={classes.guidingTextDesktop}
                variant="subheading"
                fontWeight={500}
                gutterBottom
                secondary
              >
                Follow the steps on the right to complete your bank
                verification.
              </Typography>
              <Typography
                className={classes.guidingTextMobile}
                variant="subheading"
                fontWeight={500}
                gutterBottom
                secondary
              >
                Follow the steps on the bottom to complete your bank
                verification.
              </Typography>
              <DoubleArrow />
            </Guider>
          </Slide>
        </Fade>
      )}
      <Grid className={classes.right} xs={12} md={8} item>
        <Cardv2
          fullWidth
          render={() => (
            <Fade timeout={1500} in>
              <div>
                <Typography
                  style={{ opacity: 0.8 }}
                  variant="subtitle1"
                  gutterBottom
                  error
                  italic
                >
                  It seems like your bank account is not verified yet.
                </Typography>
                <Typography variant="subtitle1" gutterBottom paragraph>
                  You will need to verify your bank account before sending or
                  receiving funds. If you haven't done so yet, click on the
                  button below to begin the secured verification process. You
                  will need your bank credentials to log into the bank system.
                </Typography>
                <Button
                  id="init-verify"
                  onClick={onVerifyClick(start)}
                  hover={{ secondary: 'white' }}
                  disabled={!!verifying}
                  data-testid={`init-verify${verifying ? '-disabled' : ''}`}
                  secondary
                  small
                >
                  Verify my bank account
                </Button>
                {verifying && (
                  <Button
                    data-testid="verify-cancel"
                    onClick={cancelVerifying}
                    hover={{ thirdary: 'white' }}
                    thirdary
                    small
                  >
                    Cancel
                  </Button>
                )}
              </div>
            </Fade>
          )}
        />
        {verifying && (
          <Cardv2
            fullWidth
            className={classes.iavCardv2}
            render={() => (
              <>
                <div className={classes.iav}>
                  <Fade timeout={1500} in>
                    <div className={classes.verifyingSymbol}>
                      <InfiniteSpin style={{ marginBottom: 10 }}>
                        <FaConnectdevelop className={classes.spinner} />
                      </InfiniteSpin>
                      <Typography variant="caption" center primary>
                        Follow the steps below to complete your bank
                        verification.
                      </Typography>
                      <Typography variant="caption" center primary>
                        If you do not see anything yet, the interface may still
                        be loading.
                      </Typography>
                      {isOverTime && (
                        <Typography variant="caption" center error>
                          Retrying after 10 seconds...
                        </Typography>
                      )}
                    </div>
                  </Fade>
                </div>
                <Container id="iav" className={classes.iavElement} />
              </>
            )}
          />
        )}
      </Grid>
    </Grid>
  )
}

BankVerify.propTypes = {
  classes: PropTypes.object.isRequired,
  Container: PropTypes.func.isRequired,
  verified: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  verifying: PropTypes.bool.isRequired,
  start: PropTypes.func.isRequired,
  cancelVerifying: PropTypes.func.isRequired,
  scrollOffset: PropTypes.number,
}

export default withStyles(styles)(BankVerify)
