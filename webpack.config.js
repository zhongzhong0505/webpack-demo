const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './src/index.jsx',
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  },
  // context: path.resolve(__dirname, 'src'),
  mode: "development",
  output: {
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: '[name].bundle.js',
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/, use: 'babel-loader', exclude: /node_modules/
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