
const webpack = require("webpack");
const path = require('path');
const CURRENT_WORKING_DIR = process.cwd()

const config = {
  name:"browser",
  mode:"production",
  devtool:"eval-source-map",
  entry:[
        path.join(CURRENT_WORKING_DIR, 'src/main.js')],
 output: {
        path: path.join(CURRENT_WORKING_DIR , '/dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    module:{
      rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader"
        }
      },
     {
  test: /\.css$/,
  loader: 'style-loader'
}, {
  test: /\.css$/,
  loader: 'css-loader',
  query: {
    modules: true,
    localIdentName: '[name]__[local]___[hash:base64:5]'
  }
}
    ]
    }
  


}


module.exports = config;