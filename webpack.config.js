const path = require("path");
const merge = require("webpack-merge");
module.exports = (env) => {
    const isDevMode = !(env && env.prod);
    const tsconfig = isDevMode ? undefined : path.resolve(__dirname, "tsconfig.production.json");
    const common = {
        mode: isDevMode ? "development" : "production",
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    loader: "awesome-typescript-loader",
                    options: {
                        configFileName: tsconfig
                    }
                }
            ]
        },
        resolve: {
            extensions: [".ts", ".js"]
        }
    }
    if (isDevMode) {
        return merge(common, {
            devtool: "inline-source-map"
        });
    }
    else {
        return merge(common, {
            entry: {
                index: path.resolve("src", "index.ts")
            },
            output:
                {
                    path: path.resolve(__dirname, "dist"),
                    filename: '[name].js',
                    publicPath: "/"
                }
        })
    }
}