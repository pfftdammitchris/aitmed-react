import { useCallback, useEffect, useReducer } from 'react'
import PropTypes from 'prop-types'
import Compressor from 'compressorjs'
import api from 'api/client'

const initialState = {
  pending: [],
  compress: null,
  next: null,
  uploaded: {}, // ids are blob ids. values is their File or Blob instance
  thumbs: [],
  blobInfos: [],
  total: 0,
  status: null,
  error: null,
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'reset':
      return initialState
    case 'reset-with-thumbs':
      return { ...initialState, thumbs: state.thumbs }
    case 'set-empty':
      return { ...initialState, status: 'empty' }
    case 'set-status':
      return { ...state, status: action.status }
    case 'set-error':
      return { ...state, error: action.error, status: 'error' }
    case 'init':
      return {
        ...state,
        status: 'initiating',
        pending: action.pending,
        total: action.total,
      }
    case 'upload-next': {
      const otherArgs = {}
      if (state.status === 'initiating') otherArgs.status = 'uploading'
      return {
        ...state,
        ...otherArgs,
        pending: action.pending,
        next: action.next,
      }
    }
    case 'set-next':
      return { ...state, next: action.next }
    case 'uploaded-file':
      return {
        ...state,
        uploaded: {
          ...state.uploaded,
          [state.next.blob.name]: state.next,
        },
        thumbs: [...state.thumbs, action.thumb],
        blobInfos: [...state.blobInfos, action.blobInfo],
        next: null,
      }
    case 'uploaded':
      return {
        ...state,
        status: 'uploaded',
      }

    default:
      return state
  }
}

