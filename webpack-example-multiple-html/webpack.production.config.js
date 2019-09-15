const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		'hello-world': './src/hello-world.js',
		'rabbit': './src/rabbit.js',
	}, 
	output: {
		filename: '[name].[contenthash].js',
		path: path.resolve(__dirname, './dist'), 
		publicPath: ''
	},
	mode: 'production',
	optimization: {
		splitChunks: {
			chunks: 'all',
			minSize: 10000,
			automaticNameDelimiter: '_'
		}
	},
	module: {
		rules: [
			{
				test: /\.(png|jpg)$/,
				use: [
					'file-loader'
				]
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader, 'css-loader'
				]
			},
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
				]
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [ '@babel/env' ],
						plugins: [ 
							'transform-class-properties', 
							'@babel/plugin-proposal-object-rest-spread'
						]
					}
				}
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].[contenthash].css'
		}),
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			filename: 'hello-world.html',
			chunks: ['hello-world', 'vendors:~hello-world~rabbit'],
			title: 'Hello hello',
		}),
		new HtmlWebpackPlugin({
			filename: 'rabbit.html',
			chunks: ['rabbit', 'vendors:~hello-world~rabbit'],
			title: 'Hello Rabbit',
		})
	]
}
