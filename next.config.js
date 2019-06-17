const withImages = require('next-images');

const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const webpack = require('webpack');

const config = {
    webpack(config, options) {
        config.plugins.push(new webpack.EnvironmentPlugin(['NODE_ENV']));
        config.plugins = config.plugins.filter(
            plugin => plugin.constructor.name !== 'FriendlyErrorsWebpackPlugin'
        );

        if (options.dev && !options.isServer) {
            config.plugins.push(
                new FriendlyErrorsWebpackPlugin({ clearConsole: false })
            );
        }

        return config;
    }
};

// module.exports = config;
module.exports = withImages(config);
