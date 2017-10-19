/**
 * Created by Administrator on 2017/10/18 0018.
 */
const
  webpack = require('webpack'),
  path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title:"g2-demo",
      filename:'index.html',
      template:'./src/index.html',    //Load a custom template
      // chunks:['common.js']
    }),
  ],
  entry: {
    main: path.resolve(__dirname, './src/app.js')
  },
  output: {
    path: path.resolve(__dirname, './dev'),
    filename:'bundle.js'
  },
  module: {
    rules: [
      { test: /\.less$/, use: ['style-loader','css-loader','less-loader']},
      { test: /\.css$/, use: ['style-loader','css-loader']},
      { test: /\.(png|jpg|jpeg)$/, use: ['url-loader']},
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015','react']
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js','.json','.scss','.less','.jsonp']
  },
  devServer: {
    inline: true,
    hot: true,
    port: 3000,
  }
}