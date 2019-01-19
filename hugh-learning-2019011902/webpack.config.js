const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let pathToClean = [
    'dist',
];

let config = {
    mode: "development",
    entry: path.join(__dirname , '/src') + '/index.js',
    output: {
        path: path.join(__dirname , '/dist'),
        filename: '[hash].bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.js|jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(pathToClean),
        new HtmlWebpackPlugin({
            template: path.join(__dirname , '/public') + '/index.html',
        })
    ],
    devServer: {
        port: '8081'
    }
};

module.exports = config;
