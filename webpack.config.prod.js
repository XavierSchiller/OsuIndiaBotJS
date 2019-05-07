const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    target: 'node',
    mode: 'production',
    entry: ['@babel/polyfill', './src/index'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js',
        libraryTarget: 'commonjs2'
    },
    externals: [nodeExternals()],
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    module: {
        rules: [{
            // Include ts, tsx, js, and jsx files.
            test: /\.(ts|js)x?$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        ["env", {
                            "targets": {
                                node: "8"
                            },
                        }],
                    ]
                }
            }
        }],
    }
};