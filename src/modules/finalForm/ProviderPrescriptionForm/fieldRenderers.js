import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { Field } from 'react-final-form'
import AddOutlinedIcon from '@material-ui/icons/AddOutlined'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import BottleField from './BottleField'
import VoidInput from './VoidInput'

export const renderBottles = ({
  fields,
  addNewClassName,
  addIconClassName,
}) => {
  const makeBottle = (opts = {}) => ({
    quantity: opts.quantity,
    refills: opts.refills,
    name: opts.name,
  })

  const openInNewTab = (url) => () => {
    const win = window.open(url, '_blank')
    win.focus()
  }
  return (
    <>
      <div>
        {fields.map((name, index) => (
          <Field
            key={`bottle${index}`}
            component={BottleField}
            name={name}
            index={index}
            destroy={fields.remove}
          />
        ))}
        <Grid container justify="space-between">
          <Grid item>
            <div id="add-bottle-icon" className={addNewClassName}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Typography variant="caption">
                  Add another prescription
                </Typography>
                <AddOutlinedIcon
                  title="add-new-bottle-icon"
                  onClick={() => fields.push(makeBottle())}
                  className={addIconClassName}
                />{' '}
              </div>
            </div>
          </Grid>
          <Grid item>
            <div id="reference-icon" className={addNewClassName}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Typography variant="caption">Reference</Typography>
                <SearchOutlinedIcon
                  title="reference-icon"
                  onClick={openInNewTab('https://www.drugs.com/dosage/')}
                  className={addIconClassName}
                />{' '}
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      <VoidInput numBottles={fields.length} />
    </>
  )
}

export const renderQuantityOption = ({
  input,
  options,
  className,
  checkboxClassName,
  labelClassName,
  formControlClassName,
  onClick,
  ...custom
}) =>
  options.map((option) => (
    <FormControlLabel
      className={formControlClassName}
      key={option}
      control={
        <input
          type="checkbox"
          className={checkboxClassName}
          checked={input.value === option}
          onChange={() => input.onChange(option)}
          value={option}
        />
      }
      label={option}
      classes={{ root: className, label: labelClassName }}
      {...custom}
    />
  ))

export const renderBottleRefills = ({
  input,
  index,
  className,
  checkboxClassName,
  checkboxesContainerClassName,
  labelClassName,
  ...custom
}) => (
  <Grid className={className} spacing={8} container>
    <Grid xs={3} item>
      <Typography
        variant="subtitle2"
        style={{ marginRight: 5, fontSize: '0.8em' }}
      >
        Refills:{' '}
      </Typography>
    </Grid>
    <Grid className={checkboxesContainerClassName} xs={9} item>
      {[0, 1, 2, 3, 4, 5].map((num) => (
        <FormControlLabel
          key={num}
          control={
            <input
              type="checkbox"
              classes={{ root: checkboxClassName }}
              checked={input.value == num}
              onChange={() => input.onChange(num)}
              value={String(num)}
            />
          }
          label={num}
          classes={{ root: className, label: labelClassName }}
          {...custom}
        />
      ))}
    </Grid>
  </Grid>
)