const useCreatePatientBlobs = ({ userId, userTvId } = {}) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const reset = (withThumbs = false) => {
    if (withThumbs) {
      dispatch({ type: 'reset-with-thumbs' })
    } else {
      dispatch({ type: 'reset' })
    }
  }

  const recreateFile = (file, fileName) => {
    const newFile = new FormData()
    newFile.append('file', file, fileName)
    return newFile.get('file')
  }

  const setStatus = (status) => {
    dispatch({ type: 'set-status', status })
  }

  const setError = (error) => {
    dispatch({ type: 'set-error', error })
  }

  // Will initiate the automatic upload process. useEffects will pick up from this call
  const onUpload = (files = []) => {
    if (!userId || !userTvId) {
      dispatch({ type: 'set-error', error: 'Ids are invalid.' })
    } else {
      const total = files.length
      if (!total) return dispatch({ type: 'set-empty' })
      dispatch({ type: 'init', pending: files, total })
    }
  }

  // nextFile === File || Blob
  const uploadNext = (next, pending) => {
    dispatch({ type: 'upload-next', next, pending })
  }

  const createTvBlob = useCallback(
    async (next) => {
      try {
        const { id, filename } = await api.createBlob(next, userTvId)

        return { id, filename }
      } catch (err) {
        // setError(err)
        throw err
      }
    },
    [userTvId],
  )

  const createBackendBlob = useCallback(async (options) => {
    try {
      const { tv_blob_ids, patient, filename, created } = options
      const result = await api.createPatientBlob({
        tv_blob_ids,
        patient,
        filename,
        created,
      })

      return result
    } catch (err) {
      // setError(err)
      throw err
    }
  }, [])

  // Initiates the automatic upload process
  useEffect(() => {
    if (state.status === 'initiating') {
      const next = [...state.pending].shift()
      const nextPending = state.pending.slice(1)
      uploadNext(next, nextPending)
    }
  }, [state.pending, state.status])

  const compress = (image, width, height) => {
    return new Promise((resolve, reject) => {
      return new Compressor(image, {
        width,
        height,
        success: resolve,
        error: reject,
      })
    })
  }

  const generateImageSizes = useCallback((data) => {
    return new Promise((resolve) => {
      const img = new Image()
      img.onload = () => {
        const { width, height } = img

        const isBigger320 = width > 320,
          isBigger64 = width > 64

        const width320 = isBigger320 ? 320 : width,
          height320 = isBigger320 ? (height * 320) / width : height,
          width64 = isBigger64 ? 64 : width,
          height64 = isBigger64 ? (height * 64) / width : height

        let blob320
        compress(data.blob, width320, height320)
          .then((_blob320) => {
            blob320 = _blob320
            return compress(data.blob, width64, height64)
          })
          .then((blob64) => resolve([data.blob, blob320, blob64]))
          .catch((error) => {
            console.error(error)
            // setError(error)
            throw error
          })
      }
      img.src = data.data
    })
  }, [])

  const uploadImgSizesToTruevault = useCallback(
    async (imgSizes) => {
      try {
        if (imgSizes.length === 3) {
          const [blob, blob320, blob64] = imgSizes
          const { id: originalId, filename: fileName } = await createTvBlob(
            blob,
          )
          const { id: screenId } = await createTvBlob(blob320)
          const { id: thumbId } = await createTvBlob(blob64)
          return { originalId, screenId, thumbId, fileName, thumb: blob64 }
        } else throw new Error('Not enough images to create different sizes')
      } catch (error) {
        throw error
      }
    },
    [createTvBlob],
  )

  const uploadImgSizesToBackend = useCallback(
    async (blobInfo) => {
      try {
        if (blobInfo) {
          const { originalId, screenId, thumbId, fileName, thumb } = blobInfo
          const options = {
            tv_blob_ids: [
              { tv_blob_id: originalId, type: 'IMAGE_ORIGINAL' },
              { tv_blob_id: screenId, type: 'IMAGE_SCREENVIEW' },
              { tv_blob_id: thumbId, type: 'IMAGE_THUMBNAIL' },
            ],
            filename: fileName,
            patient: userId,
          }
          await createBackendBlob(options)
          return { thumb, blobInfo: options }
        }
        return blobInfo
      } catch (error) {
        throw error
      }
    },
    [createBackendBlob, userId],
  )

  // Continues the automatic upload process until it reaches the end
  // On file upload through truevault+backend it will insert the uploaded file to
  //    state.uploaded and then dispatch an action that sets state.next to null
  useEffect(() => {
    if (state.next != null && !state.error) {
      const catchError = () => {
        console.error(new Error('Compress image fail'))
        setError(new Error('Compress image fail'))
      }
      // Skip pdf files since they make the loading spinners freeze
      if (/image/i.test(state.next.blob.type)) {
        generateImageSizes(state.next)
          .then(uploadImgSizesToTruevault)
          .then(uploadImgSizesToBackend)
          .then(({ thumb, blobInfo }) => {
            return dispatch({ type: 'uploaded-file', thumb, blobInfo })
          })
          .catch(catchError)
      } else {
        // just go ahead and upload non-images to tv and backend without compressing
        const blob = state.next.blob
        createTvBlob(blob)
          .then(({ id, filename }) => {
            const options = {
              tv_blob_ids: [{ tv_blob_id: id, type: 'PDF' }],
              filename,
              patient: userId,
            }
            return createBackendBlob(options).then((result) => ({
              result,
              blobInfo: options,
            }))
          })
          .then(({ blobInfo }) =>
            dispatch({
              type: 'uploaded-file',
              thumb: blob,
              blobInfo,
            }),
          )
          .catch(catchError)
      }
    }
  }, [
    createBackendBlob,
    createTvBlob,
    generateImageSizes,
    state.error,
    state.next,
    state.pending,
    uploadImgSizesToBackend,
    uploadImgSizesToTruevault,
    userId,
  ])

  // Runs the next execution if there are still blobs pending when state.next is null
  useEffect(() => {
    if (
      state.next === null &&
      state.status === 'uploading' &&
      state.pending.length &&
      !state.error
    ) {
      const next = [...state.pending].shift()
      const nextPending = state.pending.slice(1)
      uploadNext(next, nextPending)
    }
  }, [state, state.error, state.next, state.pending, state.status])

  // Once state.next is null and there are no more in the pending array, it will finalize the
  //    upload process by setting state.status to "uploaded" which will stop the entire hook
  useEffect(() => {
    if (
      state.next === null &&
      !state.pending.length &&
      state.status === 'uploading'
    ) {
      dispatch({ type: 'uploaded' })
    }
  }, [state.next, state.pending.length, state.status])

  return {
    ...state,
    setStatus,
    setError,
    reset,
    onUpload,
    recreateFile,
    createTvBlob,
    createBackendBlob,
  }
}

useCreatePatientBlobs.propTypes = {
  userId: PropTypes.string,
  userTvId: PropTypes.string,
}

export default useCreatePatientBlobs
