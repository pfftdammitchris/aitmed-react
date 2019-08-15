import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Cell from './Cell'

const styles = (theme) => ({
  root: {},
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
  <TableHead classes={{ root: classes.root }}>
    <TableRow className={classes.tableRow}>
      <Cell className={classes.tableCell} colSpan={3} variant="head">
        Code
      </Cell>
      <Cell className={classes.tableCell} colSpan={3} variant="head">
        Description
      </Cell>
      <Cell className={classes.tableCell} colSpan={3} variant="head">
        Comment
      </Cell>
      <Cell colSpan={0} variant="head">
        {null}
      </Cell>
    </TableRow>
  </TableHead>
)

export default React.memo(withStyles(styles)(ICD10TableHeader))
