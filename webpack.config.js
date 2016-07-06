module.exports = {
    entry: './main.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    module: {
            loaders: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader'
                }
            ]
        },
};