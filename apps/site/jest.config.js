module.exports = {
  name: 'site',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/site',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
