import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell from './TableCell'

const styles = (theme) => ({
  tableRow: {
    height: 40,
    [theme.breakpoints.down('xs')]: {
      height: 30,
      fontSize: '0.8rem',
      '& th': {
        fontSize: '0.65rem',
      },
    },
  },
  tableCell: {
    fontSize: '0.7rem',
  },
})

const ICD10TableHeader = ({ classes }) => (
  <TableHead>
    <TableRow className={classes.tableRow}>
      <TableCell className={classes.tableCell} variant="head">
        Code
      </TableCell>
      <TableCell className={classes.tableCell} variant="head">
        Description
      </TableCell>
      <TableCell className={classes.tableCell} variant="head">
        Comment
      </TableCell>
      <TableCell variant="head">{null}</TableCell>
    </TableRow>
  </TableHead>
)

export default React.memo(withStyles(styles)(ICD10TableHeader))
