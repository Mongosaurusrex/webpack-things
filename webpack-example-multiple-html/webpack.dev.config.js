const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		'hello-world': './src/hello-world.js',
		'rabbit': './src/rabbit.js'
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, './dist'), 
		publicPath: ''
	},
	mode: 'production',
	devServer: {
		contentBase: path.resolve(__dirname, './dist'),
		index: 'index.html',
		port: 3000
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
					'style-loader', 'css-loader'
				]
			},
			{
				test: /\.scss$/,
				use: [
					'style-loader', 'css-loader', 'sass-loader'
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
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			filename: 'hello-world.html',
			chunks: ['hello-world'],
			title: 'Hello hello',
			meta: {
				description: 'testing',
			}
		}),
		new HtmlWebpackPlugin({
			filename: 'rabbit.html',
			chunks: ['rabbit'],
			title: 'Hello rabbit',
			meta: {
				description: 'testing',
			}
		}),
	]
}
