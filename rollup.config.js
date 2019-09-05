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
  external({
    includeDependencies: true,
  }),
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
    namedExports: {
      'react-is': [
        'ForwardRef',
        'isForwardRef',
        'isValidElementType',
        'isContextConsumer',
      ],
      'node_modules/prop-types/index.js': ['element', 'elementType'],
      'node_modules/@material-ui/core/styles/index.js': ['createMuiTheme'],
      'node_modules/@material-ui/styles/index.js': [
        'createStyles',
        'getThemeProps',
        'makeStyles',
        'mergeClasses',
        'useTheme',
        'styled',
        'ThemeProvider',
        'withStyles',
        'withThemeCreator',
      ],
      'node_modules/@material-ui/utils/index.js': [
        'elementAcceptingRef',
        'elementTypeAcceptingRef',
        'chainPropTypes',
        'exactProp',
        'getDisplayName',
        'ponyfillGlobal',
        'refType',
      ],
      'node_modules/@material-ui/system/index.js': [
        'borders',
        'compose',
        'display',
        'flexbox',
        'palette',
        'positions',
        'shadows',
        'sizing',
        'spacing',
        'typography',
        'css',
      ],
    },
  }),
  globals(),
  builtins(),
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
  input: 'src/components/finalForm/index.tsx',
  output: [
    getOutput({ file: 'dist/components/finalForm/index.js', format: 'cjs' }),
    getOutput({ file: 'dist/components/finalForm/index.es.js', format: 'es' }),
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
