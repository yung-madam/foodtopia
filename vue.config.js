const path = require("path");

module.exports = {
    pluginOptions: {
        "style-resources-loader": {
            preProcessor: "sass",
            patterns: [path.resolve(__dirname, "src/styles/global.sass")],
            data: `@import "src/styles/global.sass"`
        }
    }
};