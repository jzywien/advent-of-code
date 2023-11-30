module.exports = {
   transform: {
      '^.+\\.ts?$': 'ts-jest',
   },
   moduleFileExtensions: ['ts', 'js', 'json'],
   moduleNameMapper: {
      '^@util/(.*)': "<rootDir>/src/util/$1"
   },
   coverageDirectory: 'coverage',
};
