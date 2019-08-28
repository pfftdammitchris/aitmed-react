module.exports = {
  roots: ['<rootDir>/src'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  testPathIgnorePatterns: ['/lib/', '/node_modules/'],
  testURL: 'http://127.0.0.1',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  verbose: true,
}
