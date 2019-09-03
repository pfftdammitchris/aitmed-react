'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var styles = require('@material-ui/core/styles');
var styles$1 = require('@material-ui/styles');
var MaterialUIButton = _interopDefault(require('@material-ui/core/Button'));
var cx = _interopDefault(require('classnames'));
var Card = _interopDefault(require('@material-ui/core/Card'));
var Divider$1 = _interopDefault(require('@material-ui/core/Divider'));
var CardContent = _interopDefault(require('@material-ui/core/CardContent'));
var MUITypography = _interopDefault(require('@material-ui/core/Typography'));
var useTheme = _interopDefault(require('@material-ui/styles/useTheme'));
var MuiCheckbox = _interopDefault(require('@material-ui/core/Checkbox'));
var FormControlLabel = _interopDefault(require('@material-ui/core/FormControlLabel'));
var TextField = _interopDefault(require('@material-ui/core/TextField'));
var Fade = _interopDefault(require('@material-ui/core/Fade'));
var withWidth = _interopDefault(require('@material-ui/core/withWidth'));
var CircularProgress = _interopDefault(require('@material-ui/core/CircularProgress'));

var primary = {
  lightest: '#69e98a',
  // custom
  lighter: '#6dda89',
  // custom
  light: '#63C17B',
  main: '#2EB254',
  dark: '#3D844F'
};
var secondary = {
  lightest: '#6bc8ff',
  //custom
  lighter: '#5eb5e9',
  //custom
  light: '#54A3D3',
  main: '#398FCD',
  dark: '#356F97',
  darker: '#072E48'
};
var thirdary = {
  lighter: '#ffe658',
  // custom
  light: '#F8D822',
  main: '#F8A31E',
  dark: '#FC9208'
};
var error = {
  main: '#ff4545',
  dark: '#dd2a2a'
};
var link = {
  nav: '#333',
  normal: '#0070c2',
  hovering: '#F8A31E',
  hoveringOnSecondary: '#b9f0ff'
};
var background = {
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
  thirdaryDark: '#CB9B52'
};
var borders = {
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
  cloudiest2: '#cad0d2'
};
var text = {
  lighter2: '#DCEAED',
  lighter: '#cdcbcb',
  light: '#999',
  soft: '#666',
  normal: '#333',
  dark: '#000',
  secondary: '#5dd3ff'
};
var inactive = '#a09e9e';
var theme = {
  palette: {
    background: background,
    borders: borders,
    primary: primary,
    secondary: secondary,
    thirdary: thirdary,
    inactive: inactive,
    text: text,
    error: error,
    warning: '#c1632f',
    success: '#267d3b',
    link: link,
    highlight: {
      teal: '#5BCEFF'
    },
    panel: {
      active: {
        background: '#F6F6F6'
      },
      navbar: '#356F97',
      link: {
        highlight: '#185B8A'
      }
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
      vk: '#4a76a8'
    },
    amazon: '#ff9900'
  },
  overrides: {
    MuiTypography: {
      caption: {
        color: '#333'
      }
    },
    MuiButton: {
      root: {
        borderRadius: 25,
        color: '#fff',
        transition: 'all 0.2s ease-out'
      },
      sizeLarge: {
        color: '#fff'
      }
    },
    MuiCard: {
      root: {
        transition: 'all 0.3s ease-out'
      }
    },
    MuiInputLabel: {
      root: {
        color: '#333'
      }
    },
    MuiTooltip: {
      tooltip: {
        padding: '12px 20px',
        backgroundColor: secondary.dark,
        color: '#fff',
        fontSize: '0.8em'
      }
    },
    MuiList: {
      root: {
        fontFamily: 'Roboto, sans-serif',
        '& li': {
          fontSize: '0.9em',
          color: '#333'
        }
      }
    }
  }
};

