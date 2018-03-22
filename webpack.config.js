let webpack = require('webpack');
let HtmlPlugin = require('html-webpack-plugin');
let CleanWebpackPlugin = require('clean-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let path = require('path');
let PATHS = {
    source: path.join(__dirname, 'src'),
    dist: path.join(__dirname, 'dist')
};

module.exports = {
    entry: PATHS.source + '/js/index.js',
    output: {
        filename: '[name].[hash].js',
        path: PATHS.dist
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            },
            {
                test: /\.hbs/,
                use: 'handlebars-loader'
            },
            {
                test: /\.(jpe?g|png|gif|svg|)$/i,
                include: path.join(__dirname, 'src/img'),
                use: 'file-loader?name=img/[name].[ext]'
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: 'file-loader?name=fonts/[hash].[ext]'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('./css/[name].css'),
        new HtmlPlugin({
            filename: 'index.html',
            title: 'To Do List',
            template: PATHS.source + '/index.hbs'
        }),
        new CleanWebpackPlugin(['dist'])
    ],
    devServer: {
        stats: 'errors-only',
        port: 9000
    }
};
