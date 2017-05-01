"use strict";

const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
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
            extensions: [ ".ts", ".js", ".json"]
        },

        module: {
            rules: [
                {
                    test: /\.ts/,
                    use: ['awesome-typescript-loader', 'angular2-template-loader']
                }
            ]
        },

        plugins: [
            new HtmlWebpackPlugin({
                template: './index.html',
                filename: 'index.html',
                inject: 'body',
                cashe: true,
                showErrors: true
            })
        ],

        output: {
            path: path.join(__dirname, "../dist"),
            filename: "[name].js",
            chunkFilename: "[name].js"
        }
    };
};