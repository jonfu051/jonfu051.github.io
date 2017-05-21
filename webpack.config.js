module.exports = {
    entry: [
        './js/todo.js'
    ],
    output: {
        path: __dirname + '/build/',
        publicPath: '/',
        filename: '[name].js'
    },
    devServer: {
        contentBase: __dirname,
    }
};
