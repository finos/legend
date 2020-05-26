/* eslint-disable max-lines-per-function */
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const PnpWebpackPlugin = require('pnp-webpack-plugin');
const sass = require('sass');
const path = require('path');

function rehash(name, mode) {
    // strip any hashing for development model only
    return mode === 'development' ? name.replace(/\](?:\.?\[[^]*hash\])/u, ']') : name;
}

const OUTPUT_STATIC_PATH = 'static';

module.exports = (env, arg) => ({
    entry: {
        main: './app/index.js'
    },
    output: {
        path: path.join(__dirname, './target/dist'),
        // Add /* filename */ comments to generated require()s in the output.
        pathinfo: arg.mode === 'development',
        publicPath: arg.mode === 'development' ? '/' : '/sample/',
        filename: `${OUTPUT_STATIC_PATH}/` + rehash('[name].[contenthash].js', arg.mode)
    },
    devtool: arg.mode === 'development'
        ? 'cheap-module-source-map'
        : 'source-map',
    // Increase poll duration to lessen CPU load
    watchOptions: {
        poll: 1000,
        // Exclude test from dev watch
        ignored: [/node_modules/u, /\.Spec.js$/u],
    },
    devServer: {
        contentBase: './app',
        // Enable gzip compression for everything served to reduce traffic size
        compress: true,
        // Open default browser, i.e. 'Google Chrome' when first compilation completes
        open: true,
        port: 3000,
        // Change this to <kerberos>.desktop.services.gs.com to allow other dev to access
        // the instance of the UI running on your machine via Desktop Service
        // If so, you might want to disable HTTPS as Desktop Service still uses HTTP.
        host: 'localhost/',
        openPage: 'sample',
        historyApiFallback: {
            disableDotRule: true
        },
        // Make Webpack Dev Middleware less verbose, consider `quiet` and `noInfo` options as well
        stats: {
            all: false,
            colors: true,
            errors: true,
            warnings: true,
            timings: true,
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|ts)x?$/u,
                exclude: /node_modules/u,
                use: [
                    { loader: require.resolve('babel-loader'),
                        options: {
                            cacheDirectory: true,
                            presets: [
                                [
                                    '@babel/preset-env',
                                    {
                                        'targets': {
                                            'node': 'current'
                                        }
                                    }],
                                '@babel/preset-react',
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.s?css$/u,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: require.resolve('css-loader'),
                        // Do not use importLoaders here as we do not use postCSS or so which needs import resolvement
                        // See https://github.com/webpack-contrib/css-loader/issues/228#issuecomment-312885975
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'resolve-url-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: sass,
                            sourceMap: true,
                            sassOptions: {
                                includePaths: ['node_modules']
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(?:woff2?|ttf|otf|eot|svg|png|jpg|gif)/u,
                loader: 'file-loader',
                options: {
                    name: `${OUTPUT_STATIC_PATH}/` + rehash('assets/[name].[hash].[ext]', arg.mode)
                }
            }
        ]
    },
    resolve: {
        alias: {
            Config: path.resolve(__dirname, 'app/config'),
            API: path.resolve(__dirname, 'app/api'),
            Utilities: path.resolve(__dirname, 'app/utils'),
            Components: path.resolve(__dirname, './app/components'),
            Stores: path.resolve(__dirname, 'app/stores'),
            Style: path.resolve(__dirname, 'style')
        },
        extensions: ['.ts', '.tsx', '.js'],
        plugins: [
            // Adds support for installing with Plug'n'Play, leading to faster installs and adding
            // guards against forgotten dependencies and such.
            PnpWebpackPlugin
        ]
    },
    optimization: {
        splitChunks: {
            // Apply optimizations to all chunks, even initial ones (not just the
            // ones that are lazy-loaded).
            // See https://webpack.js.org/plugins/split-chunks-plugin/#splitchunks-chunks
            chunks: 'all'
        },
        // Pull the Webpack runtime out into its own bundle file so that the
        // contentHash of each subsequent bundle will remain the same as long as the
        // source code of said bundles remain the same, i.e. enable long term caching
        // 'single' indicates that Webpack will create a runtime file to be shared for all generated chunks
        // as compared to 'multiple', where an additional chunk is added to each entrypoint, which is not our case
        // See https://medium.com/webpack/webpack-4-mode-and-optimization-5423a6bc597a
        runtimeChunk: 'single',
    },
    resolveLoader: {
        plugins: [
            // Also related to Plug'n'Play, but this time it tells Webpack to load its loaders
            // from the current package.
            PnpWebpackPlugin.moduleLoader(module),
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(arg.mode)
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new HtmlWebPackPlugin({
            template: './app/index.html',
        }),
        new MiniCssExtractPlugin({
            filename: `${OUTPUT_STATIC_PATH}/` + rehash('[name].[contenthash].css', arg.mode),
            chunkFilename: `${OUTPUT_STATIC_PATH}/` + rehash('[id].[contenthash].css', arg.mode)
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin(arg.webConfig ? [{ from: arg.webConfig, to: 'sample' }] : [])
    ],

});