const path = require("path");
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base.js')
const config = require('./config.js');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const publicPath = config.servedPath;



module.exports = merge(baseConfig, {
    mode: 'production', // 生产模式,会开启tree-shaking和压缩代码,以及其他优化
    devtool: false,
    output: {
        filename: "js/[name].[contenthash:8].js",
        path: path.resolve(__dirname, "../build"),
        clean: true,
        publicPath: publicPath,
    },
    // 优化配置
    optimization: {
        minimizer: [
            // 压缩css
            new CssMinimizerPlugin(),
            // 压缩js
            new TerserPlugin({
                parallel: true, // 开启多线程压缩
                terserOptions: {
                    compress: {
                        // 生成环境移除console
                        drop_console: false
                    },
                },
                // 关闭打包 license
                extractComments: false,
            }),
        ],
        splitChunks: {
            // 分隔代码
            cacheGroups: {
                vendors: {
                    // 提取node_modules代码，匹配指定模块
                    test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom|axios|mobx|mobx-react|ahooks)/,
                    name: "vendors", // 提取文件命名为vendors,js后缀和chunkhash会自动加
                    minChunks: 1, // 只要使用一次就提取出来
                    chunks: "initial", // 只提取初始化就能获取到的模块，不管异步的
                    minSize: 0, // 提取代码体积大于0就提取出来
                    priority: 1, // 提取优先级为1
                },
            },
        },
    },
})
