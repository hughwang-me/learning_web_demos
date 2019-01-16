const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

let pathToClean = [
    'dist',
];

let config = {
    entry: path.join(__dirname , '/src') + '/index.js',
    output: {
        path: path.join(__dirname , '/dist'),
        filename: 'bundle.js',
    },
    plugins: [
        new CleanWebpackPlugin(pathToClean),
    ]
};

module.exports = config;