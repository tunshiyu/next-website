const withLess = require('@zeit/next-less');
const path = require('path');
const withSourceMaps = require('@zeit/next-source-maps')();

// next.config.js增加代码
const debug = process.env.NODE_ENV !== 'production';

module.exports = withSourceMaps(
  withLess({
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: '[name]___[local]___[hash:base64:5]',
    },
    lessLoaderOptions: {
      javascriptEnabled: true,
    },
    assetPrefix: !debug ? '/next-template/' : '',
    webpack(config) {
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
  }),
);
