"use strict"

const webpack = require("webpack")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackChunkHash = require("webpack-chunk-hash")
const CleanWebpackPlugin = require("clean-webpack-plugin")
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const {AotPlugin} = require('@ngtools/webpack')
const path = require("path");

const isProd = process.env.NODE_ENV === 'production'

function _isVendor(module) { // all from node_modules folder
  return module.context && module.context.indexOf('node_modules') !== -1;
}

function _isSASS(module) {
  return module.context && /\.sass$/.test(module.context);
}

const config = {
  target: "web",
  context: __dirname,
  entry: {
    "app": "./main.ts"
  },
  cache: true,
  devtool: "source-map",

  resolve: {
    extensions: [".ts", ".js", ".json"]
  },

  module: {
    rules: [
      {
        test: /\.ts/,
        loaders: isProd ? ['@ngtools/webpack'] : ['awesome-typescript-loader', 'angular2-template-loader']
      },
      {
        test: /\.html/,
        use: ['html-loader']
      },
      {
        test: /component\.scss/,
        use: ['raw-loader', 'postcss-loader', 'sass-loader']
      },
      {
        test: /\.scss/,
        exclude: /component\.scss/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            },
            'postcss-loader',
            'sass-loader'
          ],
          fallback: 'style-loader'
        })
      },
      {
        test: /\.svg/,
        use: ['file-loader']
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin("styles.[contenthash].css"),

    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
      inject: 'body',
      favicon: './favicon.ico',
      cashe: true,
      showErrors: true
    }),

    new CleanWebpackPlugin(["dist"], {
      root: path.join(__dirname, "../"),
      verbose: true,
      dry: false
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module) {
        return _isVendor(module) && !_isSASS(module);
      }
    }),

    new WebpackChunkHash(),

    isProd ? new webpack.HashedModuleIdsPlugin() : new webpack.NamedModulesPlugin(),

    new webpack.LoaderOptionsPlugin({
      options : {
        htmlLoader : {
          minimize : false // do not minimize html - it will lead to errors
        }
      }
    })
  ],

  output: {
    path: path.join(__dirname, "../dist"),
    filename: "[name].[chunkhash].js",
    chunkFilename: "[name].[chunkhash].js"
  }
}

config.devServer = {
  port: isProd ? 8181 : 8080,
  publicPath: config.output.publicPath,
  historyApiFallback: true,
  proxy: {
    '/api': {
      target: 'http://localhost:3001'
    }
  }
}

if (isProd) {
  config.plugins.push(
    new AotPlugin({
      tsConfigPath: 'tsconfig.production.json',
      skipCodeGeneration: true
    })
  )
}

module.exports = config
