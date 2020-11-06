const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const distPath = path.resolve(__dirname, './dist');

module.exports = {
    entry: './src/js/index.jsx',
    output: {
        filename: 'bundle.[contenthash].js',
        path: distPath,
        publicPath: '/'
    },
    mode: 'none',

    module: {
        rules: [
            {
                test: /\.(png|jpg)$/,
                use: ['file-loader']
            },
            { // global styles
                test: /\.scss$/,
                include: [path.resolve(__dirname, './src/scss')],
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            { // component styles
                test: /\.scss$/,
                exclude: [path.resolve(__dirname, './src/scss')],
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    },
                    'sass-loader'
                ]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/env', '@babel/preset-react'],
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
        new MiniCssExtractPlugin({
            filename: 'styles.[contenthash].css'
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [
                '**/*'
            ]
        }),
        new HtmlWebpackPlugin({
            template: 'src/template.html'
        })
    ]
};