const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: {
        main: './index.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['dist'],
        }),
    ],
    mode: 'development',
    devServer: {
        contentBase: './dist',
        hot: true,
    },
    devtool: 'source-map',
    optimization: {
        minimize: false,
    },
}
