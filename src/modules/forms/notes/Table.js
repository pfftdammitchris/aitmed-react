import React from 'react'
import PropTypes from 'prop-types'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import withStyles from '@material-ui/core/styles/withStyles'

const CustomTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell)

const styles = (theme) => ({
  root: {
    //
  },
})

const ProviderPortalMeetingNotesICD10Table = ({
  classes,
  data = [],
  ...props
}) => (
  <Paper className={classes.root}>
    <Table className={classes.table}>
      <TableHead>
        <TableRow>
          <CustomTableCell>#</CustomTableCell>
          <CustomTableCell align="right">Code</CustomTableCell>
          <CustomTableCell align="right">Description</CustomTableCell>
          <CustomTableCell align="right">Comment</CustomTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map(({ code, description, comment }, i) => (
          <TableRow key={code}>
            <CustomTableCell component="th" scope="row">
              {i + 1}
            </CustomTableCell>
            <CustomTableCell align="right">{code}</CustomTableCell>
            <CustomTableCell align="right">{description}</CustomTableCell>
            <CustomTableCell align="right">{comment}</CustomTableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
)

ProviderPortalMeetingNotesICD10Table.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
}

export default withStyles(styles)(ProviderPortalMeetingNotesICD10Table)
