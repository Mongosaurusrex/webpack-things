const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const entries = {
	'auth-service': ['babel-polyfill', './services/auth-service/index.js'],
	'user-service': ['babel-polyfill', './services/user-service/index.js'],
	'order-service': ['babel-polyfill', './services/order-service/index.js'],
}

module.exports = {
	entry: entries,
	target: 'node',
	watch: process.env.NODE_ENV === 'development',
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, './dist'), 
		publicPath: ''
	},
	mode: process.env.NODE_ENV || 'none',
	module: {
		rules: [
			{

				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [ '@babel/env' ],
						plugins: [ 
							'transform-class-properties', 
							'@babel/plugin-proposal-object-rest-spread',
							'@babel/plugin-transform-async-to-generator'
						]
					}
				}
			}	
		],
	},
	plugins: [
		new CleanWebpackPlugin(),
	],
};
