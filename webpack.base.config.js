var webpack = require('webpack')

module.exports = {
    entry: './src/main',
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css|less$/,
                loader: 'style/useable!css!less'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js'],
        alias: {
            actions: __dirname + '/src/actions',
            reducers: __dirname + '/src/reducers',
            components: __dirname + '/src/components',
            containers: __dirname + '/src/containers',
            constants: __dirname + '/src/constants',
            utils: __dirname + '/src/utils'
        }
    },
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(true),
        new webpack.optimize.CommonsChunkPlugin({
          children: true,
          minChunks: 4,
        })
    ]
}
