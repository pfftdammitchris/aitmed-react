import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import Typography from 'components/Typography'
import useICD10 from './useICD10'
import ICD10SearchInput from './ICD10SearchInput'

interface ICD10SearcherProps {
  classes?: any
  highlightField?: Function
  highlightedField?: number
  updateField?: Function
  popField?: Function
  pushField?: Function
  removeField?: Function
  forEachField?: Function
}

const StatusCaption = ({ fetching, fetchError, ...props }) => (
  <Typography
    variant="subtitle1"
    secondary={!fetchError && fetching}
    thirdary={!fetchError && !fetching}
    error={!!fetchError}
    {...props}
  >
    {fetching && 'Searching...'}
    {!fetching && 'Search a keyword'}
    {fetchError &&
      (fetchError ? fetchError.message || '' : 'An error occurred')}
  </Typography>
)

// StatusCaption.propTypes = {
//   fetching: PropTypes.bool.isRequired,
//   error: PropTypes.object,
// }

const OptimizedStatusCaption = React.memo(
  StatusCaption,
  (props, nextProps) =>
    props.fetching === nextProps.fetching ||
    props.fetchError === nextProps.fetchError,
)

const styles = (theme) => ({
  root: {
    marginBottom: 6,
  },
  statusCaption: {
    margin: '0 10px',
  },
})

const ICD10Searcher: React.FC<ICD10SearcherProps> = ({
  classes,
  highlightField,
  highlightedField,
  updateField,
  popField,
  pushField,
  removeField,
  forEachField,
}) => {
  const user = {}
  const {
    fetching,
    fetchError,
    onSelect,
    onSearch,
    onStateChange,
    onKeyPress,
    downshiftReducer,
    stringify,
    data: { codes, results, total },
  } = useICD10({
    token: user.token,
    updateField,
    highlightField,
    highlightedField,
    popField,
    pushField,
    removeField,
    forEachField,
  })
  return (
    <div className={classes.root}>
      <OptimizedStatusCaption
        fetching={fetching}
        fetchError={fetchError}
        className={classes.statusCaption}
      />
      <ICD10SearchInput
        codes={codes}
        results={results}
        total={total}
        fetching={fetching}
        onSelect={onSelect}
        onInputValueChange={onSearch}
        highlightedField={highlightedField}
        stringify={stringify}
        onStateChange={onStateChange}
        downshiftReducer={downshiftReducer}
        onKeyPress={onKeyPress}
      />
    </div>
  )
}

const areEqual = (props, nextProps) => {
  if (props.highlightedField === nextProps.highlightedField) return true
  return false
}

export default React.memo(withStyles(styles)(ICD10Searcher), areEqual)
