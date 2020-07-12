module.exports = {
  name: 'examples',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/examples',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
