const path = require('path');
const { mode } = require("webpack-nano/argv");
const {
    MiniHtmlWebpackPlugin
} = require("mini-html-webpack-plugin");

const WebpackBar = require('webpackbar');
const { WebpackPluginServe } = require('webpack-plugin-serve');


module.exports = {
    context: path.resolve(__dirname),
    devtool: 'source-map',
    watch: mode === 'development',
    entry: ['./src', 'webpack-plugin-serve/client'],
    output: {
        filename: './dist/main.js',
        path: path.resolve(__dirname)
      },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 3000,
        host: '0.0.0.0'

    },
    plugins: [
        new MiniHtmlWebpackPlugin({
            context: {
                title: 'Webpack demo',
            },
        }),
        new WebpackBar(),
        new WebpackPluginServe({
            port: process.env.PORT || 8080,
            static: './dist',
            liveReload: true,
            waitForBuild: true,
        }),
    ],
};