const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    // mode: 'production',
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.[hash].js',
        path: path.resolve(__dirname, 'build')
    },
    devtool: 'inline-source-map',
    plugins: [
        new CleanWebpackPlugin(['build']),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            title: 'Output Management'
     })
   ],
};