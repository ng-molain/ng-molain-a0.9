module.exports = {
  name: 'g2-charts',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/g2-charts',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
