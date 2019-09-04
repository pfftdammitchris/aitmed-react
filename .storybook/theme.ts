import { create } from '@storybook/theming'
// @ts-ignore
import appIcon from '../src/resources/appIconWhite.png'

import {
  primary,
  secondary,
  thirdary,
  borders,
  background,
  text,
} from '../src/config/theme'

export default create({
  base: 'dark',

  colorPrimary: primary.main,
  colorSecondary: secondary.main,

  // UI
  appBg: background.secondary,
  appContentBg: '#fff',
  appBorderColor: secondary.main,
  appBorderRadius: 4,

  // Typography
  fontBase: '"Roboto", sans-serif',
  fontCode: 'Consolas',

  // Text colors
  textColor: '#fff',
  textInverseColor: '#eee',

  // Toolbar default and active colors
  barTextColor: '#fff',
  barSelectedColor: primary.main,
  barBg: secondary.dark,

  // Form colors
  inputBg: 'white',
  inputBorder: borders.cool,
  inputTextColor: '#fff',
  inputBorderRadius: 4,

  brandTitle: 'AiTmed',
  brandUrl: 'https://aitmed.com',
  brandImage: appIcon,
})
