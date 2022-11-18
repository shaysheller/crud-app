const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const { NODE_ENV } = process.env;

module.exports = {

  entry: './src/index.js',

  output: {
    path: path.join(__dirname, './build'),
    filename: 'bundle.js',

  },

  mode: NODE_ENV,

  devServer: {
    static: {
      directory: path.join(__dirname, './build'),
      publicPath: '/',
    },

    hot: true,

    proxy: {
      '/': 'http://[::1]:3000',
    },

  },

  devtool: 'inline-source-map',

  module: {
    rules: [
      {
        test: /.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },

      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },

      {
        test: /\.html$/,
        use: ['html-loader'],
      },
    ],
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html',
    }),
  ],

};
