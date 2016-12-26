"use strict";

const path = require("path");

const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    devServer: {
        hot: true,
        stats: {
            hash: false,
            version: false,
            timings: true,
            assets: false,
            chunks: false,
            modules: false,
            reasons: false,
            children: false,
            source: false,
            errors: true,
            errorDetails: true,
            warnings: true,
            publicPath: false,
        },  
    },
    entry: {
        app: [
            "webpack-dev-server/client/?http://localhost:8080",
            "webpack/hot/dev-server",
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
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin("[name].css"),
        new HtmlWebpackPlugin({
            inject: "body",
            template: path.resolve(__dirname, "./src/index.html"),
        }),
    ],
};
