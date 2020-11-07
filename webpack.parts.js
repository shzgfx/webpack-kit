const { WebpackPluginServe } = require("webpack-plugin-serve");

const { MiniHtmlWebpackPlugin } = require("mini-html-webpack-plugin");
const WebpackBar = require('webpackbar');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
const glob = require('glob');
const PurgeCSSPlugin = require("purgecss-webpack-plugin");

const ALL_FILES = glob.sync(path.join(__dirname, "src/*.js"));
const APP_SOURCE = path.join(__dirname, "src");

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
                    test: /\.scss$/,
                    use: [
                        { loader: MiniCssExtractPlugin.loader, options},
                        { 
                            loader: "css-loader",
                            options: {
                                sourceMap: true
                            }
                        },
                    ].concat(loaders),
                    sideEffects: true,
                },
            ],
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: "[name].css",
            }),
        ],
    };
};

exports.tailwind = () => ({
    loader: "postcss-loader",
    options: {
        postcssOptions: {
            plugins: [require("tailwindcss")()]
        }
    }
});

exports.eliminateUnusedCSS = () => ({
    plugins: [
        new PurgeCSSPlugin({
            paths: ALL_FILES,
            extractors: [   
                {
                    extractor: (content) => content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [],
                    extensions: ["html"],
                },
            ],
        }),

    ],
});

exports.autoprefix = () => ({
    loader: "postcss-loader",
    options: {
        postcssOptions: {
            plugins: [require("autoprefixer")(), require("precss")()],
        },
        sourceMap: true,
    },
});

exports.sassCSS = () => ({
    loader: "sass-loader",
    options: {
        sourceMap: true
    }
})

exports.loadImages = ({ include, exclude, options } = {}) => ({
    module: {
      rules: [
        {
          test: /\.(png|jpg)$/,
          include,
          exclude,
          use: {
            loader: "url-loader",
            options,
          },
        },
      ],
    },
  });

  exports.loadJavasScript = () => ({
      module: {
          rules: [
              {
                  test: /\.js$/,
                  include: APP_SOURCE,
                  use: "babel-loader",
              },
          ],
      },
  });

  exports.generateSourceMaps = ({type}) => ({
      devtool: type,
  })