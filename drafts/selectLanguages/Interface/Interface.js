import React from 'react'
import PropTypes from 'prop-types'
import { IoMdClose } from 'react-icons/io'
import cx from 'classnames'
import Divider from '@material-ui/core/Divider'
import Chip from '@material-ui/core/Chip'
import findIndex from 'lodash/findIndex'
import find from 'lodash/find'
import withStyles from '@material-ui/core/styles/withStyles'
import Button from 'components/common/Button'
import { languagesList, languagesMapper } from 'util/info'
import SelectLanguagesChoosePrimarySecondary from './Choose'
import SelectLanguagesListOfLanguages from './Languages'

const styles = (theme) => ({
  chip: {
    height: 25,
    fontSize: '0.65em',
    marginRight: 3,
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.6em',
    },
    '& $activePrimaryChip': {
      color: theme.palette.primary.main,
    },
    '& activeSecondaryChip': {
      color: theme.palette.secondary.main,
    },
  },
  chipLabel: {
    padding: '3px 5px !important',
  },
  activePrimaryChip: {
    color: theme.palette.primary.main,
  },
  activeSecondaryChip: {
    color: theme.palette.secondary.main,
    border: `1px solid ${theme.palette.secondary.main}`,
  },
  divider: {
    margin: `${theme.spacing.unit * 2}px 0`,
    border: `1px solid ${theme.palette.thirdary.main}`,
  },
  bottomActions: {
    padding: 12,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& button': {
      [theme.breakpoints.down('xs')]: {
        paddingLeft: 7,
        paddingRight: 7,
        fontSize: '0.65rem',
        marginRight: 4,
      },
    },
    '& > div': {
      position: 'absolute',
      top: 0,
      right: 0,
    },
  },
  disabled: {
    opacity: 0.4,
    pointerEvents: 'none',
  },
})

/** Used to grab & return the language code (langCode/langKey) by passing in a language object
    This function is the big player in the whole interface
 * @param { object } langObj - Language object in the shape such as: { 'en-US': true }
 */
export const getLangKey = (langObj) => {
  if (typeof langObj !== 'object') {
    throw new Error('Language object needs to be an actual object.')
  }
  if (langObj === null) return null
  const langKey = langObj.code
  return langKey
}

