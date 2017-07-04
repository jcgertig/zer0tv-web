const webpackMerge = require('webpack-merge');
const emojic = require('emojic');
const colorIt = require('color-it');
const base = require('./webpack.base.js');

const precss = require('precss');
const postcssImport = require('postcss-import');
const autoprefixer = require('autoprefixer');
const styleVars = require('../src/globalStyleVars');

const postCss = {
  loader: 'postcss-loader',
  options: {
    plugins: ctx => [
      postcssImport({
        addDependencyTo: ctx.webpack,
      }),
      precss({
        variables: { variables: styleVars },
      }),
      autoprefixer,
    ],
  },
};

const gray = txt => colorIt(txt).gray();
const blue = txt => colorIt(txt).blue();
const red = txt => colorIt(txt).red();

const API_BASE = {
  development: 'http://api.zer0.tv:3000/api', // 'http://localhost:3000/api',
  production: process.env.API_BASE || 'http://api.zer0.tv:3000/api',
};

const STORAGE_PREFIX = {
  development: '@zer0tv-app-dev',
  production: '@zer0tv-app-prod',
};

const ENV = process.env.NODE_ENV;

// eslint-disable-next-line import/no-dynamic-require
const config = webpackMerge(base, require(`./webpack.${ENV}.js`)(API_BASE[ENV], STORAGE_PREFIX[ENV], postCss));

let msg = `${gray(emojic.greyExclamation)}${gray('  Webpack running in ')}${blue(ENV)}${gray(' mode.')}`;
console.log(msg); // eslint-disable-line

msg = `${gray(emojic.greyExclamation)}${gray('  Setting api base to ')}${blue(API_BASE[ENV])}${gray('.')}`;
console.log(msg); // eslint-disable-line

if (ENV === 'development') {
  msg = `${red(emojic.noEntry)}${gray('  Wait for first webpack build to complete to open the app.')}`;
  console.log(msg); // eslint-disable-line
}

module.exports = config;
