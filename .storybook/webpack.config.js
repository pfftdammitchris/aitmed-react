const path = require('path')

const SRC_PATH = path.join(__dirname, '../src')
const STORIES_PATH = path.join(__dirname, '../stories')

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loaders: ['awesome-typescript-loader', 'react-docgen-typescript-loader'],
    include: [SRC_PATH, STORIES_PATH],
  })

  config.resolve.extensions.push('.ts', '.tsx')

  return config
}
