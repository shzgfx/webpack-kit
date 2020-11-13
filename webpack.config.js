const path = require('path');
const { mode } = require("webpack-nano/argv");
const parts = require('./webpack.parts');
const { merge } = require('webpack-merge');


const cssLoaders = [parts.autoprefix(), parts.tailwind(), parts.sassCSS()];


const commonConfig = merge([
    {
        //context: path.resolve(__dirname),
        //devtool: 'source-map',
        //entry: ['./src'],
        output: {
            path: path.resolve(process.cwd(), "dist"),
            
            publicPath: "/",
        }
    },

    //parts.page({ title: "Webpack-kit" }),
    parts.clean(),
    parts.extractCSS( { options: {hmr: true}, loaders: cssLoaders  }),
    parts.loadImages({
        options: {
          limit: 15000,
          name: "[name].[ext]",
        },
      }),
    
    parts.loadJavasScript(),    
    parts.setFreeVariable("HELLO", "hello from config"),
]);





const productionConfig = merge([
    {
        output: {
            chunkFilename: "[name].[contenthash:4].js",
            filename: "[name].[contenthash:4].js",
            assetModuleFilename: "[name].[contenthash:4][ext][query]"
        },
        recordsPath: path.join(__dirname, "records.json"),
    },
    parts.minifyJavaScript(),
    parts.minifyCSS( {
        options: {
            preset: ["default"],
        },
    }),
    
    parts.eliminateUnusedCSS(),
    parts.generateSourceMaps({type: 'source-map'}),

    {
        optimization: {
            splitChunks: {
                chunks: "all"
                },
            runtimeChunk: {
                name: "runtime",
            },
        },
    },

    parts.attachRevision(),

]);

const developmentConfig = merge([
    parts.devServer(),
    //parts.extractCSS({ options: {hmr: true}, loaders: cssLoaders  }),
])
/*
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
*/

const getConfig = (mode) => {
    const pages = [
        merge(
          parts.entry({
            name: 'app',
            path: path.join(__dirname, "src", "index.js"),
            mode
          }),
          parts.page({ 
            title: "Webpack demo",
            chunks: ["app", "runtime", "vendor"],
            }),
        ),
        merge(
          parts.entry({
            name: 'another',
            path: path.join(__dirname, "src", "another.js"),
            mode
          }),
          parts.page({ 
            title: "Another demo",
            path: "another",
            chunks: ["another", "runtime", "vendor"],
            }),
        ),
      ];
    let config;
    switch (mode) {
      case "production":
        config = productionConfig;
        break;
      case "development":
      default:
        config = developmentConfig;
    }
  
    return pages.map(page => merge(commonConfig, config, page, { mode }));
  };
  
  
module.exports = getConfig(mode);