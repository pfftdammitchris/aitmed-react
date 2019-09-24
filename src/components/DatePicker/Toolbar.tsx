import React from 'react'
import { makeStyles } from '@material-ui/styles'
import format from 'date-fns/format'
import AppBar from '@material-ui/core/AppBar'
import Grid from '@material-ui/core/Grid'
import Typography from '../Typography'

interface DatePickerToolbarProps {
  date: any
}

const useStyles = makeStyles({
  grid: {
    padding: '12px 0',
  },
  gridItem: {
    margin: 'auto',
  },
  year: {},
  monthDay: {
    width: '100%',
    position: 'relative',
    left: 5,
    fontSize: '1.5rem',
  },
})

function toWeekString(day: number) {
  switch (day) {
    case 0:
      return 'Sunday'
    case 1:
      return 'Monday'
    case 2:
      return 'Tuesday'
    case 3:
      return 'Wednesday'
    case 4:
      return 'Thursday'
    case 5:
      return 'Friday'
    case 6:
      return 'Saturday'
    default:
      return ''
  }
}

function DatePickerToolbar({ date }: DatePickerToolbarProps) {
  const classes = useStyles()

  const dateObj = new Date(date)
  const year = dateObj.getFullYear()
  const day = dateObj.getDate()

  return (
    <AppBar position="static" color="primary">
      <Grid className={classes.grid} container>
        <Grid className={classes.gridItem} xs={9} item>
          <div>
            <Typography className={classes.year} white>
              {year}
            </Typography>
          </div>
          <Typography className={classes.monthDay} variant="h6" center white>
            {toWeekString(dateObj.getDay())}, {format(date, 'MMM')} {day}
          </Typography>
        </Grid>
      </Grid>
    </AppBar>
  )
}

export default DatePickerToolbar
