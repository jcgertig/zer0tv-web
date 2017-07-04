const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const template = require('html-webpack-template-react');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function production(apiBase, storagePrefix, postCss) {
  return {
    entry: '../src/index.js',
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              'css-loader?&importLoaders=1',
              postCss,
            ],
          }),
        },
      ],
    },
    plugins: [
      new ExtractTextPlugin({
        filename: '[id].style.css',
        allChunks: false,
      }),

      new HtmlWebpackPlugin({
        template,
        title: 'Zer0tv',
        filename: 'index.html',
        mobile: true,
        devServer: false,
        devMiddleware: true,
        useAppVar: false,
        appMountId: 'root',
        window: {
          STORAGE_PREFIX: storagePrefix,
          API_BASE: apiBase,
        },
        scripts: [
        ],
        scriptBlocks: [
        ],
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
            color: '#5bbad5',
          },
          {
            rel: 'shortcut icon',
            href: '/public/img/favicon/favicon.ico',
          },
          'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css',
          'https://cdnjs.cloudflare.com/ajax/libs/hint.css/2.2.1/hint.min.css',
        ],
      }),

      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin({
        minimize: true,
        beautify: false,
        mangle: {
          screw_ie8: true,
          keep_fnames: true,
        },
        compress: {
          screw_ie8: true,
        },
        comments: false,
      }),
    ],
  };
};
