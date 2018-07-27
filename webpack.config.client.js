const webpack = require("webpack");
const path = require('path');

const config = {
  name:"browser",
  mode:"development",
  target:"web",
  devtool:"eval-source-map",
  entry:[
       './src/main.js'],
  output: {
        path: path.resolve(__dirname , './dist'),
        filename: 'bundle.js',
        publicPath: 'http://localhost:3000/'
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