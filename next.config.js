const withLess = require('@zeit/next-less');
const path = require('path');

module.exports = withLess({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]___[hash:base64:5]',
  },
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
  webpack(config, options) {
    config.module.rules.push({
      test: /\.js$/,
      enforce: 'pre',
      include: [path.resolve('components'), path.resolve('pages')],
    });
    config.devtool = 'cheap-module-inline-source-map';
    config.resolve.alias = {
      ...config.resolve.alias,
      '@pages': path.join(__dirname, '.', 'pages'),
      '@components': path.join(__dirname, '.', 'components'),
    };
    return config;
  },
});
