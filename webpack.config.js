const path = require('path');
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.[hash:4].js', //添加hash可以防止文件缓存,每次都会生成4位hash串
        path: path.resolve('dist'),
        publicPath: '/'
    },
    devServer: {
        contentBase: "./dist",      // 本地服务器所加载的页面所在的目录
        historyApiFallback: true,   // 不跳转
        inline: true,               // 实时刷新
        port: 3000,                 // 项目端口
        open: false,                // 不自动打开浏览器
    },
    resolve: {
        // 引入文件不写后缀名的时候，通过以下顺序尝试引入文件
        extensions: [".js", ".jsx"], 
        alias: {
            components: path.resolve(__dirname, "src/components"),
            views: path.resolve(__dirname, "src/views"),
            images: path.resolve(__dirname, "src/asset/images"),
            css: path.resolve(__dirname, "src/asset/css"),
            myRedux: path.resolve(__dirname, "src/redux")
        }  
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            hash: true,                 //会在打包好的bundle.js后面加上hash串
        }),
        new CleanWebpackPlugin(),  //打包编译前先清空dist之前生成的文件
    ],
    module:{
        rules:[
            {
                test:/\.(jsx|js)$/,
                exclude:/(node_modules)/,  //排除掉nod_modules,优化打包速度
                use:{
                    loader:'babel-loader'
                }
            },
            {
                test:/\.(png|jpg|gif|webp)$/,
                use:[
                    "url-loader"
                ]
            },
            {
                test:/\.(scss|css)$/,
                use:[
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
                include: [path.join(__dirname, "src/asset")],
                loader: "file-loader?name=assets/[name].[ext]"
            }
        ]
    }
};