"use strict";

const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackChunkHash = require("webpack-chunk-hash");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require("path");


module.exports = function getConfig() {
  return {
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
          use: ['awesome-typescript-loader', 'angular2-template-loader']
        },
        {
          test: /\.html/,
          use: ['html-loader']
        },
        {
          test: /\.sass/,
          use: ExtractTextPlugin.extract({
            use: [
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true
                }
              },
              'sass-loader'
            ],
            fallback: 'style-loader'
          })
        }
      ]
    },

    plugins: [
      new ExtractTextPlugin("styles.[contenthash].css"),

      new HtmlWebpackPlugin({
        template: './index.html',
        filename: 'index.html',
        inject: 'body',
        cashe: true,
        showErrors: true
      }),

      new CleanWebpackPlugin(["dist"], {
        root: path.join(__dirname, "../"),
        verbose: true,
        dry: false
      }),

      new WebpackChunkHash()
    ],

    output: {
      path: path.join(__dirname, "../dist"),
      filename: "[name].js",
      chunkFilename: "[name].js"
    }
  };
};