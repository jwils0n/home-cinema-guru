const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

const distPath = path.resolve(__dirname, './dist');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: distPath,
        historyApiFallback: true,
        open: true,
        compress: true,
        hot: true,
        port: 8081,
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
});