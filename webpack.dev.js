require('dotenv').config();
const path = require('path');
const { HotModuleReplacementPlugin, DefinePlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const definePlugin = new DefinePlugin({
  'process.env': {
    MODE: JSON.stringify(process.env.MODE || 'development'),
    API_HOST: JSON.stringify(process.env.API_HOST || 'https://api.salesloft.com'),
    API_VERSION: JSON.stringify(process.env.API_VERSION || 'v2'),
    API_KEY: JSON.stringify(process.env.API_KEY || ''),
  },
});

const plugins = [
  new HtmlWebpackPlugin({
    template: './src/index.html',
  }),
  new HotModuleReplacementPlugin(), // Remove for production builds
  definePlugin,
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
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  resolve: {
    modules: [
      'node_modules',
      path.resolve('./src'),
      path.resolve('./'),
    ],
    extensions: ['.jsx', '.js', '.css', '.scss'],
  },
  plugins,
  devServer: {
    port: 9090,
    hot: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    historyApiFallback: true,
  },
};
