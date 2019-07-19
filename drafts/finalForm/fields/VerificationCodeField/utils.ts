export const textSelect = (element: HTMLInputElement | null): void => {
  if (element) {
    element.focus()
    element.setSelectionRange(0, -1)
  }
}

export const removeDefaultBehavior = (
  event: React.KeyboardEvent<HTMLInputElement>,
) => {
  if (event.preventDefault) event.preventDefault()
  if (event.stopPropagation) event.stopPropagation()
}

export const arrayToString = (arr: string[]): string => {
  return arr.reduce((acc, cur) => {
    return `${acc}${cur}`
  }, '')
}
