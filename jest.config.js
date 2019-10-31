module.exports = {
  moduleFileExtensions: ['js', 'ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/src/$1'
  },
  testMatch: ['**/*.spec.(js|jsx|ts|tsx)']
}
