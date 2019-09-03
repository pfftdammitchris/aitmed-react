import React from 'react'
import makeStyles from '@material-ui/styles/makeStyles'
import cx from 'classnames'
import reduce from 'lodash/reduce'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import startCase from 'lodash/startCase'
import { ICD10ResultItem } from './types'

interface ICD10PopupMenuProps {
  isOpen: boolean
  codes: string[]
  results: ICD10ResultItem[]
  total: number
  inputValue: string
  getMenuProps: Function
  getItemProps: Function
  highlightedIndex: number | null
}

const useStyles = makeStyles((theme: any) => ({
  list: {
    borderRadius: 12,
    background: theme.palette.background.cool,
    border: `1px solid ${theme.palette.borders.cool}`,
  },
  listItem: {
    border: '1px solid rgba(0, 0, 0, 0)',
    transition: 'all 0.1s ease-out',
    cursor: 'pointer',
    marginBottom: 2,
    '&:hover': {
      background: theme.palette.background.lightGrey2,
      '& $text': {
        transform: 'translateX(1.3px)',
        color: theme.palette.secondary.dark,
      },
    },
  },
  text: {
    fontSize: '0.77rem',
    fontWeight: 500,
    transition: 'all 0.2s ease',
    color: theme.palette.text.soft,
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.65rem',
    },
  },
  highlighted: {
    border: `1px solid ${theme.palette.thirdary.main}`,
  },
}))

const filterer = (results: ICD10ResultItem[], inputValue: string = '') => (
  acc: any[] = [],
  code: string,
) => {
  let shouldShow = false
  const diagnosisResult = results[code] || ''
  const hasInvalidChars = /^.*?(?=[\+\^#%&$\*:<>\?/\{\|\}\[\]\\\)\(]).*$/g.test(
    inputValue,
  )
  if (hasInvalidChars) return acc
  if (!inputValue) {
    shouldShow = true
  } else if (new RegExp(inputValue, 'i').test(diagnosisResult)) {
    shouldShow = true
  } else if (new RegExp(inputValue, 'i').test(code)) shouldShow = true
  if (shouldShow) acc.push(code)
  return acc
}

const ICD10PopupMenu: React.FC<ICD10PopupMenuProps> = ({
  isOpen,
  codes,
  results,
  total,
  inputValue,
  getMenuProps,
  getItemProps,
  highlightedIndex,
}) => {
  if (!isOpen || !total) return null
  const classes = useStyles()
  const reducer = reduce(codes, filterer(results, inputValue), [])
  return (
    <List className={classes.list} dense {...getMenuProps()}>
      {reducer.map((code: string, index: number) => (
        <ListItem
          {...getItemProps({
            key: `${code}${index}`,
            index,
            item: code,
            className: cx(classes.listItem, {
              [classes.highlighted]: highlightedIndex === index,
            }),
          })}
        >
          <ListItemText className={classes.text} disableTypography>
            {code}: {startCase(results[code].toUpperCase())}
          </ListItemText>
        </ListItem>
      ))}
    </List>
  )
}

export default ICD10PopupMenu
