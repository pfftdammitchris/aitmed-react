'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var reactFinalForm = require('react-final-form');
var styles = require('@material-ui/styles');
var TextField = _interopDefault(require('@material-ui/core/TextField'));
var MenuItem = _interopDefault(require('@material-ui/core/MenuItem'));
var Grid = _interopDefault(require('@material-ui/core/Grid'));
var Button = _interopDefault(require('@material-ui/core/Button'));
var Fade = _interopDefault(require('@material-ui/core/Fade'));
var withWidth = _interopDefault(require('@material-ui/core/withWidth'));
var cx = _interopDefault(require('classnames'));
var CircularProgress = _interopDefault(require('@material-ui/core/CircularProgress'));
var MUITypography = _interopDefault(require('@material-ui/core/Typography'));
var useTheme = _interopDefault(require('@material-ui/styles/useTheme'));
var Divider = _interopDefault(require('@material-ui/core/Divider'));
var Cards = _interopDefault(require('react-credit-cards'));
var Payment = _interopDefault(require('payment/dist'));
require('react-credit-cards/es/styles-compiled.css');

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

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

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
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

var _overArg = overArg;

/** Built-in value references. */
var getPrototype = _overArg(Object.getPrototypeOf, Object);

var _getPrototype = getPrototype;

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
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto$2 = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$2.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike_1(value) || _baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = _getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty$1.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

var isPlainObject_1 = isPlainObject;

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

// @ts-ignore
var useStyles = styles.makeStyles(function (theme) {
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

  var classes = useStyles();
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
  }, props)), divider && React__default.createElement(Divider, null));
};

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

