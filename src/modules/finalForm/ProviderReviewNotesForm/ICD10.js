import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Typography from '../../../components/common/Typography'

const CustomTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.background.dark,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 11,
  },
  thRow: {
    height: 40,
  },
}))(TableCell)

const styles = () => ({
  table: {
    margin: '5px 0 20px',
    width: '100%',
    tableLayout: 'fixed',
  },
  field: {
    '& input': {
      padding: 10,
      fontSize: '0.8rem',
    },
  },
})

const ProviderPortalMeetingSummaryICD10 = ({ classes, input }) => {
  if (!Array.isArray(input.value)) return null
  if (!input.value.length) return null

  return (
    <>
      <Typography variant="subtitle2" fontWeight={700}>
        ICD10
      </Typography>
      <Table className={classes.table} padding="checkbox">
        <TableHead>
          <TableRow className={classes.thRow}>
            <CustomTableCell colSpan={1} variant="head">
              #
            </CustomTableCell>
            <CustomTableCell colSpan={2} variant="head">
              Code
            </CustomTableCell>
            <CustomTableCell colSpan={5} variant="head">
              Description
            </CustomTableCell>
            <CustomTableCell colSpan={5} variant="head">
              Comment
            </CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody data-testid="summary-icd10-table">
          {input.value.map(({ code, description, comment }, index) => (
            <TableRow
              className={classes.field}
              key={`${input.name}${index}`}
              name="ICD10-row"
            >
              <CustomTableCell colSpan={1}>
                <Typography variant="subtitle2">{index + 1}</Typography>
              </CustomTableCell>
              <CustomTableCell colSpan={2}>{code}</CustomTableCell>
              <CustomTableCell colSpan={5}>{description}</CustomTableCell>
              <CustomTableCell colSpan={5}>{comment}</CustomTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}

ProviderPortalMeetingSummaryICD10.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ProviderPortalMeetingSummaryICD10)
