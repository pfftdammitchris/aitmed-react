import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import FormGroup from '@material-ui/core/FormGroup'
import withStyles from '@material-ui/core/styles/withStyles'
import CheckboxListItem from 'components/common/CheckboxListItem'
import Button from 'components/common/Button'
import LoadingSpinner from 'components/common/LoadingSpinner'
import useSelectSpecialties from './useSelectSpecialties'

const styles = (theme) => ({
  root: {
    position: 'relative',
    width: '100%',
  },
  formGroup: {
    display: 'block',
  },
  checkboxListItem: {
    width: '100%',
    maxWidth: 170,
    [theme.breakpoints.down('xs')]: {
      maxWidth: 120,
      fontSize: '0.7rem',
    },
  },
  disabled: {
    opacity: 0.85,
  },
  acceptButton: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.6rem',
      padding: '4px 15px',
      width: '80%',
      display: 'block',
      margin: 'auto',
    },
  },
})

const SelectSpecialtiesState = ({
  classes,
  wrapperClassName,
  checkboxItemClassName,
  checkboxClassName,
  close,
  input,
}) => {
  const {
    specialties,
    ids: codes,
    chosen,
    fetching,
    push,
    remove,
    getTranslation,
  } = useSelectSpecialties({
    input,
  })
  return (
    <div className={cx(classes.root, wrapperClassName)}>
      <FormGroup classes={{ root: classes.formGroup }}>
        {fetching && (
          <LoadingSpinner noOverlay basic xs>
            Loading...
          </LoadingSpinner>
        )}
        {codes.map((code, i) => {
          const isChecked = chosen.includes(code)
          return (
            <CheckboxListItem
              key={code + i}
              className={cx(classes.checkboxListItem, checkboxItemClassName, {
                [classes.disabled]: !isChecked,
              })}
              checkboxClassName={checkboxClassName}
              label={getTranslation(specialties[code])}
              value={code}
              onChange={() => (isChecked ? remove(code) : push(code))}
              checked={isChecked}
            />
          )
        })}
        <div
          style={{
            position: 'relative',
            width: '100%',
            minHeight: 30,
            marginTop: 10,
          }}
        >
          <Button
            onClick={close}
            className={classes.acceptButton}
            hover={{ primary: 'white' }}
            small
          >
            Accept
          </Button>
        </div>
      </FormGroup>
    </div>
  )
}

SelectSpecialtiesState.propTypes = {
  classes: PropTypes.object.isRequired,
  input: PropTypes.object.isRequired,
  close: PropTypes.func.isRequired,
  className: PropTypes.string,
  checkboxItemClassName: PropTypes.string,
  checkboxClassName: PropTypes.string,
}

export default withStyles(styles)(SelectSpecialtiesState)
