const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React Playground',
      template: './src/index.ejs'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  devServer: {
    hot: true,
    inline: true,
    open: true,
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, './dist'),
    publicPath: '/'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(eot|svg|ttf|woff)$/,
        include: /(\/|\\)fonts(\/|\\)/,
        use: {
          loader: 'file-loader'
        }
      },
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'es2015']
          }
        },
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader', 'resolve-url-loader']
      },
      {
        test: /\.svg/,
        use: {
          loader: 'svg-url-loader'
        }
      }
    ]
  }
};
