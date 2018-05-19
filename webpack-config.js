var path = require('path');
var webpack = require('webpack');

const entry = [
 './src/index.js'
];

const output = {
 path: path.resolve(__dirname, 'dist'),
 publicPath: '/dist/',
 filename: 'bundle.js',
};

module.exports = {
 entry, output,
 devtool: "eval-source-map",
 node: {
  fs: "empty"
},
 module: {
   rules: [
     { test: /\.css$/, use: "css-loader" },
     { test: /\.js$/, use: "babel-loader", exclude: /node_modules/ },
     { test: /\.jsx$/, use: "babel-loader", exclude: /node_modules/ },
     {
       test: /\.scss$/,
       use: ["style-loader", "css-loader", "sass-loader"]
     }
   ]
 }
};