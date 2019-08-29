/**
 * Default CSS definition for typescript,
 * will be overridden with file-specific definitions by rollup
 */

declare module '*'
declare module 'resources'

declare module '*.css' {
  const content: { [className: string]: string }
  export default content
}

interface SvgrComponent
  extends React.StatelessComponent<React.SVGAttributes<SVGElement>> {}

declare module '*.svg' {
  const svgUrl: string
  const svgComponent: SvgrComponent
  export default svgUrl
  export { svgComponent as ReactComponent }
}

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    palette: {
      background: {
        dark: string
        darkAdmin: string
        darkAdminLightShade: string
        darkAdminDark: string
        darkAdminDarkerShade: string
        coolShade: string
        cool: string
        lightGrey2: string
        lightGrey: string
        light: string
        primary: string
        secondary: string
        thirdary: string
        thirdaryDark: string
      }
      borders: {
        secondary: string
        cool: string
        dark: string
        slightlyDark: string
        darkAdmin: string
        darkAdminLightShade: string
        ghost: string
        cloud: string
        cloudier: string
        cloudiest: string
        cloudiest2: string
      }
      primary: string
      secondary: string
      thirdary: string
      inactive: string
      text: {
        lighter2: string
        lighter: string
        light: string
        soft: string
        normal: string
        dark: string
        secondary: string
      }
      error: {
        main: string
        dark: string
      }
      warning: string
      success: string
      link: {
        nav: string
        normal: string
        hovering: string
        hoveringOnSecondary: string
      }
      highlight: {
        teal: string
      }
      panel: {
        active: {
          background: string
        }
        navbar: string
        link: {
          highlight: string
        }
      }
      social: {
        facebook: string
        twitter: string
        youtube: string
        instagram: string
        pinterest: string
        linkedin: string
        googleplus: string
        snapchat: string
        tumblr: string
        reddit: string
        spotify: string
        amazon: string
        medium: string
        vimeo: string
        skype: string
        quora: string
        yahoo: string
        deviantart: string
        vk: string
      }
    }
  }
}