var AiTmedThemeProvider = function AiTmedThemeProvider(_ref) {
  var children = _ref.children,
      themeProp = _ref.theme;
  var theme$1 = styles.createMuiTheme(themeProp || theme);
  return React__default.createElement(styles$1.ThemeProvider, {
    theme: theme$1
  }, children);
};

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var useStyles = styles$1.makeStyles(function (theme) {
  return {
    root: {
      position: 'relative',
      borderRadius: 50,
      boxShadow: 'none',
      background: theme.palette.primary.main,
      border: "1px solid ".concat(theme.palette.primary.main),
      color: '#fff',
      '&:hover': {
        background: 'none',
        color: theme.palette.primary.main
      }
    },
    primary: {
      border: "1px solid ".concat(theme.palette.primary.main),
      color: '#fff',
      background: "".concat(theme.palette.primary.main, " !important"),
      '&:hover': {
        border: "1px solid ".concat(theme.palette.primary.dark, " !important"),
        background: "".concat(theme.palette.primary.dark, " !important"),
        color: '#fff'
      }
    },
    secondary: {
      border: "1px solid ".concat(theme.palette.secondary.main),
      color: '#fff',
      background: "".concat(theme.palette.secondary.main),
      '&:hover': {
        border: "1px solid ".concat(theme.palette.secondary.dark, " !important"),
        background: "".concat(theme.palette.secondary.dark, " !important"),
        color: '#fff'
      }
    },
    thirdary: {
      border: "1px solid ".concat(theme.palette.thirdary.main),
      color: '#fff',
      background: theme.palette.thirdary.main,
      '&:hover': {
        border: "1px solid ".concat(theme.palette.thirdary.dark, " !important"),
        background: "".concat(theme.palette.thirdary.dark, " !important"),
        color: '#fff'
      }
    },
    neutral: {
      border: "1px solid ".concat(theme.palette.inactive),
      color: '#fff',
      background: 'grey',
      '&:hover': {
        background: 'none !important',
        color: theme.palette.text.light
      }
    },
    error: {
      border: "1px solid ".concat(theme.palette.error.main),
      color: '#fff',
      background: theme.palette.error.main,
      '&:hover': {
        background: "".concat(theme.palette.error.dark, " !important"),
        color: '#fff'
      }
    },
    hoverPrimaryOnSecondary: {
      color: '#fff',
      border: "1px solid ".concat(theme.palette.primary.main, " !important"),
      '&:hover': {
        background: 'none !important',
        border: '1px solid #fff !important',
        color: '#fff !important'
      }
    },
    hoverPrimaryOnThirdary: {
      color: '#fff',
      border: "1px solid ".concat(theme.palette.primary.main, " !important"),
      '&:hover': {
        background: 'none !important',
        border: '1px solid #fff !important',
        color: '#fff !important'
      }
    },
    hoverPrimaryOnWhite: {
      color: '#fff',
      border: "1px solid ".concat(theme.palette.primary.main, " !important"),
      '&:hover': {
        background: 'none !important',
        color: "".concat(theme.palette.primary.main, " !important")
      }
    },
    hoverPrimaryOnBlack: {
      color: '#fff',
      border: "1px solid ".concat(theme.palette.primary.main),
      '&:hover': {
        background: 'none !important',
        color: '#fff !important'
      }
    },
    hoverSecondaryOnPrimary: {
      color: '#fff',
      background: theme.palette.secondary.main,
      border: "1px solid ".concat(theme.palette.secondary.main),
      '&:hover': {
        border: '1px solid #fff',
        background: 'none !important',
        color: '#fff !important'
      }
    },
    hoverSecondaryOnThirdary: {
      color: '#fff',
      background: theme.palette.secondary.main,
      border: "1px solid ".concat(theme.palette.secondary.main),
      '&:hover': {
        border: '1px solid #fff',
        background: 'none !important',
        color: '#fff !important'
      }
    },
    hoverSecondaryOnWhite: {
      color: '#fff',
      background: theme.palette.secondary.main,
      border: "1px solid ".concat(theme.palette.secondary.main),
      '&:hover': {
        background: 'none !important',
        color: "".concat(theme.palette.secondary.main, " !important")
      }
    },
    hoverSecondaryOnBlack: {
      color: '#fff',
      background: theme.palette.secondary.main,
      border: "1px solid ".concat(theme.palette.secondary.main),
      '&:hover': {
        background: 'none !important',
        color: '#fff !important'
      }
    },
    hoverThirdaryOnPrimary: {
      color: '#fff',
      background: theme.palette.thirdary.main,
      border: "1px solid ".concat(theme.palette.thirdary.main),
      '&:hover': {
        border: '1px solid #fff',
        background: 'none !important',
        color: '#fff !important'
      }
    },
    hoverThirdaryOnSecondary: {
      color: '#fff',
      background: theme.palette.thirdary.main,
      border: "1px solid ".concat(theme.palette.thirdary.main, " !important"),
      '&:hover': {
        border: '1px solid #fff !important',
        background: 'none !important',
        color: '#fff !important'
      }
    },
    hoverThirdaryOnWhite: {
      color: '#fff',
      background: theme.palette.thirdary.main,
      border: "1px solid ".concat(theme.palette.thirdary.main, " !important"),
      '&:hover': {
        background: 'none !important',
        color: "".concat(theme.palette.thirdary.main, " !important")
      }
    },
    hoverThirdaryOnBlack: {
      color: '#fff',
      background: theme.palette.thirdary.main,
      border: "1px solid ".concat(theme.palette.thirdary.main),
      '&:hover': {
        background: 'none !important',
        color: '#fff !important'
      }
    },
    hoverWhiteOnPrimary: {
      color: theme.palette.text.normal,
      background: '#fff',
      border: "1px solid ".concat(theme.palette.primary.lighter),
      '&:hover': {
        border: '1px solid #fff',
        background: 'none !important',
        color: '#fff !important'
      }
    },
    hoverWhiteOnSecondary: {
      color: theme.palette.text.normal,
      background: '#fff',
      border: "1px solid ".concat(theme.palette.secondary.lighter),
      '&:hover': {
        border: '1px solid #fff',
        background: 'none !important',
        color: '#fff !important'
      }
    },
    hoverWhiteOnThirdary: {
      color: theme.palette.text.normal,
      background: '#fff',
      border: "1px solid ".concat(theme.palette.thirdary.lighter),
      '&:hover': {
        border: '1px solid #fff',
        background: 'none !important',
        color: '#fff !important'
      }
    },
    hoverWhiteOnBlack: {
      color: theme.palette.text.soft,
      background: '#fff',
      border: "1px solid ".concat(theme.palette.borders.slightlyDark),
      '&:hover': {
        border: "1px solid ".concat(theme.palette.borders.cloud, " !important"),
        background: '#000 !important',
        color: '#fff !important'
      }
    },
    hoverBlackOnPrimary: {
      color: '#fff',
      background: '#000',
      border: '1px solid #000',
      '&:hover': {
        border: '1px solid #fff',
        background: 'none !important',
        color: '#fff !important'
      }
    },
    hoverBlackOnSecondary: {
      color: '#fff',
      background: '#000',
      border: '1px solid #000',
      '&:hover': {
        border: '1px solid #fff',
        background: 'none !important',
        color: '#fff !important'
      }
    },
    hoverBlackOnThirdary: {
      color: '#fff',
      background: '#000',
      border: '1px solid #000',
      '&:hover': {
        border: '1px solid #fff',
        background: 'none !important',
        color: '#fff !important'
      }
    },
    hoverBlackOnWhite: {
      color: '#fff',
      background: '#000',
      border: '1px solid #000',
      '&:hover': {
        border: "1px solid ".concat(theme.palette.borders.dark, " !important"),
        background: 'none !important',
        color: "".concat(theme.palette.text.normal, " !important")
      }
    },
    hoverError: {
      '&:hover': {
        background: 'none !important',
        color: "".concat(theme.palette.error.main, " !important")
      }
    },
    small: {
      fontSize: '0.65em'
    },
    medium: {
      fontSize: '0.8em'
    },
    large: _defineProperty({
      fontSize: '1.2em !important'
    }, theme.breakpoints.down('sm'), {
      fontSize: '0.9em !important'
    }),
    xlarge: {
      fontSize: '1.1em',
      padding: '20px 45px'
    },
    disabled: {
      background: "".concat(theme.palette.inactive, " !important"),
      border: "".concat(theme.palette.inactive, " !important"),
      color: '#fff !important'
    },
    outlined: {
      background: 'none !important'
    },
    textPrimary: {
      color: "".concat(theme.palette.primary.main, " !important")
    },
    textSecondary: {
      color: "".concat(theme.palette.secondary.main, " !important")
    },
    textThirdary: {
      color: "".concat(theme.palette.thirdary.main, " !important")
    },
    textNeutral: {
      color: "".concat(theme.palette.text.soft, " !important")
    },
    textDanger: {
      color: "".concat(theme.palette.error.main, " !important")
    },
    centerOnSmall: _defineProperty({}, theme.breakpoints.down('xs'), {
      textAlign: 'center',
      display: 'block',
      margin: 'auto'
    })
  };
});

