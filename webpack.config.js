var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	devtool: 'eval-source-map',
	entry: __dirname + "/app/main.js",
	output: {
		path: __dirname + "/public",
		filename: "bundle.js"
	},
	module: {
		loaders: [{
			test: /\.json$/,
			loader: "json"
		}, {
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel'
		}]
	},
	plugins: [
		new webpack.BannerPlugin("Copyright Flying Unicorns inc.") //在这个数组中new一个就可以了
	],
	devServer: {
		contentBase: "./public",
		colors: true,
		historyApiFallback: true,
		inline: true
	}
}