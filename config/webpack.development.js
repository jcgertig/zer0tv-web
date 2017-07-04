const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin'); // eslint-disable-line
const template = require('html-webpack-template-react');


module.exports = function development(apiBase, storagePrefix, postCss) {
  return {
    entry: [
      'react-hot-loader/patch',
      // activate HMR for React

      'eventsource-polyfill',
      // necessary for hot reloading with IE

      'webpack-hot-middleware/client',
      // listen to code updates emitted by hot middleware

      '../src/index.js',
      // the entry point of our app
    ],

    devtool: 'inline-source-map',

    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader?&importLoaders=1',
            postCss,
          ],
        },
      ],
    },

    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      // enable HMR globally

      new webpack.NamedModulesPlugin(),
      // prints more readable module names in the browser console on HMR updates

      new webpack.NoEmitOnErrorsPlugin(),
      // do not emit compiled assets that include errors

      new HtmlWebpackPlugin({
        alwaysWriteToDisk: true,
        template,
        title: 'Zer0tv Dev',
        filename: 'index.html',
        mobile: true,
        devServer: false,
        devMiddleware: true,
        useAppVar: false,
        appMountId: 'root',
        meta: [
          {
            name: 'msapplication-config',
            content: '/public/img/favicon/browserconfig.xml',
          },
          {
            name: 'theme-color',
            content: '#ffffff',
          },
        ],
        window: {
          STORAGE_PREFIX: storagePrefix,
          API_BASE: apiBase,
        },
        scripts: [
          {
            type: 'text/javascript',
            src: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAX6WCYPByToEdvCa7_D5oAjvd5KMAcd6g&libraries=places',
          },
        ],
        links: [
          {
            rel: 'apple-touch-icon',
            sizes: '180x180',
            href: '/public/img/favicon/apple-touch-icon.png',
          },
          {
            rel: 'icon',
            type: 'image/png',
            href: '/public/img/favicon/favicon-32x32.png',
            sizes: '32x32',
          },
          {
            rel: 'icon',
            type: 'image/png',
            href: '/public/img/favicon/favicon-16x16.png',
            sizes: '16x16',
          },
          {
            rel: 'manifest',
            href: '/public/img/favicon/manifest.json',
          },
          {
            rel: 'mask-icon',
            href: '/public/img/favicon/safari-pinned-tab.svg',
            color: '#4ca9c5',
          },
          {
            rel: 'shortcut icon',
            href: '/public/img/favicon/favicon.ico',
          },
          'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css',
          'https://cdnjs.cloudflare.com/ajax/libs/hint.css/2.2.1/hint.min.css',
        ],
      }),

      new HtmlWebpackHarddiskPlugin(),
    ],
  };
};
