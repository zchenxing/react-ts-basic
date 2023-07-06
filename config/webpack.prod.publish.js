const path = require("path");
const { merge } = require('webpack-merge')
const prodBasicConfig = require('./webpack.prod.basic')
const config = require('./config');
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const VersionPlugin = require('./version.plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const versionJson = require('./version.json');

const publicPath = config.servedPath;
const version = versionJson.version


module.exports = merge(prodBasicConfig, {
    devtool: false,
    output: {
        filename: `js/${version}/[name].[contenthash:8].js`,
        path: path.resolve(__dirname, "../build_publish"),
        clean: false,
        publicPath: publicPath,
    },
    plugins: [
        // 复制文件插件
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "../public"), // 复制public下文件
                    to: path.resolve(__dirname, "../build_publish"), // 复制到 build_publish 目录中
                    filter: (source) => {
                        return !source.includes("index.html"); // 忽略index.html，使用html-webpack-plugin生成
                    },
                },
            ],
        }),

        // 抽离css插件
        new MiniCssExtractPlugin({
            filename: `static/css/${version}/main.[contenthash:8].css`,
            ignoreOrder: true
        }),

        // 打包生成gzip插件
        new CompressionPlugin({
            test: /\.(js|css)$/, // 只生成css,js压缩文件
            filename: "[path][base].gz", // 文件命名
            algorithm: "gzip", // 压缩格式，默认是gzip
            threshold: 10240, // 只有大小大于该值的资源会被处理。默认值是 10k
            minRatio: 0.8, // 压缩率,默认值是 0.8
        }),

        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            openAnalyzer: false,
            reportFilename: path.join(config.assetsPublishRoot, './report.html')
        }),
    ]
})
