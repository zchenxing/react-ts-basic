const path = require('path');

module.exports = {
	assetsRoot: path.resolve(__dirname, '../build'),
	assetsDirectory: 'static',
	publicPath: '/',
	indexPath: path.resolve(__dirname, '../public/index.html'),
	productionJsSourceMap: false,
    enIndexPath: path.resolve(__dirname, '../public/en/index.html'),

	devServer: {
		port: 8080,
		host: '0.0.0.0',
		contentBase: path.join(__dirname, '../public'),
        useLocalIp: true,
        watchContentBase: true,
        publicPath: '/',
        compress: true,
		historyApiFallback: true,
		hot: true,
		clientLogLevel: 'error',
		open: true,
		overlay: false,
		quiet: false,
		noInfo: false,
		watchOptions: {
			ignored: /node_modules/
		},
		proxy: {},
        disableHostCheck: true
	}
};