var useStyles$1 = styles.makeStyles({
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

  var classes = useStyles$1(undefined);
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

var states = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'];
var statesArrayObjects = [{
  name: 'Alabama',
  abbreviation: 'AL'
}, {
  name: 'Alaska',
  abbreviation: 'AK'
}, {
  name: 'American Samoa',
  abbreviation: 'AS'
}, {
  name: 'Arizona',
  abbreviation: 'AZ'
}, {
  name: 'Arkansas',
  abbreviation: 'AR'
}, {
  name: 'California',
  abbreviation: 'CA'
}, {
  name: 'Colorado',
  abbreviation: 'CO'
}, {
  name: 'Connecticut',
  abbreviation: 'CT'
}, {
  name: 'Delaware',
  abbreviation: 'DE'
}, {
  name: 'District Of Columbia',
  abbreviation: 'DC'
}, {
  name: 'Federated States Of Micronesia',
  abbreviation: 'FM'
}, {
  name: 'Florida',
  abbreviation: 'FL'
}, {
  name: 'Georgia',
  abbreviation: 'GA'
}, {
  name: 'Guam',
  abbreviation: 'GU'
}, {
  name: 'Hawaii',
  abbreviation: 'HI'
}, {
  name: 'Idaho',
  abbreviation: 'ID'
}, {
  name: 'Illinois',
  abbreviation: 'IL'
}, {
  name: 'Indiana',
  abbreviation: 'IN'
}, {
  name: 'Iowa',
  abbreviation: 'IA'
}, {
  name: 'Kansas',
  abbreviation: 'KS'
}, {
  name: 'Kentucky',
  abbreviation: 'KY'
}, {
  name: 'Louisiana',
  abbreviation: 'LA'
}, {
  name: 'Maine',
  abbreviation: 'ME'
}, {
  name: 'Marshall Islands',
  abbreviation: 'MH'
}, {
  name: 'Maryland',
  abbreviation: 'MD'
}, {
  name: 'Massachusetts',
  abbreviation: 'MA'
}, {
  name: 'Michigan',
  abbreviation: 'MI'
}, {
  name: 'Minnesota',
  abbreviation: 'MN'
}, {
  name: 'Mississippi',
  abbreviation: 'MS'
}, {
  name: 'Missouri',
  abbreviation: 'MO'
}, {
  name: 'Montana',
  abbreviation: 'MT'
}, {
  name: 'Nebraska',
  abbreviation: 'NE'
}, {
  name: 'Nevada',
  abbreviation: 'NV'
}, {
  name: 'New Hampshire',
  abbreviation: 'NH'
}, {
  name: 'New Jersey',
  abbreviation: 'NJ'
}, {
  name: 'New Mexico',
  abbreviation: 'NM'
}, {
  name: 'New York',
  abbreviation: 'NY'
}, {
  name: 'North Carolina',
  abbreviation: 'NC'
}, {
  name: 'North Dakota',
  abbreviation: 'ND'
}, {
  name: 'Northern Mariana Islands',
  abbreviation: 'MP'
}, {
  name: 'Ohio',
  abbreviation: 'OH'
}, {
  name: 'Oklahoma',
  abbreviation: 'OK'
}, {
  name: 'Oregon',
  abbreviation: 'OR'
}, {
  name: 'Palau',
  abbreviation: 'PW'
}, {
  name: 'Pennsylvania',
  abbreviation: 'PA'
}, {
  name: 'Puerto Rico',
  abbreviation: 'PR'
}, {
  name: 'Rhode Island',
  abbreviation: 'RI'
}, {
  name: 'South Carolina',
  abbreviation: 'SC'
}, {
  name: 'South Dakota',
  abbreviation: 'SD'
}, {
  name: 'Tennessee',
  abbreviation: 'TN'
}, {
  name: 'Texas',
  abbreviation: 'TX'
}, {
  name: 'Utah',
  abbreviation: 'UT'
}, {
  name: 'Vermont',
  abbreviation: 'VT'
}, {
  name: 'Virgin Islands',
  abbreviation: 'VI'
}, {
  name: 'Virginia',
  abbreviation: 'VA'
}, {
  name: 'Washington',
  abbreviation: 'WA'
}, {
  name: 'West Virginia',
  abbreviation: 'WV'
}, {
  name: 'Wisconsin',
  abbreviation: 'WI'
}, {
  name: 'Wyoming',
  abbreviation: 'WY'
}];
var statesArrayObjectsMapper = statesArrayObjects.reduce(function (acc, stateObj) {
  if (acc[stateObj.name] === undefined) {
    acc[stateObj.name] = stateObj;
  }

  return acc;
}, {});
var statesArrayObjectsMapperv2 = statesArrayObjects.reduce(function (acc, stateObj) {
  if (acc[stateObj.abbreviation] === undefined) {
    acc[stateObj.abbreviation] = stateObj;
  }

  return acc;
}, {}); // mimicing server response

var languages = [{
  code: 'en-US',
  english: 'English',
  translated: 'English'
}, {
  code: 'zh-CN',
  english: 'Chinese(Simplified)',
  translated: '中文简体'
}, {
  code: 'zh-TW',
  english: 'Chinese(Traditional)',
  translated: '中文繁体'
}, {
  code: 'es-ES',
  english: 'Spanish',
  translated: 'Español'
}];
var languagesList = languages.map(function (_ref) {
  var code = _ref.code;
  return code;
});
var languagesMapper = languages.reduce(function (acc, lang) {
  if (!acc[lang.code]) {
    acc[lang.code] = lang;
  }

  return acc;
}, {});
var months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];

var useStyles$2 = styles.makeStyles(function (theme) {
  return {
    root: {
      width: '100%',
      overflowX: 'auto',
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(3)
    }
  };
}); // For <Cards />
// focused {string}: Focused card field. name|number|expiry|cvc

var getFocusedFieldName = function getFocusedFieldName(activeField) {
  switch (activeField) {
    case 'billing_first_name':
    case 'billing_last_name':
      return 'name';

    case 'card_number':
      return 'number';

    case 'month':
      return 'expiry';

    case 'year':
      return 'expiry';

    case 'cvv_code':
      return 'cvc';

    default:
      return activeField;
  }
};

var getCardProps = function getCardProps() {
  var values = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _values$card_number = values.card_number,
      number = _values$card_number === void 0 ? '' : _values$card_number,
      _values$billing_first = values.billing_first_name,
      billing_first_name = _values$billing_first === void 0 ? '' : _values$billing_first,
      _values$billing_last_ = values.billing_last_name,
      billing_last_name = _values$billing_last_ === void 0 ? '' : _values$billing_last_,
      _values$month = values.month,
      month = _values$month === void 0 ? '' : _values$month,
      _values$year = values.year,
      year = _values$year === void 0 ? '' : _values$year,
      _values$cvv_code = values.cvv_code,
      cvc = _values$cvv_code === void 0 ? '' : _values$cvv_code;
  return {
    number: number,
    name: "".concat(billing_first_name, " ").concat(billing_last_name),
    expiry: "".concat(month, "/").concat(year),
    cvc: cvc
  };
};

var PaymentCardsAnimation = function PaymentCardsAnimation(_ref) {
  var _ref$activeField = _ref.activeField,
      activeField = _ref$activeField === void 0 ? '' : _ref$activeField,
      values = _ref.values;
  var classes = useStyles$2();
  return React__default.createElement("div", {
    className: classes.root
  }, React__default.createElement(Cards, _extends({}, getCardProps(values), {
    focused: getFocusedFieldName(activeField)
  })));
};

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike_1(value) && _baseGetTag(value) == argsTag;
}

