const path = require('path');
// import { path } from 'path';

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    // static: {
    //   directory: path.resolve(__dirname, './dist'),
    // },
  },
};
