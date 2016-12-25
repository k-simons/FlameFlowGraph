"use strict";

const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    output: {
        chunkFilename: "[id].js",
        filename: "[name].js",
        path: path.join(__dirname, "build", "src"),
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: "body",
            template: path.resolve(__dirname, "./src/index.html"),
        }),
    ],
};
