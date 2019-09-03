import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import babel from 'rollup-plugin-babel'
import builtins from 'rollup-plugin-node-builtins'
import globals from 'rollup-plugin-node-globals'
import postcss from 'rollup-plugin-postcss'
import json from 'rollup-plugin-json'
import resolve from 'rollup-plugin-node-resolve'
import url from 'rollup-plugin-url'
// import pkg from './package.json'

const extensions = ['.js', '.jsx', '.ts', '.tsx', 'json', '.mjs', '.es6']

const plugins = [
  external(),
  globals(),
  builtins(),
  postcss({ modules: true }),
  url(),
  json(),
  resolve({
    mainFields: ['jsnext', 'main'],
    extensions,
    customResolveOptions: {
      moduleDirectory: ['node_modules', 'src'],
    },
    preferBuiltins: false,
  }),
  commonjs({
    include: [
      'node_modules/@material-ui/styles/ThemeProvider/index.js',
      'node_modules/@material-ui/core/**',
      'node_modules/axios/**',
      'node_modules/payment/dist/payment.js',
      'node_modules/downshift/dist/**',
      'node_modules/react-signature-canvas/build/**',
      'node_modules/react-credit-cards/lib/**',
      'node_modules/react-final-form/dist/**',
      'node_modules/final-form-focus/dist/**',
      'node_modules/classnames/**',
      'node_modules/date-fns/**',
      'node_modules/react-icons/io/**',
      'node_modules/react-icons/fa/**',
      'node_modules/react-icons/md/**',
      'node_modules/lodash/**',
      // 'node_modules/lodash/merge.js',
      // 'node_modules/lodash/random.js',
      // 'node_modules/lodash/isPlainObject.js',
      // 'node_modules/lodash/isFunction.js',
      // 'node_modules/lodash/isString.js',
      // 'node_modules/lodash/isArray.js',
      // 'node_modules/lodash/reduce.js',
      // 'node_modules/lodash/startCase.js',
      // 'node_modules/lodash/get.js',
      // 'node_modules/lodash/has.js',
      // 'node_modules/lodash/set.js',
      // 'node_modules/lodash/unset.js',
      // 'node_modules/lodash/forEach.js',
      // 'node_modules/lodash/cloneDeep.js',
    ],
    namedExports: {
      'react-is': [
        'ForwardRef',
        'isForwardRef',
        'isValidElementType',
        'isContextConsumer',
      ],
      'node_modules/prop-types/index.js': ['element', 'elementType'],
      'node_modules/@material-ui/core/styles/index.js': ['createMuiTheme'],
      'node_modules/@material-ui/utils/index.js': [
        'elementAcceptingRef',
        'elementTypeAcceptingRef',
        'chainPropTypes',
        'exactProp',
        'getDisplayName',
        'ponyfillGlobal',
      ],
    },
  }),
  babel({
    extensions,
    include: ['src/**/*'],
    exclude: ['node_modules/**', 'src/stories/**/*'],
  }),
]

function getOutput(options) {
  return {
    exports: 'named',
    sourcemap: true,
    ...options,
  }
}

// ThemeProvider, components
const components = {
  input: 'src/index.tsx',
  output: [
    getOutput({ file: 'dist/index.js', format: 'cjs' }),
    getOutput({ file: 'dist/index.es.js', format: 'es' }),
  ],
  plugins,
}

// Alias / copy of components in case the dev wants to be explicit with imports such as:
//    "import { Button } from '@aitmed/react/components"
const componentsAlt = {
  input: 'src/index.tsx',
  output: [
    getOutput({ file: 'dist/components/index.js', format: 'cjs' }),
    getOutput({ file: 'dist/components/index.es.js', format: 'es' }),
  ],
  plugins,
}

const finalFormComponents = {
  input: 'src/components/forms/index.tsx',
  output: [
    getOutput({ file: 'dist/components/forms/index.js', format: 'cjs' }),
    getOutput({ file: 'dist/components/forms/index.es.js', format: 'es' }),
  ],
  plugins,
}

// Forms
const forms = {
  input: 'src/forms/index.tsx',
  output: [
    getOutput({ file: 'dist/forms/index.js', format: 'cjs' }),
    getOutput({ file: 'dist/forms/index.es.js', format: 'es' }),
  ],
  plugins,
}

// React hooks
const hooks = {
  input: 'src/hooks/index.tsx',
  output: [
    getOutput({ file: 'dist/hooks/index.js', format: 'cjs' }),
    getOutput({ file: 'dist/hooks/index.es.js', format: 'es' }),
  ],
  plugins,
}

const finalFormHooks = {
  input: 'src/hooks/finalForm/index.tsx',
  output: [
    getOutput({ file: 'dist/hooks/finalForm/index.js', format: 'cjs' }),
    getOutput({ file: 'dist/hooks/finalForm/index.es.js', format: 'es' }),
  ],
  plugins,
}

const modules = {
  input: 'src/modules/index.tsx',
  output: [
    getOutput({ file: 'dist/modules/index.js', format: 'cjs' }),
    getOutput({ file: 'dist/modules/index.es.js', format: 'es' }),
  ],
  plugins,
}

const finalFormModules = {
  input: 'src/modules/finalForm/index.tsx',
  output: [
    getOutput({ file: 'dist/modules/finalForm/index.js', format: 'cjs' }),
    getOutput({ file: 'dist/modules/finalForm/index.es.js', format: 'es' }),
  ],
  plugins,
}

// Utilities
const utilities = {
  input: 'src/utils/index.ts',
  output: [
    getOutput({ file: 'dist/utils/index.js', format: 'cjs' }),
    getOutput({ file: 'dist/utils/index.es.js', format: 'es' }),
  ],
  plugins,
}

const configs = [
  components,
  componentsAlt,
  finalFormComponents,
  hooks,
  finalFormHooks,
  forms,
  modules,
  finalFormModules,
  utilities,
]

export default configs
