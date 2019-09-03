import React from 'react'
import { makeStyles } from '@material-ui/styles'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell from './TableCell'

const useStyles = makeStyles((theme: any) => ({
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
}))

const ICD10TableHeader: React.FC<any> = () => {
  const classes = useStyles()
  return (
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
}

export default React.memo(ICD10TableHeader)
