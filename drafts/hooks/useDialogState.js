import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const useDialogState = ({ open: _open = false, onOpen, onClose } = {}) => {
  const [initialled, setInitialled] = useState(false)
  const [opened, setOpened] = useState(_open)

  useEffect(() => {
    setInitialled(true)
  }, [])

  useEffect(() => {
    if (initialled) {
      if (opened && typeof onOpen === 'function') {
        onOpen()
      } else if (!opened && typeof onClose === 'function') {
        onClose()
      }
    }
  }, [opened])

  const handleOpen = () => {
    setOpened(true)
  }

  const handleClose = () => {
    setOpened(false)
  }

  return { opened, handleOpen, handleClose }
}

useDialogState.propTypes = {
  open: PropTypes.bool,
}

export default useDialogState
