const path = require('path');
const { HotModuleReplacementPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const plugins = [
  new HtmlWebpackPlugin({
    template: './src/index.html',
  }),
  new HotModuleReplacementPlugin(), // Remove for production builds
];

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  watch: true,
  entry: {
    main: './src/index.jsx',
  },
  output: {
    path: path.resolve('./public'),
    filename: '[name].js',
    publicPath: 'http://localhost:9090/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: {
          test: path.resolve(__dirname, 'node_modules'),
        },
        loader: 'babel-loader',
      },
    ],
  },
  resolve: {
    modules: [
      'node_modules',
      path.resolve('./src'),
      path.resolve('./'),
    ],
    extensions: ['.jsx', '.js'],
  },
  plugins,
  devServer: {
    port: 9090,
    hot: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    historyApiFallback: true,
  },
};
