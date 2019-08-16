import React from 'react'
import Downshift from 'downshift'
import reduce from 'lodash/reduce'
import axios from 'axios'
import {
  ICD10ResultItem,
  UserICD10SearcherAction as Action,
  UserICD10SearcherState as State,
} from './types'

const parseResponse = (data: any) => {
  if (data) {
    const reducer = (acc: any, [code, description]: [string, string]) => {
      if (!acc.hasOwnProperty(code)) acc[code] = description
      return acc
    }
    const [totalResults, codes, _, codesAndNames] = data
    return {
      total: totalResults,
      results: reduce(codesAndNames, reducer, {}),
      codes,
    }
  }
  return
}

// Supports cancelation of the previous onSearch request if a new onSearch is immediately invoked right after
const makeFetchICD10Request = () => {
  let call: any
  return async (keyword: string) => {
    try {
      if (call) call.cancel()
      call = axios.CancelToken.source()
      const response = await axios({
        method: 'get',
        url: `https://clinicaltables.nlm.nih.gov/api/icd10cm/v3/search?sf=code,name&terms=${keyword}`,
        cancelToken: call.token,
      })
      return response
    } catch (error) {
      throw error
    }
  }
}

const downshiftReducer = (_: any, changes: any) => {
  switch (changes.type) {
    case Downshift.stateChangeTypes.clickItem:
      return { ...changes, isOpen: false, inputValue: '' }
    case Downshift.stateChangeTypes.keyDownEnter:
      return { ...changes, highlightedIndex: 0, inputValue: '' }
    case Downshift.stateChangeTypes.changeInput:
      return { ...changes, highlightedIndex: 0 }
    case Downshift.stateChangeTypes.unknown:
    case Downshift.stateChangeTypes.mouseUp:
    case Downshift.stateChangeTypes.itemMouseEnter:
    case Downshift.stateChangeTypes.keyDownArrowUp:
    case Downshift.stateChangeTypes.keyDownArrowDown:
    case Downshift.stateChangeTypes.keyDownEscape:
    case Downshift.stateChangeTypes.blurInput:
    case Downshift.stateChangeTypes.keyDownSpaceButton:
    case Downshift.stateChangeTypes.clickButton:
    case Downshift.stateChangeTypes.blurButton:
    case Downshift.stateChangeTypes.controlledPropUpdatedSelectedItem:
    case Downshift.stateChangeTypes.touchEnd:
      return changes
    default:
      return changes
  }
}

const initialState = {
  fetching: false,
  fetched: false,
  fetchError: null,
  data: {
    codes: [],
    results: {},
    total: 0,
  },
}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'fetching':
      return { ...state, fetching: true, fetchError: null }
    case 'fetched':
      return {
        ...state,
        fetching: false,
        fetched: true,
        data: {
          codes: action.results.codes,
          results: action.results.results,
          total: action.results.total,
        },
      }
    case 'fetch-failed':
      return {
        ...state,
        fetching: false,
        fetched: false,
        fetchError: action.error,
      }
    case 'no-results':
      return { ...state, fetching: false }
    default:
      return state
  }
}

/*
  onSearch takes in parameters: (keyword, { page, limit })
*/
const useICD10Searcher = ({ fields }: { fields: any }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  const [mounted, setMounted] = React.useState(false)
  const callSearch = makeFetchICD10Request()

  const onSearch = (keyword: string, downshift: any) => {
    const isClicked = downshift.type === Downshift.stateChangeTypes.clickItem
    if (isClicked) return
    if (keyword) {
      dispatch({ type: 'fetching' })
      callSearch(keyword)
        .then((response) => {
          const parsedResults = parseResponse(response.data)
          if (parsedResults) {
            const { codes } = parsedResults
            if (codes && !codes.length) return dispatch({ type: 'no-results' })
            if (mounted) dispatch({ type: 'fetched', results: parsedResults })
          } else dispatch({ type: 'no-results' })
        })
        .catch((error) => {
          if (mounted && !axios.isCancel(error)) {
            dispatch({ type: 'fetch-failed', error })
          }
        })
    }
  }

  // This function will attempt to remove empty fields when adding new fields
  // It will also add an empty field when the user selects an item
  const onSelect = (code: string, downshift) => {
    let description
    if (code) {
      fields.forEach((fieldName: string, index: number) => {
        const codeElem = document.getElementById(`${fieldName}.code`)
        const descriptionElem = document.getElementById(
          `${fieldName}.description`,
        )
        const commentElem = document.getElementById(`${fieldName}.comment`)
        if (codeElem && descriptionElem) {
          if (!codeElem.value && !descriptionElem.value) {
            if (commentElem && !commentElem.value) {
              fields.remove(index)
            }
          }
        } else {
          try {
            fields.remove(index)
          } catch (error) {
            console.error
          }
        }
      })
      description = state.data.results[code] || ''
      description = description.toUpperCase()
      fields.unshift({ code, description, comment: '' })
      fields.push({ code: '', description: '', comment: '' })
      downshift.clearSelection()
    }
  }

  // Used to prevent review notes from opening when pressing enter
  const onKeyPress = (e: any) => {
    if (e.charCode === 13) e.preventDefault()
  }

  const stringify = (results: ICD10ResultItem) => (code: string): string =>
    results[code] ? `${code}: ${results[code].toUpperCase()}` : ''

  React.useEffect(() => {
    setMounted(true)
    return () => {
      setMounted(false)
    }
  }, [])

  return {
    ...state,
    onSearch,
    onSelect,
    onKeyPress,
    stringify,
    downshiftReducer,
  }
}

export default useICD10Searcher
