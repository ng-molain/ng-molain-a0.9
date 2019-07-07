module.exports = {
  name: 'drag-drop',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/drag-drop',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
