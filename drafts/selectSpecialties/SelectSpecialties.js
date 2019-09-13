import React from 'react'
import cx from 'classnames'
import capitalize from 'lodash/capitalize'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import InputLabel from '@material-ui/core/InputLabel'
import Button from 'components/common/Button'
import Modal from 'components/common/Modal'
import State from './State'

const styles = (theme) => ({
  contentWrapper: {},
  card: {
    width: '100%',
    minWidth: 350,
    maxHeight: '70vh',
    overflowY: 'auto',
  },
  specialtyOption: {
    maxWidth: '49.2%',
  },
  button: {
    width: '100%',
    marginTop: '3px !important',
    borderRadius: '8px !important',
    boxShadow: 'none',
    border: `1px solid ${theme.palette.borders.slightlyDark}`,
    color: `${'#666'} !important`,
    marginBottom: theme.spacing.unit,
    background: 'none !important',
    textTransform: 'none',
    fontSize: '0.9em',
    padding: 4,
    paddingLeft: 10,
    textAlign: 'left',
    '&:hover': {
      background: theme.palette.primary.main,
      color: '#fff',
    },
  },
})

const SelectSpecialties = ({
  classes,
  className,
  buttonClassName,
  label,
  input,
  width,
  meta,
  required,
}) => {
  const formatSpecialty = (specialty, i) =>
    capitalize(specialty).replace(/_/g, ' ') +
    `${i !== input.value.length - 1 ? ',' : ''}`

  return (
    <Modal
      cardContentClassName={classes.card}
      label={label}
      meta={meta}
      content={({ close }) => (
        <State
          wrapperClassName={classes.contentWrapper}
          checkboxItemClassName={classes.specialtyOption}
          close={close}
          input={input}
          formatSpecialty={formatSpecialty}
        />
      )}
      divider
      cardv2
    >
      {({ open }) => (
        <>
          <InputLabel htmlFor={input.name}>
            {required && <span style={{ color: 'red' }}>*</span>} Select
            specialties
          </InputLabel>
          <Button
            id="select-button"
            className={cx(classes.button, buttonClassName, className)}
            style={{ width }}
            onClick={open}
            small
          >
            {Array.isArray(input.value) && input.value.length
              ? input.value.map(formatSpecialty).join(' ')
              : 'Select'}
            {}
          </Button>
        </>
      )}
    </Modal>
  )
}

SelectSpecialties.propTypes = {
  classes: PropTypes.object.isRequired,
  label: PropTypes.string,
  input: PropTypes.object.isRequired,
}

export default withStyles(styles)(SelectSpecialties)
