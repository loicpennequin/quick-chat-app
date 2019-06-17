require('@babel/register')({
    extends: './src/websockets/.babelrc',
    ignore: [/node_modules/]
});

const app = require('./app');

module.exports = app;
