const webpackConfig = require("./webpack.config");
module.exports = (config) => {
  const _config = {
    basePath: "",

    frameworks: ["jasmine"],

    files: [           
            "./tests/**/*spec.ts"            
        ],

        preprocessors: {
            "./tests/**/*spec.ts": ["webpack"]
        },

    webpack: webpackConfig(),

    webpackMiddleware: {
      stats: "errors-only"
    },

    webpackServer: {
      noInfo: true
    },

    reporters: ["progress"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO
  };

  config.set(_config);
};