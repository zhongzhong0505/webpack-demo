const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './src/index.jsx',
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  },
  mode: "development",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx$/, use: 'babel-loader',exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React Demo',
      template: path.resolve(__dirname, 'template.html')
    })
  ]
};