var Button = function Button(_ref) {
  var _cx;

  var className = _ref.className,
      children = _ref.children,
      primary = _ref.primary,
      secondary = _ref.secondary,
      thirdary = _ref.thirdary,
      neutral = _ref.neutral,
      error = _ref.error,
      red = _ref.red,
      danger = _ref.danger,
      _ref$hover = _ref.hover,
      hover = _ref$hover === void 0 ? {} : _ref$hover,
      small = _ref.small,
      medium = _ref.medium,
      large = _ref.large,
      xlarge = _ref.xlarge,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'medium' : _ref$size,
      disabled = _ref.disabled,
      outlined = _ref.outlined,
      textColor = _ref.textColor,
      background = _ref.background,
      overwriteClassName = _ref.overwriteClassName,
      overWrittenClassNames = _ref.overWrittenClassNames,
      centerOnSmall = _ref.centerOnSmall,
      others = _objectWithoutProperties(_ref, ["className", "children", "primary", "secondary", "thirdary", "neutral", "error", "red", "danger", "hover", "small", "medium", "large", "xlarge", "size", "disabled", "outlined", "textColor", "background", "overwriteClassName", "overWrittenClassNames", "centerOnSmall"]);

  var classes = useStyles();
  var muiSizes = ['small', 'medium', 'large'];
  var classNames = cx(classes.root, className, (_cx = {}, _defineProperty(_cx, classes.primary, !!primary), _defineProperty(_cx, classes.secondary, !!secondary), _defineProperty(_cx, classes.error, !!error || !!red || !!danger), _defineProperty(_cx, classes.root, !secondary), _defineProperty(_cx, classes.thirdary, !!thirdary), _defineProperty(_cx, classes.neutral, !!neutral || !primary && !secondary && !thirdary && !error && !outlined && !Object.keys(hover).length), _defineProperty(_cx, classes.hoverPrimaryOnSecondary, hover.primary === 'secondary'), _defineProperty(_cx, classes.hoverPrimaryOnThirdary, hover.primary === 'thirdary'), _defineProperty(_cx, classes.hoverPrimaryOnWhite, hover.primary === 'white'), _defineProperty(_cx, classes.hoverPrimaryOnBlack, hover.primary === 'black'), _defineProperty(_cx, classes.hoverSecondaryOnPrimary, hover.secondary === 'primary'), _defineProperty(_cx, classes.hoverSecondaryOnThirdary, hover.secondary === 'thirdary'), _defineProperty(_cx, classes.hoverSecondaryOnBlack, hover.secondary === 'black'), _defineProperty(_cx, classes.hoverSecondaryOnWhite, hover.secondary === 'white'), _defineProperty(_cx, classes.hoverThirdaryOnPrimary, hover.thirdary === 'primary'), _defineProperty(_cx, classes.hoverThirdaryOnSecondary, hover.thirdary === 'secondary'), _defineProperty(_cx, classes.hoverThirdaryOnWhite, hover.thirdary === 'white'), _defineProperty(_cx, classes.hoverThirdaryOnBlack, hover.thirdary === 'black'), _defineProperty(_cx, classes.hoverWhiteOnPrimary, hover.white === 'primary'), _defineProperty(_cx, classes.hoverWhiteOnSecondary, hover.white === 'secondary'), _defineProperty(_cx, classes.hoverWhiteOnThirdary, hover.white === 'thirdary'), _defineProperty(_cx, classes.hoverWhiteOnBlack, hover.white === 'black'), _defineProperty(_cx, classes.hoverBlackOnPrimary, hover.black === 'primary'), _defineProperty(_cx, classes.hoverBlackOnSecondary, hover.black === 'secondary'), _defineProperty(_cx, classes.hoverBlackOnThirdary, hover.black === 'thirdary'), _defineProperty(_cx, classes.hoverBlackOnWhite, hover.black === 'white'), _defineProperty(_cx, classes.hoverError, !!hover.red || !!hover.danger || !!hover.error), _defineProperty(_cx, classes.small, !!small), _defineProperty(_cx, classes.medium, !!medium), _defineProperty(_cx, classes.large, !!large), _defineProperty(_cx, classes.xlarge, !!xlarge), _defineProperty(_cx, classes.disabled, disabled), _defineProperty(_cx, classes.outlined, !!outlined), _defineProperty(_cx, classes.textPrimary, textColor === 'primary'), _defineProperty(_cx, classes.textSecondary, textColor === 'secondary' && (!!secondary || !!hover.secondary)), _defineProperty(_cx, classes.textThirdary, textColor === 'thirdary' && (!!thirdary || !!hover.primary)), _defineProperty(_cx, classes.textNeutral, textColor === 'neutral' && !!neutral), _defineProperty(_cx, classes.textDanger, ['error', 'red', 'danger'].includes(textColor || '') && (!!danger || !!red || !!error || !!hover.danger || !!hover.red || !!hover.error)), _defineProperty(_cx, classes.centerOnSmall, !!centerOnSmall), _cx));
  return React__default.createElement(MaterialUIButton, _extends({
    style: {
      background: background
    },
    className: overwriteClassName ? overWrittenClassNames : classNames,
    variant: !!outlined && 'outlined' || // @ts-ignore
    !!others.variant === 'outlined' && 'outlined' || 'contained',
    size: muiSizes.includes(size) && size || (small ? 'small' : medium ? 'medium' : large ? 'large' : 'medium'),
    disabled: disabled
  }, others), children);
};

