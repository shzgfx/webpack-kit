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
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].js'
        }
    },

    parts.page({ title: "Webpack-kit" }),

    parts.loadImages({
        options: {
          limit: 15000,
          name: "[name].[ext]",
        },
      }),
    
]);

const cssLoaders = [parts.autoprefix(), parts.tailwind()];

const productionConfig = merge([
    parts.extractCSS( { loaders: cssLoaders }),
    parts.eliminateUnusedCSS(),
]);

const developmentConfig = merge([
    {
        entry: ['webpack-plugin-serve/client'],
    },
    parts.devServer(),
    parts.extractCSS({ options: {hmr: true}, loaders: cssLoaders  }),
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