const { WebpackPluginServe } = require("webpack-plugin-serve");

const { MiniHtmlWebpackPlugin } = require("mini-html-webpack-plugin");
const WebpackBar = require('webpackbar');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


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
});

exports.extractCSS = ({ options = {}, loaders = []} = {}) => {
    return {
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [
                        { loader: MiniCssExtractPlugin.loader, options},
                        "css-loader",
                    ].concat(loaders),
                    sideEffects: true,
                },
            ],
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: "/dist/[name].css",
            }),
        ],
    };
};