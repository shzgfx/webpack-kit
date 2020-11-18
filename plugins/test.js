const webpack = require("webpack");
const { createFsFromVolume, Volume } = require("memfs");
const DemoPlugin = require("./demo-plugin");


function compile(config, filenames = [] ) {
    return new Promise((resolve, reject) => {
        const compiler = webpack(config);
        compiler.outputFileSystem = createFsFromVolume( new Volume());
        const memfs = compiler.outputFileSystem;

        compiler.run((err, stats) => {
            if (err) {
                return reject(err);
            }

            if (stats.hasErrors()) {
                return reject(stats.toString("errors-only"));
            }

            const ret = {};
            filenames.forEach((filenames) => {

                ret[filename] = memfs.readFileSync(`./dist/${filename}`, {
                    encoding: "utf-8",
                });
            });
        });
    });
}
/*
async function test() {
    console.log(
        await compile(
            {
                entry: "./test-entry.js",
                plugins: [new DemoPlugin({ name: "demo" })],
            },
            ["demo"]
        )
    );
}
*/
async function test() {
    console.log(
      await compile(
        {
          entry: "./test-entry.js",
          plugins: [new DemoPlugin({ name: "demo" })],
        },
        ["demo"]
      )
    );
  }
test();