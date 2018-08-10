const webpack = require("webpack");
const path = require('path');
const CURRENT_WORKING_DIR = process.cwd()
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const config = {
  name:"browser",
  mode:"production",
  resolve: {
    extensions: [".js"]
},
  target:"web",
  devtool:"cheap-module-source-map",
   optimization: {
    concatenateModules: true,
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          compress: false,
          ecma: 6,
          mangle: true
        },
        sourceMap: true
      })
    ]
  },
  entry:[
       path.join(CURRENT_WORKING_DIR,'src/main.js')],
  output: {
        path: path.resolve(__dirname , './dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
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
    localIdentName: '[name]-[hash:base64:5]'
  }
}
    ]
    },
    plugins: [
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  })
]


}


module.exports = config;