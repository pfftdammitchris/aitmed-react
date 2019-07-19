import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import InputLabel from '@material-ui/core/InputLabel'
import Modal from 'components/common/Modal'
import Button from 'components/common/Button'
import SelectLanguagesInterface from './Interface/Interface'

const styles = (theme) => ({
  modal: {
    // minWidth: '50%',
    [theme.breakpoints.down('xs')]: {
      minWidth: '100%',
    },
  },
  button: {
    width: '100%',
    marginTop: '3px !important',
    borderRadius: '8px !important',
    boxShadow: 'none',
    border: `1px solid ${theme.palette.borders.slightlyDark}`,
    color: `${theme.palette.text.soft} !important`,
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

const SelectLanguages = ({
  classes,
  className,
  wrapperClassName,
  buttonClassName,
  label,
  input, // input.value shape: { primary: null | object, secondary: object[] }
  width,
  meta,
  required,
  disabled,
}) => (
  <Modal
    wrapperClassName={cx(classes.modal, wrapperClassName)}
    label={({ Exit, Top, close }) => (
      <Top
        label="Select languages"
        actions={<Exit onClick={close}>{label}</Exit>}
      />
    )}
    meta={meta}
    content={({ close }) => (
      <SelectLanguagesInterface close={close} input={input} />
    )}
    divider
    cardv2
  >
    {({ open }) => (
      <div
        style={{
          marginBottom: 16,
          display: disabled ? 'none' : 'block',
        }}
      >
        <InputLabel htmlFor={input.name}>
          {required && <span style={{ color: 'red' }}>*</span>} Select languages
        </InputLabel>
        <SelectButton
          className={cx(classes.button, buttonClassName, className)}
          style={{ width }}
          small
          open={open}
          input={input}
          disabled={!!disabled}
        />
      </div>
    )}
  </Modal>
)

SelectLanguages.propTypes = {
  classes: PropTypes.object.isRequired,
  label: PropTypes.string,
  input: PropTypes.object.isRequired,
  disabled: PropTypes.bool.isRequired,
}

// Moved to top level for testing purposes
export const SelectButton = ({ open, input, ...props }) => (
  <Button onClick={open} {...props}>
    {(typeof input.value === 'object' &&
      input.value.primary &&
      input.value.primary.translated) ||
      'Select'}
  </Button>
)

export default withStyles(styles)(SelectLanguages)
