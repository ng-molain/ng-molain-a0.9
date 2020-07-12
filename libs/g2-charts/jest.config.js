module.exports = {
  name: 'g2-charts',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/g2-charts',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
