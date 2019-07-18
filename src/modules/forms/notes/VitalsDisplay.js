import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery'
import Typography from 'components/common/Typography'
import useVitalsDisplay from './useVitalsDisplay'

const styles = (theme) => ({
  root: {
    width: '100%',
    marginBottom: theme.spacing.unit * 3,
  },
  unitTextSize: {
    fontSize: 9,
  },
  thCell: {
    color: theme.palette.secondary.dark,
    fontWeight: 500,
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.55rem',
    },
  },
  tdCell: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.6rem',
    },
  },
})

const Header = (props) => (
  <Typography
    style={{ marginTop: 24 }}
    variant="subtitle1"
    darkBlue
    {...props}
  />
)

const VitalsDisplay = ({ classes, appointment }) => {
  const TableHeadRow = ({ cells = [], uniqKey = '' }) => (
    <TableHead>
      <TableRow>
        {cells.map((cell, index) => (
          <TableCell
            padding="none"
            className={classes.thCell}
            key={`${uniqKey}${index}`}
            align="center"
          >
            {cell}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )

  const TableBodyRow = ({ cells = [], uniqKey = '' }) => (
    <TableBody>
      <TableRow>
        {cells.map((cell, index) => (
          <TableCell
            padding="none"
            className={classes.tdCell}
            key={`${uniqKey}${index}`}
            align="center"
          >
            {cell}
          </TableCell>
        ))}
      </TableRow>
    </TableBody>
  )

  const { vitalSigns } = useVitalsDisplay({ appointment })
  const matchSmartPhoneMinWidthDevices = useMediaQuery(
    '(min-device-width : 320px)',
  )
  const matchSmartPhoneMaxWidthDevices = useMediaQuery(
    '(max-device-width : 480px)',
  )
  const shouldUseMobileView =
    matchSmartPhoneMinWidthDevices && matchSmartPhoneMaxWidthDevices
  return (
    <>
      {vitalSigns && !shouldUseMobileView && (
        <>
          <Header>Vital Signs</Header>
          <div className={classes.root}>
            <Table>
              <TableHeadRow cells={['Blood Pressure(Systolic/Diastolic)']} />
              <TableBodyRow
                cells={[
                  <>
                    {vitalSigns.blood_pressure_systolic}
                    <span style={{ fontSize: '9px' }}>mmHg</span>/
                    {vitalSigns.blood_pressure_diastolic}
                    <span style={{ fontSize: '9px' }}>mmHg</span>
                  </>,
                ]}
              />
            </Table>
            <Table>
              <TableHeadRow
                cells={[
                  'Body Temperature(F)',
                  'Heart Rate(BPM)',
                  'Repiratory Rate /Min',
                ]}
              />
              <TableBodyRow
                cells={[
                  vitalSigns.body_temperature,
                  vitalSigns.heart_rate,
                  vitalSigns.respiratory,
                ]}
              />
            </Table>
            <Table>
              <TableHeadRow cells={['Height(ft)', 'Weight(lbs)', 'BMI']} />
              <TableBodyRow
                cells={[
                  `${vitalSigns.height_ft}'${vitalSigns.height_in}"` || '-',
                  vitalSigns.weight || '-',
                  vitalSigns.bmi || '-',
                ]}
              />
            </Table>
          </div>
        </>
      )}
      {vitalSigns && shouldUseMobileView && (
        <>
          <Header>Vital Signs</Header>
          <div className={classes.root}>
            <Table>
              <TableHeadRow
                cells={[
                  <>
                    vitalSigns.blood_pressure_systolic}
                    <span style={{ fontSize: '9px' }}>mmHg</span>/
                    {vitalSigns.blood_pressure_diastolic}
                    <span style={{ fontSize: '9px' }}>mmHg</span>
                  </>,
                  vitalSigns.body_temperature,
                ]}
              />
              <TableBodyRow
                cells={[
                  <>
                    {vitalSigns.blood_pressure_systolic}
                    <span style={{ fontSize: '9px' }}>mmHg</span>/
                    {vitalSigns.blood_pressure_diastolic}
                    <span style={{ fontSize: '9px' }}>mmHg</span>
                  </>,
                ]}
              />
            </Table>
            <Table>
              <TableHeadRow
                cells={['Heart Rate(BPM)', 'Respiratory Rate /Min']}
              />
              <TableBodyRow
                cells={[
                  vitalSigns.heart_rate || '-',
                  vitalSigns.respiratory || '-',
                ]}
              />
            </Table>
            <Table>
              <TableHeadRow cells={['Height(ft)', 'Weight(lbs)']} />
              <TableBodyRow
                cells={[
                  `${vitalSigns.height_ft}'${vitalSigns.height_in}"` || '-',
                  vitalSigns.weight || '-',
                ]}
              />
            </Table>
            <Table>
              <TableHeadRow cells={['BMI', vitalSigns.bmi || '-']} />
              <TableBodyRow cells={[vitalSigns.bmi || '-']} />
            </Table>
          </div>
        </>
      )}
    </>
  )
}

export default withStyles(styles)(VitalsDisplay)
