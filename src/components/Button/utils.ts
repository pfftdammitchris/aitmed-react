export function getPrimaryOrSecondaryOrThirdary(
  theme: any,
  {
    themeType,
  }: {
    themeType: string
  } = { themeType: '' },
) {
  return {
    border: `1px solid ${theme.palette[themeType].main}`,
    color: '#fff',
    background: `${theme.palette[themeType].main} !important`,
    '&:hover': {
      border: `1px solid ${theme.palette[themeType].dark} !important`,
      background: `${theme.palette[themeType].dark} !important`,
      color: '#fff',
    },
  }
}
