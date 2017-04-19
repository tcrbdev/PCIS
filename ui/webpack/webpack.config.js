const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const config = require('../config');

module.exports = {
    devtool: 'eval',
    entry: [
        'babel-polyfill',
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:8081',
        'webpack/hot/only-dev-server',
        './ui/common/theme/reset.scss',
        './ui/common/theme/smooth-scrollbar.css',
        './ui/common/theme/font-awesome/css/font-awesome.min.css',
        './ui/common/theme/elements.scss',
        './ui/client/vendor/TweenLite.min.js',
        './ui/client/vendor/EasePack.min.js',
        './ui/client/vendor/rAF.js',
        './ui/client/index.js'
    ],
    output: {
        publicPath: `http://${config.host}:${config.clientPort}/static/`,
        path: path.join(__dirname, 'static'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loaders: [
                'babel-loader'
            ]
        }, {
            test: /\.css$/,
            loaders: [
                'style-loader',
                'css-loader',
                'postcss-loader'
            ]
        }, {
            test: /\.scss$/,
            exclude: /node_modules/,
            loaders: [
                'style-loader', {
                    loader: 'css-loader',
                    query: {
                        sourceMap: true,
                        module: true,
                        localIdentName: '[local]___[hash:base64:5]'
                    }
                }, {
                    loader: 'sass-loader',
                    query: {
                        outputStyle: 'expanded',
                        sourceMap: true
                    }
                }
            ]
        }, {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "url-loader?limit=10000&mimetype=application/font-woff"
        }, {
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "file-loader"
        }]
    },
    plugins: [
        // new ExtractTextPlugin({ filename: 'css/[name].css', disable: false, allChunks: true }),
        // new webpack.LoaderOptionsPlugin({
        //     options: {
        //         context: __dirname,
        //         postcss: [autoprefixer]
        //     }
        // }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false
            }
        }),
        // new webpack.optimize.DedupePlugin(),
        // new webpack.DefinePlugin({
        //     'process.env': {
        //         'NODE_ENV': JSON.stringify('production')
        //     }
        // })
    ],
    devServer: {
        port: config.clientPort,
        hot: true,
        inline: false,
        historyApiFallback: true
    }
};
