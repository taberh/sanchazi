var assign = require('lodash/assign')
var webpack = require('webpack')
var config = require('./webpack.base.config')

module.exports = assign({}, config, {
    plugins: config.plugins.concat([
        new webpack.DefinePlugin({
            "process.env": {
                // This has effect on the react lib size
                "NODE_ENV": JSON.stringify("production")
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
    ]),
    output: {
        path: __dirname + '/dest/',
        filename: 'bundle.js',
        publicPath: '/dest/',
        chunkFilename: '[hash]/[id].js'
    }
})
