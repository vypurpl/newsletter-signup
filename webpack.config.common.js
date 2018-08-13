const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        main: './src/client/index.js',
    },

    plugins: [
        new CleanWebpackPlugin(['build']),
        new HtmlWebpackPlugin({
            title: 'Minimum-Viable',
            filename: 'index.html',
            template: './index.html',
        }),
    ],

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            'env',
                            'react',
                        ],
                    },
                },
                exclude: /node_modules/,
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            'env',
                            'react',
                        ],
                    },
                },
                exclude: /node_modules/,
            },
            {
                test: /(\.(s?)css)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ],
            },
        ],
    },

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
    },
};