const { WebpackPluginServe } = require("webpack-plugin-serve");
const webpack = require("webpack");
const { MiniHtmlWebpackPlugin } = require("mini-html-webpack-plugin");
const WebpackBar = require('webpackbar');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
const glob = require('glob');
const PurgeCSSPlugin = require("purgecss-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const GitRevisionPlugin = require("git-revision-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CssMimimizerPlugin = require("css-minimizer-webpack-plugin");
const { ModuleFilenameHelpers } = require("webpack");
const { ModuleFederationPlugin } = require("webpack").container;


const ALL_FILES = glob.sync(path.join(__dirname, "src/*.js"));
const APP_SOURCE = path.join(__dirname, "src");

exports.entry = ({ name, mode, path }) => ({
    entry:
      mode === "development"
        ? { [name]: [path, "webpack-plugin-serve/client"] }
        : { [name]: path },
  });
  
  exports.page = ({ path = "", template, title, chunks } = {}) => ({
    plugins: [
      new MiniHtmlWebpackPlugin({
        chunks,
        filename: `${path && path + "/"}index.html`,
        context: { title },
        template,
      }),
    ],
  });


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
/*
exports.page = ({ title }) => ({
    plugins: [
        new MiniHtmlWebpackPlugin({
            context: {
                title,
            },
        }),
    ],
});
*/
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
                filename: "[name].[contenthash:4].css",
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

exports.loadImages = ({ limit } = {}) => ({
    module: {
      rules: [
        {
          test: /\.(png|jpg)$/,
          type: "asset",
          parser: {
            dataUrlCondition: {
                maxSize: limit
            },
          },
        },
      ],
    },
  });

  exports.loadJavaScript = () => ({
    module: {
      rules: [
        {
          test: /\.js$/,
          include: APP_SOURCE, // Consider extracting as a parameter
          use: "babel-loader",
        },
      ],
    },
  });
  exports.generateSourceMaps = ({type}) => ({
      devtool: type,
  })
 
  exports.clean = () => ({
    plugins: [new CleanWebpackPlugin()],
  })

  exports.attachRevision = () => ({
      plugins: [
          new webpack.BannerPlugin({
              banner: new GitRevisionPlugin().version(),
          }),
      ],
  })

  exports.minifyJavaScript = () => ({
      optimization: {
          minimizer: [new TerserPlugin()],
      },
  });

  exports.minifyCSS = ({ options }) => ({
      optimization: {
          minimizer: [
              new CssMimimizerPlugin( {minimizerOptions: options }),
          ],
      },

  });

  exports.setFreeVariable = (key, value) => {
      const env = {};
      env[key] = JSON.stringify(value);

      return {
          plugins: [new webpack.DefinePlugin(env)],
      }
  }

  exports.federateModule = ({
      name,
      filename,
      exposes,
      remotes,
      shared,
  }) => ({
      plugins: [
          new ModuleFederationPlugin({
              name,
              filename,
              exposes,
              remotes,
              shared,
          }),
      ],
  });