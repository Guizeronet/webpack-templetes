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
  		}
  	]
  }
}