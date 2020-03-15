const path = require('path')

module.exports = {  
  entry: './src/app.js',

  output: {  
    path: path.resolve('dist'),  
    filename: 'bundle.js'  
  },

  module: {
  	rules: [
  		{
  			test: /\.js$/,
  			exclude: /node_modules/,
  			loader: "babel-loader",
			query: {
				presets: ['@babel/env']
			}
  		},

  		{
			test: /\.scss$/,
			exclude: /node_modules/,
			use: [
				{
					loader: "style-loader" // creates style nodes from JS strings
				},
				{
					loader: "css-loader" // translates CSS into CommonJS
				},
				{
					loader: "sass-loader" // compiles Sass to CSS
				}
			]
		}

  	]
  },

  optimization: {
    minimize: true
  }

}