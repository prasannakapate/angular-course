var path = require('path');
var SRC = path.join(__dirname, './src/app/');
var NODE_MODULES = path.join(__dirname, './node_modules/')
module.exports = {
    devtool: 'source-map',
    resolve: {
        root: [SRC, NODE_MODULES]
    },
   entry: './src/app/app.js',
   output: {
       path: './dist',
       filename: 'bundle.js'
   },
   module: {
       preLoaders: [
           {test: /\.js$/, loader: 'eslint-loader', exclude: NODE_MODULES}
       ]
   } 
};