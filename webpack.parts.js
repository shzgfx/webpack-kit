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
            host: 'localhost'
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

exports.loadCSS = ({ include, exclude } = {} ) => ({
    module: {
        rules: [
            { 
                test: /\.css$/,
                include,
                exclude,
                use: ['style-loader', 'css-loader'],
            }
        ],
    },
});