var _baseIsArguments = baseIsArguments;

/** Used for built-in method references. */
var objectProto$3 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$3.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto$3.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = _baseIsArguments(function() { return arguments; }()) ? _baseIsArguments : function(value) {
  return isObjectLike_1(value) && hasOwnProperty$2.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

var stubFalse_1 = stubFalse;

var isBuffer_1 = createCommonjsModule(function (module, exports) {
/** Detect free variable `exports`. */
var freeExports =  exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse_1;

module.exports = isBuffer;
});

var _nodeUtil = createCommonjsModule(function (module, exports) {
/** Detect free variable `exports`. */
var freeExports =  exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && _freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;
});

/* Node.js helper references. */
var nodeIsTypedArray = _nodeUtil && _nodeUtil.isTypedArray;

var clearNumber = function clearNumber() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return value.replace(/\D+/g, '');
}; // Create a years list with 20 years from current year

var currentYear = new Date().getFullYear(); // @ts-ignore

var appendToYear = function appendToYear(val, index) {
  return "".concat(index + currentYear);
};
var years = Array.from(new Array(20), appendToYear); // Used to validate the credit card form

var useCreditCard = function useCreditCard() {
  var _useState = React.useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      issuer = _useState2[0],
      setIssuer = _useState2[1];

  var parseCardNumber = function parseCardNumber(value) {
    var issuer = Payment.fns.cardType(value);
    setIssuer(issuer);
    var newValue = issuer === 'amex' ? "".concat(value.slice(0, 4), " ").concat(value.slice(4, 10), " ").concat(value.slice(10, 15)) : issuer === 'dinersclub' ? "".concat(value.slice(0, 4), " ").concat(value.slice(4, 10), " ").concat(value.slice(10, 14)) : "".concat(value.slice(0, 4), " ").concat(value.slice(4, 8), " ").concat(value.slice(8, 12), " ").concat(value.slice(12, 19));
    return newValue.trim();
  };

  var parse = function parse(value, name) {
    var clearValue = clearNumber(value);
    return !clearValue ? value : name === 'card_number' ? parseCardNumber(clearValue) : name === 'cvv_code' ? "".concat(clearValue.slice(0, issuer === 'amex' ? 4 : 3)).trim() : name === 'billing_zip_code' ? "".concat(clearValue.slice(0, 5)).trim() : value;
  };

  return {
    parse: parse
  };
};

var useStyles$3 = styles.makeStyles(function (theme) {
  return {
    root: {
      marginBottom: theme.spacing(3)
    }
  };
});

var CreditCardFormMidLabel = function CreditCardFormMidLabel(props) {
  var classes = useStyles$3();
  return React__default.createElement("div", _extends({
    className: classes.root
  }, props));
};

var useStyles$4 = styles.makeStyles(function (theme) {
  return {
    buttonContainer: {
      margin: "".concat(theme.spacing(2), "px auto")
    },
    sectionLabel: {
      margin: '12px 0'
    },
    cssLabel: {
      '&$cssFocused': {
        color: theme.palette.secondary.main
      }
    },
    cssFocused: {},
    cssOutlinedInput: {
      '&$cssFocused $notchedOutline': {
        borderColor: theme.palette.secondary.main
      }
    },
    notchedOutline: {},
    saveButton: {
      background: theme.palette.primary.main,
      color: '#fff'
    },
    input: {
      background: '#fff',
      margin: 0,
      marginBottom: 10
    }
  };
});

