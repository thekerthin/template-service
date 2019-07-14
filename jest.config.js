module.exports = {
  "rootDir": "tests",
  "testRegex": ".spec.ts$",
  "moduleFileExtensions": [
    "js",
    "ts",
    // "json"
  ],
  // "transform": {
  //   "^.+\\.(t|j)s$": "ts-jest"
  // },
  "collectCoverageFrom": [
    // process.cwd() + "/src/**/*.ts",
    // "!**/node_modules/**",
    // "!**/vendor/**"
  ],
  // "forceCoverageMatch": ["**/*.ts"],
  // "coverageDirectory": "../coverage",
  "coverageThreshold": {
    "global": {
      "branches": 80,
      "functions": 80,
      "lines": 80,
      "statements": -10
    }
  }
};
