import React from 'react'
import makeStyles from '@material-ui/styles/makeStyles'
import MuiTableCell from '@material-ui/core/TableCell'

interface TableCellProps {
  cellName: string
  cellType: string
}

// cell name example:  diagnosis.code, diagnosis.description, diagnosis.comment
const useStyles: (props: TableCellProps) => any = makeStyles((theme: any) => ({
  cellRoot: {},
  cellHead: {
    backgroundColor: theme.palette.background.dark,
    color: theme.palette.common.white,
  },
  cellBody: {
    fontSize: 14,
    padding: '0 !important',
  },
  cellFooter: {},
}))

const TableCell = ({ children, ...rest }: any) => {
  const classes = useStyles(rest)

  return (
    <MuiTableCell
      classes={{
        root: classes.cellRoot,
        head: classes.cellHead,
        body: classes.cellBody,
        footer: classes.cellFooter,
      }}
      {...rest}
    >
      {children}
    </MuiTableCell>
  )
}

export default TableCell
