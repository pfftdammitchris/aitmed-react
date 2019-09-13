module.exports = {
  roots: ['<rootDir>/src'],
  testMatch: ['__tests__/**/*.test.tsx?$'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  verbose: true,
}
