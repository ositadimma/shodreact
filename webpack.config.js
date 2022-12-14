module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devServer: {
    contentBase: './',
    hot: true,
    historyApiFallback: true
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader',]
      },
      {
        test: /\.css$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'}
        ]
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: __dirname
  }
}
