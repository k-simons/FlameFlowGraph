"use strict";

const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        app: [
            "./src/app.jsx",
            "./src/app.less",
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
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract(
                    [
                         "css-loader",
                        "less-loader",
                    ]
                )
            },            
        ]
    },
    output: {
        chunkFilename: "[id].js",
        filename: "[name].js",
        path: path.join(__dirname, "build", "src"),
    },
    plugins: [
        new ExtractTextPlugin("[name].css"),
        new HtmlWebpackPlugin({
            inject: "body",
            template: path.resolve(__dirname, "./src/index.html"),
        }),
    ],
};
