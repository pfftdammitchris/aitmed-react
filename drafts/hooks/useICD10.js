/*
  A re-usable hook to search for ICD10 data
  Pass in user.token as a parameter.
  The returned object is the state and a function onSearch
*/
import { useReducer, useEffect } from 'react'
import Downshift from 'downshift'
import reduce from 'lodash/reduce'
import axios from 'axios'
import urls from 'config/urls'

const parseResponse = (data) => {
  if (data) {
    const reducer = (acc, [code, description]) => {
      if (!acc.hasOwnProperty(code)) acc[code] = description
      return acc
    }
    const [totalResults, codes, _, codesAndNames] = data
    // console.log(_)
    return {
      total: totalResults,
      results: reduce(codesAndNames, reducer, {}),
      codes,
    }
  }
}

// Supports cancelation of the previous onSearch request if a new onSearch is immediately invoked right after
const makeFetchICD10Request = (token) => {
  let call
  return async (keyword) => {
    try {
      if (call) call.cancel()
      call = axios.CancelToken.source()
      const response = await axios({
        method: 'get',
        url: urls.icd10.search(keyword),
        headers: { Authorization: `JWT ${token}` },
        cancelToken: call.token,
      })
      return response
    } catch (error) {
      throw error
    }
  }
}

const downshiftReducer = (state, changes) => {
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

const reducer = (state, action) => {
  switch (action.type) {
    case 'open':
      return { ...state, isOpen: true }
    case 'close':
      return { ...state, isOpen: false }
    case 'fetching':
      return { ...state, fetching: true, fetchError: null }
    case 'fetched':
      return {
        ...state,
        isOpen: true,
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
    case 'set-mounted':
      return { ...state, mounted: action.value }
    default:
      return state
  }
}

/*
  onSearch takes in parameters: (keyword, { page, limit })
*/
const useICD10 = ({
  token,
  // updateField,
  // highlightField,
  // highlightedField,
  // popField,
  pushField,
  removeField,
  forEachField,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const callSearch = makeFetchICD10Request(token)

  const setMounted = (value) => {
    dispatch({ type: 'set-mounted', value })
  }

  const onSearch = (keyword, downshift) => {
    const isClicked = downshift.type === Downshift.stateChangeTypes.clickItem
    if (isClicked) return
    if (keyword) {
      dispatch({ type: 'fetching' })
      callSearch(keyword)
        .then((response) => {
          const parsedResults = parseResponse(response.data)
          if (parsedResults) {
            const { codes } = parsedResults
            if (codes && !codes.length) {
              return dispatch({ type: 'no-results' })
            }
            if (state.mounted) {
              dispatch({ type: 'fetched', results: parsedResults })
            }
          } else {
            dispatch({ type: 'no-results' })
          }
        })
        .catch((error) => {
          if (state.mounted && !axios.isCancel(error)) {
            dispatch({ type: 'fetch-failed', error })
          }
        })
    }
  }

  // This function will attempt to remove empty fields when adding new fields
  // It will also add an empty field when the user selects an item
  const onSelect = (selectedItem, downshift) => {
    let description
    const code = selectedItem
    if (code) {
      forEachField((field, index) => {
        const codeElem = document.querySelector(
          `input[name="diagnosis[${index}].code"]`,
        )
        const descriptionElem = document.querySelector(
          `input[name="diagnosis[${index}].description"]`,
        )
        if (codeElem && descriptionElem) {
          const _code = codeElem.value
          const _description = descriptionElem.value
          if (!_code && !_description) removeField(index)
        } else removeField(index)
      })
      description = state.data.results[code] || ''
      description = description.toUpperCase()
      pushField({ code, description, comment: '' })
      pushField({ code: '', description: '', comment: '' })
      downshift.clearSelection()
    }
  }

  const onStateChange = (/*changes, downshift*/) => {
    // console.log(changes)
    // console.log(downshift)
  }

  // Used to prevent review notes from opening when pressing enter
  const onKeyPress = (e) => {
    if (e.charCode === 13) e.preventDefault()
  }

  const stringify = (results) => (code) =>
    results[code] ? `${code}: ${results[code].toUpperCase()}` : ''

  useEffect(() => {
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
    onStateChange,
    stringify,
    downshiftReducer,
  }
}

export default useICD10
