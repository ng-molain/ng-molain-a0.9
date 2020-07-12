module.exports = {
  name: 'drag-drop',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/drag-drop',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
