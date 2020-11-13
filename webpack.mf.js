/*const path = require("path");
const  { mode } = require("webpack-nano/argv");
const { merge } = require("webpack-merge");
const parts = require("./webpack.parts");
const { ModuleFederationPlugin } = require("webpack").container;

const cssLoaders = [parts.autoprefix(), parts.tailwind()];
*/
const path = require("path");
const { merge } = require("webpack-merge");
const parts = require("./webpack.parts");
const { component, mode } = require("webpack-nano/argv");

const cssLoaders = [parts.autoprefix(), parts.tailwind(), parts.sassCSS()];

const commonConfig = merge([
    parts.clean(),
    parts.loadJavaScript(),
    parts.loadImages(),
]);

const getConfig = (mode) => {
    const shared = {
        react: { singleton: true },
        "react-dom": { singleton: true },
    };

    const componentConfigs = {
        app: merge([
            parts.entry({
                name: "app",
                path: path.join(__dirname, "src", "bootstrap.js"),
                mode
            }),
            parts.page(),
            parts.federateModule({
                name: "app",
                remotes: {
                    mf: "mf@mf.js"
                },
                shared,

            }),
        ]),
        
        header: merge([
            {
                entry: path.join(__dirname, "src", "header.js"),
            },
            parts.federateModule({
                name: "mf",
                filename: "mf.js",
                exposes: {
                    "./header": "./src/header"
                },
                shared,
            })
        ])
    };

    if(!component) {
        throw new Error("Missing component name");
    }

    return merge([
        commonConfig,
        configs[mode],
        componentConfigs[component],
        {
            mode,
        }
    ]);
};
const configs = {
    development: parts.devServer(),
    production: {}
}

module.exports = getConfig(mode);
/*

const path = require("path");
const { mode } = require("webpack-nano/argv");
const { merge } = require("webpack-merge");
const parts = require("./webpack.parts");
const { ModuleFederationPlugin } = require("webpack").container;

const cssLoaders = [parts.autoprefix(), parts.tailwind()];

const commonConfig = merge([
  parts.clean(),
  parts.loadJavaScript(),
  parts.loadImages(),
  parts.entry({
    name: "app",
    path: path.join(__dirname, "src", "bootstrap.js"),
    mode,
  }),
  parts.page(),
  
  {
    plugins: [
      new ModuleFederationPlugin({
        name: "app",
        remotes: {},
        shared: {
          react: { singleton: true },
          "react-dom": { singleton: true },
        },
      }),
    ],
  },
]);

const configs = {
  development: parts.devServer(),
  production: {},
};

module.exports = merge(commonConfig, configs[mode], { mode });
*/