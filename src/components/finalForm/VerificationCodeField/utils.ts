export const selectText = (elem: HTMLElement | null): void => {
  if (elem) {
    elem.focus()
    // @ts-ignore
    elem.setSelectionRange(0, -1)
  }
}
