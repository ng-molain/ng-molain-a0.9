module.exports = {
  preset: '../../jest.preset.js',
  coverageDirectory: '../../coverage/apps/mock-api',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'mock-api',
};