// @ts-ignore
var useStyles$1 = styles$1.makeStyles(function (theme) {
  var _h, _h2, _h3, _h4, _h5, _h6, _subtitle, _subtitle2, _body, _body2, _button, _caption, _subheading;

  return {
    h1: (_h = {
      fontWeight: 600
    }, _defineProperty(_h, theme.breakpoints.down('md'), {
      fontSize: '4.5em'
    }), _defineProperty(_h, theme.breakpoints.down('sm'), {
      fontSize: '4em'
    }), _defineProperty(_h, theme.breakpoints.down('xs'), {
      fontSize: '1.7em'
    }), _h),
    h2: (_h2 = {
      fontWeight: 500
    }, _defineProperty(_h2, theme.breakpoints.down('md'), {
      fontSize: '3.3em'
    }), _defineProperty(_h2, theme.breakpoints.down('sm'), {
      fontSize: '3em !important'
    }), _defineProperty(_h2, theme.breakpoints.down('xs'), {
      fontSize: '1.4em !important'
    }), _h2),
    h3: (_h3 = {
      fontWeight: 500
    }, _defineProperty(_h3, theme.breakpoints.down('md'), {
      fontSize: '2.8em'
    }), _defineProperty(_h3, theme.breakpoints.down('sm'), {
      fontSize: '2.5em '
    }), _defineProperty(_h3, theme.breakpoints.down('xs'), {
      fontSize: '1.1em'
    }), _h3),
    h4: (_h4 = {
      fontWeight: 500
    }, _defineProperty(_h4, theme.breakpoints.down('sm'), {
      fontSize: '1.8em'
    }), _defineProperty(_h4, theme.breakpoints.down('xs'), {
      fontSize: '1em'
    }), _h4),
    h5: (_h5 = {
      fontSize: '2em',
      fontWeight: 500
    }, _defineProperty(_h5, theme.breakpoints.down('sm'), {
      fontSize: '1.55em'
    }), _defineProperty(_h5, theme.breakpoints.down('xs'), {
      fontSize: '0.95em'
    }), _h5),
    h6: (_h6 = {
      fontSize: '1.3em',
      fontWeight: 400
    }, _defineProperty(_h6, theme.breakpoints.down('sm'), {
      fontSize: '1.2em'
    }), _defineProperty(_h6, theme.breakpoints.down('xs'), {
      fontSize: '0.85em'
    }), _h6),
    subtitle1: (_subtitle = {}, _defineProperty(_subtitle, theme.breakpoints.down('sm'), {
      fontSize: '0.9em'
    }), _defineProperty(_subtitle, theme.breakpoints.down('xs'), {
      fontSize: '0.75em'
    }), _subtitle),
    subtitle2: (_subtitle2 = {}, _defineProperty(_subtitle2, theme.breakpoints.down('sm'), {
      fontSize: '0.8em'
    }), _defineProperty(_subtitle2, theme.breakpoints.down('xs'), {
      fontSize: '0.7em'
    }), _subtitle2),
    body1: (_body = {
      fontSize: '0.95em'
    }, _defineProperty(_body, theme.breakpoints.down('sm'), {
      fontSize: '0.82em'
    }), _defineProperty(_body, theme.breakpoints.down('xs'), {
      fontSize: '0.68em'
    }), _body),
    body2: (_body2 = {}, _defineProperty(_body2, theme.breakpoints.down('sm'), {
      fontSize: '0.73em'
    }), _defineProperty(_body2, theme.breakpoints.down('xs'), {
      fontSize: '0.6em'
    }), _body2),
    button: (_button = {}, _defineProperty(_button, theme.breakpoints.down('sm'), {
      fontSize: '0.8em'
    }), _defineProperty(_button, theme.breakpoints.down('xs'), {
      fontSize: '0.65em'
    }), _button),
    caption: (_caption = {}, _defineProperty(_caption, theme.breakpoints.down('sm'), {
      fontSize: '0.7em'
    }), _defineProperty(_caption, theme.breakpoints.down('xs'), {
      fontSize: '0.58em'
    }), _caption),
    subheading: (_subheading = {
      fontSize: '1.3em',
      fontWeight: 300
    }, _defineProperty(_subheading, theme.breakpoints.down('sm'), {
      fontSize: '1em'
    }), _defineProperty(_subheading, theme.breakpoints.down('xs'), {
      fontSize: '0.8em'
    }), _subheading),
    primary: {
      color: theme.palette.primary.main
    },
    secondary: {
      color: "".concat(theme.palette.secondary.main, " !important")
    },
    thirdary: {
      color: theme.palette.thirdary.main
    },
    darkBlue: {
      color: theme.palette.secondary.darker
    },
    link: {
      cursor: 'pointer',
      color: theme.palette.link.normal,
      '&:hover': {
        color: theme.palette.link.hovering
      }
    },
    italic: {
      fontStyle: 'italic'
    },
    unselected: {
      '-webkit-touch-callout': 'none',
      '-webkit-user-select': 'none',
      '-khtml-user-select': 'none',
      '-moz-user-select': 'none',
      '-ms-user-select': 'none',
      'user-select': 'none'
    },
    centerOnSmall: _defineProperty({}, theme.breakpoints.down('xs'), {
      textAlign: 'center'
    })
  };
});

