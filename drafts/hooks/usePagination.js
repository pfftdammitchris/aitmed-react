/*
  TODO: Test this hook and see if its 100% accurate
*/
import { useEffect, useReducer } from 'react'

const initialState = {
  pagination: {
    object_count: 0,
    page_limit: 10,
    page_index: 1,
    num_pages: 0,
  },
  startIndex: 0,
  endIndex: 0,
  totalItems: 0,
  currentPage: 1,
  maxPages: 1,
  totalPages: 1,
  startPage: 1,
  endPage: 1,
  pages: [],
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'set-state':
      return { ...state, ...action.changes }
    case 'previous':
    case 'next':
      return state
    default:
      return state
  }
}

// Pass in the pagination object from the backend
const usePagination = ({
  pagination: {
    object_count = 0,
    page_index = 1,
    num_pages = 1,
    page_limit = 1,
  },
}) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const setState = (changes) => {
    dispatch({ type: 'set-state', changes })
  }

  const previous = (index) => {
    dispatch({ type: 'previous' })
  }

  const next = (index) => {
    dispatch({ type: 'next' })
  }

  useEffect(() => {
    let startPage, endPage

    // Just show all the pages if max pages given is more than total pages
    if (num_pages <= page_limit) {
      startPage = 1
      endPage = num_pages
    } else {
      // the # of pages is higher than max pages so calculate start/end pages
      const maxPagesBeforeCurrentPage = Math.floor(num_pages / 2)
      const maxPagesAfterCurrentPage = Math.ceil(num_pages / 2) - 1
      // Current page is near the start
      if (page_index <= maxPagesBeforeCurrentPage) {
        startPage = 1
        endPage = num_pages
      } else if (page_index + maxPagesAfterCurrentPage >= num_pages) {
        // Current page is near the end
        startPage = num_pages - page_limit + 1
        endPage = num_pages
      } else {
        // Current page is somewhere in the middle
        startPage = page_index - maxPagesBeforeCurrentPage
        endPage = page_index + maxPagesAfterCurrentPage
      }
    }

    const startIndex = (page_index + 1) * num_pages
    const endIndex = Math.min(startIndex + num_pages - 1, object_count - 1)

    const pages = Array.from(Array(endPage + 1 - startPage).keys()).map(
      (i) => startPage + i,
    )

    setState({
      totalItems: object_count,
      currentPage: page_index,
      maxPage: page_limit,
      startIndex,
      endIndex,
      pages,
      startPage,
      endPage,
      totalPages: num_pages,
    })
  }, [num_pages, object_count, page_index, page_limit])

  return {
    ...state,
    previous,
    next,
  }
}

export default usePagination
