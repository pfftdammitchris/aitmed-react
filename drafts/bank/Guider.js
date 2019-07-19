import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import withStyles from '@material-ui/core/styles/withStyles'

const styles = () => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingRight: 20,
  },
  inner: {
    display: 'flex',
    alignItems: 'center',
  },
})

const Guider = ({ classes, children, ...rest }) => (
  <Grid className={classes.root} xs={12} md={4} item {...rest}>
    <div className={classes.inner}>{children}</div>
  </Grid>
)

Guider.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node,
}

export default withStyles(styles)(Guider)
