const path = require('path');
const { mode } = require("webpack-nano/argv");
const parts = require('./webpack.parts');
const { merge } = require('webpack-merge');



const commonConfig = merge([
    {
        //context: path.resolve(__dirname),
        //devtool: 'source-map',
        entry: ['./src'],
        output: {
            filename: './dist/main.js',
            path: path.resolve(__dirname)
        },
    },
    parts.page({ title: "Webpack-kit" }),
    
])

const productionConfig = merge([
    parts.extractCSS(),
]);

const developmentConfig = merge([
    {
        entry: ['webpack-plugin-serve/client'],
    },
    parts.devServer(),
    parts.extractCSS({ options: {hmr: true} }),
])

const getConfig = (mode) => {
    switch (mode) {
        case 'production':
            return merge(commonConfig, productionConfig, { mode });
        case 'development': 
            return merge(commonConfig, developmentConfig, { mode });
        default:
            throw new Error(`Trying to use an unknow mode, ${mode}`)
    }
};

module.exports = getConfig(mode);