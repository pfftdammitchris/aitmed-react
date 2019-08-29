// @ts-ignore
import React from 'react'
import cloneDeep from 'lodash/cloneDeep'
import get from 'lodash/get'
import has from 'lodash/has'
import set from 'lodash/set'
import unset from 'lodash/unset'
import useCache from '../../hooks/useCache'

const useObjectizedCheckboxes = ({ input }: any) => {
  const { cache, onMountRef } = useCache()

  function updateOnBlur(key: string) {
    if (input && input.value) {
      if (has(cache, key)) {
        const inputEl = get(cache, key, null)
        const inputValues = cloneDeep(input.value)
        const nextValue = String((inputEl && inputEl.value) || '')
        set(inputValues, key, nextValue)
        input.onChange(inputValues)
        if (inputEl) inputEl.value = nextValue
      } else {
        console.warn(
          `Warning: Tried  to call updateOnBlur but the key "${key}" it was not in the cache`,
        )
      }
    } else {
      console.warn(
        `Warning: Tried to call updateOnBlur with key "${key}" but input or input.value was null or undefined`,
      )
    }
  }

  function onChange(key: string) {
    return (e: any) => {
      if (e && e.target) {
        const inputValues = cloneDeep(input.value)
        const { checked } = e.target
        let nextValue = ''
        if (inputValues) {
          const inputEl = get(cache, key, null)
          if (checked) {
            if (inputEl) nextValue = inputEl.value || ''
            set(inputValues, key, nextValue)
          } else {
            if (has(inputValues, key)) {
              const path = key.split('.')
              const indexLast = path.length - 1 || 0
              const deleteKey = path[indexLast]
              const isDeleted = unset(inputValues, deleteKey)
              if (!isDeleted) {
                return console.warn(
                  `Tried to delete path "${key}" with delete key "${deleteKey}" but it was not found or an error occurred`,
                )
              }
            }
          }
          if (inputEl) inputEl.value = nextValue
          input.onChange(inputValues)
        }
      } else {
        console.warn(
          'Could not invoke onChange because e.target is null or undefined',
        )
      }
    }
  }

  function onBlur(key: string) {
    return () => {
      updateOnBlur(key)
    }
  }

  function onKeyPress(key: string) {
    return (e: any) => {
      if (e.charCode === 13) {
        updateOnBlur(key)
      }
    }
  }

  function getTextFieldProps({ name = '', ...rest }: { name: string }) {
    return {
      inputRef: onMountRef(name),
      onBlur: onBlur(name),
      onKeyPress: onKeyPress(name),
      ...rest,
    }
  }

  return {
    nodes: cache,
    onBlur,
    onChange,
    onKeyPress,
    onMountRef,
    getTextFieldProps,
  }
}

export default useObjectizedCheckboxes
