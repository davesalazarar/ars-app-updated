module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    // ['@babel/plugin-proposal-class-properties', { loose: true }],
    // ['@babel/plugin-proposal-private-methods', { loose: true }],
    'babel-plugin-parameter-decorator',
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./app'],
        alias: {
          '@': './app',
        },
      },
    ],
  ],
};