var Typography = function Typography(_ref) {
  var _ref2;

  var className = _ref.className,
      style = _ref.style,
      primaryProp = _ref.primary,
      secondaryProp = _ref.secondary,
      thirdaryProp = _ref.thirdary,
      darkBlue = _ref.darkBlue,
      white = _ref.white,
      black = _ref.black,
      soft = _ref.soft,
      inactive = _ref.inactive,
      errorProp = _ref.error,
      red = _ref.red,
      link = _ref.link,
      variant = _ref.variant,
      left = _ref.left,
      center = _ref.center,
      centerOnSmall = _ref.centerOnSmall,
      right = _ref.right,
      margin = _ref.margin,
      marginBottom = _ref.marginBottom,
      padding = _ref.padding,
      divider = _ref.divider,
      fontWeight = _ref.fontWeight,
      italic = _ref.italic,
      unselected = _ref.unselected,
      props = _objectWithoutProperties(_ref, ["className", "style", "primary", "secondary", "thirdary", "darkBlue", "white", "black", "soft", "inactive", "error", "red", "link", "variant", "left", "center", "centerOnSmall", "right", "margin", "marginBottom", "padding", "divider", "fontWeight", "italic", "unselected"]);

  var classes = useStyles$1();
  var theme = useTheme();
  var styles = {}; // Computes the font color

  if (primaryProp) styles.color = theme.palette.primary.main;else if (secondaryProp) styles.color = theme.palette.secondary.main;else if (thirdaryProp) styles.color = theme.palette.thirdary.main;else if (darkBlue) styles.color = theme.palette.secondary.dark;else if (errorProp || red) styles.color = theme.palette.error.main;else if (white) styles.color = '#fff';else if (black) styles.color = '#000';
  if (margin) styles.margin = margin;
  if (marginBottom) styles.marginBottom = marginBottom;
  if (padding) styles.padding = padding;
  if (fontWeight) styles.fontWeight = fontWeight;
  if (left) styles.textAlign = 'left';
  if (center) styles.textAlign = 'center';
  if (right) styles.textAlign = 'right';
  var classNames = [];
  if (centerOnSmall) classNames.push(classes.centerOnSmall);
  if (variant && variant !== 'subheading') classNames.push(classes[variant]);
  return React__default.createElement(React__default.Fragment, null, React__default.createElement(MUITypography, _extends({
    style: _objectSpread2({}, style, {}, styles),
    className: cx.apply(void 0, [className].concat(classNames, [(_ref2 = {}, _defineProperty(_ref2, classes.primary, !!primaryProp), _defineProperty(_ref2, classes.secondary, !!secondaryProp), _defineProperty(_ref2, classes.thirdary, !!thirdaryProp), _defineProperty(_ref2, classes.darkBlue, !!darkBlue), _defineProperty(_ref2, classes.link, !!link), _defineProperty(_ref2, classes.italic, !!italic), _defineProperty(_ref2, classes.unselected, !!unselected), _ref2)])) // @ts-ignore
    ,
    variant: variant !== 'subheading' ? variant : undefined
  }, props)), divider && React__default.createElement(Divider$1, null));
};

var useStyles$2 = styles$1.makeStyles(function (theme) {
  return {
    root: _defineProperty({
      outline: 'none',
      height: 'auto',
      borderRadius: 20,
      padding: 12,
      border: "1px solid ".concat(theme.palette.borders.cool),
      boxShadow: '0px 5px 20px rgba(0, 0, 0, 0.05)'
    }, theme.breakpoints.down('xs'), {
      margin: 'auto',
      '& h6': {
        fontSize: '1.2em'
      }
    }),
    header: _defineProperty({}, theme.breakpoints.down('xs'), {
      fontSize: '1rem !important'
    }),
    divider: {
      border: "1px solid ".concat(theme.palette.thirdary.main),
      margin: "".concat(theme.spacing(), "px auto ").concat(theme.spacing(2), "px")
    },
    square: {
      borderRadius: 0
    },
    center: {
      margin: 'auto'
    }
  };
});

