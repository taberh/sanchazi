var webpack = require('webpack')
var WebpackBrowserPlugin = require('webpack-browser-plugin')
var assign = require('lodash/assign')
var base = require('./webpack.base.config')
var pkg = require('./package.json')
var port = pkg.scripts.start.split(' ').pop()
var ip = require('ip').address()

module.exports = assign({}, base, {
    // http://webpack.github.io/docs/build-performance.html#sourcemaps
    devtool: 'eval',
    debug: true,
    entry: [
        'webpack-dev-server/client?http://' + ip + ':' + port,
        'webpack/hot/only-dev-server',
        './src/main'
    ],
    output: {
        path: __dirname + '/dest/',
        filename: 'bundle.js',
        publicPath: 'http://' + ip + ':' + port + '/dest/',
        chunkFilename: '[hash]/[id].js'
    },
    devServer: {
        contentBase: __dirname
    },
    plugins: base.plugins.concat([
        new webpack.HotModuleReplacementPlugin(),
        new WebpackBrowserPlugin()
    ])
})
