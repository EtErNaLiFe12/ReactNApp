module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        allowUndefined: true,
      },
    ],
    ['@babel/plugin-proposal-optional-chaining'],
    [
      'babel-plugin-root-import',
      {
        paths: [
          {
            rootPathSuffix: './src',
            rootPathPrefix: '~/',
          },
          {
            rootPathSuffix: './src/assets',
            rootPathPrefix: '@assets/',
          },
          {
            rootPathSuffix: './src/common',
            rootPathPrefix: '@common/',
          },
          {
            rootPathSuffix: './src/components',
            rootPathPrefix: '@components/',
          },
          {
            rootPathSuffix: './src/nav',
            rootPathPrefix: '@nav/',
          },
          {
            rootPathSuffix: './src/pages',
            rootPathPrefix: '@pages/',
          },
        ],
      },
    ],
  ],
};
