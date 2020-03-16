const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HttpsServer = require('./server');

HttpsServer();

module.exports = {  
  entry: {
    js: './src/js/app.js',
    css: './src/sass/style.scss'
  },

  output: {  
    path: path.resolve('public'),  
    filename: '[name]/bundle.js'
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name]/bundle.css',
    })
  ],

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
        test: /\.s[ac]ss$/,
        exclude: /node_modules/,
        use: [
          {
              loader: MiniCssExtractPlugin.loader
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "postcss-loader", // creates style nodes from JS strings
            options: {
              plugins: () => [require('autoprefixer')]
            }
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