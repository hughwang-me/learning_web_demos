var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    entry:'./root.js',
    output:{
        filename:'./bundle.js',
    },
    devtool:"source-map",
    module:{
        loaders:[
            {
                // test:/\.css$/ 正则以css结尾的文件使用style-loader和css-loader
                test:/\.css$/,
                loader:'style-loader!css-loader'
            }
        ]
    },
    resolve:{
        "extensions":['.js','.css','.json'] //可以省略的扩展名
    },
    devServer : {
        port: 8081
    },
    plugins: [
        new OpenBrowserPlugin({ url: 'http://localhost:8081' })
        ]
}
