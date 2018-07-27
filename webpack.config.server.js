
const webpack = require("webpack");
const path = require('path');
const CURRENT_WORKING_DIR = process.cwd()
const nodeExternals=require('webpack-node-externals');

const config = {
  name:"server",
  mode:'development',
  target: 'node',
  entry:[
        path.join(CURRENT_WORKING_DIR, './server/server.js')],
 output: {
        path: path.join(CURRENT_WORKING_DIR , '/dist/'),
        filename: 'server.generated.js',
        publicPath: '/dist/',
        libraryTarget:"commonjs2"
    },
    externals:[nodeExternals()],
     target: 'node',
    node: {
        __dirname: false,
    },
module:{

  rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options:{
          plugins:[]
        }
      },
       {
                test: /\.(ttf|eot|svg|gif|jpg|png)(\?[\s\S]+)?$/,
                use: 'file-loader'
            }
    ]
}
}


module.exports = config;