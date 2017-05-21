module.exports = {
    entry: [
        './js/todoApp.js'
    ],
    module: {
        rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        },
        {
            test: /\.jsx$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        }]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: __dirname + '/dist',
        // publicPath: '/',
        publicPath: '/dist/',
        filename: '[name].js'
    },
    devServer: {
        // contentBase: './react',
        contentBase: __dirname,
    }
};
