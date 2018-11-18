const webpack = require("webpack");
const path = require('path');
const CURRENT_WORKING_DIR = process.cwd()
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const config = {
  name:"browser",
  mode:"development",
  target:"web",
  devtool:"eval-source-map",
  entry:[
       path.join(CURRENT_WORKING_DIR,'src/main.js')],
  output: {
        path: path.resolve(__dirname , './dist'),
        filename: 'bundle.js',
        publicPath: 'http://localhost:8080/'
    },
    module:{
        rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options:{
          plugins:["react-loadable/babel"]
        }
      },
     {
        test: /\.(ttf|eot|svg|gif|jpg|png)(\?[\s\S]+)?$/,
        use: 'file-loader'
     },
     {
        test: /\.css$/,
        loader: 'style-loader'
     }, 
     {
       test: /\.css$/,
       loader: 'css-loader'
}
    ]
    },
    plugins:[
    //  new BundleAnalyzerPlugin()
    ]


}


module.exports = config;