class SelectLanguagesInterface extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      primary: props.input.value.primary || languagesMapper['en-US'],
      secondaries: props.input.value.secondaries || [],
      mode: props.input.value.mode || 'secondary',
    }
  }

  /** Changes mode from primary to secondary and vice versa
   * @param { enum } newMode - 'primary' | 'secondary'
   */
  changeMode = (newMode) => {
    this.setState((prevState) => {
      if (!['primary', 'secondary'].includes(newMode)) {
        throw new Error(
          'The mode argument should be an enum value of "primary" or "secondary".',
        )
      }
      if (prevState.mode === newMode) {
        return null
      }
      return { mode: newMode }
    })
  }

  /** Used when a user wants to check/uncheck a box
   * @param { object } langObj - language object in the shape of: { 'en-US': true. english: 'English', translated: 'English' }
   */
  onCheck = (langObj) => (e) => {
    const { checked } = e.target
    // user is choosing a language
    if (checked) {
      this.setState(
        (prevState) => {
          const newState = {}

          if (prevState.mode === 'primary') {
            const langKey = this.getLangKey(langObj)
            if (this.getLangKey(prevState.primary) === langKey) {
              return null
            }
            newState.primary = langObj
            // making sure we remove the lang object from secondaries to prevent bugs
            newState.secondaries = prevState.secondaries.filter(
              (otherLangObj) =>
                this.getLangKey(langObj) !== this.getLangKey(otherLangObj),
            )
          } else if (prevState.mode === 'secondary') {
            // add language to secondaries if not already in there
            const indexSecondary = findIndex(
              prevState.secondaries,
              (otherLangObj) =>
                this.getLangKey(langObj) === this.getLangKey(otherLangObj),
            )
            // not found
            if (indexSecondary === -1) {
              newState.secondaries = [...prevState.secondaries, langObj]
              // making sure we remove from primary if its applied there to prevent unecessary bugs
              if (
                this.getLangKey(langObj) === this.getLangKey(prevState.primary)
              ) {
                newState.primary = null
              }
            } else {
              return null
            }
          } else {
            throw new Error(
              'The mode needs to be primary or secondary for this action to proceed.',
            )
          }
          return newState
        },
        () => this.props.input.onChange(this.state),
      )
    } else if (!checked) {
      // user is removing a language
      this.setState(
        (prevState) => {
          const newState = {}
          if (prevState.mode === 'primary') {
            newState.primary = null
            // user is in primary mode and wants to unchecked a checked secondary language, remove it from secondaries
            const secondaryObjChecked = find(
              prevState.secondaries,
              (otherLangObj) =>
                this.getLangKey(langObj) === this.getLangKey(otherLangObj),
            )
            if (secondaryObjChecked !== undefined) {
              newState.secondaries = prevState.secondaries.filter(
                (otherLangObj) =>
                  this.getLangKey(otherLangObj) !== this.getLangKey(langObj),
              )
            }
          } else if (prevState.mode === 'secondary') {
            // if the value the user is removing is actually a primary language while they're on secondary mode,
            // remove the primary value
            if (
              this.getLangKey(prevState.primary) === this.getLangKey(langObj)
            ) {
              newState.primary = null
            } else {
              // else just remove the lang from secondaries
              newState.secondaries = prevState.secondaries.filter(
                (otherLangObj) =>
                  this.getLangKey(otherLangObj) !== this.getLangKey(langObj),
              )
            }
          }
          return newState
        },
        () => this.props.input.onChange(this.state),
      )
    }
  }

  /** If state.mode is primary, this returns true if the language we are inspecting is already in state.primary
  /** If state.mode is secondary, this returns true if the language we are inspecting is already inside state.secondaries
   * @param { string } langCode - the "code" property from the language object
  */
  shouldCheck = (langCode) => {
    const { state } = this
    if (state.mode === 'primary') {
      // if passed in language is currently the primary
      if (langCode === this.getLangKey(state.primary)) {
        return true
      }
      // if passed in language is currently active in secondaries, check it too
      if (
        find(
          state.secondaries,
          (langObj) => this.getLangKey(langObj) === langCode,
        ) !== undefined
      ) {
        return true
      }
      return false
    } else if (state.mode === 'secondary') {
      if (this.getLangKey(state.primary) === langCode) {
        return true
      }
      const index = findIndex(
        state.secondaries,
        (langObj) => langCode === this.getLangKey(langObj),
      )
      // the language we are inspecting is inside state.secondaries[] if index is anything other than -1
      if (index !== -1) {
        return true
      } else {
        // lets check state.primary so that we show to the user that they already chosen this as primary
        if (langCode === this.getLangKey(state.primary)) {
          return true
        }
        // nothing found in primary or secondaries. the checkbox should be left unchecked
        return false
      }
    }
  }

  getLangKey = getLangKey

  /** Used to grab the translation of a language from either a language string or object
   * @param { string | object | null } lang - language object/string/null
   */
  getLanguageTranslated = (lang) => {
    const isKey = typeof lang === 'string'
    const isObj = typeof lang === 'object'
    const isNothing = lang == null

    if (isKey) {
      return languagesMapper[lang]
    } else if (isObj && isObj != null) {
      return lang && lang.translated
    } else if (isNothing) {
      return null
    }
  }

  /** Renders a "tag"-like component that renders on the screen when the user selects a language
   * @param { object } langObj - The language object
   * @param { string | number } key - Used to support the key prop when being iterating over mapped items in the render() block
   */
  getChip = ({ key, langObj } = {}) => {
    const { state } = this
    const { classes } = this.props
    const translatedLanguage = this.getLanguageTranslated(langObj)
    const languageKey = this.getLangKey(langObj)
    const isPrimary = this.getLangKey(state.primary) === languageKey
    const isSecondary = !!find(
      state.secondaries,
      (langObj) => this.getLangKey(langObj) === languageKey,
    )

    const optionalArgs = {}
    if (key) optionalArgs.key = key + languageKey

    return (
      <Chip
        {...optionalArgs}
        classes={{
          root: cx(classes.chip, {
            [classes.activePrimaryChip]: isPrimary,
            [classes.activeSecondaryChip]: !!isSecondary,
          }),
          label: classes.chipLabel,
        }}
        label={translatedLanguage}
        color={
          this.getLangKey(state.primary) === languageKey
            ? 'primary'
            : 'secondary'
        }
        variant="outlined"
        deleteIcon={<IoMdClose />}
      />
    )
  }

  reset = () => {
    this.setState(
      {
        primary: null,
        secondaries: [],
      },
      () => this.props.input.onChange(this.state),
    )
  }

  render() {
    const { state } = this
    const {
      classes,
      className,
      checkboxItemClassName,
      checkboxClassName,
      close,
    } = this.props

    return (
      <div>
        <SelectLanguagesChoosePrimarySecondary
          changeMode={this.changeMode}
          getChip={this.getChip}
          {...state}
        />
        <Divider className={classes.divider} />
        <SelectLanguagesListOfLanguages
          className={className}
          checkboxClassName={checkboxClassName}
          checkboxItemClassName={checkboxItemClassName}
          languagesList={languagesList}
          getLangKey={this.getLangKey}
          shouldCheck={this.shouldCheck}
          onCheck={this.onCheck}
          {...state}
        />
        <div className={classes.bottomActions}>
          <Button onClick={close} hover={{ primary: 'white' }} primary smalll>
            Accept
          </Button>
          <Button
            onClick={this.reset}
            hover={{ neutral: 'white' }}
            neutral
            small
          >
            Clear
          </Button>
        </div>
      </div>
    )
  }
}

SelectLanguagesInterface.propTypes = {
  classes: PropTypes.object.isRequired,
  input: PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    onChange: PropTypes.func.isRequired,
  }).isRequired,
  close: PropTypes.func.isRequired,
}

export default withStyles(styles)(SelectLanguagesInterface)
