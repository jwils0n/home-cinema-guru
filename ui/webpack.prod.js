const { merge } = require('webpack-merge');
const TerserPlugin = require('terser-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
    mode: 'production',
    plugins: [
        new TerserPlugin()
    ]
});