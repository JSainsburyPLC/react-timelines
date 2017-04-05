/* global __dirname, require, module */

const path = require('path')
const webpack = require('webpack')
const env = require('yargs').argv.env // use --env with webpack 2

const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin
const libraryName = 'Timeline'
const plugins = []
let outputFile

if (env === 'build') {
  plugins.push(new UglifyJsPlugin({ minimize: true }))
  plugins.push(
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify('production') }
    })
  )
  outputFile = `${libraryName}.min.js`
} else {
  outputFile = `${libraryName}.js`
}

const config = {
  entry: path.resolve(__dirname, './src/index.jsx'),
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, './lib'),
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    modules: [path.resolve('./src')],
    extensions: ['.json', '.js']
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom'
    }
  },
  plugins
}

module.exports = config
