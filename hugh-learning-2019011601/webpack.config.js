const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let pathToClean = [
    'dist',
];

let config = {
    entry: path.join(__dirname , '/src') + '/index.js',
    output: {
        path: path.join(__dirname , '/dist'),
        filename: '[hash].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(pathToClean),
        new HtmlWebpackPlugin({
            template: path.join(__dirname , '/public') + '/index.html',
        })
    ]
};

module.exports = config;