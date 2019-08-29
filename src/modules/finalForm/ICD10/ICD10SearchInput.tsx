import React from 'react'
import cx from 'classnames'
import { makeStyles } from '@material-ui/styles'
import CircularProgress from '@material-ui/core/CircularProgress'
import Input from '@material-ui/core/Input'
import { IoIosSearch } from 'react-icons/io/index.esm'
import Downshift from 'downshift'
import ICD10PopupMenu from './ICD10PopupMenu'
import { ICD10ResultItem } from './types'

interface ICD10SearchInputProps {
  codes: string[]
  results: any
  total: number
  onSelect: (args: any) => void
  fetching: boolean
  onInputValueChange: (args: any) => void
  onStateChange: (args: any) => void
  stringify: (results: ICD10ResultItem) => (code: string) => string
  downshiftReducer: any
  onKeyPress: (e: any) => void
}

const useStyles = makeStyles((theme: any) => ({
  root: {
    margin: 'auto',
  },
  inputWrapper: {
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  input: {
    height: 40,
    minWidth: 400,
    borderRadius: 12,
    background: theme.palette.background.cool,
    border: `1px solid ${theme.palette.borders.cool}`,
    '& input': {
      padding: '8px 3px',
      fontSize: '0.9rem',
    },
    [theme.breakpoints.down('xs')]: {
      minWidth: '100%',
      fontSize: '0.9rem',
    },
    '&:hover': {
      background: theme.palette.background.lightGrey2,
      color: theme.palette.text.soft,
      '& $searchIcon': {
        color: theme.palette.text.soft,
      },
    },
  },
  searchIcon: {
    color: theme.palette.secondary.main,
    transition: 'all 1.5s ease-out',
    fontSize: '1.2rem',
    padding: '3px 5px',
  },
  searchIconSearching: {
    color: theme.palette.thirdary.dark,
  },
  spinner: {
    transform: 'translateX(-16px)',
  },
}))

const LoadingSpinner: React.FC<any> = ({ loading, ...props }) =>
  loading && (
    <CircularProgress
      color="secondary"
      size={30}
      thickness={3}
      variant="indeterminate"
      {...props}
    />
  )

const ICD10SearchInput: React.FC<ICD10SearchInputProps> = ({
  codes = [],
  results,
  total,
  fetching,
  onSelect,
  onInputValueChange,
  stringify,
  downshiftReducer,
  onKeyPress,
}) => {
  const classes = useStyles()

  // Extracted this outside because TS was giving a weird error
  const SearchInput: React.FC<any> = ({ getInputProps, ...props }) => (
    <Input
      {...getInputProps({
        startAdornment: (
          <IoIosSearch
            className={cx(classes.searchIcon, {
              [classes.searchIconSearching]: fetching,
            })}
          />
        ),
        endAdornment: (
          <LoadingSpinner className={classes.spinner} loading={fetching} />
        ),
        placeholder: ' Find references',
        disableUnderline: true,
        className: classes.input,
        title: 'Search ICD10 diagnosis',
        onKeyPress,
        ...props,
      })}
    />
  )

  return (
    <Downshift
      onSelect={onSelect}
      onInputValueChange={onInputValueChange}
      itemToString={stringify(results)}
      stateReducer={downshiftReducer}
    >
      {({
        getMenuProps,
        getInputProps,
        getItemProps,
        inputValue,
        highlightedIndex,
        isOpen,
      }) => (
        <div className={classes.inputWrapper}>
          <SearchInput getInputProps={getInputProps} />
          {!!codes.length && (
            <ICD10PopupMenu
              codes={codes}
              results={results}
              total={total}
              isOpen={isOpen}
              inputValue={inputValue || ''}
              getMenuProps={getMenuProps}
              getItemProps={getItemProps}
              highlightedIndex={highlightedIndex}
            />
          )}
        </div>
      )}
    </Downshift>
  )
}

export default ICD10SearchInput
