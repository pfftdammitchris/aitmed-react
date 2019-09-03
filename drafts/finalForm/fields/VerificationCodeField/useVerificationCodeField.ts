import React, { useCallback } from 'react'

import { useForm } from 'react-final-form/dist'

import { textSelect, removeDefaultBehavior } from './utils'

import { Hook } from './types'

const useVerificationCodeField: Hook = ({ autoSubmit, digits, name }) => {
  const form = useForm()

  const getElement = useCallback(
    async (index: number): Promise<HTMLInputElement | null> => {
      const element = (await document.getElementById(
        `${name}.${index}`,
      )) as HTMLInputElement | null
      return element
    },
    [name],
  )

  const focusInput = useCallback(
    async (index: number) => {
      const element = await getElement(index)
      if (element) {
        await element.focus()
      }
    },
    [getElement],
  )

  const blurInput = useCallback(
    async (index: number) => {
      const element = await getElement(index)
      if (element) {
        await element.blur()
      }
    },
    [getElement],
  )

  const focusNext = useCallback(
    async (index: number) => {
      if (await getElement(index + 1)) {
        await focusInput(index + 1)
      } else {
        await blurInput(index)
        if (autoSubmit) {
          await form.submit()
        }
      }
    },
    [getElement, focusInput, blurInput, autoSubmit, form],
  )

  const onChange = (index: number) => async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = event.target.value.trim()

    await form.change(event.target.name, value)
    if (value) {
      await focusNext(index)
    }
  }

  const onKeyDown = useCallback(
    (index: number) => async (event: React.KeyboardEvent<HTMLInputElement>) => {
      event.persist()
      const code = form.getState().values[name]
      const value = (code && code[index]) || ''
      if (value === event.key) {
        await form.change(`${name}.${index}`, '')
      } else {
        const inputElement = await getElement(index)
        switch (event.keyCode) {
          case 8: // backspace
            if (value === '') {
              removeDefaultBehavior(event)
              const element = await getElement(index - 1)
              if (element) {
                await focusInput(index - 1)
                textSelect(element)
              }
            }
            break

          case 37: // left
          case 38: // up
            removeDefaultBehavior(event)
            if (await getElement(index - 1)) {
              await focusInput(index - 1)
            }
            break

          case 39: // right
          case 40: // down
            removeDefaultBehavior(event)
            if (await getElement(index + 1)) {
              await focusInput(index + 1)
            }
            break
          default:
            textSelect(inputElement)
        }
      }
    },
    [form, name, getElement, focusInput],
  )

  const getIsFocused = useCallback(() => {
    const active = form.getState().active
    if (active) {
      return active.includes(name)
    }
    return false
  }, [form, name])

  return {
    isFocused: getIsFocused(),
    digitsArray: Array(digits).fill(0),
    onChange,
    onKeyDown,
  }
}

export default useVerificationCodeField
