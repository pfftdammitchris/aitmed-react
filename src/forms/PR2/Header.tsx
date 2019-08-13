import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import Typography from 'components/Typography'

const styles = (theme) => ({
  root: {
    textAlign: 'center',
    border: '1px solid teal',
  },
})

const Header = ({ classes, ...props }) => {
  return (
    <div className={classes.root}>
      <Typography>
        State of California Additional Pages Attached <input type="checkbox" />
      </Typography>
      <Typography>Division of Worker's Compensation</Typography>
      <Typography variant="h6">
        Primary Treating Physician's Progress Report (PR-2)
      </Typography>
    </div>
  )
}

export default withStyles(styles)(Header)
