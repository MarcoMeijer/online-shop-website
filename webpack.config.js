const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const entry = {
  cart: './cart.html',
  checkout: './checkout.html',
  contact: './contact.html',
  detail: './detail.html',
  index: './index.html',
  shop: './shop.html',
}

const plugins = [
  ...Object.values(entry).map((filename) => {
    return new HtmlWebpackPlugin({
      template: path.resolve(__dirname, filename),
      filename,
    });
  }),
  new MiniCssExtractPlugin({
    filename: 'css/[name].[chunkhash:8].css',
    chunkFilename: 'css/[name].[chunkhash:8].chunk.js',
  }),
];

module.exports = {
  context: __dirname,
  entry,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
  },
  plugins,
  externals: {
    jquery: 'jQuery',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.s?css/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
      }
    ]
  }
};