var CreditCardForm = function CreditCardForm(_ref) {
  var initialValues = _ref.initialValues,
      onSubmit = _ref.onSubmit,
      _render = _ref.render,
      submitting = _ref.submitting,
      _ref$submittingText = _ref.submittingText,
      submittingText = _ref$submittingText === void 0 ? '' : _ref$submittingText,
      _ref$midLabel = _ref.midLabel,
      midLabel = _ref$midLabel === void 0 ? '' : _ref$midLabel,
      renderSubmit = _ref.renderSubmit,
      renderTextFieldProp = _ref.renderTextField,
      renderSelectProp = _ref.renderSelectField,
      otherProps = _objectWithoutProperties(_ref, ["initialValues", "onSubmit", "render", "submitting", "submittingText", "midLabel", "renderSubmit", "renderTextField", "renderSelectField"]);

  var classes = useStyles$4();

  var _useCreditCard = useCreditCard(),
      parse = _useCreditCard.parse;

  var renderTextField = function renderTextField(_ref2) {
    var label = _ref2.label,
        input = _ref2.input,
        _ref2$meta = _ref2.meta,
        touched = _ref2$meta.touched,
        error = _ref2$meta.error,
        props = _objectWithoutProperties(_ref2, ["label", "input", "meta"]);

    return React__default.createElement(TextField, _extends({
      InputLabelProps: {
        classes: {
          root: classes.cssLabel,
          focused: classes.cssFocused
        }
      },
      InputProps: {
        classes: {
          root: classes.cssOutlinedInput,
          focused: classes.cssFocused,
          notchedOutline: classes.notchedOutline
        }
      },
      classes: {
        root: classes.input
      },
      label: label,
      variant: "outlined",
      error: touched && !!error,
      helperText: touched && error,
      fullWidth: true,
      required: true
    }, input, props));
  };

  var renderSelectField = function renderSelectField(_ref3) {
    var label = _ref3.label,
        input = _ref3.input,
        _ref3$meta = _ref3.meta,
        touched = _ref3$meta.touched,
        error = _ref3$meta.error,
        items = _ref3.items,
        props = _objectWithoutProperties(_ref3, ["label", "input", "meta", "items"]);

    return React__default.createElement(TextField, _extends({
      classes: {
        root: classes.input
      },
      label: label,
      error: touched && !!error,
      helperText: touched && error,
      variant: "outlined",
      fullWidth: true,
      select: true,
      required: true
    }, input, props), items && items.map(function (item, index) {
      var isObj = isPlainObject_1(item);
      var value = isObj ? item.value : item;
      var label = isObj ? item.label : item;
      return React__default.createElement(MenuItem, {
        key: "".concat(value).concat(index, "_select"),
        value: value
      }, label);
    }));
  };

  var finalRenderTextField = renderTextFieldProp || renderTextField;
  var finalRenderSelectField = renderSelectProp || renderSelectField;
  var fields = {
    card_number: {
      label: 'Card Number',
      name: 'card_number',
      render: finalRenderTextField,
      parse: parse
    },
    month: {
      label: 'Month',
      name: 'month',
      render: finalRenderSelectField,
      items: months
    },
    year: {
      label: 'Year',
      name: 'year',
      render: finalRenderSelectField,
      items: years
    },
    cvv: {
      label: 'CVV',
      name: 'cvv_code',
      render: finalRenderTextField,
      type: 'number',
      parse: parse
    },
    billing_first_name: {
      label: 'First Name',
      name: 'billing_first_name',
      render: finalRenderTextField
    },
    billing_last_name: {
      label: 'Last Name',
      name: 'billing_last_name',
      render: finalRenderTextField
    },
    billing_address: {
      label: 'Address',
      name: 'billing_address',
      render: finalRenderTextField
    },
    billing_city: {
      label: 'City',
      name: 'billing_city',
      render: finalRenderTextField
    },
    billing_state: {
      label: 'State',
      name: 'billing_state',
      render: finalRenderSelectField,
      items: states
    },
    billing_zip_code: {
      label: 'Zip',
      name: 'billing_zip_code',
      render: finalRenderTextField,
      type: 'number',
      parse: parse
    }
  };
  var fieldKeys = ['card_number', 'month', 'year', 'cvv_code', 'billing_first_name', 'billing_last_name', 'billing_address', 'billing_city', 'billing_state', 'billing_zip_code'];

  var defaultRenderer = function defaultRenderer(formApi) {
    var handleSubmit = formApi.handleSubmit,
        _submitting = formApi.submitting,
        active = formApi.active,
        values = formApi.values; // Allow for the parent to pass in their own "submitting" state

    var isSubmitting = !!submitting || _submitting;
    return React__default.createElement("form", {
      id: "aitmed-react-payment-form",
      onSubmit: handleSubmit
    }, React__default.createElement(PaymentCardsAnimation, {
      activeField: active,
      values: values
    }), !!midLabel && React__default.createElement(CreditCardFormMidLabel, null, midLabel), isSubmitting && React__default.createElement(LoadingSpinner, {
      margin: "16px auto 20px"
    }, submittingText || 'Submitting...'), React__default.createElement(reactFinalForm.Field, {
      label: "Card Number",
      name: "card_number",
      parse: parse,
      render: finalRenderTextField
    }), React__default.createElement(reactFinalForm.Field, {
      label: "Month",
      name: "month",
      items: months,
      render: finalRenderSelectField
    }), React__default.createElement(reactFinalForm.Field, {
      label: "Year",
      name: "year",
      items: years,
      render: finalRenderSelectField
    }), React__default.createElement(reactFinalForm.Field, {
      label: "CVV",
      name: "cvv_code",
      type: "number",
      parse: parse,
      render: finalRenderTextField
    }), React__default.createElement(Typography, {
      className: classes.sectionLabel,
      variant: "h5",
      secondary: true
    }, "Billing Information"), React__default.createElement(reactFinalForm.Field, {
      name: "billing_first_name",
      label: "First Name",
      render: finalRenderTextField
    }), React__default.createElement(reactFinalForm.Field, {
      name: "billing_last_name",
      label: "Last Name",
      render: finalRenderTextField
    }), React__default.createElement(reactFinalForm.Field, {
      name: "billing_address",
      label: "Address",
      render: finalRenderTextField
    }), React__default.createElement(reactFinalForm.Field, {
      name: "billing_city",
      label: "City",
      render: finalRenderTextField
    }), React__default.createElement(reactFinalForm.Field, {
      label: "State",
      name: "billing_state",
      items: states,
      render: finalRenderSelectField
    }), React__default.createElement(reactFinalForm.Field, {
      label: "Zip",
      name: "billing_zip_code",
      type: "number",
      parse: parse,
      render: finalRenderTextField
    }), isFunction_1(renderSubmit) ? renderSubmit && renderSubmit(formApi) : React__default.createElement(Grid, {
      className: classes.buttonContainer,
      direction: "column",
      alignItems: "center",
      justify: "center",
      container: true
    }, React__default.createElement(Grid, {
      xs: 12,
      item: true
    }, React__default.createElement(Button, {
      type: "submit",
      className: classes.saveButton,
      size: "large",
      variant: "contained",
      disabled: isSubmitting
    }, "Save"))));
  };

  return React__default.createElement(reactFinalForm.Form, _extends({
    keepDirtyOnReinitialize: true,
    initialValues: initialValues,
    onSubmit: onSubmit,
    subscription: {
      submitting: true,
      active: true,
      values: true
    }
  }, otherProps, {
    render: function render(formApi) {
      return isFunction_1(_render) ? _render({
        fields: fields,
        fieldKeys: fieldKeys,
        formApi: formApi,
        Cards: PaymentCardsAnimation
      }) : defaultRenderer(formApi);
    }
  }));
};

exports.default = CreditCardForm;
//# sourceMappingURL=index.js.map
