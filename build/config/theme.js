import { createMuiTheme } from '@material-ui/core/styles';
var primary = {
    lightest: '#69e98a',
    lighter: '#6dda89',
    light: '#63C17B',
    main: '#2EB254',
    dark: '#3D844F',
};
var secondary = {
    lightest: '#6bc8ff',
    lighter: '#5eb5e9',
    light: '#54A3D3',
    main: '#398FCD',
    dark: '#356F97',
    darker: '#072E48',
};
var thirdary = {
    lighter: '#ffe658',
    light: '#F8D822',
    main: '#F8A31E',
    dark: '#FC9208',
};
var themeObj = {
    palette: {
        background: {
            dark: '#0E0F12',
            darkAdmin: '#2f323b',
            darkAdminLightShade: 'rgba(68, 70, 79, 0.5)',
            darkAdminDark: '#2a2d35',
            darkAdminDarkerShade: '#24262d',
            coolShade: '#98abb5',
            cool: '#eef5f9',
            lightGrey2: '#EBEBEB',
            lightGrey: '#f0f0f0',
            light: '#f6f6f6',
            primary: '#2EB254',
            secondary: '#072E48',
            thirdary: '#F8A31E',
            thirdaryDark: '#CB9B52',
        },
        borders: {
            secondary: secondary.main,
            cool: '#d7dfe3',
            dark: '#333',
            slightlyDark: '#acacac',
            darkAdmin: '#2a2d35',
            darkAdminLightShade: 'rgba(68, 70, 79, 0.5)',
            ghost: '#ecf4f2',
            cloud: '#e4eaec',
            cloudier: '#e5ebed',
            cloudiest: '#dbe1e3',
            cloudiest2: '#cad0d2',
        },
        primary: primary,
        secondary: secondary,
        thirdary: thirdary,
        inactive: '#a09e9e',
        text: {
            lighter2: '#DCEAED',
            lighter: '#cdcbcb',
            light: '#999',
            soft: '#666',
            normal: '#333',
            dark: '#000',
            secondary: '#5dd3ff',
        },
        error: {
            main: '#ff4545',
            dark: '#dd2a2a',
        },
        warning: '#c1632f',
        success: '#267d3b',
        link: {
            nav: '#333',
            normal: '#0070c2',
            hovering: '#F8A31E',
            hoveringOnSecondary: '#b9f0ff',
        },
        highlight: {
            teal: '#5BCEFF',
        },
        panel: {
            active: {
                background: '#F6F6F6',
            },
            navbar: '#356F97',
            link: {
                highlight: '#185B8A',
            },
        },
        social: {
            facebook: '#3b5998',
            twitter: '#1da1f2',
            youtube: '#ff0000',
            instagram: '#8a3ab9',
            pinterest: '#bd081c',
            linkedin: '#007bb5',
            googleplus: '#db4437',
            snapchat: '#fffc00',
            tumblr: '#35465d',
            reddit: '#ff4500',
            spotify: '#1ed760',
            amazon: '#ff9900',
            medium: '#02b875',
            vimeo: '#1ab7ea',
            skype: '#00aff0',
            quora: '#aa2200',
            yahoo: '#430297',
            deviantart: '#05cc47',
            vk: '#4a76a8',
        },
        amazon: '#ff9900',
    },
    overrides: {
        MuiTypography: {
            caption: {
                color: '#333',
            },
        },
        MuiButton: {
            root: {
                borderRadius: 25,
                color: '#fff',
                transition: 'all 0.2s ease-out',
            },
            sizeLarge: {
                color: '#fff',
            },
        },
        MuiCard: {
            root: {
                transition: 'all 0.3s ease-out',
            },
        },
        MuiInputLabel: {
            root: {
                color: '#333',
            },
        },
        MuiTooltip: {
            tooltip: {
                padding: '12px 20px',
                backgroundColor: secondary.dark,
                color: '#fff',
                fontSize: '0.8em',
            },
        },
        MuiList: {
            root: {
                fontFamily: 'Roboto, sans-serif',
                '& li': {
                    fontSize: '0.9em',
                    color: '#333',
                },
            },
        },
    },
    typography: {
        useNextVariants: true,
    },
};
var theme = createMuiTheme(themeObj);
export default theme;
//# sourceMappingURL=theme.js.map