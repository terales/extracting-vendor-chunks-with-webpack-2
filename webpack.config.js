var webpack = require("webpack");
var config = {
    entry: {
        index: './index.js',
        about: './about.js'
    },
    output: {
        filename: '[name].min.js',
        path: __dirname + '/dist'
    },
    module: {
        loaders: [
            // Fix error 'JQuery is not defined'
            { test: require.resolve("jquery"), loader: "expose-loader?$!expose-loader?jQuery" },
        ]
    },
    plugins: [
        // See for reference https://webpack.js.org/guides/code-splitting-libraries/#implicit-common-vendor-chunk
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function (module) {
                return module.context && module.context.indexOf('node_modules') !== -1;
            }
        })
    ]
};

module.exports = config;
