/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  testEnvironment: "node",
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  transform: {
    "^.+\\.[tj]sx?$": ["ts-jest",{ useESM: true}],
  },
  extensionsToTreatAsEsm: ['.ts'],
};