var Cardv2 = function Cardv2(_ref) {
  var className = _ref.className,
      _ref$classNames = _ref.classNames,
      classNames = _ref$classNames === void 0 ? {} : _ref$classNames,
      render = _ref.render,
      contentProps = _ref.contentProps,
      square = _ref.square,
      rest = _objectWithoutProperties(_ref, ["className", "classNames", "render", "contentProps", "square"]);

  var classes = useStyles$2();

  var CardDivider = function CardDivider(_ref2) {
    var dividerClasses = _ref2.classes,
        dividerClassName = _ref2.className,
        rest = _objectWithoutProperties(_ref2, ["classes", "className"]);

    return React__default.createElement(Divider$1, _extends({
      classes: _objectSpread2({
        root: cx(classes.divider, dividerClassName, classNames.divider)
      }, dividerClasses)
    }, rest));
  };

  var CardHeader = function CardHeader(_ref3) {
    var className = _ref3.className,
        others = _objectWithoutProperties(_ref3, ["className"]);

    return React__default.createElement(Typography, _extends({
      className: cx(className, classes.header, classNames.header),
      variant: "h6",
      center: true,
      secondary: true
    }, others));
  };

  return React__default.createElement(Card, _extends({
    className: cx(classes.root, className, classNames.card, _defineProperty({}, classes.square, !!square))
  }, rest), React__default.createElement(CardContent, _extends({
    classes: {
      root: classNames.content
    }
  }, contentProps), render && render({
    CardDivider: CardDivider,
    CardHeader: CardHeader
  })));
};

var Checkbox = function Checkbox(_ref) {
  var wrapperRootProps = _ref.wrapperRootProps,
      wrapperProps = _ref.wrapperProps,
      checkboxProps = _ref.checkboxProps,
      classNames = _ref.classNames,
      label = _ref.label,
      withTextField = _ref.withTextField,
      textField = _ref.textField,
      rest = _objectWithoutProperties(_ref, ["wrapperRootProps", "wrapperProps", "checkboxProps", "classNames", "label", "withTextField", "textField"]);

  return React__default.createElement("div", _extends({
    style: {
      flexGrow: 1
    }
  }, wrapperRootProps), React__default.createElement(FormControlLabel, _extends({
    control: React__default.createElement(MuiCheckbox, _extends({
      classes: classNames
    }, checkboxProps)),
    label: label
  }, rest)), !textField && withTextField && React__default.createElement(TextField, withTextField), textField);
};

// @ts-ignore
var useStyles$3 = styles$1.makeStyles(function (theme) {
  return {
    root: function root(_ref) {
      var margin = _ref.margin;
      var smallMargin = typeof margin === 'number' ? margin / 2 : false;
      return _defineProperty({
        margin: margin || "".concat(theme.spacing(2.5) + 'px', " auto")
      }, theme.breakpoints.down('xs'), {
        margin: smallMargin || "".concat(theme.spacing(1.5) + 'px', " auto")
      });
    }
  };
});

var Divider = function Divider(_ref3) {
  var _ref3$classNames = _ref3.classNames,
      classNames = _ref3$classNames === void 0 ? {} : _ref3$classNames,
      props = _objectWithoutProperties(_ref3, ["classNames"]);

  var classes = useStyles$3(props);
  return React__default.createElement(Divider$1, _extends({
    classes: _objectSpread2({}, classNames, {
      root: cx(classes.root, classNames.root)
    })
  }, props));
};

var useStyles$4 = styles$1.makeStyles(function (theme) {
  return {
    root: {},
    xsBlock: _defineProperty({}, theme.breakpoints.down('xs'), {
      display: 'block !important',
      // Sometimes we do a "wrapperProps={{ marginRight: 3 }} for input components".
      //    This is used to restore it on a mobile screen
      '& fieldset': {
        marginRight: 0
      }
    }),
    spaced: {
      '& fieldset': {
        marginRight: 4
      }
    }
  };
});

function computeJustify(props) {
  if (props.center) return 'center';
  if (props.spaceBetween) return 'space-between';
  if (props.spaceAround) return 'space-around';
  if (props.flexStart) return 'flex-start';
  if (props.flexEnd) return 'flex-end';
  return 'initial';
}

var Flex = function Flex(props) {
  var classes = useStyles$4(props);

  var style = props.style,
      center = props.center,
      spaceBetween = props.spaceBetween,
      spaceAround = props.spaceAround,
      flexStart = props.flexStart,
      flexEnd = props.flexEnd,
      flexGrow = props.flexGrow,
      flexDirection = props.flexDirection,
      flexWrap = props.flexWrap,
      textAlign = props.textAlign,
      wrap = props.wrap,
      xsBlock = props.xsBlock,
      rest = _objectWithoutProperties(props, ["style", "center", "spaceBetween", "spaceAround", "flexStart", "flexEnd", "flexGrow", "flexDirection", "flexWrap", "textAlign", "wrap", "xsBlock"]);

  return React__default.createElement("div", _extends({
    className: cx(classes.root, _defineProperty({}, classes.xsBlock, !!xsBlock)),
    style: _objectSpread2({
      display: 'flex',
      justifyContent: computeJustify(props),
      alignItems: 'center',
      flexGrow: flexGrow,
      flexDirection: flexDirection,
      textAlign: textAlign,
      flexWrap: wrap ? 'wrap' : flexWrap
    }, style)
  }, rest));
};

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

var _freeGlobal = freeGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal || freeSelf || Function('return this')();

var _root = root;

/** Built-in value references. */
var Symbol$1 = _root.Symbol;

var _Symbol = Symbol$1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

var _getRawTag = getRawTag;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$1.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString$1.call(value);
}

var _objectToString = objectToString;

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag$1 && symToStringTag$1 in Object(value))
    ? _getRawTag(value)
    : _objectToString(value);
}

