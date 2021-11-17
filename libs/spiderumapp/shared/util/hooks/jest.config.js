module.exports = {
  displayName: 'spiderumapp-shared-util-hooks',
  preset: '../../../../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory:
    '../../../../../coverage/libs/spiderumapp/shared/util/hooks',
};
