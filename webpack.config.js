const path = require('path');
// import path from 'path';
const { merge } = require('webpack-merge');
// import { merge } from 'webpack-merge';
const HtmlWebpackPlugin = require('html-webpack-plugin');
// import HtmlWebpackPlugin from 'html-webpack-plugin';
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// import { CleanWebpackPlugin } from 'clean-webpack-plugin';
const ESLintPlugin = require('eslint-webpack-plugin');
// import EslingPlugin from 'eslint-webpack-plugin';

const baseConfig = {
  entry: path.resolve(__dirname, './src/index'),
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.ts/i,
        use: 'ts-loader',
      },
      {
        test: /\.m?js$/,
        exclude: /node-modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', { targets: 'defaults' }]],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new ESLintPlugin({ extensions: 'ts' }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
      filename: 'index.html',
    }),
    new CleanWebpackPlugin(),
  ],
};

module.exports = ({ mode }) => {
  const isProductionMode = mode === 'prod';
  const envConfig = isProductionMode ? require('./webpack.prod.config') : require('./webpack.dev.config');

  return merge(baseConfig, envConfig);
};
