const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: './src/main.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'), 
        filename: 'main.bundle.js',
        publicPath: '/', 
    },
    resolve: {
        modules: [
            'node_modules',
            'src',
        ],
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.js?x$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ],
                        plugins: [
                            [
                                '@babel/plugin-proposal-class-properties'
                            ]
                        ]
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: ['file-loader'],
            },
            {
                test: /\.woff2$/i,
                use: ['file-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ],
    devServer: {
        contentBase: './dist',
        hot: true,
        historyApiFallback: true,
    },
}