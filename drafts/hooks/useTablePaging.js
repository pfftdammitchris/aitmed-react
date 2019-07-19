import { useState, useEffect } from 'react'

/*
  Intended to be used for material-ui's Table component
    But can be used for additional functionality if the flow stays similar
*/

const useTablePaging = () => {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const [rowsPerPageOptions] = useState([5, 10, 25])

  const onChangePage = (e, _page) => {
    setPage(_page)
  }

  const onChangeRowsPerPage = (e) => {
    setPage(0)
    setRowsPerPage(e.target.value)
  }

  useEffect(() => {}, [])

  return {
    page,
    rowsPerPage,
    rowsPerPageOptions,
    onChangePage,
    onChangeRowsPerPage,
  }
}

export default useTablePaging
