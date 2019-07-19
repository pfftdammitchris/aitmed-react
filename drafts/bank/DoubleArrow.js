// Yellow arrow indicator to guide the user

import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import { FaAngleDoubleRight, FaAngleDoubleDown } from 'react-icons/fa'
import ScaleLoop from 'components/enhancers/ScaleLoop'

const styles = (theme) => ({
  icon: {
    animationDuration: '1.5s !important',
    color: theme.palette.thirdary.main,
    width: 50,
    height: 50,
    borderRadius: '50%',
    [theme.breakpoints.down('md')]: {
      width: 40,
      height: 40,
    },
    [theme.breakpoints.down('sm')]: {
      width: 32,
      height: 32,
    },
    [theme.breakpoints.down('xs')]: {
      width: 25,
      height: 25,
    },
    '&:hover': {
      transform: 'scale(0.90)',
      border: `1px solid ${theme.palette.thirdary.main}`,
      padding: 15,
      [theme.breakpoints.down('xs')]: {
        transform: 'scale(1)',
        padding: 3,
      },
    },
  },
  rightArrow: {
    display: 'inline-block',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  downArrow: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'inline-block',
    },
  },
})

const DoubleArrow = ({ classes, ...otherProps }) => (
  <ScaleLoop>
    <FaAngleDoubleRight
      className={cx(classes.icon, classes.rightArrow)}
      {...otherProps}
    />
    <FaAngleDoubleDown
      className={cx(classes.icon, classes.downArrow)}
      {...otherProps}
    />
  </ScaleLoop>
)

DoubleArrow.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(DoubleArrow)
