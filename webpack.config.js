const path = require( 'path' );
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports =  {
  entry: "./src/index.js",
  output: {
    path: path.resolve( __dirname, 'dist' ),
		filename: 'at.bundle.js',
  },
  mode: 'production',

  module: {
    rules: [
      {
        test: /\.jsx$|\.es6$|\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env', '@babel/preset-react'],
          }
        },
        exclude: /(node_modules|bower_components)/
      },
  
    ],
  },

  plugins: [new HtmlWebpackPlugin({
    template: './src/index.html'
  })]
  
}