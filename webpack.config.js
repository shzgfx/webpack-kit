const path = require('path');
const { mode } = require("webpack-nano/argv");
const parts = require('./webpack.parts');
const { merge } = require('webpack-merge');

const commonConfig = merge([
    {
        context: path.resolve(__dirname),
        devtool: 'source-map',
        watch: mode === 'development',
        entry: ['./src'],
        output: {
            filename: './dist/main.js',
            path: path.resolve(__dirname)
          },
    },
])

const productionConfig = merge([]);

const developmentConfig = merge([
    {
        entry: ['webpack-plugin-serve/client'],
    },
    parts.devServer(),
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