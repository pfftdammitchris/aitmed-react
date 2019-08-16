import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Typography from 'components/Typography'
import useICD10Searcher from './useICD10Searcher'
import ICD10SearchInput from './ICD10SearchInput'

interface ICD10SearcherProps {
  highlightField?: Function
  highlightedField?: number
  fields: any[]
}

const StatusCaption: React.FC<{
  className?: string
  fetching: boolean
  fetchError: any | null
}> = ({ fetching, fetchError, ...props }) => (
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

const OptimizedStatusCaption = React.memo(
  StatusCaption,
  (props, nextProps) =>
    props.fetching === nextProps.fetching ||
    props.fetchError === nextProps.fetchError,
)

const useStyles = makeStyles({
  root: {
    marginBottom: 6,
  },
  statusCaption: {
    margin: '0 10px',
  },
})

const ICD10Searcher: React.FC<ICD10SearcherProps> = ({
  highlightedField,
  fields,
}) => {
  const classes = useStyles()
  const {
    fetching,
    fetchError,
    onSelect,
    onSearch,
    onKeyPress,
    downshiftReducer,
    stringify,
    data: { codes, results, total },
  } = useICD10Searcher({
    fields,
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
        downshiftReducer={downshiftReducer}
        onKeyPress={onKeyPress}
      />
    </div>
  )
}

const areEqual = (props: ICD10SearcherProps, nextProps: ICD10SearcherProps) =>
  props.highlightedField === nextProps.highlightedField

export default React.memo(ICD10Searcher, areEqual)
