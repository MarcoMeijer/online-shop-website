const path = require('path');
module.exports = {
  context: __dirname,
  entry: {
    main: './js/main.js',
    easing: './lib/easing/easing.js',
    owlcarousel: './lib/owlcarousel/owl.carousel.js',
    contact: './mail/contact.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  externals: {
    jquery: 'jQuery',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      }
    ]
  }
};
