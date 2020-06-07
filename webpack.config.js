const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')
const TARGET = process.env.npm_lifecycle_event
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const baseConfig = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
}

if (TARGET === 'dev') {
  module.exports = merge(baseConfig, {
    devServer: {
      port: 9000,
    },
    devtool: 'source-map',
  })
}

if (TARGET === 'build') {
  module.exports = merge(baseConfig, {
    plugins: [
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        openAnalyzer: false,
        reportFilename: 'bundle_sizes.html',
      }),
    ],
    externals: {
      react: 'React',
      'react-dom': 'ReactDOM',
    },
  })
}
