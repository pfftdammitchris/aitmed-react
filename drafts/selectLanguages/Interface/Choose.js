import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { IoIosArrowDroprightCircle } from 'react-icons/io'
import withStyles from '@material-ui/core/styles/withStyles'
import Typography from 'components/common/Typography'

const styles = (theme) => ({
  chipContainer: {
    position: 'absolute',
    right: 0,
  },
  chooseLabel: {
    fontSize: '0.9em',
    marginBottom: 5,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.7rem !important',
      marginBottom: 8,
    },
  },
  arrowIcon: {
    zIndex: 9,
    position: 'relative',
    fontSize: '1.5em',
    color: theme.palette.secondary.main,
    marginRight: 6,
    cursor: 'pointer',
    '&:hover': {
      opacity: '1 !important',
      color: theme.palette.thirdary.main,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1em',
    },
  },
  flashyText: {
    position: 'absolute',
    top: 6,
    right: 0,
    width: '100%',
    animationName: 'flashy',
    animationDuration: '4s',
    animationIterationCount: 'infinite',
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.5rem',
    },
  },
})

const SelectLanguagesChoosePrimarySecondary = ({
  classes,
  changeMode,
  primary,
  secondaries,
  mode,
  getChip,
}) => {
  const ChooseText = ({ children, ...props }) => (
    <Typography
      className={classes.flashyText}
      variant="caption"
      right
      primary
      {...props}
    >
      {children}
    </Typography>
  )

  const ChooseArrowButton = ({ modeType, ...props }) => (
    <IoIosArrowDroprightCircle
      onClick={() => changeMode(modeType)}
      className={classes.arrowIcon}
      style={{
        opacity: mode !== modeType ? 0.4 : 1,
      }}
      {...props}
    />
  )

  const primaryIsEmpty = !primary
  const secondariesIsEmpty =
    !secondaries || (Array.isArray(secondaries) && !secondaries.length)

  return (
    <>
      <div>
        <Typography className={classes.chooseLabel} variant="subtitle1">
          <ChooseArrowButton modeType="primary" />
          Primary:{' '}
          {!primaryIsEmpty && (
            <div className={classes.chipContainer}>
              {getChip({ langObj: primary })}
            </div>
          )}
          {primaryIsEmpty && (
            <ChooseText>Choose your primary language</ChooseText>
          )}
        </Typography>
      </div>
      <div>
        <Typography className={classes.chooseLabel} variant="subtitle1">
          <ChooseArrowButton modeType="secondary" />
          Secondary:{' '}
          {!secondariesIsEmpty && (
            <div className={classes.chipContainer}>
              {secondaries.map((langObj, i) =>
                getChip({ key: `secLang${i}`, langObj }),
              )}
            </div>
          )}
          {secondariesIsEmpty && (
            <ChooseText>Choose your secondary languages</ChooseText>
          )}
        </Typography>
      </div>
    </>
  )
}

SelectLanguagesChoosePrimarySecondary.propTypes = {
  classes: PropTypes.object.isRequired,
  changeMode: PropTypes.func,
  primary: PropTypes.object,
  secondaries: PropTypes.arrayOf(PropTypes.object),
  mode: PropTypes.oneOf(['primary', 'secondary']),
  getChip: PropTypes.func,
}

export default withStyles(styles)(SelectLanguagesChoosePrimarySecondary)
