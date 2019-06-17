require('@babel/register')({
    extends: './src/web/.babelrc',
    ignore: [/node_modules/]
});

const app = require('./app');

module.exports = app;
