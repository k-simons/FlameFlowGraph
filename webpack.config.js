"use strict";

const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        app: [
            "./src/app.jsx",
        ],
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query:
                    {
                        presets:['react']
                    }
            }
        ]
    },
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
