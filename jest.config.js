/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  verbose: true,
  injectGlobals: true,
  testPathIgnorePatterns: ["/node_modules/"],
  coverageThreshold: {
    global: {
      branches: 85,
      functions: 90,
      lines: 90,
    },
  },
  collectCoverageFrom: [
    './src/application/*.{js,jsx,ts}',
    './src/domain/*.{js,jsx,ts}',
  ],
  collectCoverage: true,
  preset: "ts-jest",
  testEnvironment: "node",
  testTimeout: 15000,
};
