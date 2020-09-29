const { WebpackPluginServe } = require("webpack-plugin-serve");

const { MiniHtmlWebpackPlugin } = require("mini-html-webpack-plugin");
const WebpackBar = require('webpackbar');

exports.devServer = () => ({
    watch: true,   
    plugins: [
        new WebpackPluginServe({
            port: process.env.PORT || 3000,
            static: './dist',
            liveReload: true,
            waitForBuild: true,
        }),
        new WebpackBar(),
    ],

});

exports.page = ({ title }) => ({
    plugins: [
        new MiniHtmlWebpackPlugin({
            context: {
                title,
            },
        }),
    ],
})