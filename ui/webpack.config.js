const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.[contenthash].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: ''
    },
    mode: 'none',

    module: {
        rules: [
            {
                test: /\.(png|jpg)$/,
                use: ['file-loader']
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin, 'css-loader', 'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/env'],
                            plugins: ['transform-class-properties']
                        }
                    }
                ]
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                use: ['html-loader']
            }
        ]
    },

    plugins: [
        new TerserPlugin(),
        // new MiniCssExtractPlugin({
        //     filename: 'styles.[contenthash].css'
        // }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [
                '**/*',
                // path.join(process.cwd(), 'build/**/*')
            ]
        }),
        new HtmlWebpackPlugin({
            template: 'src/template.html'
        })
    ]
};