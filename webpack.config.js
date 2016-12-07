var path = require('path');
var SRC = path.join(__dirname, './src/app/');
var NODE_MODULES = path.join(__dirname, './node_modules/');
module.exports = {
    devtool: 'source-map',
    //context: path.resolve('./src/app/'),
    // resolve: {
    //     root: [SRC, NODE_MODULES]
    // },
    entry: './src/app/app.js',
    output: {
        path: path.resolve('dist/'),
        filename: 'bundle.js',
        publicPath: '/src'
    },
    devServer: {
        contentBase: './src'
    },
    module: {
        preLoaders: [
           {test: /\.js$/, loader: 'eslint-loader', exclude: /node_modules/}
        ],
        loaders: [
            {
                test: /\.scss$/,
                loader: 'resolve-url-loader',
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            }
        ]
    } 
};