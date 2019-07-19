import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import onlyUpdateForKeys from 'util/onlyUpdateForKeys'
import FormGroup from '@material-ui/core/FormGroup'
import withStyles from '@material-ui/core/styles/withStyles'
import CheckboxListItem from 'components/common/CheckboxListItem'
import { languagesList, languagesMapper } from 'util/info'

const styles = (theme) => ({
  checkbox: {
    // background: 'red !important',
    // transform: 'scale(1.5)',
    // padding: 15,
  },
  checkboxListItem: {
    width: '100%',
    maxWidth: 170,
    [theme.breakpoints.down('xs')]: {
      maxWidth: '100%',
    },
  },
})

const SelectLanguagesListOfLanguages = ({
  classes,
  className,
  checkboxClassName,
  checkboxItemClassName,
  mode,
  primary,
  getLangKey,
  onCheck,
  shouldCheck,
}) => (
  <FormGroup className={className} row>
    {languagesList.map((langCode, i) => (
      <CheckboxListItem
        key={langCode + i}
        className={cx(classes.checkboxListItem, checkboxItemClassName)}
        checkboxClassName={cx(classes.checkbox, checkboxClassName)}
        label={languagesMapper[langCode].translated}
        onChange={onCheck(languagesMapper[langCode])}
        checked={shouldCheck(langCode)}
        color={getLangKey(primary) === langCode ? 'primary' : 'secondary'}
      />
    ))}
  </FormGroup>
)

SelectLanguagesListOfLanguages.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  checkboxClassName: PropTypes.string,
  checkboxItemClassName: PropTypes.string,
  mode: PropTypes.oneOf(['primary', 'secondary']),
  primary: PropTypes.object,
  getLangKey: PropTypes.func.isRequired,
  onCheck: PropTypes.func.isRequired,
  shouldCheck: PropTypes.func.isRequired,
}

export default onlyUpdateForKeys(['mode', 'primary', 'secondaries'])(
  withStyles(styles)(SelectLanguagesListOfLanguages),
)
