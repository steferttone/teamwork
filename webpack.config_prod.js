'use strict'

const webpack = require('webpack')
const path = require('path')
const uiSettings = require('./settings.json')
const properties = require('java-properties')

const buildEnv = require('./webpack-scripts/environment.js')
const appConfigLoader = require('./webpack-scripts/appConfigLoader.js')

const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const REST_API_URL = uiSettings.general.REST_API_URL
const DEV_SERVER_BUILD_PATH = uiSettings.general.DEV_SERVER_BUILD_PATH

const provideVariables = {
    'env': JSON.stringify(buildEnv.getEnvironment()),
    'REST_API_URL': JSON.stringify(REST_API_URL),
    'envList': JSON.stringify(buildEnv.constants),
}

const targetApps = {
    select: [
        process.env.npm_config_build_app || 'corp-app',
    ],
}

const sassLoaders = [
    'css-loader',
    'postcss-loader',
    `sass-loader?includePaths[]${path.resolve(__dirname, DEV_SERVER_BUILD_PATH)}`,
];

const config = {
    name: 'TEAMWORK APPLICATION BUNDLER',
    context: __dirname,
    devtool: 'cheap-module-source-map',
    entry: appConfigLoader.getEntryPoints(targetApps),
    output: {
        path: path.resolve(
            __dirname,
            uiSettings.general.DEV_SERVER_BUILD_PATH
        ),
        publicPath: '/build/',
        filename: '[name].bundle.js',
        sourceMapFilename: '[file].map',
    },
    postcss: [
        autoprefixer({
            browsers: ['last 2 versions']
        })
    ],
    module: {
        preLoaders: [
            {
                test: /\.jsx?$/,
                loader: 'eslint',
                exclude: /node_modules|contrib/,
            },
        ],
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: ['react', 'es2015'],
                },
            },
            {
                test: /\.css$/,
                loader: 'style!css',
                include: /corp-app|node_modules/,
            },
            {
                test: /\.json$/,
                loader: 'json',
            },
            {
                test: /\.png$/,
                loader: 'url-loader',
                options: { limit: 100000 },
            },
            {
                test: /\.woff2?$|\.woff$|\.ttf$|\.eot$|\.oet$|\.svg$/,
                loader: 'file?name=fonts/font-[name]/[name].[ext]',
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin(
            appConfigLoader.getCommonBundleTargetName(targetApps),
            appConfigLoader.getCommonBundleNames(targetApps)
        ),
        new webpack.optimize.DedupePlugin(),
        new webpack.DefinePlugin(provideVariables),
        new ExtractTextPlugin('styles.bundle.css'),
    ],
    resolve: {
        root: [
            path.resolve(__dirname),
            path.join(__dirname, 'node_modules', 'npm', 'node_modules'),
        ],
        alias: appConfigLoader.getEntryAliases(targetApps),
    },
    eslint: {
        configFile: path.join(__dirname, '/eslintrc.json'),
        failOnWarning: true,
        failOnError: true,
    },
}

// We need uglification for production environment
if (buildEnv.getEnvironment() === buildEnv.constants.PROD_ENV) {
    config.plugins.push(new webpack.optimize.UglifyJsPlugin({
        output: {
            comments: false
        },
        compress: {
            warnings: false
        },
    }))
}

console.log('-------------------------------------------------------------------------------')
console.log('TEAMWORK Frontend application build')
console.log('')
console.log('Build environment: ', buildEnv.getEnvironment())
console.log('Requested apps: ', targetApps.select.join(', '))
console.log('-------------------------------------------------------------------------------')

module.exports = config
