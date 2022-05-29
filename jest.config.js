module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript',
  collectCoverage: true,
  collectCoverageFrom: ['./src/**'],
  coverageDirectory: 'results/jest-coverage',
  coverageReporters: ['json', 'text'],
};
