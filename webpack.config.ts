import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

import webpack from "webpack"
import 'webpack-dev-server'

interface configType {
    mode: 'development' | 'production'
}

const config = ( argv: configType) : webpack.Configuration => {
    const isDev = argv.mode === 'development'
    const isProd = argv.mode === 'production'

    return {
        entry: path.resolve(__dirname, 'src', 'index.ts'),
        devtool: isDev ? 'inline-source-map' : false,
        devServer:{
            port: 3000,
            open: true,
            hot: true
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].[contenthash].js',
            clean: true
        },
        plugins: [
            new HtmlWebpackPlugin(
                {
                    template: path.resolve(__dirname, 'public', 'index.html')
                }
            ),
            new CopyPlugin({
                patterns: [
                    {
                        from: path.resolve(__dirname, 'src', 'icons', 'favicon.ico'),
                        to: path.resolve(__dirname, 'dist')
                    }
                ]
            }),
            new MiniCssExtractPlugin({
                filename: '[name].[contenthash].css'
            }),
            new webpack.ProgressPlugin()
        ],
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        MiniCssExtractPlugin.loader,
                        "css-loader",
                        "sass-loader",
                    ],
                }
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },

    }
}

export default config