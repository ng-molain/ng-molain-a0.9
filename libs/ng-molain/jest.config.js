module.exports = {
  name: 'ng-molain',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/ng-molain',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