var _baseGetTag = baseGetTag;

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

var isObject_1 = isObject;

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject_1(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = _baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

var isFunction_1 = isFunction;

var logo = "bf4dccdee367501f.png";

var logoWhite = "c66d0496eebc8070.png";

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeFloor = Math.floor,
    nativeRandom = Math.random;

/**
 * The base implementation of `_.random` without support for returning
 * floating-point numbers.
 *
 * @private
 * @param {number} lower The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the random number.
 */
function baseRandom(lower, upper) {
  return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
}

var _baseRandom = baseRandom;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

var eq_1 = eq;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

var isLength_1 = isLength;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength_1(value.length) && !isFunction_1(value);
}

var isArrayLike_1 = isArrayLike;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER$1 = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER$1 : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

var _isIndex = isIndex;

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject_1(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike_1(object) && _isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq_1(object[index], value);
  }
  return false;
}

var _isIterateeCall = isIterateeCall;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

var isObjectLike_1 = isObjectLike;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike_1(value) && _baseGetTag(value) == symbolTag);
}

var isSymbol_1 = isSymbol;

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol_1(value)) {
    return NAN;
  }
  if (isObject_1(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject_1(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

var toNumber_1 = toNumber;

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber_1(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

var toFinite_1 = toFinite;

/** Built-in method references without a dependency on `root`. */
var freeParseFloat = parseFloat;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMin = Math.min,
    nativeRandom$1 = Math.random;

/**
 * Produces a random number between the inclusive `lower` and `upper` bounds.
 * If only one argument is provided a number between `0` and the given number
 * is returned. If `floating` is `true`, or either `lower` or `upper` are
 * floats, a floating-point number is returned instead of an integer.
 *
 * **Note:** JavaScript follows the IEEE-754 standard for resolving
 * floating-point values which can produce unexpected results.
 *
 * @static
 * @memberOf _
 * @since 0.7.0
 * @category Number
 * @param {number} [lower=0] The lower bound.
 * @param {number} [upper=1] The upper bound.
 * @param {boolean} [floating] Specify returning a floating-point number.
 * @returns {number} Returns the random number.
 * @example
 *
 * _.random(0, 5);
 * // => an integer between 0 and 5
 *
 * _.random(5);
 * // => also an integer between 0 and 5
 *
 * _.random(5, true);
 * // => a floating-point number between 0 and 5
 *
 * _.random(1.2, 5.2);
 * // => a floating-point number between 1.2 and 5.2
 */
function random(lower, upper, floating) {
  if (floating && typeof floating != 'boolean' && _isIterateeCall(lower, upper, floating)) {
    upper = floating = undefined;
  }
  if (floating === undefined) {
    if (typeof upper == 'boolean') {
      floating = upper;
      upper = undefined;
    }
    else if (typeof lower == 'boolean') {
      floating = lower;
      lower = undefined;
    }
  }
  if (lower === undefined && upper === undefined) {
    lower = 0;
    upper = 1;
  }
  else {
    lower = toFinite_1(lower);
    if (upper === undefined) {
      upper = lower;
      lower = 0;
    } else {
      upper = toFinite_1(upper);
    }
  }
  if (lower > upper) {
    var temp = lower;
    lower = upper;
    upper = temp;
  }
  if (floating || lower % 1 || upper % 1) {
    var rand = nativeRandom$1();
    return nativeMin(lower + (rand * (upper - lower + freeParseFloat('1e-' + ((rand + '').length - 1)))), upper);
  }
  return _baseRandom(lower, upper);
}

var random_1 = random;

var useLoadingSpinner = function useLoadingSpinner() {
  var _useState = React.useState(secondary.main),
      _useState2 = _slicedToArray(_useState, 2),
      dynamicColor = _useState2[0],
      setNewDynamicColor = _useState2[1];

  var getRandomColor = React.useCallback(function () {
    var colors = [primary.lightest, primary.lighter, primary.main, secondary.lightest2, secondary.lightest, secondary.main, thirdary.lighter, thirdary.light];
    return colors[random_1(0, colors.length - 1)];
  }, [primary.lighter, primary.lightest, primary.main, secondary.lightest, secondary.lightest2, secondary.main, thirdary.light, thirdary.lighter]);
  React.useEffect(function () {
    var start = setInterval(function () {
      return setNewDynamicColor(getRandomColor());
    }, 1400);
    return function () {
      return clearInterval(start);
    };
  }, [getRandomColor]);
  return dynamicColor;
};

var useStyles$5 = styles$1.makeStyles({
  root: {
    zIndex: 999999,
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3
  },
  fullscreen: {
    position: 'fixed',
    width: '100vw',
    height: '100vh',
    overflow: 'hidden'
  },
  spinner: {
    position: 'relative',
    margin: 'auto',
    display: 'block'
  },
  caption: {
    transition: 'all 0.3s ease-out',
    position: 'relative',
    width: '100%',
    height: '100%',
    textAlign: 'center',
    '& h3': {
      color: '#fff !important',
      fontWeight: 300
    },
    '& h4': {
      color: '#fff !important',
      fontWeight: 300
    },
    '& h5': {
      color: '#fff !important',
      fontWeight: 300
    },
    '& h6': {
      color: '#fff !important',
      fontWeight: 300
    }
  },
  dim: {
    background: 'rgba(0, 0, 0, 0.80)'
  },
  noOverlay: {
    background: 'none'
  },
  logoContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    display: 'flex',
    objectFit: 'cover',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: 35,
    height: 35,
    objectFit: 'cover'
  },
  xxs: {
    fontSize: '0.5rem !important'
  },
  xs: {
    fontSize: '0.6rem !important'
  },
  sm: {
    fontSize: '0.7rem !important'
  },
  md: {
    fontSize: '0.9rem !important'
  },
  lg: {
    fontSize: '0.9rem !important'
  },
  xl: {
    fontSize: '0.9rem !important'
  }
});

var SpinnerWithWidth = function SpinnerWithWidth(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? 'xs' : _ref$width,
      size = _ref.size,
      style = _ref.style,
      xxs = _ref.xxs,
      xs = _ref.xs,
      sm = _ref.sm,
      md = _ref.md,
      lg = _ref.lg,
      xl = _ref.xl,
      rest = _objectWithoutProperties(_ref, ["width", "size", "style", "xxs", "xs", "sm", "md", "lg", "xl"]);

  var dynamicColor = useLoadingSpinner();
  var spinnerSize;
  if (xxs || width === 'xxs') spinnerSize = 30;else if (xs || width === 'xs') spinnerSize = 45;else if (sm || width === 'sm') spinnerSize = 60;else if (md || width === 'md') spinnerSize = 75;else if (lg || width === 'lg') spinnerSize = 130;else if (xl || width === 'xl') spinnerSize = 150;else spinnerSize = 45;
  return React__default.createElement(CircularProgress, _extends({
    size: size || spinnerSize,
    thickness: 1,
    style: _objectSpread2({
      color: dynamicColor
    }, style)
  }, rest));
};

var EnhancedSpinnerWithWidth = withWidth()(SpinnerWithWidth);

var calcTypographyVariant = function calcTypographyVariant(_ref2) {
  var size = _ref2.size,
      xxs = _ref2.xxs,
      xs = _ref2.xs,
      sm = _ref2.sm,
      md = _ref2.md,
      lg = _ref2.lg,
      xl = _ref2.xl;
  if (xxs) return 'caption';else if (xs) return 'subtitle2';else if (sm) return 'subtitle1';else if (md) return 'h6';else if (lg) return 'h5';else if (xl) return 'h4';else {
    switch (size) {
      case 'xxs':
        return 'caption';

      case 'xs':
        return 'subtitle2';

      case 'sm':
        return 'subtitle1';

      case 'md':
        return 'h6';

      case 'lg':
        return 'subtitle2';

      case 'xl':
        return 'subtitle2';

      default:
        return 'subtitle1';
    }
  }
};

var LoadingSpinner = function LoadingSpinner(_ref3) {
  var _cx, _cx2;

  var children = _ref3.children,
      wrapperClassName = _ref3.wrapperClassName,
      className = _ref3.className,
      childrenClassName = _ref3.childrenClassName,
      wrapperStyle = _ref3.wrapperStyle,
      childrenStyle = _ref3.childrenStyle,
      _ref3$fullscreen = _ref3.fullscreen,
      fullscreen = _ref3$fullscreen === void 0 ? false : _ref3$fullscreen,
      _ref3$dim = _ref3.dim,
      dim = _ref3$dim === void 0 ? false : _ref3$dim,
      _ref3$white = _ref3.white,
      white = _ref3$white === void 0 ? false : _ref3$white,
      renderContent = _ref3.renderContent,
      rest = _objectWithoutProperties(_ref3, ["children", "wrapperClassName", "className", "childrenClassName", "wrapperStyle", "childrenStyle", "fullscreen", "dim", "white", "renderContent"]);

  var classes = useStyles$5(undefined);
  var styles = {};
  var logoSrc = logo; // default to logo with dark text

  if (white || dim) logoSrc = logoWhite;
  return React__default.createElement("div", {
    style: _objectSpread2({}, styles, {}, wrapperStyle),
    className: cx(classes.root, wrapperClassName, (_cx = {}, _defineProperty(_cx, classes.fullscreen, !!fullscreen), _defineProperty(_cx, classes.dim, !!dim), _cx))
  }, React__default.createElement("div", {
    className: className,
    style: {
      position: 'relative'
    }
  }, React__default.createElement("div", {
    style: {
      position: 'relative'
    }
  }, React__default.createElement(EnhancedSpinnerWithWidth, _extends({
    className: cx(classes.spinner, className)
  }, rest)), React__default.createElement("div", {
    className: classes.logoContainer
  }, React__default.createElement("img", {
    src: logoSrc,
    className: classes.logo,
    title: "AiTmed"
  }))), React__default.createElement(Fade, {
    timeout: 2000,
    "in": true
  }, isFunction_1(renderContent) ? // @ts-ignore
  renderContent() : React__default.createElement(Typography, {
    className: cx(classes.caption, childrenClassName, (_cx2 = {}, _defineProperty(_cx2, classes.xxs, !!rest.xxs), _defineProperty(_cx2, classes.xs, !!rest.xs), _defineProperty(_cx2, classes.sm, !!rest.sm), _defineProperty(_cx2, classes.md, !!rest.md), _defineProperty(_cx2, classes.lg, !!rest.lg), _defineProperty(_cx2, classes.xl, !!rest.xl), _cx2)),
    style: _objectSpread2({
      marginTop: 12
    }, childrenStyle),
    variant: calcTypographyVariant(rest),
    center: true,
    white: true
  }, children))));
};

exports.Button = Button;
exports.Card = Cardv2;
exports.Checkbox = Checkbox;
exports.Divider = Divider;
exports.Flex = Flex;
exports.LoadingSpinner = LoadingSpinner;
exports.ThemeProvider = AiTmedThemeProvider;
exports.Typography = Typography;
exports.theme = theme;
//# sourceMappingURL=index.js.map
