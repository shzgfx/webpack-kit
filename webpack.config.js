const path = require('path');
const { mode } = require("webpack-nano/argv");
const {
    MiniHtmlWebpackPlugin
} = require("mini-html-webpack-plugin");

const WebpackBar = require('webpackbar');


module.exports = {
    context: path.resolve(__dirname),
    devtool: 'source-map',
    entry: './src/index.js',
    output: {
        filename: './dist/main.js',
        path: path.resolve(__dirname)
      },
    mode: 'development',
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
        new WebpackBar()
    ],
};