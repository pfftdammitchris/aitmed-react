import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import Typography from 'components/Typography'
import Flex from 'components/Flex'

const styles = (theme) => ({
  root: {
    position: 'relative',
    textAlign: 'center',
  },
})

const Header = ({ classes, ...props }) => {
  return (
    <div className={classes.root}>
      <Flex center>
        <Typography>State of California Additional Pages</Typography>
        <div style={{ position: 'absolute', right: 0 }}>
          Attached <input type="checkbox" />
        </div>
      </Flex>
      <Typography>Division of Worker's Compensation</Typography>
      <Typography variant="h6">
        Primary Treating Physician's Progress Report (PR-2)
      </Typography>
    </div>
  )
}

export default withStyles(styles)(Header)
